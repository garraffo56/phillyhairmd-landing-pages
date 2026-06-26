import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Privacy Policy - Precision',
  robots: 'noindex, nofollow',
}

const BLUE = '#29548B'
const PHONE = '(267) 214-5624'
const PHONE_HREF = 'tel:+12672145624'

export default function PrivacyPolicy() {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif', fontSize: 18, fontWeight: 400, lineHeight: '22px', color: '#000', background: '#fff' }}>

      {/* Header */}
      <header style={{ background: '#000', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 40px', boxShadow: '0 4px 22px 0 rgba(0,0,0,.45)' }}>
        <a href="https://phillyhairmd.com">
          <Image src="https://start.phillyhairmd.com/wp-content/uploads/2025/12/Vector.png" alt="Precision Hair Restoration" width={180} height={22} style={{ display: 'block' }} unoptimized />
        </a>
        <a href={PHONE_HREF} style={{ color: '#fff', fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 18, textTransform: 'uppercase', border: '2px solid #000', borderRadius: 62, padding: '0 20px', lineHeight: '44px', textDecoration: 'none', display: 'inline-block' }}>{PHONE}</a>
      </header>

      {/* Hero Banner */}
      <div style={{ background: BLUE, padding: '30px 20px', textAlign: 'center' }}>
        <h1 style={{ color: '#fff', fontFamily: '"The Seasons", Poppins, sans-serif', fontSize: 40, fontWeight: 700, lineHeight: '50px', margin: 0 }}>Privacy Policy</h1>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '70px 20px 70px' }}>

        <p style={{ marginBottom: 18 }}>Last Updated: 10/01/2025</p>

        <p style={{ marginBottom: 18 }}>Thank you for choosing to be part of our community at Precision Hair Restoration. (&ldquo;company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). We are <strong>committed</strong> to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at <a href="mailto:visit@phillyhairmd.com" style={{ color: '#000' }}>visit@phillyhairmd.com</a>.</p>

        <p style={{ marginBottom: 18 }}>When you visit our website <a href="https://phillyhairmd.com/" style={{ color: '#000' }}>https://phillyhairmd.com/</a> and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we describe our privacy policy. We seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy policy that you do not agree with, please discontinue use of our websites and our services.</p>

        <p style={{ marginBottom: 18 }}>This privacy policy applies to all information collected through our website (such as <a href="https://phillyhairmd.com/" style={{ color: '#000' }}>https://phillyhairmd.com/</a> and/or any related services, sales, marketing or events (we refer to them collectively in this privacy policy as the &ldquo;<strong>Websites</strong>&rdquo;).</p>

        <p style={{ marginBottom: 32 }}>Please read this privacy policy carefully as it will help you make informed decisions about sharing your personal information with us.</p>

        <h2 style={{ fontFamily: '"The Seasons", Poppins, sans-serif', fontSize: 28, fontWeight: 700, lineHeight: '50px', margin: '0 0 16px' }}>TABLE OF CONTENTS</h2>
        <ol style={{ paddingLeft: 24, marginBottom: 40, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <li>WHAT INFORMATION DO WE COLLECT?</li>
          <li>HOW DO WE USE YOUR INFORMATION?</li>
          <li>WILL YOUR INFORMATION BE SHARED WITH ANYONE?</li>
          <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
          <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
          <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
          <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
          <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
          <li>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
          <li>DO WE MAKE UPDATES TO THIS POLICY?</li>
          <li>HOW CAN YOU CONTACT US ABOUT THIS POLICY?</li>
        </ol>

        <h2 style={{ fontFamily: '"The Seasons", Poppins, sans-serif', fontSize: 28, fontWeight: 700, lineHeight: '50px', margin: '0 0 8px' }}>1. WHAT INFORMATION DO WE COLLECT?</h2>
        <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Personal information you disclose to us</h3>
        <p style={{ marginBottom: 8 }}><em>In Short: We collect personal information that you provide to us such as name, address, contact information, passwords and security data, and payment information.</em></p>
        <p style={{ marginBottom: 12 }}>We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the Websites or otherwise contacting us.</p>
        <p style={{ marginBottom: 12 }}>The personal information that we collect depends on the context of your interactions with the Websites, the choices you make and the products and features you use. The personal information we collect can include the following:</p>
        <p style={{ marginBottom: 8 }}><strong>Name and Contact Data.</strong> We may collect your first and last name, email address, postal address, phone number, and other similar contact data.</p>
        <p style={{ marginBottom: 8 }}><strong>Credentials.</strong> When needed, we collect passwords, password hints, and similar security information used for authentication and account access.</p>
        <p style={{ marginBottom: 24 }}><strong>Payment Data.</strong> We collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by the payment processor and you should review its privacy policies and contact the payment processor directly to respond to your questions.</p>
        <p style={{ marginBottom: 8 }}>All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.</p>
        <h3 style={{ fontWeight: 700, fontSize: 18, margin: '24px 0 8px' }}>Information collected from other sources</h3>
        <p style={{ marginBottom: 8 }}><em>In Short: We may collect limited data from public databases, marketing partners, and other outside sources.</em></p>
        <p style={{ marginBottom: 40 }}>We may obtain information about you from other sources, such as public databases, joint marketing partners, as well as from other third parties. Examples of the information we receive from other sources include: social media profile information; marketing leads and search results and links, including paid listings (such as sponsored links).</p>

        <h2 style={{ fontFamily: '"The Seasons", Poppins, sans-serif', fontSize: 28, fontWeight: 700, lineHeight: '50px', margin: '0 0 8px' }}>2. HOW DO WE USE YOUR INFORMATION?</h2>
        <p style={{ marginBottom: 8 }}><em>In Short: We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</em></p>
        <p style={{ marginBottom: 12 }}>We use personal information collected via our Websites for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests (&ldquo;Business Purposes&rdquo;), in order to enter into or perform a contract with you (&ldquo;Contractual&rdquo;), with your consent (&ldquo;Consent&rdquo;), and/or for compliance with our legal obligations (&ldquo;Legal Reasons&rdquo;). We indicate the specific processing grounds we rely on next to each purpose listed below.</p>
        <p style={{ marginBottom: 8 }}>We use the information we collect or receive:</p>
        <p style={{ marginBottom: 8 }}><strong>Fulfill and manage your orders</strong> for Contractual reasons. We may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the Websites.</p>
        <p style={{ marginBottom: 40 }}><strong>For other Business Purposes.</strong> We may use your information for other Business Purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Websites, products, services, marketing and your experience.</p>

        <h2 style={{ fontFamily: '"The Seasons", Poppins, sans-serif', fontSize: 28, fontWeight: 700, lineHeight: '50px', margin: '0 0 8px' }}>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h2>
        <p style={{ marginBottom: 8 }}><em>In Short: We only share information with your consent, to comply with laws, to protect your rights, or to fulfill business obligations.</em></p>
        <p style={{ marginBottom: 12 }}>We only share and disclose your information in the following situations:</p>
        <p style={{ marginBottom: 8 }}><strong>Compliance with Laws.</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).</p>
        <p style={{ marginBottom: 8 }}><strong>Vital Interests and Legal Rights.</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</p>
        <p style={{ marginBottom: 8 }}><strong>Vendors, Consultants and Other Third-Party Service Providers.</strong> We may share your data with third party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include: payment processing, data analysis, email delivery, hosting services, customer service and marketing efforts. We may allow selected third parties to use tracking technology on the Websites, which will enable them to collect data about how you interact with the Websites over time. Unless described in this Policy, we do not share, sell, rent or trade any of your information with third parties for their promotional purposes.</p>
        <p style={{ marginBottom: 8 }}><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</p>
        <p style={{ marginBottom: 40 }}><strong>With your Consent.</strong> We may disclose your personal information for any other purpose with your consent.</p>

        <h2 style={{ fontFamily: '"The Seasons", Poppins, sans-serif', fontSize: 28, fontWeight: 700, lineHeight: '50px', margin: '0 0 8px' }}>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
        <p style={{ marginBottom: 8 }}><em>In Short: We may use cookies and other tracking technologies to collect and store your information.</em></p>
        <p style={{ marginBottom: 40 }}>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our <a href="/cookie-policy" style={{ color: '#000' }}>Cookie Policy</a>.</p>

        <h2 style={{ fontFamily: '"The Seasons", Poppins, sans-serif', fontSize: 28, fontWeight: 700, lineHeight: '50px', margin: '0 0 8px' }}>5. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
        <p style={{ marginBottom: 8 }}><em>In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy unless otherwise required by law.</em></p>
        <p style={{ marginBottom: 40 }}>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or, if this is not possible, then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>

        <h2 style={{ fontFamily: '"The Seasons", Poppins, sans-serif', fontSize: 28, fontWeight: 700, lineHeight: '50px', margin: '0 0 8px' }}>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
        <p style={{ marginBottom: 8 }}><em>In Short: We aim to protect your personal information through a system of organizational and technical security measures.</em></p>
        <p style={{ marginBottom: 40 }}>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the Internet itself is 100 percent secure. Although we will do our best to protect your personal information, transmission of personal information to and from our Websites is at your own risk. You should only access the services within a secure environment.</p>

        <h2 style={{ fontFamily: '"The Seasons", Poppins, sans-serif', fontSize: 28, fontWeight: 700, lineHeight: '50px', margin: '0 0 8px' }}>7. DO WE COLLECT INFORMATION FROM MINORS?</h2>
        <p style={{ marginBottom: 8 }}><em>In Short: We do not knowingly collect data from or market to children under 18 years of age.</em></p>
        <p style={{ marginBottom: 40 }}>We do not knowingly solicit data from or market to children under 18 years of age. By using the Websites, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent&rsquo;s use of the Websites. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we have collected from children under age 18, please contact us at <a href="mailto:visit@phillyhairmd.com" style={{ color: '#000' }}>visit@phillyhairmd.com</a>.</p>

        <h2 style={{ fontFamily: '"The Seasons", Poppins, sans-serif', fontSize: 28, fontWeight: 700, lineHeight: '50px', margin: '0 0 8px' }}>8. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
        <p style={{ marginBottom: 8 }}><em>In Short: You may review, change, or terminate your account at any time.</em></p>
        <p style={{ marginBottom: 12 }}>If you are resident in the European Economic Area, and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You also have the right to request access to your data, correction of your data and for your data to be removed. In the event of a data breach, you will be notified within 72 hours of the time the data breach is detected. You can find the European Economic Area contact details here: <a href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" style={{ color: '#000' }}>http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a></p>
        <p style={{ marginBottom: 40 }}><strong>Cookies and similar technologies:</strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Websites. To opt-out of interest-based advertising by advertisers on our Websites visit <a href="http://www.aboutads.info/choices/" style={{ color: '#000' }}>http://www.aboutads.info/choices/</a>. For more details, see our <a href="/cookie-policy" style={{ color: '#000' }}>Cookie Policy</a>.</p>

        <h2 style={{ fontFamily: '"The Seasons", Poppins, sans-serif', fontSize: 28, fontWeight: 700, lineHeight: '50px', margin: '0 0 8px' }}>9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
        <p style={{ marginBottom: 8 }}><em>In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</em></p>
        <p style={{ marginBottom: 12 }}>California Civil Code Section 1798.83, also known as the &ldquo;Shine The Light&rdquo; law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</p>
        <p style={{ marginBottom: 40 }}>If you are under 18 years of age, reside in California, and have a registered account with the Websites, you have the right to request removal of unwanted data that you publicly post on the Websites. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Websites, but please be aware that the data may not be completely or comprehensively removed from our systems.</p>

        <h2 style={{ fontFamily: '"The Seasons", Poppins, sans-serif', fontSize: 28, fontWeight: 700, lineHeight: '50px', margin: '0 0 8px' }}>10. DO WE MAKE UPDATES TO THIS POLICY?</h2>
        <p style={{ marginBottom: 8 }}><em>In Short: Yes, we will update this policy as necessary to stay compliant with relevant laws.</em></p>
        <p style={{ marginBottom: 40 }}>We may update this privacy policy from time to time. The updated version will be indicated by an updated &ldquo;Revised&rdquo; date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.</p>

        <h2 style={{ fontFamily: '"The Seasons", Poppins, sans-serif', fontSize: 28, fontWeight: 700, lineHeight: '50px', margin: '0 0 8px' }}>11. HOW CAN YOU CONTACT US ABOUT THIS POLICY?</h2>
        <p style={{ marginBottom: 16 }}>If you have questions or comments about this policy, you may email us at <a href="mailto:visit@phillyhairmd.com" style={{ color: '#000' }}>visit@phillyhairmd.com</a> or by post to:</p>
        <address style={{ fontStyle: 'normal', marginBottom: 40, lineHeight: 2 }}>
          Precision Hair Restoration<br />
          1608 Walnut St, Suite 1701<br />
          Philadelphia, 19103<br />
          <a href={PHONE_HREF} style={{ color: '#000' }}>{PHONE}</a>
        </address>

        <h2 style={{ fontFamily: '"The Seasons", Poppins, sans-serif', fontSize: 28, fontWeight: 700, lineHeight: '50px', margin: '0 0 8px' }}>PERSONAL DATA MANAGEMENT</h2>
        <p>According to the Privacy Policy, you agree to share your personal data with our service. However, you still have the right to update, transfer or delete it from us at any time. If you need further management for your data, please contact us at <a href="mailto:visit@phillyhairmd.com" style={{ color: '#000' }}>visit@phillyhairmd.com</a>.</p>

      </div>

      {/* Footer */}
      <footer style={{ background: '#000', color: '#fff', textAlign: 'center', padding: '35px 20px 25px', fontFamily: 'Roboto, sans-serif', fontSize: 14, fontWeight: 400, lineHeight: '22px' }}>
        <p>&copy; 2026 Precision Hair Restoration &nbsp;&bull;&nbsp; <a href="/privacy-policy" style={{ color: '#fff' }}>Privacy Policy</a> &nbsp;&bull;&nbsp; <a href="/cookie-policy" style={{ color: '#fff' }}>Cookie Policy</a></p>
      </footer>

    </div>
  )
}
