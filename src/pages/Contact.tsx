import { Link } from 'react-router-dom'
import ContactForm from '../components/forms/ContactForm'

export default function Contact() {
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
          Contact Us
        </h1>

        <p className='text-text-dark leading-relaxed mb-8'>
          Have a question, need mortgage guidance, or want to book a call? Fill
          out the form below and we will respond as soon as possible.
        </p>

        {/* Contact Form Card */}
        <div className='bg-white shadow-lg rounded-xl p-6 md:p-8 form-container'>
          <h2 className='text-2xl font-semibold text-teal mb-4'>
            Send Us a Message
          </h2>
          <p className='text-text-light mb-6'>
            Please provide your details below and we’ll get back to you shortly.
          </p>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
