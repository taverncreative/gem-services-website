import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | GEM Services Pest Control',
  description: 'Cookie Policy for GEM Services Pest Control outlining how we use cookies and similar technologies.',
}

export default function CookiePolicyPage() {
  return (
    <div className="py-12 md:py-20 px-4 max-w-4xl mx-auto prose prose-neutral">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
      
      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide reporting information.
      </p>

      <h2>2. How We Use Cookies</h2>
      <p>
        We use cookies to understand how you interact with our website, to analyze our web traffic, and to provide you with a better user experience. Essential cookies are necessary for the website to function properly.
      </p>

      <h2>3. Types of Cookies We Use</h2>
      <ul>
        <li><strong>Essential Cookies:</strong> Required to enable core website functionality.</li>
        <li><strong>Analytics Cookies:</strong> Help us understand how visitors use the site.</li>
      </ul>

      <h2>4. Your Choices Regarding Cookies</h2>
      <p>
        You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas may be restricted.
      </p>

      <h2>5. Contact Us</h2>
      <p>
        If you have questions about our use of cookies, please contact us.
        <br />Phone: 07400 372204
      </p>
    </div>
  )
}
