import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white transition-all duration-200'

  const variants = {
    primary:
      'bg-primary-orange-muted text-white hover:bg-primary-orange-dark hover:scale-105 hover:shadow-lg active:scale-95 focus:ring-primary-orange-muted',
    secondary:
      'bg-teal text-white hover:bg-teal-dark hover:scale-105 hover:shadow-lg active:scale-95 focus:ring-teal',
    outline:
      'border border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white focus:ring-primary-orange',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
