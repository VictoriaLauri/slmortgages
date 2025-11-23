import React from 'react'
import { useNavigate } from 'react-router-dom'

const TermsOfUse: React.FC = () => {
  const navigate = useNavigate()
  return (
    <main className='min-h-screen bg-gradient-to-b from-blue-light/40 to-white py-16 px-4 sm:px-6 lg:px-8'>
      <section
        aria-labelledby='terms-of-use-heading'
        className='mx-auto max-w-4xl bg-white/90 shadow-md rounded-lg border border-slate-200 p-6 sm:p-8'
      >
        <button
          onClick={() => navigate(-1)}
          className='mb-6 inline-flex items-center text-blue-900 hover:text-blue-700 font-medium 
             focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded'
        >
          ← Back
        </button>
        <header className='mb-8'>
          <h1
            id='terms-of-use-heading'
            className='text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-3'
          >
            Terms of Use
          </h1>
          <p className='text-sm text-slate-600'>
            Last updated: <time dateTime='2025-11-23'>23 November 2025</time>
          </p>
        </header>

        {/* 1. Introduction */}
        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-slate-900 mb-3'>
            1. Introduction
          </h2>
          <p className='text-slate-800 leading-relaxed mb-2'>
            This website (the &quot;Site&quot;) is operated to provide
            information about our mortgage and protection services. By accessing
            or using the Site, you agree to be bound by these Terms of Use and
            our Privacy &amp; Cookie Policy.
          </p>
          <p className='text-slate-800 leading-relaxed mb-2'>
            If you do not agree with these Terms, please do not use the Site.
          </p>
          <p className='text-slate-800 leading-relaxed'>
            We may update these Terms of Use from time to time by posting a
            revised version on the Site. Your continued use of the Site after
            any changes are made constitutes your acceptance of the updated
            Terms.
          </p>
        </section>

        {/* 2. Using the Site */}
        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-slate-900 mb-3'>
            2. Using the Site
          </h2>
          <p className='text-slate-800 leading-relaxed mb-2'>
            The Site is intended for residents of the United Kingdom. If you
            choose to access the Site from outside the UK, you do so at your own
            risk and are responsible for complying with any local laws.
          </p>
          <p className='text-slate-800 leading-relaxed mb-2'>
            You are responsible for any costs associated with your use of the
            Site, including any charges relating to internet access.
          </p>
          <p className='text-slate-800 leading-relaxed mb-2'>
            You must not use the Site:
          </p>
          <ul className='list-disc list-inside text-slate-800 leading-relaxed space-y-1 mb-2'>
            <li>for any unlawful, fraudulent, or harmful purpose;</li>
            <li>to transmit spam or unsolicited marketing communications;</li>
            <li>to harass, harm, or infringe the rights of others;</li>
            <li>
              to copy, scrape, harvest, or otherwise extract data from the Site
              using automated tools;
            </li>
            <li>
              to interfere with, disrupt, or damage the Site or its security in
              any way.
            </li>
          </ul>
          <p className='text-slate-800 leading-relaxed'>
            We may suspend, restrict, or terminate your access to the Site if we
            reasonably believe you have breached these Terms of Use.
          </p>
        </section>

        {/* 3. Privacy */}
        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-slate-900 mb-3'>
            3. Privacy
          </h2>
          <p className='text-slate-800 leading-relaxed'>
            We process personal data in accordance with our Privacy &amp; Cookie
            Policy, which explains what personal information we collect, how we
            use it, and your rights under UK data protection law. Please refer
            to that policy for full details.
          </p>
        </section>

        {/* 4. Intellectual Property */}
        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-slate-900 mb-3'>
            4. Intellectual Property
          </h2>
          <p className='text-slate-800 leading-relaxed mb-2'>
            All content on the Site, including text, graphics, logos, icons,
            images, and layout, is owned by us or our licensors and is protected
            by intellectual property laws.
          </p>
          <p className='text-slate-800 leading-relaxed'>
            You may access and view the Site for your personal, non-commercial
            use only. You must not reproduce, distribute, modify, or reuse any
            content from the Site without our prior written permission.
          </p>
        </section>

        {/* 5. Information You Submit */}
        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-slate-900 mb-3'>
            5. Information You Submit
          </h2>
          <p className='text-slate-800 leading-relaxed mb-2'>
            Any information you submit through the Site (other than personal
            data, which is handled in accordance with our Privacy &amp; Cookie
            Policy) may be used by us for any purpose and without restriction.
          </p>
          <p className='text-slate-800 leading-relaxed'>
            You are responsible for ensuring that any information you provide is
            accurate and not misleading.
          </p>
        </section>

        {/* 6. Third-Party Links */}
        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-slate-900 mb-3'>
            6. Third-Party Links
          </h2>
          <p className='text-slate-800 leading-relaxed mb-2'>
            The Site may contain links to third-party websites or resources.
            These are provided for your convenience only.
          </p>
          <p className='text-slate-800 leading-relaxed'>
            We do not control, endorse, or take responsibility for the content,
            policies, or availability of third-party websites. Accessing any
            third-party website is at your own risk.
          </p>
        </section>

        {/* 7. Accuracy & Availability */}
        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-slate-900 mb-3'>
            7. Accuracy &amp; Availability of Information
          </h2>
          <p className='text-slate-800 leading-relaxed mb-2'>
            We aim to ensure that the information on the Site is accurate and
            up-to-date; however, we do not guarantee this and the Site may
            occasionally contain errors or omissions.
          </p>
          <p className='text-slate-800 leading-relaxed mb-2'>
            The content on the Site is provided for general information only and
            does not constitute financial, mortgage, or protection advice.
          </p>
          <p className='text-slate-800 leading-relaxed'>
            Mortgage and protection advice is only provided once you formally
            engage our services. We do not guarantee that the Site will always
            be available or uninterrupted.
          </p>
        </section>

        {/* 8. Our Liability */}
        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-slate-900 mb-3'>
            8. Our Liability
          </h2>
          <p className='text-slate-800 leading-relaxed mb-2'>
            We are responsible for loss or damage you suffer that is a
            foreseeable result of our negligence or breach of these Terms of
            Use.
          </p>
          <p className='text-slate-800 leading-relaxed mb-2'>
            We are not liable for:
          </p>
          <ul className='list-disc list-inside text-slate-800 leading-relaxed space-y-1 mb-2'>
            <li>business or commercial losses;</li>
            <li>losses arising from events outside our reasonable control;</li>
            <li>indirect, incidental, or consequential losses.</li>
          </ul>
          <p className='text-slate-800 leading-relaxed'>
            Nothing in these Terms limits or excludes our liability for fraud,
            fraudulent misrepresentation, or personal injury or death caused by
            our negligence.
          </p>
        </section>

        {/* 9. Governing Law */}
        <section className='mb-6'>
          <h2 className='text-xl font-semibold text-slate-900 mb-3'>
            9. Governing Law
          </h2>
          <p className='text-slate-800 leading-relaxed'>
            These Terms of Use are governed by the laws of England and Wales.
            Any disputes arising in connection with these Terms or your use of
            the Site may be brought before the courts of England and Wales.
          </p>
        </section>

        {/* 10. Contact Us */}
        <section className='mb-10'>
          <h2 className='text-xl font-semibold text-slate-900 mb-3'>
            10. Contact Us
          </h2>
          <p className='text-slate-800 leading-relaxed'>
            If you have any questions or concerns about these Terms of Use or
            the Site, please contact us using the details provided on our{' '}
            <a
              href='/contact'
              className='underline underline-offset-4 text-blue-800 hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white'
            >
              Contact
            </a>{' '}
            page.
          </p>
        </section>

        {/* Regulatory & Risk Disclaimers */}
        <section
          aria-labelledby='regulatory-disclaimer-heading'
          className='border-t border-slate-200 pt-6 mt-4'
        >
          <h2
            id='regulatory-disclaimer-heading'
            className='text-lg font-semibold text-slate-900 mb-3'
          >
            Important Regulatory Information
          </h2>

          <p className='text-sm font-semibold text-red-800 leading-relaxed mb-3'>
            THINK CAREFULLY BEFORE SECURING OTHER DEBTS AGAINST YOUR PROPERTY.
            YOUR PROPERTY MAY BE REPOSSESSED IF YOU DO NOT KEEP UP REPAYMENTS ON
            YOUR MORTGAGE.
          </p>

          <p className='text-sm text-slate-800 leading-relaxed mb-3'>
            SOME BUY TO LET &amp; LET TO BUY MORTGAGES ARE NOT REGULATED BY THE
            FINANCIAL CONDUCT AUTHORITY.
          </p>

          <p className='text-sm text-slate-800 leading-relaxed mb-3'>
            COMMERCIAL FINANCE IS NOT PART OF THE OPENWORK PARTNERSHIP AND IS
            OFFERED IN OUR OWN RIGHT. OPENWORK LIMITED ACCEPTS NO RESPONSIBILITY
            FOR THIS ASPECT OF OUR BUSINESS. THESE PRODUCTS AND SERVICES ARE NOT
            REGULATED BY THE FINANCIAL CONDUCT AUTHORITY.
          </p>

          <p className='text-sm text-slate-800 leading-relaxed'>
            Supreme Financial Solutions Limited is an appointed representative
            of The Openwork Partnership, a trading style of Openwork Limited,
            which is authorised and regulated by the Financial Conduct
            Authority.
          </p>
        </section>
      </section>
    </main>
  )
}

export default TermsOfUse
