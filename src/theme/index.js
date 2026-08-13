export const STORAGE_KEY = 'buro42-theme';
export const THEMES = ['dark', 'light'];

const listeners = new Set();

function readStored() {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s === 'light' || s === 'dark') return s;
  } catch {
    /* ignore */
  }
  return 'dark';
}

let theme = typeof document !== 'undefined' ? readStored() : 'dark';

export function getTheme() {
  return theme;
}

export function applyThemeToDocument(next) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  root.classList.toggle('light', next === 'light');
  root.classList.toggle('dark', next === 'dark');
  root.style.colorScheme = next;
}

export function setTheme(next) {
  if (next !== 'light' && next !== 'dark') return;
  theme = next;
  applyThemeToDocument(theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* ignore */
  }
  listeners.forEach((fn) => fn());
}

export function toggleTheme() {
  setTheme(theme === 'light' ? 'dark' : 'light');
}

export function subscribeTheme(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

// Boot before React paint when this module is imported from main.jsx
if (typeof document !== 'undefined') {
  theme = readStored();
  applyThemeToDocument(theme);
}
