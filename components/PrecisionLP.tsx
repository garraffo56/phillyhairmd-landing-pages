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
                <img
                  src="/images/trust-check.png"
                  alt=""
                  style={{ width: 40, height: 40, flexShrink: 0, marginTop: 2 }}
                />
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
                        <img
                          src="/images/practice-check.png"
                          alt=""
                          style={{ width: 18, height: 18, marginTop: 3, flexShrink: 0 }}
                        />
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
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
            marginBottom: 40,
          }}>
            Frequently Asked Questions
          </h2>
          <PrecisionFaq />
        </div>
      </section>

      {/* ── BOTTOM CONTACT ── */}
      <section style={{ background: '#000', padding: '80px 40px 0' }} id="contact">
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div className="map-form-grid" style={{ alignItems: 'start', paddingBottom: 60 }}>
            {/* Left: map */}
            <div>
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
                <div>
                  <p style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: 4 }}>
                    {ADDRESS_LINE1}
                  </p>
                  <p style={{ color: '#fff', fontSize: '0.9rem' }}>{ADDRESS_LINE2}</p>
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
