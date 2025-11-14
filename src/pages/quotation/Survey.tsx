import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SurveyForm from '../../components/forms/Quotation/SurveyForm'

export default function Survey() {
  return (
    <main className='bg-teal/5'>
      <section className='py-8 md:py-12'>
        <div className='max-w-3xl mx-auto px-4'>
          {/* BACK BUTTON */}
          <Link
            to='/quotation'
            className='inline-flex items-center gap-2 text-text-navy hover:text-primary-orange-muted mb-4'
          >
            <FaArrowLeft className='text-xs' />
            <span className='text-sm font-medium'>Back to all quote types</span>
          </Link>

          <div className='bg-white shadow-sm border border-gray-100 rounded-lg p-6 md:p-8'>
            <h1 className='text-2xl md:text-3xl font-bold text-primary-orange-muted mb-6 text-center'>
              Survey Quotation
            </h1>

            <SurveyForm />
          </div>
        </div>
      </section>
    </main>
  )
}
