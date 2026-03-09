import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
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

export default function CareersForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorType, setErrorType] = useState<ErrorType | null>(null)
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
      return
    }

    const value =
      type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : e.target.value

    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const maxSizeBytes = 1.5 * 1024 * 1024 // 1.5MB (fits within Netlify free tier 10MB/month)
    if (formData.cv && formData.cv.size > maxSizeBytes) {
      setErrorType('file_size')
      setStatus('error')
      return
    }

    const form = e.currentTarget
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

  const errorMessage =
    errorType === 'file_size'
      ? 'CV file size must be under 1.5MB.'
      : 'Something went wrong. Please try again later.'

  return (
    <form
      className='space-y-5'
      onSubmit={handleSubmit}
      method='POST'
      data-netlify='true'
      name='careers'
    >
      <input type='hidden' name='form-name' value='careers' />
      <div className='grid md:grid-cols-2 gap-4'>
        <div>
          <label className='block font-medium mb-1 text-text-dark'>
            Full Name <span className='text-error'>*</span>
          </label>
          <input
            required
            type='text'
            name='fullName'
            value={formData.fullName}
            maxLength={200}
            onChange={handleChange}
            className='w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal'
          />
        </div>

        <div>
          <label className='block font-medium mb-1 text-text-dark'>
            Email <span className='text-error'>*</span>
          </label>
          <input
            required
            type='email'
            name='email'
            value={formData.email}
            maxLength={254}
            onChange={handleChange}
            className='w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal'
          />
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
          className='w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal'
        />
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
        ></textarea>
      </div>

      <div>
        <label className='block font-medium mb-1 text-text-dark'>
          Upload CV <span className='text-error'>*</span>
        </label>
        <input
          required
          type='file'
          name='cv'
          accept='.pdf,.doc,.docx'
          onChange={handleChange}
          className='w-full p-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-teal'
        />
        <p className='text-sm text-text-light mt-1'>
          Accepted formats: PDF, DOC, DOCX — max 1.5MB
        </p>
      </div>

      <label className='flex items-center gap-3 text-text-dark'>
        <input
          type='checkbox'
          name='consent'
          checked={formData.consent}
          onChange={handleChange}
          className='w-4 h-4'
          required
        />
        I consent to being contacted regarding career opportunities.
      </label>

      <Button
        variant='primary'
        type='submit'
        disabled={status === 'submitting'}
        className='w-full md:w-auto'
      >
        {status === 'submitting' ? 'Submitting…' : 'Submit Application'}
      </Button>

      {status === 'success' && (
        <Alert
          type='success'
          message='Thank you! Your application has been submitted.'
          dismissible
        />
      )}

      {status === 'error' && (
        <Alert
          type='error'
          message={errorMessage}
          dismissible
          onDismiss={() => { setStatus('idle'); setErrorType(null) }}
        />
      )}
    </form>
  )
}
