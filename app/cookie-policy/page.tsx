import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | Precision Hair Restoration',
  robots: 'noindex, nofollow',
}

export default function CookiePolicy() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', fontFamily: 'Poppins, sans-serif', color: '#222', lineHeight: 1.8 }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 8 }}>Cookie Policy</h1>
      <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: 40 }}>Last Updated: 9/12/2025</p>

      <p style={{ marginBottom: 40 }}>This Cookie Policy explains how Precision Hair Restoration uses cookies and similar tracking technologies on <a href="https://phillyhairmd.com" style={{ color: '#164996' }}>phillyhairmd.com</a>, including what these tools are, why they are used, and how visitors can control their use.</p>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 16 }}>What Are Cookies?</h2>
        <p>Cookies are small data files placed on your device when you visit a website. First-party cookies are set by the site owner; third-party cookies come from other entities and enable advertising, interactive features, and analytics.</p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 16 }}>Why We Use Cookies</h2>
        <p style={{ marginBottom: 12 }}>We use cookies for essential operational purposes and to better understand how visitors interact with our site. Specific uses include:</p>
        <ul style={{ paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <li><strong>Analytics &amp; Customization:</strong> Google Analytics collects aggregate data on site usage and campaign effectiveness to help us improve our content and services.</li>
          <li><strong>Advertising:</strong> Google serves cookies to make ads more relevant, prevent repetition, and select interest-based advertisements.</li>
        </ul>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 16 }}>Additional Tracking Technologies</h2>
        <p>We may use web beacons (also known as tracking pixels) - tiny graphics with unique identifiers that monitor traffic patterns, measure email campaign success, and track conversions from third-party advertisements.</p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 16 }}>Flash Cookies and Local Shared Objects</h2>
        <p>We may use Flash Cookies (Local Shared Objects) for fraud prevention and site operations. You can manage Flash Player settings through the <a href="https://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html" style={{ color: '#164996' }}>Website Storage Settings Panel</a> or <a href="https://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html" style={{ color: '#164996' }}>Global Storage Settings Panel</a>.</p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 16 }}>Targeted Advertising</h2>
        <p>Third parties may serve cookies to display relevant ads based on your browsing history across multiple sites. These cookies or web beacons are also used to measure the effectiveness of advertising campaigns.</p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 16 }}>How to Control Cookies</h2>
        <p style={{ marginBottom: 12 }}>You can accept or reject cookies through your browser settings. Please note that disabling cookies may restrict some functionality on our site. Additional opt-out options for interest-based advertising:</p>
        <ul style={{ paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <li><a href="http://www.aboutads.info/choices/" style={{ color: '#164996' }}>aboutads.info/choices</a></li>
          <li><a href="http://www.youronlinechoices.com/" style={{ color: '#164996' }}>youronlinechoices.com</a></li>
        </ul>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 16 }}>Contact Us</h2>
        <address style={{ fontStyle: 'normal', lineHeight: 2 }}>
          <strong>Precision Hair Restoration</strong><br />
          1608 Walnut St, Suite 1701<br />
          Philadelphia, PA 19103<br />
          <a href="tel:+12672145624" style={{ color: '#164996' }}>(267) 214-5624</a><br />
          <a href="mailto:visit@phillyhairmd.com" style={{ color: '#164996' }}>visit@phillyhairmd.com</a>
        </address>
      </section>

      <footer style={{ borderTop: '1px solid #eee', paddingTop: 24, fontSize: '0.85rem', color: '#666' }}>
        <p>&copy; 2026 Precision Hair Restoration &nbsp;&bull;&nbsp; <a href="/privacy-policy" style={{ color: '#666' }}>Privacy Policy</a> &nbsp;&bull;&nbsp; <a href="/cookie-policy" style={{ color: '#666' }}>Cookie Policy</a></p>
      </footer>
    </main>
  )
}
