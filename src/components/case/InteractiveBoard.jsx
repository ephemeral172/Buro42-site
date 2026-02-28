import React, { useRef, useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Eraser, Pencil, Trash2, Map as MapIcon, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const COLORS = [
  { name: 'Оранжевый', value: '#ff6b35', shadow: '0 0 10px #ff6b35, 0 0 20px #ff6b35' },
  { name: 'Голубой', value: '#00f2ff', shadow: '0 0 10px #00f2ff, 0 0 20px #00f2ff' },
  { name: 'Розовый', value: '#ff00ff', shadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff' },
  { name: 'Зеленый', value: '#39ff14', shadow: '0 0 10px #39ff14, 0 0 20px #39ff14' },
  { name: 'Желтый', value: '#fff01f', shadow: '0 0 10px #fff01f, 0 0 20px #fff01f' },
];

const getUserId = () => {
  let id = localStorage.getItem('neon-board-user-id');
  if (!id) {
    id = 'user_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('neon-board-user-id', id);
  }
  return id;
};

export default function InteractiveBoard() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const userId = useMemo(() => getUserId(), []);
  
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState('pen');
  const [color, setColor] = useState(COLORS[0]);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const [paths, setPaths] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSupabaseConfigured, setIsSupabaseConfigured] = useState(true);

  // Initial load from Supabase
  useEffect(() => {
    const fetchPaths = async () => {
      try {
        const { data, error } = await supabase
          .from('board_paths')
          .select('*');
        
        if (error) throw error;
        if (data) setPaths(data);
      } catch (err) {
        console.error('Supabase error:', err);
        setIsSupabaseConfigured(false);
        // Fallback to local storage if Supabase fails
        const saved = localStorage.getItem('neon-board-paths');
        if (saved) setPaths(JSON.parse(saved));
      } finally {
        setIsLoading(false);
      }
    };

    fetchPaths();

    // Real-time subscription
    const subscription = supabase
      .channel('board_changes')
      .on('postgres_changes', { event: '*', table: 'board_paths' }, (payload) => {
        if (payload.eventType === 'INSERT') {
          setPaths(prev => {
            if (prev.find(p => p.id === payload.new.id)) return prev;
            return [...prev, payload.new];
          });
        } else if (payload.eventType === 'DELETE') {
          setPaths(prev => prev.filter(p => p.id !== payload.old.id));
        }
      })
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      const key = e.key.toLowerCase();
      
      if (key === 'z' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        undoLastPath();
      }
      if (key === 'b') setTool('pen');
      if (key === 'e') setTool('eraser');
      if (key === 'm') setTool('pan');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [userId, paths]);

  const undoLastPath = async () => {
    const myPaths = paths.filter(p => (p.userId || p.user_id) === userId);
    if (myPaths.length === 0) return;
    const lastPath = myPaths[myPaths.length - 1];
    
    setPaths(prev => prev.filter(p => p.id !== lastPath.id));
    await supabase.from('board_paths').delete().eq('id', lastPath.id);
  };

  // Initialize canvas size
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const resizeCanvas = () => {
      canvas.width = containerRef.current.clientWidth;
      canvas.height = 600;
      drawAllPaths();
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [offset, paths]);

  const drawAllPaths = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // 1. Create an offscreen canvas for other people's drawings
    const otherCanvas = document.createElement('canvas');
    otherCanvas.width = canvas.width;
    otherCanvas.height = canvas.height;
    const otherCtx = otherCanvas.getContext('2d');

    // 2. Create an offscreen canvas for MY drawings (including my eraser)
    const myCanvas = document.createElement('canvas');
    myCanvas.width = canvas.width;
    myCanvas.height = canvas.height;
    const myCtx = myCanvas.getContext('2d');

    const renderToCtx = (path, targetCtx) => {
      if (!path.points || path.points.length < 1) return;
      targetCtx.beginPath();
      targetCtx.strokeStyle = path.color;
      targetCtx.lineWidth = path.tool === 'eraser' ? 20 : 3;
      targetCtx.lineCap = 'round';
      targetCtx.lineJoin = 'round';
      
      if (path.tool === 'eraser') {
        targetCtx.globalCompositeOperation = 'destination-out';
        targetCtx.shadowBlur = 0;
      } else {
        targetCtx.globalCompositeOperation = 'source-over';
        targetCtx.shadowBlur = 10;
        targetCtx.shadowColor = path.color;
      }

      path.points.forEach((point, i) => {
        const x = point.x + offset.x;
        const y = point.y + offset.y;
        if (i === 0) {
          targetCtx.moveTo(x, y);
          if (path.points.length === 1) targetCtx.lineTo(x, y + 0.1);
        } else {
          targetCtx.lineTo(x, y);
        }
      });
      targetCtx.stroke();
      targetCtx.globalCompositeOperation = 'source-over';
    };

    // Sort paths into "mine" and "others"
    paths.forEach(path => {
      const isMine = (path.userId || path.user_id) === userId;
      if (isMine) {
        renderToCtx(path, myCtx);
      } else if (path.tool !== 'eraser') {
        // We only render other people's PENS, not their erasers
        renderToCtx(path, otherCtx);
      }
    });

    // 3. Combine them on the main canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(otherCanvas, 0, 0); // Draw others first
    ctx.drawImage(myCanvas, 0, 0);    // Draw mine on top (my eraser only affects my lines)
  };

  const startDrawing = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - offset.x;
    const y = e.clientY - rect.top - offset.y;

    if (tool === 'pan' || e.button === 1 || (e.button === 0 && e.altKey)) {
      setIsPanning(true);
      setLastPos({ x: e.clientX, y: e.clientY });
      return;
    }

    setIsDrawing(true);
    const newPath = { 
      id: Date.now(), // Temporary ID, Supabase will provide real one or we use this
      userId, 
      color: color.value, 
      tool,
      points: [{ x, y }] 
    };
    setPaths(prev => [...prev, newPath]);
  };

  const draw = (e) => {
    if (isPanning) {
      const dx = e.clientX - lastPos.x;
      const dy = e.clientY - lastPos.y;
      setOffset(prev => ({ x: prev.x + dx, y: prev.y + dy }));
      setLastPos({ x: e.clientX, y: e.clientY });
      return;
    }

    if (!isDrawing) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - offset.x;
    const y = e.clientY - rect.top - offset.y;

    setPaths(prev => {
      if (prev.length === 0) return prev;
      const newPaths = [...prev];
      const lastPath = newPaths[newPaths.length - 1];
      if (lastPath && (lastPath.userId || lastPath.user_id) === userId) {
        const updatedPath = {
          ...lastPath,
          points: [...lastPath.points, { x, y }]
        };
        newPaths[newPaths.length - 1] = updatedPath;
      }
      return newPaths;
    });
    
    drawAllPaths();
  };

  const stopDrawing = async () => {
    if (isDrawing) {
      const lastPath = paths[paths.length - 1];
      if (lastPath && (lastPath.userId || lastPath.user_id) === userId) {
        // Sync to Supabase - remove temporary ID to let Supabase generate a real one
        const { id, ...rest } = lastPath;
        // Send both userId and user_id to be safe, Supabase will ignore the one it doesn't have
        const pathData = {
          ...rest,
          userId: userId,
          user_id: userId
        };
        const { error } = await supabase.from('board_paths').insert([pathData]);
        if (error) {
          console.error('Supabase Insert Error:', error);
          // If it's a policy error, we might need to tell the user
          if (error.code === '42501') {
            alert('Ошибка доступа: Пожалуйста, включите RLS политики в Supabase для анонимных пользователей.');
          }
        }
      }
    }
    setIsDrawing(false);
    setIsPanning(false);
  };

  const clearMyPaths = async () => {
    // Clear local state immediately for instant feedback
    setPaths(prev => prev.filter(p => (p.userId || p.user_id) !== userId));
    
    // Clear canvas manually
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    // Delete from DB
    await supabase.from('board_paths').delete().or(`user_id.eq.${userId},userId.eq.${userId}`);
  };

  const mapBounds = useMemo(() => {
    if (paths.length === 0) return { minX: -500, maxX: 500, minY: -300, maxY: 300 };
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    paths.forEach(p => p.points?.forEach(pt => {
      minX = Math.min(minX, pt.x);
      maxX = Math.max(maxX, pt.x);
      minY = Math.min(minY, pt.y);
      maxY = Math.max(maxY, pt.y);
    }));
    return { 
      minX: Math.min(minX - 200, -500), 
      maxX: Math.max(maxX + 200, 500), 
      minY: Math.min(minY - 200, -300), 
      maxY: Math.max(maxY + 200, 300) 
    };
  }, [paths]);

  return (
    <section className="relative py-20 bg-black overflow-hidden border-t border-orange-500/30">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          <span className="text-orange-500">Общая</span> Неоновая Доска
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto">
          Рисуйте вместе с другими пользователями в реальном времени! Используйте <kbd className="px-2 py-1 bg-gray-800 rounded text-xs text-orange-400">Alt + Drag</kbd> для перемещения.
        </p>
        {!isSupabaseConfigured && (
          <div className="mt-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm text-center max-w-md mx-auto">
            Supabase не настроен. Рисунки сохраняются только локально.
          </div>
        )}
      </div>

      <div className="relative group" ref={containerRef}>
        {isLoading && (
          <div className="absolute inset-0 z-30 bg-black/60 backdrop-blur-sm flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="text-orange-500 animate-spin" size={40} />
              <span className="text-white/60 text-sm uppercase tracking-widest">Загрузка доски...</span>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 bg-black/90 backdrop-blur-xl p-3 rounded-2xl border border-white/10 shadow-2xl">
          <div className="flex gap-1 bg-white/5 p-1 rounded-xl">
            <button
              onClick={() => setTool('pen')}
              className={`p-2 rounded-lg transition-all relative group/btn ${tool === 'pen' ? 'bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.5)]' : 'text-white/50 hover:text-white'}`}
              title="Маркер (B)"
            >
              <Pencil size={20} />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity border border-white/10">B</span>
            </button>
            <button
              onClick={() => setTool('eraser')}
              className={`p-2 rounded-lg transition-all relative group/btn ${tool === 'eraser' ? 'bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.5)]' : 'text-white/50 hover:text-white'}`}
              title="Ластик (E)"
            >
              <Eraser size={20} />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity border border-white/10">E</span>
            </button>
            <button
              onClick={() => setTool('pan')}
              className={`p-2 rounded-lg transition-all relative group/btn ${tool === 'pan' ? 'bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.5)]' : 'text-white/50 hover:text-white'}`}
              title="Перемещение (M)"
            >
              <MapIcon size={20} />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity border border-white/10">M</span>
            </button>
          </div>

          <div className="w-px h-8 bg-white/10" />

          <div className="flex gap-2">
            {COLORS.map((c) => (
              <button
                key={c.name}
                onClick={() => { setColor(c); setTool('pen'); }}
                className={`w-8 h-8 rounded-full transition-all ${color.value === c.value && tool === 'pen' ? 'scale-125 ring-2 ring-white shadow-lg' : 'hover:scale-110 opacity-70 hover:opacity-100'}`}
                style={{ backgroundColor: c.value, boxShadow: c.shadow }}
                title={c.name}
              />
            ))}
          </div>

          <div className="w-px h-8 bg-white/10" />

          <button
            onClick={clearMyPaths}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold text-red-400 hover:bg-red-400/10 transition-colors uppercase tracking-wider"
            title="Очистить только мои рисунки"
          >
            <Trash2 size={16} />
            Очистить моё
          </button>
        </div>

        {/* Mini-map */}
        <div className="absolute bottom-6 left-6 z-20 w-48 h-32 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl pointer-events-none">
          <div className="absolute top-2 left-2 text-[10px] text-white/40 uppercase font-bold tracking-widest flex items-center gap-1">
            <MapIcon size={10} /> Навигация
          </div>
          <div className="relative w-full h-full p-4">
            <div 
              className="absolute border border-orange-500/50 bg-orange-500/5 transition-all"
              style={{
                left: `${(( -offset.x - mapBounds.minX) / (mapBounds.maxX - mapBounds.minX)) * 100}%`,
                top: `${(( -offset.y - mapBounds.minY) / (mapBounds.maxY - mapBounds.minY)) * 100}%`,
                width: `${(window.innerWidth / (mapBounds.maxX - mapBounds.minX)) * 100}%`,
                height: `${(600 / (mapBounds.maxY - mapBounds.minY)) * 100}%`,
              }}
            />
            {paths.map((p, i) => (
              <div 
                key={i}
                className="absolute w-1 h-1 rounded-full opacity-40"
                style={{
                  backgroundColor: p.color,
                  left: `${((p.points?.[0]?.x - mapBounds.minX) / (mapBounds.maxX - mapBounds.minX)) * 100}%`,
                  top: `${((p.points?.[0]?.y - mapBounds.minY) / (mapBounds.maxY - mapBounds.minY)) * 100}%`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Canvas Container */}
        <div 
          className={`relative w-full h-[600px] bg-[#050505] overflow-hidden ${
            tool === 'pan' ? 'cursor-grab active:cursor-grabbing' : 'cursor-crosshair'
          }`}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        >
          <div 
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              backgroundPosition: `${offset.x}px ${offset.y}px`
            }}
          />
          
          <canvas
            ref={canvasRef}
            className="absolute inset-0"
          />

          <div className="absolute bottom-4 right-4 pointer-events-none text-[10px] text-white/30 uppercase tracking-widest font-mono">
            X: {Math.round(-offset.x)} Y: {Math.round(-offset.y)}
          </div>
        </div>
      </div>
    </section>
  );
}
