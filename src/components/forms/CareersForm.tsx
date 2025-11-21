import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'

type CareersFormState = {
  fullName: string
  email: string
  phone: string
  message: string
  cv: File | null
  consent: boolean
}

export default function CareersForm() {
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
      return
    }

    const value =
      type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : e.target.value

    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (formData.cv && formData.cv.size > 5 * 1024 * 1024) {
      alert('CV file size must be under 5MB.')
      return
    }

    alert('Thank you! Your application has been submitted.')
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
          Accepted formats: PDF, DOC, DOCX — max 5MB
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

      <button type='submit' className='btn-primary w-full md:w-auto'>
        Submit Application
      </button>
    </form>
  )
}
