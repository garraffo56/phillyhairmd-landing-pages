'use client'
import { Suspense } from 'react'
import GhlForm from '@/components/GhlForm'
import GclidCapture from '@/components/GclidCapture'
import ReviewCard from '@/components/ReviewCard'
import PrecisionFaq from '@/components/PrecisionFaq'

const PHONE = '(215) 800-9100'
const PHONE_HREF = 'tel:+12158009100'
const ADDRESS_LINE1 = '1608 Walnut St, Suite 1701'
const ADDRESS_LINE2 = 'Philadelphia, PA 19103'
const LOGO = 'https://phillyhairmd.com/wp-content/uploads/2026/05/Logo-Color-1-1-1.png'

const BLUE = '#003cb5'
const NAVY = '#15274f'
const GOLD = '#fdc200'
const GRAY_BG = '#eeeeee'

const TRUST_ITEMS = [
  { title: 'Designed for Your Hair Loss Pattern', body: 'Personalized plans based on your stage, evaluation findings, and goals.' },
  { title: 'Visible, Measurable Progress', body: 'Track changes over time through follow-up assessments.' },
  { title: 'Guidance Focused on Healthy-Looking Hair Over Time', body: 'Recommendations based on proven medical and appearance-supporting approaches.' },
  { title: 'Safe Care. Proven Protocols.', body: 'Strict standards for consistent, high-quality patient care.' },
  { title: 'Tailored to You', body: 'Your plan is based on your evaluation, goals, and long-term hair needs.' },
  { title: 'Trusted by Thousands', body: 'Real patients. Real reviews. Real experiences.' },
  { title: 'Step-by-Step Guidance', body: 'Know what to expect during your evaluation and throughout your care plan.' },
  { title: 'Built for Real-Life Confidence', body: 'Feel prepared and confident in your everyday life again.' },
  { title: 'Support When You Need It Most', body: 'Real guidance through your evaluation, recommendations, and every step of your journey.' },
  { title: 'Start with a Free Consultation', body: 'Get answers, options, and a personalized plan — no pressure.' },
]

const PRACTICE_SECTIONS = [
  {
    icon: '/images/icon-capabilities.png',
    heading: 'Capabilities',
    items: [
      { bold: 'Comprehensive evaluation', rest: ' of hair loss patterns' },
      { bold: 'Personalized care plans', rest: ' built around your goals' },
      { bold: '', rest: 'Options that may include ', boldAfter: 'medical or appearance-supporting approaches' },
      { bold: 'Support for complex cases', rest: ' requiring multi-factor planning' },
    ],
    dark: false,
  },
  {
    icon: '/images/icon-safety.png',
    heading: 'Safety Standards',
    items: [
      { bold: 'Evidence-based approaches', rest: ' reviewed by licensed medical providers' },
      { bold: 'Clean, professional clinical environment', rest: ' with medical-grade protocols' },
      { bold: 'Clear discussions', rest: ' about expectations and next steps in your care plan' },
    ],
    dark: true,
  },
  {
    icon: '/images/icon-patient-first.png',
    heading: 'Patient-First Philosophy',
    items: [
      { bold: 'Honest assessments —', rest: ' we provide recommendations only when appropriate' },
      { bold: 'Personalized plans', rest: ' developed around your unique needs and goals' },
      { bold: 'Direct communication with your doctor', rest: ' at every step of your care journey' },
      { bold: '', rest: 'Focus on ', boldAfter: 'long-term hair health' },
    ],
    dark: false,
  },
]

const REVIEWS = [
  {
    name: 'Michael T.',
    text: "I was nervous going in, but Dr. Barsoumian took the time to explain exactly what was happening with my hair loss and what options made sense for me. No pressure at all — just honest answers. I finally feel like I understand what I'm dealing with and have a clear plan moving forward.",
  },
  {
    name: 'David R.',
    text: "The evaluation process was thorough and professional. I appreciated that they didn't push any particular treatment — they laid out the options and let me decide. The whole team was welcoming from the moment I walked in. I've already recommended Precision to two friends.",
  },
  {
    name: 'James L.',
    text: "After years of putting it off, I finally made the call and I'm so glad I did. The consultation was detailed, the doctor was knowledgeable, and the staff was great throughout. I left with a real understanding of my situation and a personalized plan I actually feel good about.",
  },
]

interface PrecisionLPProps {
  heroFormId: string
  bottomFormId: string
}

export default function PrecisionLP({ heroFormId, bottomFormId }: PrecisionLPProps) {
  return (
    <>
      <Suspense fallback={null}><GclidCapture /></Suspense>

      {/* ── NAV ── */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: '#000',
        boxShadow: '0 4px 22px rgba(0,0,0,0.45)',
      }}>
        <div style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: '0 40px',
          height: 90,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <img
            src={LOGO}
            alt="Precision Hair Restoration"
            style={{ height: 44, width: 'auto' }}
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <a
              href="#evaluation-form"
              style={{
                background: '#fff',
                color: '#000',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                fontSize: '0.88rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '12px 24px',
                borderRadius: 50,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Book Your Consultation
            </a>
            <a
              href={PHONE_HREF}
              style={{
                color: '#fff',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                fontSize: '1rem',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {PHONE}
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Gray top band */}
        <div style={{ background: '#f5f5f5', paddingTop: 60 }}>
          <div style={{
            maxWidth: 1440,
            margin: '0 auto',
            padding: '0 40px',
            display: 'grid',
            gridTemplateColumns: '1fr 520px',
            gap: 48,
            alignItems: 'flex-start',
          }}>
            {/* Left: headline in gray zone */}
            <div style={{ paddingTop: 20, paddingBottom: 40 }}>
              <h1 style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)',
                lineHeight: 1.13,
                color: '#000',
                marginBottom: 20,
              }}>
                Medical Evaluation for Thinning Hair & Hair Loss Conditions
              </h1>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                color: '#000',
                marginBottom: 16,
                lineHeight: 1.5,
              }}>
                Discover the cause of hair loss and learn which treatment options fit your goals and hair biology.
              </p>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: '1rem',
                color: '#000',
                lineHeight: 1.5,
              }}>
                Request your consultation to understand your hair loss and explore your options.
              </p>
            </div>

            {/* Right: form card — starts in gray, extends into dark */}
            <div
              id="evaluation-form"
              style={{
                background: '#fff',
                borderRadius: 12,
                boxShadow: '10px 10px 10.1px rgba(0,0,0,0.32)',
                padding: '40px 32px 32px',
                position: 'relative',
                zIndex: 2,
                marginBottom: -260,
              }}
            >
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                fontSize: '1.2rem',
                textAlign: 'center',
                marginBottom: 24,
                color: '#000',
              }}>
                Request Your Evaluation
              </p>
              <GhlForm formId={heroFormId} height={420} />
            </div>
          </div>
        </div>

        {/* Hero image dark section */}
        <div style={{
          position: 'relative',
          minHeight: 500,
          backgroundColor: '#000',
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.85) 100%)',
          }} />
          {/* Patient-Centered Care badge — bottom-right, below form card */}
          <div style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            zIndex: 2,
            maxWidth: 460,
          }}>
            <div style={{ color: GOLD, fontSize: '1.4rem', letterSpacing: 3, whiteSpace: 'nowrap' }}>★★★★★</div>
            <div>
              <p style={{ color: '#fff', fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '1rem' }}>
                Patient-Centered Care
              </p>
              <p style={{ color: '#fff', fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '0.85rem', marginTop: 2 }}>
                Patients appreciate our personalized, doctor-led approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 STEPS ── */}
      <section style={{ background: '#fff', padding: '80px 40px 60px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
            textAlign: 'center',
            marginBottom: 12,
          }}>
            Your Hair Loss Plan Is Just Three Steps Away
          </h2>
          <p style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontSize: '1.1rem',
            textAlign: 'center',
            marginBottom: 60,
            color: '#333',
          }}>
            It&apos;s simpler than you think, and it all starts with a conversation.
          </p>

          <div className="steps-grid" style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
            {[
              { icon: '/images/step-schedule.png', title: 'Schedule Your Evaluation', sub: 'Pick a time that works best for you.' },
              { icon: '/images/step-goals.png', title: 'Share Your Goals', sub: 'Tell us what you want to improve.' },
              { icon: '/images/step-assessment.png', title: 'Hair Loss Assessment', sub: 'Your provider examines thinning patterns.' },
              { icon: '/images/step-plan-a.png', title: 'Personalized Treatment Plan', sub: 'Get a plan tailored to your needs.' },
            ].map((step) => (
              <div key={step.title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 211,
                  height: 211,
                  borderRadius: '50%',
                  background: BLUE,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <img src={step.icon} alt={step.title} style={{ width: 112, height: 112, objectFit: 'contain' }} />
                </div>
                <div>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1rem', marginBottom: 4 }}>{step.title}</p>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '0.95rem', color: '#444' }}>{step.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 56 }}>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', color: '#555', marginBottom: 12 }}>No pressure. No sales pitch. Just answers.</p>
            <h3 style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(1.4rem, 2.2vw, 2rem)',
              marginBottom: 12,
            }}>
              No pressure. No obligation. Just honest answers about your options.
            </h3>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', color: '#333', marginBottom: 24 }}>
              You&apos;re in the right place — thousands start here every week.
            </p>
            <a
              href="#evaluation-form"
              style={{
                display: 'inline-block',
                background: BLUE,
                color: '#fff',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                fontSize: '1rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '16px 36px',
                borderRadius: 50,
                textDecoration: 'none',
              }}
            >
              Request Your Evaluation
            </a>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#777', marginTop: 12 }}>
              Fast. Private. No obligation.
            </p>
          </div>
        </div>
      </section>

      {/* ── TRUST GRID ── */}
      <section style={{ background: GRAY_BG, padding: '80px 40px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
            textAlign: 'center',
            marginBottom: 12,
            maxWidth: 700,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Why Patients Feel Confident Choosing Our Team — and Why You Can Too
          </h2>
          <p style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontSize: '1.1rem',
            textAlign: 'center',
            marginBottom: 56,
            color: '#333',
          }}>
            Real care. Real support. Real patient-first focus.
          </p>

          <div className="trust-grid">
            {TRUST_ITEMS.map((item) => (
              <div key={item.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <svg aria-hidden="true" viewBox="0 0 56 54" fill="none" style={{ width: 40, height: 40, flexShrink: 0, marginTop: 2, display: 'block' }}>
                  <path d="M56 26.9997C56 24.1283 52.4574 21.8577 51.6205 19.2665C50.7561 16.5812 52.2681 12.6528 50.6536 10.4164C49.0218 8.1596 44.8353 8.40196 42.5952 6.75892C40.3762 5.13247 39.3197 1.0364 36.6534 0.163734C34.0831 -0.676675 30.8497 1.9837 27.9995 1.9837C25.1494 1.9837 21.9169 -0.676675 19.3466 0.163734C16.6812 1.0364 15.6247 5.13247 13.4066 6.75892C11.1647 8.40288 6.97816 8.1596 5.34636 10.4164C3.73193 12.6519 5.24391 16.5831 4.37953 19.2665C3.54259 21.8577 0 24.1283 0 26.9997C0 29.8711 3.54259 32.1408 4.37953 34.733C5.24391 37.4182 3.73193 41.3466 5.34636 43.5831C6.97816 45.8398 11.1647 45.5975 13.4066 47.2405C15.6247 48.8669 16.6812 52.963 19.3466 53.8357C21.9169 54.6761 25.1521 52.0157 28.0005 52.0157C30.8488 52.0157 34.0841 54.677 36.6543 53.8357C39.3197 52.963 40.3762 48.8669 42.5961 47.2405C44.8362 45.5965 49.0228 45.8398 50.6546 43.5831C52.269 41.3475 50.757 37.4164 51.6214 34.733C52.4574 32.1417 56.0009 29.872 56.0009 26.9997H56ZM42.4297 21.6264L26.4848 37.69C25.7549 38.4254 24.799 38.7922 23.845 38.7922C22.891 38.7922 21.9333 38.4254 21.2034 37.69L13.5703 30.0001C12.1123 28.5312 12.1123 26.151 13.5703 24.6821C15.0283 23.2133 17.3928 23.2133 18.8508 24.6821L23.8441 29.7126L37.1483 16.3075C38.6063 14.8387 40.9717 14.8387 42.4288 16.3075C43.8868 17.7764 43.8868 20.1566 42.4288 21.6255L42.4297 21.6264Z" fill="#164996"/>
                </svg>
                <div>
                  <p style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 500,
                    fontSize: '1rem',
                    marginBottom: 4,
                    color: '#000',
                  }}>
                    {item.title}
                  </p>
                  <p style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: '0.9rem',
                    color: '#333',
                    lineHeight: 1.6,
                  }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 56, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="#evaluation-form"
              style={{
                display: 'inline-block',
                background: BLUE,
                color: '#fff',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                fontSize: '1rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '16px 36px',
                borderRadius: 50,
                textDecoration: 'none',
              }}
            >
              Request Your Consultation
            </a>
            <a
              href="#evaluation-form"
              style={{
                display: 'inline-block',
                border: '2px solid #2e2f2a',
                color: '#2e2f2a',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                fontSize: '1rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '14px 36px',
                borderRadius: 50,
                textDecoration: 'none',
              }}
            >
              Request Your Evaluation
            </a>
          </div>
        </div>
      </section>

      {/* ── DOCTOR BIO ── */}
      <section style={{ background: '#fff', padding: '80px 40px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div className="two-col">
            <div style={{ borderRadius: 8, overflow: 'hidden' }}>
              <img
                src="/images/doctor-raffi.jpg"
                alt="Dr. Raffi Barsoumian — Hair Restoration Surgeon"
                style={{ width: '100%', height: 480, objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
            </div>
            <div>
              <h2 style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(1.5rem, 2.3vw, 2rem)',
                lineHeight: 1.2,
                marginBottom: 20,
              }}>
                Dr. Raffi Barsoumian: Specialist in Hair Loss Evaluation & Treatment Planning
              </h2>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                fontSize: '1rem',
                marginBottom: 20,
                color: '#333',
              }}>
                Verified patient experiences from real consultations and care.
              </p>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: '0.95rem',
                lineHeight: 1.75,
                color: '#444',
                marginBottom: 16,
              }}>
                Dr. Raffi Barsoumian is a double fellowship-trained hair restoration surgeon at Precision Hair Restoration in Philadelphia, PA. With over a decade of experience and more than one million hair follicles transplanted, Dr. Barsoumian brings exceptional expertise to every patient evaluation.
              </p>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: '0.95rem',
                lineHeight: 1.75,
                color: '#444',
                marginBottom: 32,
              }}>
                His patient-first approach means every consultation begins with a thorough assessment of your hair loss pattern, health history, and goals — so the options you&apos;re presented with are genuinely appropriate for your situation.
              </p>
              <a
                href="#evaluation-form"
                style={{
                  display: 'inline-block',
                  background: BLUE,
                  color: '#fff',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  fontSize: '1rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '16px 36px',
                  borderRadius: 50,
                  textDecoration: 'none',
                }}
              >
                Request Your Evaluation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section style={{ background: '#fff', padding: '80px 40px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
            textAlign: 'center',
            marginBottom: 12,
          }}>
            Real Patients. Real Experiences.
          </h2>
          <p style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontSize: '1.1rem',
            textAlign: 'center',
            color: '#555',
            marginBottom: 48,
          }}>
            Verified patient experiences shared after their visit.
          </p>
          <div className="reviews-grid">
            {REVIEWS.map((r) => (
              <ReviewCard key={r.name} name={r.name} text={r.text} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINANCING ── */}
      <section style={{ background: '#000', overflow: 'hidden' }}>
        <div style={{
          maxWidth: 1440,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: 500,
        }}>
          {/* Left: financing info */}
          <div style={{ padding: '80px 60px 60px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(1.5rem, 2.3vw, 2rem)',
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: 20,
            }}>
              Getting Help for Hair Loss Can Be More Affordable Than You Think
            </h2>
            <p style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '1.1rem',
              color: '#fff',
              marginBottom: 16,
            }}>
              Flexible monthly plans built for real patients.
            </p>
            <p style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '1rem',
              color: '#fff',
              marginBottom: 4,
            }}>
              As low as
            </p>
            <p style={{
              fontFamily: '"Lato", sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: GOLD,
              lineHeight: 1.1,
              marginBottom: 20,
            }}>
              $188/mo
            </p>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.3)', paddingTop: 20, marginBottom: 16 }}>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '1rem', color: '#fff', marginBottom: 8 }}>
                Fast, simple payment plans
              </p>
              <p style={{
                fontFamily: 'sans-serif',
                fontSize: '0.72rem',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.6,
              }}>
                The above payment was calculated at 21.90% APR over 60 months. This purchase would have a total cost of $11,453. A down payment in the amount of monthly payment amount is due at the time of purchase. Payment amount rounded up to nearest whole number. 0% APR and other promotional rates subject to eligibility. Payment options through Cherry Technologies, Inc.
              </p>
            </div>
            <a
              href="#evaluation-form"
              style={{
                display: 'inline-block',
                border: '2px solid #e8f1fa',
                color: '#e8f1fa',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                fontSize: '1rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '14px 36px',
                borderRadius: 50,
                textDecoration: 'none',
                alignSelf: 'flex-start',
              }}
            >
              Request Your Evaluation
            </a>
          </div>

          {/* Right: photo */}
          <div style={{ overflow: 'hidden', minHeight: 500 }}>
            <img
              src="/images/financing-hero.jpg"
              alt=""
              aria-hidden="true"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* ── PRACTICE CAPABILITIES ── */}
      <section style={{ background: '#fff', padding: '80px 40px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
            textAlign: 'center',
            marginBottom: 12,
          }}>
            Why Patients Feel Confident Choosing Our Team
          </h2>
          <p style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontSize: '1.1rem',
            textAlign: 'center',
            color: '#333',
            marginBottom: 56,
          }}>
            Real capabilities. Real safety. Real patient-first care.
          </p>

          <div className="practice-cards" style={{ maxWidth: 900, margin: '0 auto' }}>
            {PRACTICE_SECTIONS.map((section) => (
              <div key={section.heading} style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                gap: 32,
                alignItems: 'flex-start',
                padding: '40px 0',
                borderBottom: '1px solid #f0f0f0',
              }}>
                <img
                  src={section.icon}
                  alt={section.heading}
                  style={{ width: 100, height: 100, objectFit: 'contain' }}
                />
                <div>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    fontSize: '1.5rem',
                    marginBottom: 16,
                  }}>
                    {section.heading}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {section.items.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <svg aria-hidden="true" viewBox="0 0 17 17" fill="none" style={{ width: 18, height: 18, marginTop: 3, flexShrink: 0, display: 'block' }}>
                          <path d="M17 8.5C17 13.1943 13.1943 17 8.5 17C3.80566 17 0 13.1943 0 8.5C0 3.80566 3.80566 0 8.5 0C13.1943 0 17 3.80566 17 8.5Z" fill="#15274F"/>
                          <path opacity="0.16" d="M6.3281 12.3344L10.6989 16.7051C14.3187 15.7397 17 12.4417 17 8.5V8.25848L13.5678 5.09472L6.3281 12.3344Z" fill="white"/>
                          <path d="M8.71455 10.404C9.08972 10.7792 9.08972 11.4228 8.71455 11.7986L7.93724 12.5759C7.56207 12.9511 6.91841 12.9511 6.54266 12.5759L3.13738 9.14365C2.76221 8.76848 2.76221 8.12483 3.13738 7.74965L3.91528 6.97176C4.29045 6.59659 4.9341 6.59659 5.30928 6.97176L8.71455 10.404Z" fill="white"/>
                          <path d="M11.6907 4.47803C12.0659 4.10286 12.7096 4.10286 13.0853 4.47803L13.8626 5.25593C14.2378 5.6311 14.2378 6.27476 13.8626 6.64993L7.96362 12.522C7.58845 12.8971 6.94479 12.8971 6.56962 12.522L5.79172 11.7447C5.41655 11.3695 5.41655 10.7258 5.79172 10.3501L11.6907 4.47803Z" fill="white"/>
                        </svg>
                        <span style={{
                          fontFamily: 'sans-serif',
                          fontSize: '0.95rem',
                          color: section.dark ? '#555' : '#222',
                          lineHeight: 1.6,
                        }}>
                          {item.bold && <strong>{item.bold}</strong>}
                          {item.rest}
                          {item.boldAfter && <strong>{item.boldAfter}</strong>}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: '#fff', padding: '80px 40px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <PrecisionFaq />
        </div>
      </section>

      {/* ── BOTTOM CONTACT ── */}
      <section style={{ background: '#000', padding: '80px 40px 0' }} id="contact">
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div className="map-form-grid" style={{ alignItems: 'start', paddingBottom: 60 }}>
            {/* Left: map */}
            <div>
              <p style={{
                color: '#fff',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 12,
              }}>
                Visit Our Practice
              </p>
              <div style={{
                borderRadius: 12,
                overflow: 'hidden',
                marginBottom: 32,
              }}>
                <iframe
                  src="https://maps.google.com/maps?q=Precision+Hair+Restoration+1608+Walnut+St+Philadelphia+PA+19103&output=embed&z=15"
                  width="100%"
                  height="520"
                  style={{ display: 'block', border: 'none' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Precision Hair Restoration Location"
                />
              </div>
              <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="white" style={{ width: 20, height: 20, flexShrink: 0, marginTop: 4, display: 'block' }}>
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <div>
                    <a
                      href={PHONE_HREF}
                      style={{
                        fontFamily: 'sans-serif',
                        fontWeight: 700,
                        fontSize: '1.3rem',
                        color: '#fff',
                        textDecoration: 'none',
                        display: 'block',
                        marginBottom: 4,
                      }}
                    >
                      {PHONE}
                    </a>
                    <p style={{ color: '#fff', fontSize: '0.9rem' }}>Call or text for immediate assistance</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="white" style={{ width: 20, height: 20, flexShrink: 0, marginTop: 4, display: 'block' }}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <div>
                    <p style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: 4 }}>
                      {ADDRESS_LINE1}
                    </p>
                    <p style={{ color: '#fff', fontSize: '0.9rem' }}>{ADDRESS_LINE2}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: bottom form */}
            <div>
              <GhlForm formId={bottomFormId} height={580} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.15)',
          padding: '20px 40px',
          textAlign: 'center',
        }}>
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '0.8rem',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}>
            &copy; 2025 HAIR RESTORATION &nbsp;&bull;&nbsp;
            <a href="https://phillyhairmd.com/privacy-policy" style={{ color: 'inherit', textDecoration: 'underline' }}>PRIVACY POLICY</a>
            &nbsp;&bull;&nbsp;
            <a href="https://phillyhairmd.com/hipaa-policy" style={{ color: 'inherit', textDecoration: 'underline' }}>HIPAA POLICY</a>
          </p>
        </div>
      </section>
    </>
  )
}
