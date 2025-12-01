import { useRef, useState } from 'react'
import {
  Alert,
  Button,
  Checkbox,
  Input,
  Select,
  Textarea,
} from '../../ui/index'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function SaleAndPurchaseForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const formRef = useRef<HTMLFormElement>(null)

  // ------------------------------
  // VALIDATION
  // ------------------------------
  const validate = (formData: FormData) => {
    const newErrors: Record<string, string> = {}

    // Applicant details
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

    // Sale validation
    if (!formData.get('saleCountry'))
      newErrors.saleCountry = 'Country is required.'

    const salePrice = Number(formData.get('salePrice'))
    if (!salePrice || salePrice <= 0)
      newErrors.salePrice = 'Sale price must be a positive number.'

    if (!formData.get('saleTenure'))
      newErrors.saleTenure = 'Please select the tenure.'

    if (!formData.get('saleAddress'))
      newErrors.saleAddress = 'Sale address is required.'

    if (!formData.get('saleMortgages'))
      newErrors.saleMortgages = 'Please select the number of mortgages.'

    // Purchase validation
    if (!formData.get('purchaseCountry'))
      newErrors.purchaseCountry = 'Country is required.'

    const purchasePrice = Number(formData.get('purchasePrice'))
    if (!purchasePrice || purchasePrice <= 0)
      newErrors.purchasePrice = 'Purchase price must be a positive number.'

    if (!formData.get('purchaseTenure'))
      newErrors.purchaseTenure = 'Please select the tenure.'

    if (!formData.get('purchaseAddress'))
      newErrors.purchaseAddress = 'Address is required.'

    if (!formData.get('firstTimeBuyer'))
      newErrors.firstTimeBuyer = 'Please choose an option.'

    if (!formData.get('consentContact'))
      newErrors.consentContact =
        'Please consent to being contacted regarding your quotation.'

    return newErrors
  }

  // ------------------------------
  // Focus first error field
  // ------------------------------
  const focusFirstError = (newErrors: Record<string, string>) => {
    const first = Object.keys(newErrors)[0]
    if (!first || !formRef.current) return
    const element = formRef.current.querySelector(
      `[name="${first}"]`
    ) as HTMLElement
    element?.focus()
  }

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
      await fetch('/', { method: 'POST', body: formData })
      e.currentTarget.reset()
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
      name='sale-and-purchase-quote'
      onSubmit={handleSubmit}
      noValidate
      className='space-y-6'
    >
      <input type='hidden' name='form-name' value='sale-and-purchase-quote' />

      {/* -------------------------------------------------
          APPLICANT DETAILS
      -------------------------------------------------- */}
      <div className='space-y-6'>
        <h2 className='text-sm font-medium text-text-navy/70 uppercase tracking-wide mt-2'>
          Applicant Details
        </h2>

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
        />

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
      </div>

      {/* -------------------------------------------------
          ABOUT THE SALE
      -------------------------------------------------- */}
      <div className='space-y-6'>
        <h2 className='text-sm font-medium text-text-navy/70 uppercase tracking-wide mt-2'>
          About the Sale
        </h2>

        <Select
          id='saleCountry'
          name='saleCountry'
          label='Country'
          required
          options={[
            { value: '', label: 'Select' },
            { value: 'England', label: 'England' },
            { value: 'Scotland', label: 'Scotland' },
            { value: 'Wales', label: 'Wales' },
            { value: 'Northern Ireland', label: 'Northern Ireland' },
          ]}
          error={errors.saleCountry}
        />

        <Input
          id='salePrice'
          name='salePrice'
          type='number'
          label='Sale price (£)'
          required
          error={errors.salePrice}
        />

        <Select
          id='saleTenure'
          name='saleTenure'
          label='Tenure'
          required
          options={[
            { value: '', label: 'Select' },
            { value: 'Freehold', label: 'Freehold' },
            { value: 'Leasehold', label: 'Leasehold' },
            { value: 'Share of Freehold', label: 'Share of Freehold' },
          ]}
          error={errors.saleTenure}
        />

        <Textarea
          id='saleAddress'
          name='saleAddress'
          label='Sale property address'
          rows={3}
          required
          error={errors.saleAddress}
        />

        <Select
          id='saleMortgages'
          name='saleMortgages'
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
          error={errors.saleMortgages}
        />

        <Checkbox
          label='Sale considerations (optional)'
          options={[
            {
              value: 'Help to Buy - Equity Loan',
              label: 'Help to Buy - Equity Loan',
            },
            {
              value: 'High Rise',
              label: 'High Rise Building (over 11m/4+ storeys)',
            },
            { value: 'HMO', label: 'House of Multiple Occupancy (HMO)' },
            { value: 'Multi-unit', label: 'Multi-unit Block' },
            { value: 'Shared Ownership', label: 'Shared Ownership' },
            { value: 'Unregistered Land', label: 'Unregistered Land' },
          ]}
        />

        <Textarea
          id='saleNotes'
          name='saleNotes'
          label='Additional information about the sale (optional)'
          rows={3}
        />
      </div>

      {/* -------------------------------------------------
          ABOUT THE PURCHASE
      -------------------------------------------------- */}
      <div className='space-y-6'>
        <h2 className='text-sm font-medium text-text-navy/70 uppercase tracking-wide mt-2'>
          About the Purchase
        </h2>

        <Select
          id='purchaseCountry'
          name='purchaseCountry'
          label='Country'
          required
          options={[
            { value: '', label: 'Select' },
            { value: 'England', label: 'England' },
            { value: 'Scotland', label: 'Scotland' },
            { value: 'Wales', label: 'Wales' },
            { value: 'Northern Ireland', label: 'Northern Ireland' },
          ]}
          error={errors.purchaseCountry}
        />

        <Input
          id='purchasePrice'
          name='purchasePrice'
          type='number'
          label='Purchase price (£)'
          required
          error={errors.purchasePrice}
        />

        <Select
          id='purchaseTenure'
          name='purchaseTenure'
          label='Tenure'
          required
          options={[
            { value: '', label: 'Select' },
            { value: 'Freehold', label: 'Freehold' },
            { value: 'Leasehold', label: 'Leasehold' },
            { value: 'Share of Freehold', label: 'Share of Freehold' },
          ]}
          error={errors.purchaseTenure}
        />

        <Textarea
          id='purchaseAddress'
          name='purchaseAddress'
          label='Purchase property address'
          rows={3}
          required
          error={errors.purchaseAddress}
        />

        <Input
          id='lender'
          name='lender'
          label='Mortgage lender (optional)'
          placeholder='Enter lender name if known'
        />

        <Checkbox
          label='Additional considerations (optional)'
          options={[
            { value: 'Auction', label: 'Auction' },
            { value: 'Buy to Let', label: 'Buy to Let' },
            {
              value: 'Freehold Management Company',
              label: 'Freehold with Management Company',
            },
            { value: 'Gifted Deposit', label: 'Gifted Deposit' },
            { value: 'Help to Buy', label: 'Help to Buy - Equity Loan' },
            {
              value: 'High Rise',
              label: 'High Rise Building (over 11m/4+ storeys)',
            },
            { value: 'HMO', label: 'House of Multiple Occupancy (HMO)' },
            { value: 'JBSP', label: 'Joint Borrower, Sole Proprietor' },
            { value: 'Ltd BTL', label: 'Limited Company BTL' },
            { value: 'Multi-unit', label: 'Multi-unit Block' },
            { value: 'New Build', label: 'New Build (never occupied)' },
            { value: 'Repossession', label: 'Repossession' },
            { value: 'Right to Buy', label: 'Right to Buy' },
            { value: 'Second Property', label: 'Second Property' },
            {
              value: 'Separate Representation',
              label: 'Separate Representation',
            },
            { value: 'Shared Ownership', label: 'Shared Ownership' },
            { value: 'Unregistered Land', label: 'Unregistered Land' },
          ]}
        />

        <Textarea
          id='purchaseNotes'
          name='purchaseNotes'
          label='Additional information about the purchase (optional)'
          rows={3}
        />
      </div>

      {/* CONSENT */}
      <div className='space-y-6'>
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
      </div>

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
          message='Thank you! Your sale and purchase quotation request has been submitted and you will be contacted within 24 hours.'
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
