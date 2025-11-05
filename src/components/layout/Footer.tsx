export default function Footer() {
  return (
    <footer className='bg-blue-dark text-white py-6 text-xs leading-relaxed'>
      <div className='max-w-5xl mx-auto px-4'>
        {/* FCA Disclaimers */}
        <div className='mb-5'>
          <p className='mb-2 font-semibold tracking-wide'>
            IMPORTANT INFORMATION
          </p>
          <p className='mb-2'>
            THINK CAREFULLY BEFORE SECURING OTHER DEBTS AGAINST YOUR PROPERTY.
            YOUR PROPERTY MAY BE REPOSSESSED IF YOU DO NOT KEEP UP REPAYMENTS ON
            YOUR MORTGAGE.
          </p>
          <p className='mb-2'>
            SOME BUY TO LET & LET TO BUY MORTGAGES ARE NOT REGULATED BY THE
            FINANCIAL CONDUCT AUTHORITY.
          </p>
          <p className='mb-2'>
            COMMERCIAL FINANCE IS NOT PART OF THE OPENWORK PARTNERSHIP AND IS
            OFFERED IN OUR OWN RIGHT. OPENWORK LIMITED ACCEPTS NO RESPONSIBILITY
            FOR THIS ASPECT OF OUR BUSINESS. THESE PRODUCTS AND SERVICES ARE NOT
            REGULATED BY THE FINANCIAL CONDUCT AUTHORITY.
          </p>
          <p>
            Supreme Financial Solutions Limited is an appointed representative
            of The Openwork Partnership, a trading style of Openwork Limited
            which is authorised and regulated by the Financial Conduct
            Authority.
          </p>
        </div>

        {/* Legal Links */}
        <div className='border-t border-teal-dark pt-3'>
          <div className='flex flex-wrap gap-3 text-gray-300'>
            <a
              href='https://business.yell.com/legal/terms-of-use/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-dark rounded'
            >
              Terms of Use
            </a>
            <span>|</span>
            <a
              href='https://business.yell.com/websites-privacy-cookie-policy/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-dark rounded'
            >
              Privacy & Cookies
            </a>
            <span>|</span>
            <a
              href='https://business.yell.com/legal/trading-terms/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-dark rounded'
            >
              Trading Terms
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-3 text-gray-400'>
          <p>
            &copy; {new Date().getFullYear()} SL Mortgages. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
