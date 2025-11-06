import type { InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'

interface CheckboxOption {
  value: string
  label: string
}

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  error?: string
  options?: CheckboxOption[] // If provided → render group
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, options, className = '', ...props }, ref) => {
    return (
      <div className='w-full'>
        {label && (
          <span className='block text-sm font-medium text-gray-700 mb-1'>
            {label}
            {props.required && <span className='text-error ml-1'>*</span>}
          </span>
        )}

        {options ? (
          <div className='space-y-2'>
            {options.map((option) => (
              <label
                key={option.value}
                className='flex items-center space-x-2 text-sm text-gray-700'
              >
                <input
                  ref={ref}
                  type='checkbox'
                  value={option.value}
                  className={`
                    h-4 w-4 border rounded accent-[color:var(--color-teal)]
                    focus:ring-[color:var(--color-teal)] focus:outline-none
                    ${error ? 'border-error' : 'border-gray-300'}
                    ${className}
                  `}
                  {...props}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        ) : (
          <label className='flex items-center space-x-2 text-sm text-gray-700'>
            <input
              ref={ref}
              type='checkbox'
              className={`
                h-4 w-4 border rounded accent-[color:var(--color-teal)]
                focus:ring-[color:var(--color-teal)] focus:outline-none
                ${error ? 'border-error' : 'border-gray-300'}
                ${className}
              `}
              {...props}
            />
            {label && <span>{label}</span>}
          </label>
        )}

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

Checkbox.displayName = 'Checkbox'

export default Checkbox
