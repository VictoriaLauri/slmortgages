import type { InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'

interface RadioOption {
  value: string
  label: string
}

interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  error?: string
  options?: RadioOption[] // if provided → render group
  name: string // required for proper grouping
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, error, options, className = '', name, ...props }, ref) => {
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
                  type='radio'
                  name={name}
                  value={option.value}
                  className={`
                    h-4 w-4 border border-gray-300 rounded-full
                    text-[color:var(--color-teal)] focus:ring-[color:var(--color-teal)]
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
              type='radio'
              name={name}
              className={`
                h-4 w-4 border border-gray-300 rounded-full
                text-[color:var(--color-teal)] focus:ring-[color:var(--color-teal)]
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

Radio.displayName = 'Radio'

export default Radio
