'use client'
import { useState } from 'react'

const NAVY = '#15274f'
const BLUE = '#003cb5'

const faqs = [
  {
    q: 'What is alopecia, and are there different types?',
    a: 'Alopecia is the medical term for hair loss. There are several types, including androgenetic alopecia (pattern hair loss), alopecia areata, and hair loss caused by hormonal changes, nutritional deficiencies, or scalp conditions. A medical evaluation is the only way to determine which type you have and what options may be appropriate for your situation.',
  },
  {
    q: 'Is hair loss always permanent?',
    a: 'Not always. Some forms of hair loss are temporary and may resolve with treatment of the underlying cause. Others are progressive over time. Determining whether hair loss is permanent requires a clinical assessment. Your evaluation will clarify what type of hair loss you have and what your options are.',
  },
  {
    q: 'How is hair loss typically evaluated by a medical professional?',
    a: 'A hair loss evaluation generally includes a review of your health history, an examination of your scalp and hair density, and an assessment of your hair loss pattern. Your provider will discuss your goals and explain what findings may indicate about cause and appropriate next steps.',
  },
  {
    q: 'Are there non-surgical options that may be discussed during a consultation?',
    a: 'Yes. Depending on the type and cause of hair loss, a care plan may include non-surgical approaches. What is appropriate depends entirely on your evaluation findings, goals, and overall health. Your provider will explain all options suitable for your situation during the consultation.',
  },
]

export default function PrecisionFaq() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const allOpen = openItems.size === faqs.length

  const toggleItem = (i: number) => {
    const next = new Set(openItems)
    if (next.has(i)) next.delete(i)
    else next.add(i)
    setOpenItems(next)
  }

  const toggleAll = () => {
    if (allOpen) setOpenItems(new Set())
    else setOpenItems(new Set(faqs.map((_, i) => i)))
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 40 }}>
        <h2 style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 600,
          fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
        }}>
          Frequently Asked Questions
        </h2>
        <button
          onClick={toggleAll}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: BLUE,
            fontSize: '0.88rem',
            fontFamily: 'Poppins, sans-serif',
            textDecoration: 'underline',
            padding: 0,
            whiteSpace: 'nowrap',
            flexShrink: 0,
            marginLeft: 24,
          }}
        >
          {allOpen ? 'Collapse All' : 'Expand All'}
        </button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {faqs.map((item, i) => (
          <div key={i}>
            <button
              onClick={() => toggleItem(i)}
              aria-expanded={openItems.has(i)}
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
                {openItems.has(i) ? '−' : '+'}
              </span>
            </button>
            {openItems.has(i) && (
              <div style={{ padding: '20px 32px 8px', color: '#444', lineHeight: 1.75, fontSize: '0.95rem' }}>
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
