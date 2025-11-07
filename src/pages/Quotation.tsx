import QuotationForm from '../components/forms/QuotationForm'

export default function Quotation() {
  return (
    <>
      {/* Page SEO tags – no Helmet */}
      <title>Request a Conveyancer or Survey Quotation - SL Mortgages</title>
      <meta
        name='description'
        content='Request a quotation for conveyancer or survey services.'
      />

      <div className='container mx-auto px-4 py-16'>
        <div className='max-w-2xl mx-auto'>
          <h1 className='text-4xl font-bold mb-4 text-primary-orange'>
            Conveyancer &amp; Survey Quotation
          </h1>
          <p className='text-lg text-gray-700 mb-8'>
            Please fill out the form below to request a quotation for
            conveyancer or survey services.
          </p>
          <div className='bg-blue-light/10 rounded-2xl p-8 shadow-sm'>
            <div className='form-container'>
              <QuotationForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
