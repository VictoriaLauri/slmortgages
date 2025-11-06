import { X } from 'lucide-react' // for a simple close icon
import { useState } from 'react'

interface AlertProps {
  type?: 'success' | 'error' | 'info'
  message: string
  dismissible?: boolean
  onDismiss?: () => void
  className?: string
}

export default function Alert({
  type = 'info',
  message,
  dismissible = false,
  onDismiss,
  className = '',
}: AlertProps) {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  const baseStyles =
    'flex items-start justify-between rounded-md px-4 py-3 text-sm shadow-sm border'

  const variantStyles = {
    success: 'bg-green-50 text-green-800 border-green-200',
    error: 'bg-red-50 text-red-800 border-red-200',
    info: 'bg-blue-50 text-blue-800 border-blue-200',
  }

  const handleDismiss = () => {
    setVisible(false)
    if (onDismiss) onDismiss()
  }

  return (
    <div
      className={`${baseStyles} ${variantStyles[type]} ${className}`}
      role={type === 'error' ? 'alert' : 'status'}
    >
      <span>{message}</span>
      {dismissible && (
        <button
          onClick={handleDismiss}
          aria-label='Close alert'
          className='ml-4 text-inherit hover:opacity-70 focus:outline-none'
        >
          <X size={16} />
        </button>
      )}
    </div>
  )
}
