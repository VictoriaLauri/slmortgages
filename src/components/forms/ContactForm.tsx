import type { ChangeEvent, FormEvent } from 'react'
import { useRef, useState } from 'react'
import { sanitizeFormText } from '../../lib/utils/sanitizeFormText'
import { Alert, Button } from '../ui/index'

type ContactFormState = {
  fullName: string
  email: string
  phone: string
  message: string
  consent: boolean
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^[+0-9\s-]{6,}$/

function getFormDataFromForm(form: HTMLFormElement): ContactFormState {
  const data = new FormData(form)
  return {
    fullName: (data.get('fullName') ?? '').toString().trim(),
    email: (data.get('email') ?? '').toString().trim(),
    phone: (data.get('phone') ?? '').toString().trim(),
    message: (data.get('message') ?? '').toString().trim(),
    consent: data.get('consent') === 'on',
  }
}

function validate(data: ContactFormState): Record<string, string> {
  const err: Record<string, string> = {}
  if (!data.fullName) err.fullName = 'Full name is required.'
  if (!data.email) err.email = 'Email is required.'
  else if (!EMAIL_PATTERN.test(data.email)) err.email = 'Please enter a valid email address.'
  if (data.phone && !PHONE_PATTERN.test(data.phone)) err.phone = 'Please enter a valid phone number.'
  if (!data.message) err.message = 'Message is required.'
  if (!data.consent) err.consent = 'Please agree to be contacted.'
  return err
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState<ContactFormState>({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  })

  function focusFirstError(errs: Record<string, string>) {
    const first = Object.keys(errs)[0]
    if (!first || !formRef.current) return
    const el = formRef.current.querySelector(`[name="${first}"]`) as HTMLElement
    el?.focus()
  }

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, type } = e.target
    const value =
      type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : e.target.value

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setErrors((prev) => {
      const { [name]: _, ...rest } = prev
      return rest
    })
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const dataToValidate = getFormDataFromForm(form)
    const errs = validate(dataToValidate)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      focusFirstError(errs)
      return
    }
    setErrors({})
    const payload = getFormDataFromForm(form)
    const body = new URLSearchParams()
    body.set('form-name', 'contact')
    body.set('fullName', sanitizeFormText(payload.fullName, 500))
    body.set('email', sanitizeFormText(payload.email, 500))
    body.set('phone', sanitizeFormText(payload.phone, 500))
    body.set('message', sanitizeFormText(payload.message, 10000))
    body.set('consent', payload.consent ? 'on' : '')
    setStatus('submitting')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (!res.ok) {
        throw new Error(`Submission failed: ${res.status}`)
      }
      setFormData({ fullName: '', email: '', phone: '', message: '', consent: false })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      ref={formRef}
      className='space-y-5'
      onSubmit={handleSubmit}
      method='POST'
      data-netlify='true'
      name='contact'
      noValidate
    >
      <input type='hidden' name='form-name' value='contact' />
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
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          />
          {errors.fullName && (
            <p id='fullName-error' className='mt-1 text-sm text-error' role='alert'>
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
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id='email-error' className='mt-1 text-sm text-error' role='alert'>
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
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <p id='phone-error' className='mt-1 text-sm text-error' role='alert'>
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label className='block font-medium mb-1 text-text-dark'>
          Message <span className='text-error'>*</span>
        </label>
        <textarea
          name='message'
          rows={5}
          value={formData.message}
          maxLength={10000}
          onChange={handleChange}
          className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-teal ${errors.message ? 'border-error' : 'border-gray-300'}`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        ></textarea>
        {errors.message && (
          <p id='message-error' className='mt-1 text-sm text-error' role='alert'>
            {errors.message}
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
            aria-describedby={errors.consent ? 'consent-error' : undefined}
          />
          I agree to be contacted regarding my enquiry.
        </label>
        {errors.consent && (
          <p id='consent-error' className='mt-1 text-sm text-error' role='alert'>
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
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </Button>

      {status === 'success' && (
        <p className='text-sm text-green-700' role='status'>
          Thank you! Your message has been sent.
        </p>
      )}

      {status === 'error' && (
        <Alert
          type='error'
          message='Something went wrong. Please try again later.'
          dismissible
          onDismiss={() => setStatus('idle')}
        />
      )}
    </form>
  )
}
