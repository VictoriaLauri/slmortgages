import { useRef, useState } from 'react'
import { sanitizeFormText } from '../../../lib/utils/sanitizeFormText'
import {
  Alert,
  Button,
  Checkbox,
  Input,
  Select,
  Textarea,
} from '../../ui/index'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function RemortgageForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const formRef = useRef<HTMLFormElement>(null)

  // ------------------------------
  // VALIDATION
  // ------------------------------
  const validate = (formData: FormData) => {
    const newErrors: Record<string, string> = {}

    if (!formData.get('applicants'))
      newErrors.applicants = 'Please select number of applicants.'

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

    const price = Number(formData.get('propertyPrice'))
    if (!price || price <= 0)
      newErrors.propertyPrice = 'Property price must be a positive number.'

    if (!formData.get('tenure')) newErrors.tenure = 'Please select the tenure.'

    if (!formData.get('mortgageCount'))
      newErrors.mortgageCount = 'Please specify number of existing charges.'

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

  const clearFieldError = (name: string) =>
    setErrors((prev) => {
      const { [name]: _, ...rest } = prev
      return rest
    })

  // ------------------------------
  // SUBMIT
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
      const body = new URLSearchParams()
      body.set('form-name', 'remortgage-quote')
      const textMax = (k: string) => (k === 'address' || k === 'notes' ? 10000 : 500)
      formData.forEach((value, key) => {
        if (key === 'form-name') return
        body.append(key, sanitizeFormText(value.toString(), textMax(key)))
      })
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (!res.ok) throw new Error(`Submission failed: ${res.status}`)
      formRef.current?.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  // ------------------------------
  // JSX
  // ------------------------------
  return (
    <form
      ref={formRef}
      method='POST'
      data-netlify='true'
      name='remortgage-quote'
      onSubmit={handleSubmit}
      noValidate
      className='space-y-6'
    >
      <input type='hidden' name='form-name' value='remortgage-quote' />
      <input type='hidden' name='formType' value='Remortgage quotation' />

      {/* Applicants */}
      <Select
        id='applicants'
        name='applicants'
        label='Number of applicants'
        required
        options={[
          { value: '', label: 'Select' },
          { value: '1', label: '1' },
          { value: '2', label: '2' },
          { value: '3+', label: '3+' },
        ]}
        error={errors.applicants}
        onChange={() => clearFieldError('applicants')}
      />

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
            { value: 'Other', label: 'Other...' },
          ]}
          error={errors.title}
          onChange={() => clearFieldError('title')}
        />

        <Input
          id='firstName'
          name='firstName'
          label='First name'
          required
          error={errors.firstName}
          onChange={() => clearFieldError('firstName')}
        />

        <Input
          id='lastName'
          name='lastName'
          label='Last name'
          required
          error={errors.lastName}
          onChange={() => clearFieldError('lastName')}
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
          onChange={() => clearFieldError('email')}
        />

        <Input
          id='phone'
          name='phone'
          type='tel'
          label='Phone (optional)'
          error={errors.phone}
          onChange={() => clearFieldError('phone')}
        />
      </div>

      {/* Property */}
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
        onChange={() => clearFieldError('country')}
      />

      <Input
        id='propertyPrice'
        name='propertyPrice'
        type='number'
        label='Property price (£)'
        required
        error={errors.propertyPrice}
        onChange={() => clearFieldError('propertyPrice')}
      />

      <Select
        id='tenure'
        name='tenure'
        label='Tenure'
        required
        options={[
          { value: '', label: 'Select' },
          { value: 'Freehold', label: 'Freehold' },
          { value: 'Leasehold', label: 'Leasehold' },
          { value: 'Share of Freehold', label: 'Share of Freehold' },
        ]}
        error={errors.tenure}
        onChange={() => clearFieldError('tenure')}
      />

      <Textarea
        id='address'
        name='address'
        label='Property address'
        rows={3}
        required
        error={errors.address}
        onChange={() => clearFieldError('address')}
      />

      {/* Mortgage count */}
      <Input
        id='lender'
        name='lender'
        label='Mortgage lender (optional)'
        placeholder='Enter lender name if known'
        onChange={() => clearFieldError('lender')}
      />

      <Select
        id='mortgageCount'
        name='mortgageCount'
        label='Outstanding mortgages (including loans & 2nd charges)'
        required
        options={[
          { value: '', label: 'Select' },
          { value: 'None', label: 'None' },
          { value: '1', label: '1' },
          { value: '2', label: '2' },
          { value: '3', label: '3' },
          { value: '4', label: '4' },
          { value: '5+', label: '5+' },
        ]}
        error={errors.mortgageCount}
        onChange={() => clearFieldError('mortgageCount')}
      />

      <Input
        id='loanAmount'
        name='loanAmount'
        type='number'
        label='Loan amount (£)'
        placeholder='Enter loan amount if known'
        onChange={() => clearFieldError('loanAmount')}
      />

      {/* Considerations */}
      <Checkbox
        label='Additional considerations (optional)'
        options={[
          { value: 'BTL', label: 'Buy to Let' },
          { value: 'Help to Buy', label: 'Help to Buy - Equity Loan' },
          {
            value: 'High Rise',
            label: 'High Rise Building (over 11m/4+ storeys)',
          },
          { value: 'HMO', label: 'House of Multiple Occupancy' },
          { value: 'JBSP', label: 'Joint Borrower, Sole Proprietor' },
          { value: 'Ltd BTL', label: 'Limited Company BTL' },
          { value: 'Multi-unit', label: 'Multi-unit Block' },
          { value: 'Shared Ownership', label: 'Shared Ownership' },
          { value: 'Staircasing', label: 'Staircasing' },
          { value: 'Transfer of Equity', label: 'Transfer of Equity' },
          { value: 'Unregistered Land', label: 'Unregistered Land' },
        ]}
      />

      <Textarea
        id='notes'
        name='notes'
        label='Additional information (optional)'
        rows={3}
        onChange={() => clearFieldError('notes')}
      />

      {/* Consent */}
      <Checkbox
        id='consentContact'
        name='consentContact'
        label='I agree to be contacted regarding my quotation request.'
        required
        error={errors.consentContact}
        onChange={() => clearFieldError('consentContact')}
      />

      <Checkbox
        id='consentUpdates'
        name='consentUpdates'
        label='I would like to receive occasional updates and mortgage tips.'
        onChange={() => clearFieldError('consentUpdates')}
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
        <p className='text-sm text-green-700' role='status'>
          Thank you! Your remortgage quotation request has been submitted and you will be contacted within 24 hours.
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
