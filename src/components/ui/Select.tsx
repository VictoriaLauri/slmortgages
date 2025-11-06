import { ChevronDown } from 'lucide-react'
import type { SelectHTMLAttributes } from 'react'
import { forwardRef } from 'react'

interface Option {
  value: string
  label: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: Option[]
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = '', ...props }, ref) => {
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

        {/* Wrapper for custom chevron */}
        <div className='relative'>
          <select
            ref={ref}
            className={`
              appearance-none w-full pl-4 pr-10 py-2 border rounded-md bg-white
              transition-shadow duration-150
              focus:outline-none focus:ring-[color:var(--color-teal)] focus:border-[color:var(--color-teal)]
              ${error ? 'border-error focus:ring-error/70' : 'border-gray-300'}
              ${className}
            `}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${props.id}-error` : undefined}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {/* Decorative chevron (ignored by screen readers) */}
          <ChevronDown
            size={18}
            className='absolute right-3 top-1/2 -translate-y-1/2 text-[color:var(--color-teal)] pointer-events-none'
            aria-hidden='true'
          />
        </div>

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

Select.displayName = 'Select'

export default Select
