import { cn } from '@/lib/utils';

/**
 * Magic UI–style marquee — https://magicui.design/docs/components/marquee
 */
export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  repeat = 4,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        'group flex flex-row overflow-hidden p-2 [--duration:40s] [--gap:1rem]',
        className
      )}
      style={{ gap: 'var(--gap, 1rem)' }}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              'flex shrink-0 flex-row justify-around animate-marquee',
              pauseOnHover && 'group-hover:[animation-play-state:paused]',
              reverse && '[animation-direction:reverse]'
            )}
            style={{ gap: 'var(--gap, 1rem)' }}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
