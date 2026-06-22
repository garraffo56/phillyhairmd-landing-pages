import type { Metadata } from 'next'
import PrecisionLP from '@/components/PrecisionLP'

export const metadata: Metadata = {
  title: 'Hair Loss Evaluation | Precision Hair Restoration Philadelphia',
  description: 'Schedule your hair loss evaluation at Precision Hair Restoration in Philadelphia. Dr. Raffi Barsoumian, double fellowship-trained surgeon. Personalized care plans.',
  robots: 'index, follow',
  openGraph: {
    title: 'Hair Loss Evaluation | Precision Hair Restoration Philadelphia',
    description: 'Discover the cause of hair loss and explore your options with a board-certified hair restoration specialist.',
    url: 'https://more.phillyhairmd.com/hair-restoration-google',
    images: [{ url: 'https://phillyhairmd.com/wp-content/uploads/phillyhairmd-og.png', width: 1200, height: 630 }],
  },
}

export default function HairRestorationGoogle() {
  return (
    <PrecisionLP
      heroFormId="0CikkitkuxraQeuF59Ia"
      bottomFormId="3EQzlbCsAi3pImhG1pVH"
    />
  )
}
