import { useRef, useState } from 'react'
import { Alert, Button, Checkbox, Input, Radio, Select, Textarea } from '../ui'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function QuotationForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const formRef = useRef<HTMLFormElement>(null)

  // Validation logic
  const validate = (formData: FormData) => {
    const newErrors: Record<string, string> = {}

    if (!formData.get('dealType'))
      newErrors.dealType = 'Please select a deal type.'
    if (!formData.get('title')) newErrors.title = 'Please select your title.'
    if (!formData.get('firstName'))
      newErrors.firstName = 'First name is required.'
    if (!formData.get('lastName')) newErrors.lastName = 'Last name is required.'
    if (!formData.get('email')) newErrors.email = 'Email address is required.'
    else {
      const email = String(formData.get('email'))
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailPattern.test(email))
        newErrors.email = 'Please enter a valid email address.'
    }
    const phone = String(formData.get('phone') || '').trim()
    if (phone && !/^[+0-9\\s-]{6,}$/.test(phone))
      newErrors.phone = 'Please enter a valid phone number.'

    if (!formData.get('location'))
      newErrors.location = 'Please select property location.'

    const price = Number(formData.get('propertyPrice'))
    if (!price || price <= 0)
      newErrors.propertyPrice = 'Property price must be a positive number.'

    if (!formData.get('address'))
      newErrors.address = 'Property address is required.'

    if (!formData.get('firstTimeBuyer'))
      newErrors.firstTimeBuyer =
        'Please indicate if you are a first-time buyer.'

    if (!formData.get('consentContact'))
      newErrors.consentContact =
        'Please consent to being contacted regarding your request.'

    return newErrors
  }

  // Focus first invalid field
  const focusFirstError = (newErrors: Record<string, string>) => {
    const firstField = Object.keys(newErrors)[0]
    if (!firstField || !formRef.current) return
    const element = formRef.current.querySelector(
      `[name="${firstField}"]`
    ) as HTMLElement
    if (element) element.focus()
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
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
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      ref={formRef}
      name='quotation'
      method='POST'
      data-netlify='true'
      onSubmit={handleSubmit}
      noValidate
      className='space-y-5'
    >
      <input type='hidden' name='form-name' value='quotation' />

      {/* Deal type */}
      <Select
        id='dealType'
        name='dealType'
        label='Deal type'
        required
        options={[
          { value: '', label: 'Select' },
          { value: 'Purchase', label: 'Purchase' },
          { value: 'Sale and Purchase', label: 'Sale and Purchase' },
          { value: 'Sale', label: 'Sale' },
          { value: 'Remortgage', label: 'Remortgage' },
          { value: 'Survey', label: 'Survey' },
        ]}
        error={errors.dealType}
      />

      {/* Title / Names */}
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

      {/* Contact details */}
      <Input
        id='email'
        name='email'
        type='email'
        label='Email address'
        required
        error={errors.email}
      />
      <Input
        id='phone'
        name='phone'
        type='tel'
        label='Phone number (optional)'
        placeholder='+44 7123 456789'
        error={errors.phone}
      />

      {/* Location / Property */}
      <Select
        id='location'
        name='location'
        label='Property location'
        required
        options={[
          { value: '', label: 'Select' },
          { value: 'England', label: 'England' },
          { value: 'Scotland', label: 'Scotland' },
          { value: 'Wales', label: 'Wales' },
          { value: 'Northern Ireland', label: 'Northern Ireland' },
        ]}
        error={errors.location}
      />

      <Input
        id='propertyPrice'
        name='propertyPrice'
        type='number'
        label='Property price (£)'
        required
        min={1}
        placeholder='e.g. 350000'
        error={errors.propertyPrice}
      />

      <Input
        id='tenure'
        name='tenure'
        label='Tenure (optional)'
        placeholder='Freehold or Leasehold'
      />

      <Textarea
        id='address'
        name='address'
        label='Property address'
        required
        rows={3}
        error={errors.address}
      />

      <Radio
        name='firstTimeBuyer'
        label='First-time buyer'
        required
        options={[
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' },
        ]}
        error={errors.firstTimeBuyer}
      />

      <Checkbox
        label='Additional considerations'
        options={[
          { value: 'Auction', label: 'Auction' },
          { value: 'Buy to Let', label: 'Buy to Let' },
          { value: 'Help to Buy', label: 'Help to Buy' },
          { value: 'Shared Ownership', label: 'Shared Ownership' },
          { value: 'Right to Buy', label: 'Right to Buy' },
          { value: 'Other', label: 'Other' },
        ]}
      />

      {/* Additional info */}
      <Textarea
        id='additionalInfo'
        name='additionalInfo'
        label='Additional information (optional)'
        rows={3}
      />

      {/* Consents */}
      <Checkbox
        id='consentContact'
        name='consentContact'
        required
        label='I agree to be contacted by SL Mortgages regarding my quotation request.'
        error={errors.consentContact}
      />
      <Checkbox
        id='consentUpdates'
        name='consentUpdates'
        label='I would like to receive occasional updates and mortgage tips.'
      />

      {/* Submit */}
      <Button
        type='submit'
        variant='primary'
        size='md'
        disabled={status === 'submitting'}
        className='w-full'
      >
        {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
      </Button>

      {/* Status alerts */}
      {status === 'success' && (
        <Alert
          type='success'
          message='✅ Thank you! Your quotation request has been received. Svetlana or a member of our team will contact you within 24 hours using your preferred contact details.'
          dismissible
        />
      )}
      {status === 'error' && (
        <Alert
          type='error'
          message='Something went wrong while submitting. Please try again later.'
          dismissible
        />
      )}
    </form>
  )
}
