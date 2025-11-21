import { Link } from 'react-router-dom'
import CareersForm from '../components/forms/CareersForm'

export default function Careers() {
  return (
    <section className='bg-gradient-to-b from-blue-light/40 to-white min-h-screen py-8 md:py-10 px-4'>
      <div className='max-w-4xl mx-auto'>
        {/* Back Button */}
        <Link
          to='/'
          className='inline-block mb-6 text-sm font-medium text-teal underline hover:text-teal-dark'
        >
          ← Back to Homepage
        </Link>

        {/* Heading */}
        <h1 className='text-3xl md:text-4xl font-bold text-primary-orange-muted mb-4'>
          Career Opportunities
        </h1>

        <p className='text-text-dark leading-relaxed mb-8'>
          Are you driven, motivated, and passionate about helping people secure
          their financial future? Whether you’re new to the industry or already
          experienced, we welcome dedicated individuals looking for flexibility,
          strong career progression, and excellent earning potential.
        </p>

        {/* Benefits */}
        <div className='bg-white shadow-lg rounded-xl p-6 md:p-8 mb-10'>
          <h2 className='text-2xl font-semibold text-teal mb-4'>
            Why Join Our Team?
          </h2>

          <ul className='space-y-3 text-text-dark'>
            <li>
              • Excellent earnings potential via competitive commission splits.
            </li>
            <li>
              • Typical earnings of £50–£60K+ once established — uncapped.
            </li>
            <li>• Weekly commission payments.</li>
            <li>• Remote working from anywhere in the UK.</li>
            <li>• Flexible hours to fit your lifestyle.</li>
            <li>
              • Clear progression path:
              <ul className='ml-5 mt-2 space-y-1 list-disc'>
                <li>Start as a Protection Adviser</li>
                <li>Study mortgages to expand your qualifications</li>
                <li>Move into management roles</li>
                <li>Build and develop your own team</li>
                <li>Work towards becoming a qualified Financial Adviser</li>
              </ul>
            </li>
            <li>
              • Ongoing support with compliance, sales, systems, and processes.
            </li>
          </ul>

          <p className='text-text-dark mt-4'>
            Joining us means becoming part of a busy, reputable team — and one
            of the UK’s largest and longest-established financial advice and
            investment networks.
          </p>
        </div>

        {/* Form Card */}
        <div className='bg-white shadow-lg rounded-xl p-6 md:p-8 form-container'>
          <h2 className='text-2xl font-semibold text-teal mb-4'>
            Register Your Interest
          </h2>

          <p className='text-text-light mb-6'>
            Fill out the form below and upload your CV. We will contact you to
            discuss current opportunities and next steps.
          </p>

          <CareersForm />
        </div>

        {/* Contact Button */}
        <div className='text-center mt-10'>
          <Link to='/contact' className='btn-primary px-6 py-3 inline-block'>
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
