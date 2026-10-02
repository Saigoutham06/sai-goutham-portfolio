import React from 'react'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'circle-arrow'
  href?: string
  children: React.ReactNode
  showArrow?: boolean
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  href,
  children,
  showArrow = true,
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#0A0909] focus-visible:outline-offset-4 disabled:opacity-50 disabled:pointer-events-none group cursor-pointer'

  if (variant === 'circle-arrow') {
    const content = (
      <span className={`inline-flex items-center gap-3.5 select-none ${className}`}>
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0A0909] text-[#FDFDFD] transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#242424]">
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
        <span className="text-xs uppercase tracking-widest font-semibold text-[#0A0909]">
          {children}
        </span>
        <span className="w-8 h-[1px] bg-[#0A0909]/40 group-hover:w-12 transition-all duration-300" />
      </span>
    )

    if (href) {
      return (
        <a href={href} className="group inline-block">
          {content}
        </a>
      )
    }

    return (
      <button type="button" className="group" {...props}>
        {content}
      </button>
    )
  }

  const variantClasses =
    variant === 'primary'
      ? 'bg-[#0A0909] text-[#FDFDFD] hover:bg-[#242424] hover:-translate-y-0.5 hover:shadow-lg rounded-full px-6 py-3 text-xs md:text-sm tracking-wider uppercase'
      : 'bg-white text-[#0A0909] border border-[#E8E8E8] hover:border-[#0A0909] hover:-translate-y-0.5 hover:shadow-xs rounded-full px-6 py-3 text-xs md:text-sm tracking-wider uppercase'

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
        <span>{children}</span>
        {showArrow && (
          <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </a>
    )
  }

  return (
    <button type="button" className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </button>
  )
}
