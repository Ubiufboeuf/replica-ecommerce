import type { CSSProperties, ReactNode } from 'react'

export function Icon ({ children, className, style, hidden = false }: { children: ReactNode, className?: string, style?: CSSProperties, hidden?: boolean }) {
  return (
    <div 
      className={`max-h-full max-w-full aspect-square *:h-full *:w-full *:aspect-square *:max-h-full *:max-w-full *:select-none ${className}`}
      style={style}
      hidden={hidden}
    >
      {children}
    </div>
  )
}
