import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | GEM Services Pest Control',
  description: 'Privacy Policy for GEM Services Pest Control. Read how we collect, use and protect your personal data.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 md:py-20 px-4 max-w-4xl mx-auto prose prose-neutral">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
      
      <h2>1. Introduction</h2>
      <p>
        GEM Services ("we", "our", or "us"), a trading name of GREEN ENVIRONMENTAL MANAGEMENT LTD (Company number 16671563), is committed to protecting your personal information and your right to privacy.
      </p>

      <h2>2. Information We Collect</h2>
      <p>
        We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, or when you contact us. This may include your name, phone number, email address, and postal address.
      </p>

      <h2>3. How We Use Your Information</h2>
      <p>
        We use personal information collected via our website for a variety of business purposes, including to provide and manage our services, fulfill and manage your requests, and for other administrative purposes related to your pest control needs.
      </p>

      <h2>4. Will Your Information Be Shared With Anyone?</h2>
      <p>
        We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
      </p>

      <h2>5. How Long Do We Keep Your Information?</h2>
      <p>
        We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        If you have questions or comments about this notice, you may contact us at:
        <br />Phone: 07400 372204
      </p>
    </div>
  )
}
