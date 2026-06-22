'use client'
import { useState } from 'react'

const NAVY = '#15274f'
const BLUE = '#003cb5'
const PREVIEW = 165

export default function ReviewCard({ name, text }: { name: string; text: string }) {
  const [open, setOpen] = useState(false)
  const short = text.length > PREVIEW
    ? text.slice(0, PREVIEW).replace(/\s+\S*$/, '') + '…'
    : text

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Quote mark sits above the card, lower portion overlapping into card top */}
      <img
        src="/images/quote-mark.png"
        alt=""
        aria-hidden="true"
        style={{
          width: 67,
          height: 48,
          objectFit: 'fill',
          marginBottom: -24,
          position: 'relative',
          zIndex: 2,
        }}
      />
      <div style={{
        background: '#eeeeee',
        borderRadius: 8,
        paddingTop: 36,
        paddingBottom: 28,
        paddingLeft: 24,
        paddingRight: 24,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
      }}>
        <div style={{ color: NAVY, fontSize: '1rem', letterSpacing: 3, marginBottom: 16 }}>★★★★★</div>
        <p style={{ color: '#444', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: 20, flex: 1 }}>
          {open ? text : short}
        </p>
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: BLUE, color: '#fff', fontWeight: 700,
            fontSize: '0.78rem', letterSpacing: '0.06em',
            padding: '10px 24px', borderRadius: 24, border: 'none',
            cursor: 'pointer', marginBottom: 16, fontFamily: 'inherit',
            textTransform: 'uppercase',
          }}
        >
          {open ? 'READ LESS' : 'READ MORE'}
        </button>
        <p style={{ color: NAVY, fontWeight: 700, fontSize: '0.9rem', fontFamily: 'Poppins, sans-serif' }}>{name}</p>
      </div>
    </div>
  )
}
