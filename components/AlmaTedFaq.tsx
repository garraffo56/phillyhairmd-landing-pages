'use client'
import { useState } from 'react'

const NAVY = '#15274f'

const faqs = [
  {
    q: 'What is Alma TED?',
    a: 'Alma TED is a non-surgical, in-office device that uses ultrasound energy and air pressure to support scalp health and hair. It is designed for use alongside a topical solution applied during the session. The Alma TED device has received FDA clearance. It does not involve needles, incisions, or surgical recovery.',
  },
  {
    q: 'Who may be a candidate for Alma TED?',
    a: 'Candidacy depends on your hair loss type, scalp condition, health history, and goals. Alma TED is generally considered for individuals experiencing certain types of hair thinning. A clinical evaluation is required to determine whether this approach is appropriate for your specific situation. Your provider will explain your options during the consultation.',
  },
  {
    q: 'What can I expect during and after a session?',
    a: 'Sessions typically take approximately 20 to 30 minutes. The treatment is designed to be comfortable — most patients describe a mild warming sensation. There is no required recovery time, and most patients resume normal activities immediately after. Your provider will outline what to expect based on your individual plan.',
  },
  {
    q: 'Is Alma TED safe?',
    a: 'The Alma TED device has received FDA clearance for its intended use. As with any medical treatment, your provider will review your health history to confirm this approach is appropriate for you. Individual responses vary, and your provider will discuss what to expect before beginning any treatment plan.',
  },
]

export default function AlmaTedFaq() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {faqs.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            style={{
              width: '100%',
              background: NAVY,
              border: 'none',
              borderRadius: 50,
              padding: '20px 32px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              textAlign: 'left',
              gap: 16,
            }}
          >
            <span style={{ color: '#fff', fontSize: '1rem', fontWeight: 500, fontFamily: 'Poppins, sans-serif', lineHeight: 1.4 }}>
              {item.q}
            </span>
            <span style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 300, flexShrink: 0, lineHeight: 1, minWidth: 20, textAlign: 'center' }}>
              {open === i ? '−' : '+'}
            </span>
          </button>
          {open === i && (
            <div style={{ padding: '20px 32px 8px', color: '#444', lineHeight: 1.75, fontSize: '0.95rem' }}>
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
