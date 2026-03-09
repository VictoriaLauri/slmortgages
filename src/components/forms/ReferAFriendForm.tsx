import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
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

export default function ReferAFriendForm() {
  const [status, setStatus] = useState<Status>('idle')
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
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    data.set('form-name', 'refer-a-friend')
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
      className='space-y-5'
      onSubmit={handleSubmit}
      method='POST'
      data-netlify='true'
      name='refer-a-friend'
    >
      <input type='hidden' name='form-name' value='refer-a-friend' />
      <div className='grid md:grid-cols-2 gap-4'>
        <div>
          <label className='block font-medium mb-1 text-text-dark'>
            Your Name <span className='text-error'>*</span>
          </label>
          <input
            required
            type='text'
            name='yourName'
            value={formData.yourName}
            maxLength={200}
            onChange={handleChange}
            className='w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal'
          />
        </div>

        <div>
          <label className='block font-medium mb-1 text-text-dark'>
            Your Email <span className='text-error'>*</span>
          </label>
          <input
            required
            type='email'
            name='yourEmail'
            value={formData.yourEmail}
            maxLength={254}
            onChange={handleChange}
            className='w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal'
          />
        </div>
      </div>

      <div className='grid md:grid-cols-2 gap-4'>
        <div>
          <label className='block font-medium mb-1 text-text-dark'>
            Friend's Name <span className='text-error'>*</span>
          </label>
          <input
            required
            type='text'
            name='friendName'
            value={formData.friendName}
            maxLength={200}
            onChange={handleChange}
            className='w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal'
          />
        </div>

        <div>
          <label className='block font-medium mb-1 text-text-dark'>
            Friend's Email <span className='text-error'>*</span>
          </label>
          <input
            required
            type='email'
            name='friendEmail'
            value={formData.friendEmail}
            maxLength={254}
            onChange={handleChange}
            className='w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal'
          />
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
        ></textarea>
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
        I confirm that my friend is aware and happy to be contacted.
      </label>

      <Button
        variant='primary'
        type='submit'
        disabled={status === 'submitting'}
        className='w-full md:w-auto'
      >
        {status === 'submitting' ? 'Submitting…' : 'Submit Referral'}
      </Button>

      {status === 'success' && (
        <Alert
          type='success'
          message='Thank you! Your referral has been submitted.'
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
