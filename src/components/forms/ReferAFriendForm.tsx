import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'

type FormState = {
  yourName: string
  yourEmail: string
  friendName: string
  friendEmail: string
  message: string
  consent: boolean
}

export default function ReferAFriendForm() {
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

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    alert('Thank you! Your referral has been submitted.')
  }

  return (
    <form className='space-y-5' onSubmit={handleSubmit}>
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

      <button type='submit' className='btn-primary w-full md:w-auto'>
        Submit Referral
      </button>
    </form>
  )
}
