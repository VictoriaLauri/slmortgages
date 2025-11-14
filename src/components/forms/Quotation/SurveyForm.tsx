import { useRef, useState } from 'react'
import {
  Alert,
  Button,
  Checkbox,
  Input,
  Radio,
  Select,
  Textarea,
} from '../../ui/index'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function SurveyForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const formRef = useRef<HTMLFormElement>(null)

  // ------------------------------
  // VALIDATION
  // ------------------------------
  const validate = (formData: FormData) => {
    const newErrors: Record<string, string> = {}

    if (!formData.get('title')) newErrors.title = 'Please select your title.'
    if (!formData.get('firstName'))
      newErrors.firstName = 'First name is required.'
    if (!formData.get('lastName')) newErrors.lastName = 'Last name is required.'

    const email = String(formData.get('email') || '')
    if (!email) newErrors.email = 'Email is required.'
    else {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!pattern.test(email))
        newErrors.email = 'Please enter a valid email address.'
    }

    const phone = String(formData.get('phone') || '').trim()
    if (phone && !/^[+0-9\s-]{6,}$/.test(phone))
      newErrors.phone = 'Please enter a valid phone number.'

    if (!formData.get('country')) newErrors.country = 'Country is required.'

    if (!formData.get('surveyType'))
      newErrors.surveyType = 'Please select the survey type.'

    if (!formData.get('propertyAge'))
      newErrors.propertyAge = 'Please select property age.'

    if (!formData.get('address'))
      newErrors.address = 'Property address is required.'

    if (!formData.get('consentContact'))
      newErrors.consentContact =
        'Please consent to being contacted regarding your quotation.'

    return newErrors
  }

  const focusFirstError = (newErrors: Record<string, string>) => {
    const first = Object.keys(newErrors)[0]
    if (!first || !formRef.current) return
    const element = formRef.current.querySelector(
      `[name="${first}"]`
    ) as HTMLElement
    element?.focus()
  }

  // ------------------------------
  // SUBMIT HANDLER
  // ------------------------------
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const newErrors = validate(formData)

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      focusFirstError(newErrors)
      return
    }

    setErrors({})
    setStatus('submitting')

    try {
      await fetch('/', { method: 'POST', body: formData })
      e.currentTarget.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  // ------------------------------
  // FORM JSX
  // ------------------------------
  return (
    <form
      ref={formRef}
      method='POST'
      data-netlify='true'
      name='survey-quote'
      onSubmit={handleSubmit}
      noValidate
      className='space-y-6'
    >
      <input type='hidden' name='form-name' value='survey-quote' />

      {/* Personal details */}
      <div className='grid md:grid-cols-3 gap-4'>
        <Select
          id='title'
          name='title'
          label='Title'
          required
          options={[
            { value: '', label: 'Select' },
            { value: 'Mr', label: 'Mr' },
            { value: 'Mrs', label: 'Mrs' },
            { value: 'Ms', label: 'Ms' },
            { value: 'Miss', label: 'Miss' },
            { value: 'Dr', label: 'Dr' },
          ]}
          error={errors.title}
        />

        <Input
          id='firstName'
          name='firstName'
          label='First name'
          required
          error={errors.firstName}
        />

        <Input
          id='lastName'
          name='lastName'
          label='Last name'
          required
          error={errors.lastName}
        />
      </div>

      {/* Contact */}
      <div className='grid md:grid-cols-2 gap-4'>
        <Input
          id='email'
          name='email'
          type='email'
          label='Email'
          required
          error={errors.email}
        />

        <Input
          id='phone'
          name='phone'
          type='tel'
          label='Phone (optional)'
          error={errors.phone}
        />
      </div>

      {/* Country */}
      <Select
        id='country'
        name='country'
        label='Country'
        required
        options={[
          { value: '', label: 'Select' },
          { value: 'England', label: 'England' },
          { value: 'Scotland', label: 'Scotland' },
          { value: 'Wales', label: 'Wales' },
          { value: 'Northern Ireland', label: 'Northern Ireland' },
        ]}
        error={errors.country}
      />

      {/* Survey Type */}
      <Select
        id='surveyType'
        name='surveyType'
        label='Survey Type'
        required
        options={[
          { value: '', label: 'Select' },
          {
            value: 'RICS Level 2',
            label: 'RICS Level 2 (Homebuyers Report)',
          },
          {
            value: 'RICS Level 3',
            label: 'RICS Level 3 (Building Survey)',
          },
        ]}
        error={errors.surveyType}
      />

      {/* Age of property */}
      <Radio
        name='propertyAge'
        label='Age of property'
        required
        options={[
          { value: 'Under 100', label: 'Under 100 years' },
          { value: '100+', label: '100 years and over' },
        ]}
        error={errors.propertyAge}
      />

      {/* Property Address */}
      <Textarea
        id='address'
        name='address'
        label='Property address'
        rows={3}
        required
        error={errors.address}
      />

      {/* Notes */}
      <Textarea
        id='notes'
        name='notes'
        label='Additional information (optional)'
        rows={3}
      />

      {/* Consent */}
      <Checkbox
        id='consentContact'
        name='consentContact'
        label='I agree to be contacted regarding my quotation request.'
        required
        error={errors.consentContact}
      />

      <Checkbox
        id='consentUpdates'
        name='consentUpdates'
        label='I would like to receive occasional updates and mortgage tips.'
      />

      {/* Submit */}
      <Button
        variant='primary'
        type='submit'
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Submitting…' : 'Submit Request'}
      </Button>

      {status === 'success' && (
        <Alert
          type='success'
          message='Thank you! Your survey quotation request has been submitted and you will be contacted within 24 hours.'
          dismissible
        />
      )}

      {status === 'error' && (
        <Alert
          type='error'
          message='Something went wrong. Please try again later.'
          dismissible
        />
      )}
    </form>
  )
}
