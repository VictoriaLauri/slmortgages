import type { ChangeEvent, FormEvent } from 'react'
import { useRef, useState } from 'react'
import { sanitizeFormText } from '../../lib/utils/sanitizeFormText'
import { Alert, Button } from '../ui/index'

type CareersFormState = {
  fullName: string
  email: string
  phone: string
  message: string
  cv: File | null
  consent: boolean
}

type Status = 'idle' | 'submitting' | 'success' | 'error'
type ErrorType = 'file_size' | 'submit'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^[+0-9\s-]{6,}$/
const MAX_CV_BYTES = 1.5 * 1024 * 1024

function getFormDataFromForm(form: HTMLFormElement): CareersFormState {
  const data = new FormData(form)
  const cv = data.get('cv') as File | null
  return {
    fullName: (data.get('fullName') ?? '').toString().trim(),
    email: (data.get('email') ?? '').toString().trim(),
    phone: (data.get('phone') ?? '').toString().trim(),
    message: (data.get('message') ?? '').toString().trim(),
    cv: (cv && cv instanceof File && cv.size > 0 ? cv : null) ?? null,
    consent: data.get('consent') === 'on',
  }
}

function validate(data: CareersFormState): Record<string, string> {
  const err: Record<string, string> = {}
  if (!data.fullName) err.fullName = 'Full name is required.'
  if (!data.email) err.email = 'Email is required.'
  else if (!EMAIL_PATTERN.test(data.email)) err.email = 'Please enter a valid email address.'
  if (data.phone && !PHONE_PATTERN.test(data.phone)) err.phone = 'Please enter a valid phone number.'
  if (!data.consent) err.consent = 'Please consent to being contacted.'
  if (!data.cv) err.cv = 'Please upload your CV.'
  else if (data.cv.size > MAX_CV_BYTES) err.cv = 'CV file size must be under 1.5MB.'
  return err
}

export default function CareersForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [errorType, setErrorType] = useState<ErrorType | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState<CareersFormState>({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    cv: null,
    consent: false,
  })

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, type } = e.target

    if (type === 'file') {
      const file = (e.target as HTMLInputElement).files?.[0] || null
      setFormData((prev) => ({ ...prev, cv: file }))
      setStatus('idle')
      setErrorType(null)
      setErrors((prev) => {
        const { cv: _, ...rest } = prev
        return rest
      })
      return
    }

    const value =
      type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : e.target.value

    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => {
      const { [name]: _, ...rest } = prev
      return rest
    })
  }

  function focusFirstError(errs: Record<string, string>) {
    const first = Object.keys(errs)[0]
    if (!first || !formRef.current) return
    const el = formRef.current.querySelector(`[name="${first}"]`) as HTMLElement
    el?.focus()
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const dataToValidate = getFormDataFromForm(form)
    const errs = validate(dataToValidate)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      focusFirstError(errs)
      if (errs.cv?.includes('1.5MB')) setErrorType('file_size')
      return
    }
    setErrors({})
    const rawData = new FormData(form)
    const submitData = new FormData()
    submitData.set('form-name', 'careers')
    rawData.forEach((value, key) => {
      if (value instanceof File) {
        submitData.set(key, value)
      } else {
        const str = value.toString()
        const max = key === 'message' ? 10000 : 500
        submitData.set(key, sanitizeFormText(str, max))
      }
    })
    setErrorType(null)
    setStatus('submitting')
    try {
      const res = await fetch('/', { method: 'POST', body: submitData })
      if (!res.ok) {
        throw new Error(`Submission failed: ${res.status}`)
      }
      form.reset()
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: '',
        cv: null,
        consent: false,
      })
      setStatus('success')
    } catch {
      setErrorType('submit')
      setStatus('error')
    }
  }

  const submitErrorMessage =
    errorType === 'file_size'
      ? 'CV file size must be under 1.5MB.'
      : 'Something went wrong. Please try again later.'

  return (
    <form
      ref={formRef}
      className='space-y-5'
      onSubmit={handleSubmit}
      method='POST'
      data-netlify='true'
      name='careers'
      noValidate
    >
      <input type='hidden' name='form-name' value='careers' />
      <input type='hidden' name='formType' value='Careers application' />
      <div className='grid md:grid-cols-2 gap-4'>
        <div>
          <label className='block font-medium mb-1 text-text-dark'>
            Full Name <span className='text-error'>*</span>
          </label>
          <input
            type='text'
            name='fullName'
            value={formData.fullName}
            maxLength={200}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-teal ${errors.fullName ? 'border-error' : 'border-gray-300'}`}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'careers-fullName-error' : undefined}
          />
          {errors.fullName && (
            <p id='careers-fullName-error' className='mt-1 text-sm text-error' role='alert'>
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label className='block font-medium mb-1 text-text-dark'>
            Email <span className='text-error'>*</span>
          </label>
          <input
            type='email'
            name='email'
            value={formData.email}
            maxLength={254}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-teal ${errors.email ? 'border-error' : 'border-gray-300'}`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'careers-email-error' : undefined}
          />
          {errors.email && (
            <p id='careers-email-error' className='mt-1 text-sm text-error' role='alert'>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className='block font-medium mb-1 text-text-dark'>
          Phone (optional)
        </label>
        <input
          type='tel'
          name='phone'
          value={formData.phone}
          maxLength={30}
          onChange={handleChange}
          className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-teal ${errors.phone ? 'border-error' : 'border-gray-300'}`}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'careers-phone-error' : undefined}
        />
        {errors.phone && (
          <p id='careers-phone-error' className='mt-1 text-sm text-error' role='alert'>
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label className='block font-medium mb-1 text-text-dark'>
          Message (optional)
        </label>
        <textarea
          name='message'
          rows={4}
          value={formData.message}
          maxLength={10000}
          onChange={handleChange}
          className='w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal'
        />
      </div>

      <div>
        <label className='block font-medium mb-1 text-text-dark'>
          Upload CV <span className='text-error'>*</span>
        </label>
        <input
          type='file'
          name='cv'
          accept='.pdf,.doc,.docx'
          onChange={handleChange}
          className={`w-full p-3 rounded-lg border bg-white focus:ring-2 focus:ring-teal ${errors.cv ? 'border-error' : 'border-gray-300'}`}
          aria-invalid={!!errors.cv}
          aria-describedby={errors.cv ? 'careers-cv-error' : undefined}
        />
        <p className='text-sm text-text-light mt-1'>
          Accepted formats: PDF, DOC, DOCX — max 1.5MB
        </p>
        {errors.cv && (
          <p id='careers-cv-error' className='mt-1 text-sm text-error' role='alert'>
            {errors.cv}
          </p>
        )}
      </div>

      <div>
        <label className='flex items-center gap-3 text-text-dark'>
          <input
            type='checkbox'
            name='consent'
            checked={formData.consent}
            onChange={handleChange}
            className='w-4 h-4'
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? 'careers-consent-error' : undefined}
          />
          I consent to being contacted regarding career opportunities.
        </label>
        {errors.consent && (
          <p id='careers-consent-error' className='mt-1 text-sm text-error' role='alert'>
            {errors.consent}
          </p>
        )}
      </div>

      <Button
        variant='primary'
        type='submit'
        disabled={status === 'submitting'}
        className='w-full md:w-auto'
      >
        {status === 'submitting' ? 'Submitting…' : 'Submit Application'}
      </Button>

      {status === 'success' && (
        <p className='text-sm text-green-700' role='status'>
          Thank you! Your application has been submitted.
        </p>
      )}

      {status === 'error' && (
        <Alert
          type='error'
          message={submitErrorMessage}
          dismissible
          onDismiss={() => { setStatus('idle'); setErrorType(null) }}
        />
      )}
    </form>
  )
}
