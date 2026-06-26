import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Cookie Policy - Precision',
  robots: 'noindex, nofollow',
}

const BLUE = '#29548B'
const PHONE = '(267) 214-5624'
const PHONE_HREF = 'tel:+12672145624'

export default function CookiePolicy() {
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
        <h1 style={{ color: '#fff', fontFamily: '"The Seasons", Poppins, sans-serif', fontSize: 40, fontWeight: 700, lineHeight: '50px', margin: 0 }}>Cookie Policy</h1>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '70px 20px 70px' }}>

        <p style={{ marginBottom: 32 }}>Last Updated 9/12/2025</p>

        <p style={{ marginBottom: 18 }}>This Cookie Policy explains how Precision Hair Restoration (&ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;ours&rdquo;) uses cookies and similar technologies to recognize you when you visit our websites at (&ldquo;<a href="https://phillyhairmd.com/" style={{ color: '#000' }}>https://phillyhairmd.com/</a>&rdquo;). It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>

        <p style={{ marginBottom: 40 }}>In some cases, we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.</p>

        <h2 style={{ fontFamily: '"The Seasons", Poppins, sans-serif', fontSize: 28, fontWeight: 700, lineHeight: '50px', margin: '0 0 8px' }}>What are cookies?</h2>
        <p style={{ marginBottom: 12 }}>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
        <p style={{ marginBottom: 40 }}>Cookies set by the website owner (in this case, <a href="https://phillyhairmd.com/" style={{ color: '#000' }}>https://phillyhairmd.com/</a>) are called &ldquo;first party cookies&rdquo;. Cookies set by parties other than the website owner are called &ldquo;third party cookies&rdquo;. Third-party cookies enable third party features or functionality to be provided on or through the website (e.g. like advertising, interactive content and analytics). The parties that set these third party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.</p>

        <h2 style={{ fontFamily: '"The Seasons", Poppins, sans-serif', fontSize: 28, fontWeight: 700, lineHeight: '50px', margin: '0 0 8px' }}>Why do we use cookies?</h2>
        <p style={{ marginBottom: 12 }}>We use first and third party cookies for several reasons. Some cookies are required for technical reasons in order for our Websites to operate, and we refer to these as &ldquo;essential&rdquo; or &ldquo;strictly necessary&rdquo; cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Websites for advertising, analytics and other purposes. This is described in more detail below.</p>
        <p style={{ marginBottom: 12 }}>The specific types of first and third party cookies served through our Websites and the purposes they perform are described below (please note that the specific cookies served may vary depending upon the specific Online Properties you visit):</p>

        <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Analytics and customization cookies:</h3>
        <p style={{ marginBottom: 8 }}>These cookies collect information that is used either in aggregate form to help us understand how our Websites are being used or how effective our marketing campaigns are, or to help us customize our Websites for you.</p>
        <p style={{ marginBottom: 4 }}><strong>Who serves these cookies:</strong> Google Analytics.</p>
        <p style={{ marginBottom: 24 }}><strong>How to refuse:</strong> To refuse these cookies, please follow the instructions below under the heading &ldquo;How can I control cookies?&rdquo;</p>

        <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Advertising cookies:</h3>
        <p style={{ marginBottom: 8 }}>These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.</p>
        <p style={{ marginBottom: 4 }}><strong>Who serves these cookies:</strong> Google.</p>
        <p style={{ marginBottom: 40 }}><strong>How to refuse:</strong> To refuse these cookies, please follow the instructions below under the heading &ldquo;How can I control cookies?&rdquo;</p>

        <h2 style={{ fontFamily: '"The Seasons", Poppins, sans-serif', fontSize: 28, fontWeight: 700, lineHeight: '50px', margin: '0 0 8px' }}>What about other tracking technologies, like web beacons?</h2>
        <p style={{ marginBottom: 40 }}>Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called &lsquo;tracking pixels&rdquo; or &ldquo;clear gifs&rdquo;). These are tiny graphics files that contain a unique identifier that enable us to recognize when someone has visited our Websites or opened an e-mail that we have sent them. This allows us, for example, to monitor the traffic patterns of users from one page within our Websites to another, to deliver or communicate with cookies, to understand whether you have come to our Websites from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of e-mail marketing campaigns. In many instances, these technologies are reliant on cookies to function properly, and hence declining cookies will impair their functioning.</p>

        <h2 style={{ fontFamily: '"The Seasons", Poppins, sans-serif', fontSize: 28, fontWeight: 700, lineHeight: '50px', margin: '0 0 8px' }}>Do you use Flash cookies or Local Shared Objects?</h2>
        <p style={{ marginBottom: 12 }}>Our Websites may also use so-called &ldquo;Flash Cookies&rdquo; (also known as Local Shared Objects or &ldquo;LSOs&rdquo;) to, among other things, collect and store information about your use of our services, fraud prevention and for other site operations.</p>
        <p style={{ marginBottom: 12 }}>If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash player to block Flash Cookies storage using the tools contained in the <a href="https://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html" style={{ color: '#000' }}>Website Storage Settings Panel</a>. You can also control Flash Cookies by going to the <a href="https://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html" style={{ color: '#000' }}>Global Storage Settings Panel</a> and following the instructions.</p>
        <p style={{ marginBottom: 40 }}>Please note that setting the Flash Player to restrict or limit acceptance of Flash Cookies may reduce or impede the functionality of some Flash applications, including, potentially, Flash applications used in connection with our services or online content.</p>

        <h2 style={{ fontFamily: '"The Seasons", Poppins, sans-serif', fontSize: 28, fontWeight: 700, lineHeight: '50px', margin: '0 0 8px' }}>Do you serve targeted advertising?</h2>
        <p style={{ marginBottom: 40 }}>Third parties may serve cookies on your computer or mobile device to serve advertising through our Websites. These companies may use information about your visits to this and other websites in order to provide relevant advertisements about goods and services that you may be interested in. They may also employ technology that is used to measure the effectiveness of advertisements. This can be accomplished by them using cookies or web beacons to collect information about your visits to this and other sites in order to provide relevant advertisements about goods and services of potential interest to you. The information collected through this process does not enable us or them to identify your name, contact details or other details that directly identify you unless you choose to provide these.</p>

        <h2 style={{ fontFamily: '"The Seasons", Poppins, sans-serif', fontSize: 28, fontWeight: 700, lineHeight: '50px', margin: '0 0 8px' }}>How can I control cookies?</h2>
        <p style={{ marginBottom: 12 }}>You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser&rsquo;s help menu for more information.</p>
        <p style={{ marginBottom: 40 }}>In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit <a href="http://www.aboutads.info/choices/" style={{ color: '#000' }}>http://www.aboutads.info/choices/</a> or <a href="http://www.youronlinechoices.com" style={{ color: '#000' }}>http://www.youronlinechoices.com</a>.</p>

        <h2 style={{ fontFamily: '"The Seasons", Poppins, sans-serif', fontSize: 28, fontWeight: 700, lineHeight: '50px', margin: '0 0 8px' }}>How often will you update this Cookie Policy?</h2>
        <p style={{ marginBottom: 40 }}>We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies. The date at the top of this Cookie Policy indicates when it was last updated.</p>

        <h2 style={{ fontFamily: '"The Seasons", Poppins, sans-serif', fontSize: 28, fontWeight: 700, lineHeight: '50px', margin: '0 0 8px' }}>Where can I get further information?</h2>
        <p style={{ marginBottom: 8 }}>For more information on our data policies, see our <a href="/privacy-policy" style={{ color: '#000' }}>Privacy Policy</a>.</p>
        <p style={{ marginBottom: 16 }}>If you have any questions about our use of cookies or other technologies, please email us at <a href="mailto:visit@phillyhairmd.com" style={{ color: '#000' }}>visit@phillyhairmd.com</a> or by post to:</p>
        <address style={{ fontStyle: 'normal', lineHeight: 2 }}>
          Precision Hair Restoration<br />
          1608 Walnut St, Suite 1701<br />
          Philadelphia, 19103<br />
          <a href={PHONE_HREF} style={{ color: '#000' }}>{PHONE}</a>
        </address>

      </div>

      {/* Footer */}
      <footer style={{ background: '#000', color: '#fff', textAlign: 'center', padding: '35px 20px 25px', fontFamily: 'Roboto, sans-serif', fontSize: 14, fontWeight: 400, lineHeight: '22px' }}>
        <p>&copy; 2026 Precision Hair Restoration &nbsp;&bull;&nbsp; <a href="/privacy-policy" style={{ color: '#fff' }}>Privacy Policy</a> &nbsp;&bull;&nbsp; <a href="/cookie-policy" style={{ color: '#fff' }}>Cookie Policy</a></p>
      </footer>

    </div>
  )
}
