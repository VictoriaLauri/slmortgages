export default function Footer() {
  return (
    <footer className='bg-blue-dark text-white py-3 text-[10px] sm:text-[11px] leading-snug'>
      <div className='max-w-5xl mx-auto px-3'>
        {/* FCA Disclaimers */}
        <div className='mb-3 space-y-2'>
          <p className='font-semibold tracking-wide mb-1'>
            IMPORTANT INFORMATION
          </p>

          {/* Main Warning – slightly larger */}
          <div className='border border-white/10 rounded-sm p-1.5 bg-blue-900/20 text-[11px] sm:text-[12px] font-semibold leading-snug'>
            THINK CAREFULLY BEFORE SECURING OTHER DEBTS AGAINST YOUR PROPERTY.
            YOUR PROPERTY MAY BE REPOSSESSED IF YOU DO NOT KEEP UP REPAYMENTS ON
            YOUR MORTGAGE.
          </div>

          {/* Secondary Warnings – tighter + smaller text */}
          <div className='border border-white/10 rounded-sm p-1.5 bg-blue-900/20 text-[9px] sm:text-[10px] leading-snug text-gray-200'>
            SOME BUY TO LET & LET TO BUY MORTGAGES ARE NOT REGULATED BY THE
            FINANCIAL CONDUCT AUTHORITY.
          </div>

          <div className='border border-white/10 rounded-sm p-1.5 bg-blue-900/20 text-[9px] sm:text-[10px] leading-snug text-gray-200'>
            COMMERCIAL FINANCE IS NOT PART OF THE OPENWORK PARTNERSHIP AND IS
            OFFERED IN OUR OWN RIGHT. OPENWORK LIMITED ACCEPTS NO RESPONSIBILITY
            FOR THIS ASPECT OF OUR BUSINESS. THESE PRODUCTS AND SERVICES ARE NOT
            REGULATED BY THE FINANCIAL CONDUCT AUTHORITY.
          </div>

          <p className='text-gray-300 mt-1'>
            Supreme Financial Solutions Limited is an appointed representative
            of The Openwork Partnership, a trading style of Openwork Limited
            which is authorised and regulated by the Financial Conduct
            Authority.
          </p>
        </div>

        {/* Legal Links */}
        <div className='border-t border-teal-dark pt-2'>
          <div className='flex flex-wrap gap-2 text-gray-300'>
            <a
              href='/terms-of-use'
              className='hover:underline focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-blue-dark rounded'
            >
              Terms of Use
            </a>
            <span>|</span>
            <a
              href='https://www.theopenworkpartnership.com/privacy-notice/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-blue-dark rounded'
            >
              Privacy Notice
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-2 text-gray-400'>
          <p>
            &copy; {new Date().getFullYear()} SL Mortgages. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
