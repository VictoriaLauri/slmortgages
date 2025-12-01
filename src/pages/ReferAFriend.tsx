import { Link } from 'react-router-dom'
import ReferFriendForm from '../components/forms/ReferAFriendForm'

export default function ReferAFriend() {
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
        <h1 className='text-2xl md:text-3xl font-bold text-text-navy mb-4'>
          Refer a Friend
        </h1>

        <p className='text-text-dark leading-relaxed mb-8'>
          We greatly appreciate your support of Svetlana Latiseva Mortgages! As
          a valued customer, we invite you to share your positive experience
          with your friends and family. And as a token of our gratitude,
          <span className='font-semibold'>
            {' '}
            you will receive a £50 voucher of your choice.
          </span>
        </p>

        {/* Form Card */}
        <div className='bg-white shadow-lg rounded-xl p-6 md:p-8 form-container'>
          <h2 className='text-2xl font-semibold text-teal mb-4'>
            Refer a Friend
          </h2>

          <p className='text-text-light mb-6'>
            Please fill out the form below. We will reach out to your referral
            and keep you informed throughout the process.
          </p>

          <ReferFriendForm />
        </div>

        {/* Terms & Conditions */}
        <div className='mt-10 bg-white shadow-md rounded-xl p-6 md:p-8'>
          <h3 className='text-xl font-semibold text-teal mb-4'>
            Referral Program Terms & Conditions
          </h3>

          <ul className='space-y-2 text-text-dark'>
            <li>• This offer does not apply to Product Transfers.</li>
            <li>
              • The referral fee will be paid within 30 days of mortgage
              completion.
            </li>
            <li>• A minimum mortgage value of £300,000 applies.</li>
            <li>• Only one referral fee will be paid per client.</li>
            <li>
              • We will reward up to a maximum of 5 successful referrals per
              year.
            </li>
          </ul>

          <p className='text-text-dark mt-4'>
            We value your trust and appreciate your referrals. Rest assured that
            we will handle each referral with utmost professionalism and ensure
            a smooth mortgage process.
          </p>
        </div>
      </div>
    </section>
  )
}
