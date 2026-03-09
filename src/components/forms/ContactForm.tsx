import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
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

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [formData, setFormData] = useState<ContactFormState>({
    fullName: '',
    email: '',
    phone: '',
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
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    data.set('form-name', 'contact')
    const body = new URLSearchParams()
    data.forEach((value, key) => {
      const str = value.toString()
      body.append(key, key === 'message' ? sanitizeFormText(str, 10000) : sanitizeFormText(str, 500))
    })
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
      className='space-y-5'
      onSubmit={handleSubmit}
      method='POST'
      data-netlify='true'
      name='contact'
    >
      <input type='hidden' name='form-name' value='contact' />
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
          Message <span className='text-error'>*</span>
        </label>
        <textarea
          required
          name='message'
          rows={5}
          value={formData.message}
          maxLength={10000}
          onChange={handleChange}
          className='w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal'
        ></textarea>
      </div>

      <label className='flex items-center gap-3 text-text-dark'>
        <input
          type='checkbox'
          name='consent'
          checked={formData.consent}
          onChange={handleChange}
          required
          className='w-4 h-4'
        />
        I agree to be contacted regarding my enquiry.
      </label>

      <Button
        variant='primary'
        type='submit'
        disabled={status === 'submitting'}
        className='w-full md:w-auto'
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </Button>

      {status === 'success' && (
        <Alert
          type='success'
          message='Thank you! Your message has been sent.'
          dismissible
        />
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
