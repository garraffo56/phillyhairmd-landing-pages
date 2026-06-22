import type { Metadata } from 'next'
import PrecisionLP from '@/components/PrecisionLP'
import AlmaTedFaq from '@/components/AlmaTedFaq'

export const metadata: Metadata = {
  title: 'Alma TED Hair Restoration Evaluation | Precision',
  robots: 'noindex, nofollow',
}

const ALMA_STEPS = [
  { icon: '/images/step-schedule.png', title: 'Schedule Your Evaluation', sub: 'Book a time that works for you. A clinician will review history and goals.' },
  { icon: '/images/step-assessment.png', title: 'Clinician Assessment', sub: 'Your provider evaluates the scalp, hair pattern, and overall candidacy for Alma TED.' },
  { icon: '/images/step-goals.png', title: 'Personalized Plan', sub: 'If appropriate, your provider outlines a treatment plan built around evaluated needs.' },
]

const ALMA_TRUST = [
  { title: 'Non-Surgical Approach', body: 'No incisions, no needles, no cutting — a comfortable in-office session with no surgical recovery.' },
  { title: 'No Downtime Required', body: 'Return to normal activities the same day. No recovery period needed.' },
  { title: 'Clinically Studied', body: 'Alma TED has been evaluated in peer-reviewed clinical research on scalp and hair health.' },
  { title: 'FDA-Cleared Device', body: 'The Alma TED device has received FDA clearance. Device clearance applies to the technology, not a guarantee of specific individual results.' },
  { title: 'Comfortable In-Office Session', body: 'The treatment is designed to be comfortable. Most patients describe the session as relaxing.' },
  { title: 'Personalized Treatment Plan', body: 'Your provider develops a plan based on evaluation findings, hair pattern, and goals.' },
]

export default function CAlmaTed() {
  return (
    <PrecisionLP
      heroFormId="lr4xEv4lKwOuEr9yynNh"
      bottomFormId="GophqcvGTVaYmSnWd4Ph"
      h1="Non-Surgical Hair Restoration with Alma TED at Precision"
      subheading="A comfortable, in-office approach to scalp and hair health — no needles, no downtime."
      bodyText="Schedule a consultation to explore whether Alma TED may be an appropriate option based on evaluation findings."
      stepsHeading="How It Works"
      stepsSubheading="Three straightforward steps — starting with a conversation about your goals."
      steps={ALMA_STEPS}
      trustHeading="Why Patients Consider Alma TED"
      trustSubheading="A non-surgical option for appropriate candidates — evaluated by your provider."
      trustItems={ALMA_TRUST}
      faq={<AlmaTedFaq />}
    />
  )
}
