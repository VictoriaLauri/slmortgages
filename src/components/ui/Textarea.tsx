import type { TextareaHTMLAttributes } from 'react'
import { forwardRef } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className='w-full'>
        {label && (
          <label
            htmlFor={props.id}
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            {label}
            {props.required && <span className='text-error ml-1'>*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          className={`
            w-full px-4 py-2 border rounded-md transition-shadow duration-150 resize-y
            focus:outline-none focus:ring-[color:var(--color-teal)] focus:border-[color:var(--color-teal)]
            ${error ? 'border-error focus:ring-error/70' : 'border-gray-300'}
            ${className}
          `}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${props.id}-error` : undefined}
          {...props}
        />
        {error && (
          <p
            id={`${props.id}-error`}
            className='mt-1 text-sm text-error'
            role='alert'
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export default Textarea
