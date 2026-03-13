import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | GEM Services Pest Control',
  description: 'Terms of Use for GEM Services Pest Control.',
}

export default function TermsOfUsePage() {
  return (
    <div className="py-12 md:py-20 px-4 max-w-4xl mx-auto prose prose-neutral">
      <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
      <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
      
      <h2>1. Agreement to Terms</h2>
      <p>
        These Terms of Use constitute a legally binding agreement made between you and GEM Services ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
      </p>

      <h2>2. Intellectual Property Rights</h2>
      <p>
        Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site and the trademarks, service marks, and logos contained therein are owned or controlled by us.
      </p>

      <h2>3. User Representations</h2>
      <p>
        By using the website, you represent and warrant that all information you submit will be true, accurate, current, and complete, and you will maintain the accuracy of such information.
      </p>

      <h2>4. Prohibited Activities</h2>
      <p>
        You may not access or use the Site for any purpose other than that for which we make the Site available.
      </p>

      <h2>5. Governing Law</h2>
      <p>
        These conditions are governed by and interpreted following the laws of the United Kingdom, and the use of the United Nations Convention of Contracts for the International Sale of Goods is expressly excluded.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us.
        <br />Phone: 07400 372204
      </p>
    </div>
  )
}
