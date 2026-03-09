import type { ChangeEvent, FormEvent } from 'react'
import { useRef, useState } from 'react'
import { sanitizeFormText } from '../../lib/utils/sanitizeFormText'
import { Alert, Button } from '../ui/index'

type FormState = {
  yourName: string
  yourEmail: string
  friendName: string
  friendEmail: string
  message: string
  consent: boolean
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function getFormDataFromForm(form: HTMLFormElement): FormState {
  const data = new FormData(form)
  return {
    yourName: (data.get('yourName') ?? '').toString().trim(),
    yourEmail: (data.get('yourEmail') ?? '').toString().trim(),
    friendName: (data.get('friendName') ?? '').toString().trim(),
    friendEmail: (data.get('friendEmail') ?? '').toString().trim(),
    message: (data.get('message') ?? '').toString().trim(),
    consent: data.get('consent') === 'on',
  }
}

function validate(data: FormState): Record<string, string> {
  const err: Record<string, string> = {}
  if (!data.yourName) err.yourName = 'Your name is required.'
  if (!data.yourEmail) err.yourEmail = 'Your email is required.'
  else if (!EMAIL_PATTERN.test(data.yourEmail)) err.yourEmail = 'Please enter a valid email address.'
  if (!data.friendName) err.friendName = "Friend's name is required."
  if (!data.friendEmail) err.friendEmail = "Friend's email is required."
  else if (!EMAIL_PATTERN.test(data.friendEmail)) err.friendEmail = 'Please enter a valid email address.'
  if (!data.consent) err.consent = 'Please confirm your friend is aware and happy to be contacted.'
  return err
}

export default function ReferAFriendForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState<FormState>({
    yourName: '',
    yourEmail: '',
    friendName: '',
    friendEmail: '',
    message: '',
    consent: false,
  })

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
      return
    }
    setErrors({})
    const payload = getFormDataFromForm(form)
    const body = new URLSearchParams()
    body.set('form-name', 'refer-a-friend')
    body.set('Form type', 'Refer a friend')
    body.set('yourName', sanitizeFormText(payload.yourName, 500))
    body.set('yourEmail', sanitizeFormText(payload.yourEmail, 500))
    body.set('friendName', sanitizeFormText(payload.friendName, 500))
    body.set('friendEmail', sanitizeFormText(payload.friendEmail, 500))
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
      setFormData({
        yourName: '',
        yourEmail: '',
        friendName: '',
        friendEmail: '',
        message: '',
        consent: false,
      })
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
      name='refer-a-friend'
      noValidate
    >
      <input type='hidden' name='form-name' value='refer-a-friend' />
      <input type='hidden' name='Form type' value='Refer a friend' />
      <div className='grid md:grid-cols-2 gap-4'>
        <div>
          <label className='block font-medium mb-1 text-text-dark'>
            Your Name <span className='text-error'>*</span>
          </label>
          <input
            type='text'
            name='yourName'
            value={formData.yourName}
            maxLength={200}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-teal ${errors.yourName ? 'border-error' : 'border-gray-300'}`}
            aria-invalid={!!errors.yourName}
            aria-describedby={errors.yourName ? 'refer-yourName-error' : undefined}
          />
          {errors.yourName && (
            <p id='refer-yourName-error' className='mt-1 text-sm text-error' role='alert'>
              {errors.yourName}
            </p>
          )}
        </div>

        <div>
          <label className='block font-medium mb-1 text-text-dark'>
            Your Email <span className='text-error'>*</span>
          </label>
          <input
            type='email'
            name='yourEmail'
            value={formData.yourEmail}
            maxLength={254}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-teal ${errors.yourEmail ? 'border-error' : 'border-gray-300'}`}
            aria-invalid={!!errors.yourEmail}
            aria-describedby={errors.yourEmail ? 'refer-yourEmail-error' : undefined}
          />
          {errors.yourEmail && (
            <p id='refer-yourEmail-error' className='mt-1 text-sm text-error' role='alert'>
              {errors.yourEmail}
            </p>
          )}
        </div>
      </div>

      <div className='grid md:grid-cols-2 gap-4'>
        <div>
          <label className='block font-medium mb-1 text-text-dark'>
            Friend's Name <span className='text-error'>*</span>
          </label>
          <input
            type='text'
            name='friendName'
            value={formData.friendName}
            maxLength={200}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-teal ${errors.friendName ? 'border-error' : 'border-gray-300'}`}
            aria-invalid={!!errors.friendName}
            aria-describedby={errors.friendName ? 'refer-friendName-error' : undefined}
          />
          {errors.friendName && (
            <p id='refer-friendName-error' className='mt-1 text-sm text-error' role='alert'>
              {errors.friendName}
            </p>
          )}
        </div>

        <div>
          <label className='block font-medium mb-1 text-text-dark'>
            Friend's Email <span className='text-error'>*</span>
          </label>
          <input
            type='email'
            name='friendEmail'
            value={formData.friendEmail}
            maxLength={254}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-teal ${errors.friendEmail ? 'border-error' : 'border-gray-300'}`}
            aria-invalid={!!errors.friendEmail}
            aria-describedby={errors.friendEmail ? 'refer-friendEmail-error' : undefined}
          />
          {errors.friendEmail && (
            <p id='refer-friendEmail-error' className='mt-1 text-sm text-error' role='alert'>
              {errors.friendEmail}
            </p>
          )}
        </div>
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
        <label className='flex items-center gap-3 text-text-dark'>
          <input
            type='checkbox'
            name='consent'
            checked={formData.consent}
            onChange={handleChange}
            className='w-4 h-4'
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? 'refer-consent-error' : undefined}
          />
          I confirm that my friend is aware and happy to be contacted.
        </label>
        {errors.consent && (
          <p id='refer-consent-error' className='mt-1 text-sm text-error' role='alert'>
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
        {status === 'submitting' ? 'Submitting…' : 'Submit Referral'}
      </Button>

      {status === 'success' && (
        <p className='text-sm text-green-700' role='status'>
          Thank you! Your referral has been submitted.
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
