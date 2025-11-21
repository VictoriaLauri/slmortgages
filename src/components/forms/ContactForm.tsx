import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'

type ContactFormState = {
  fullName: string
  email: string
  phone: string
  message: string
  consent: boolean
}

export default function ContactForm() {
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

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    alert('Thank you! Your message has been sent.')
  }

  return (
    <form className='space-y-5' onSubmit={handleSubmit}>
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

      <button type='submit' className='btn-primary w-full md:w-auto'>
        Send Message
      </button>
    </form>
  )
}
