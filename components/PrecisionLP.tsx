'use client'
import { Suspense } from 'react'
import GhlForm from '@/components/GhlForm'
import GclidCapture from '@/components/GclidCapture'
import ReviewCard from '@/components/ReviewCard'
import PrecisionFaq from '@/components/PrecisionFaq'

const PHONE = '(267) 214-5624'
const PHONE_HREF = 'tel:+12672145624'
const ADDRESS_LINE1 = '1608 Walnut St, Suite 1701'
const ADDRESS_LINE2 = 'Philadelphia, PA 19103'
const LOGO = 'https://phillyhairmd.com/wp-content/uploads/2026/05/Logo-Color-1-1-1.png'

const BLUE = '#164996'
const NAVY = '#15274f'
const GOLD = '#fdc700'
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
  { title: 'Start with a Free Consultation', body: 'Get answers, options, and a personalized plan  -  no pressure.' },
]

const CapabilitiesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="92" height="151" viewBox="0 0 92 151" fill="none" style={{ width: 92, height: 'auto', maxHeight: 100 }}>
    <g clipPath="url(#cap-icon)">
      <path fillRule="evenodd" clipRule="evenodd" d="M54.2555 99.6724C55.5987 98.3103 57.7821 98.3103 59.1253 99.66C60.4808 101.01 60.4808 103.198 59.1376 104.554C54.5499 109.207 49.9989 113.891 45.3867 118.52C44.0435 119.876 41.86 119.876 40.5045 118.52L32.8624 110.834C31.5069 109.478 31.5069 107.284 32.8624 105.928C34.2056 104.572 36.3891 104.572 37.7445 105.928L42.9333 111.155L54.2555 99.6724ZM70.3309 109.09C70.3309 95.5861 59.432 84.6402 46 84.6402C32.568 84.6402 21.6691 95.5861 21.6691 109.09C21.6691 122.594 32.5557 133.54 46 133.54C59.4443 133.54 70.3309 122.594 70.3309 109.09ZM80.7944 100.745L87.7067 103.42V114.76L80.7944 117.435C79.9112 121.133 78.4576 124.671 76.4765 127.906L79.4819 134.711L71.4963 142.735L64.7251 139.715C61.5051 141.712 57.9907 143.179 54.2984 144.06L51.6427 151.006H40.3573L37.7016 144.06C34.0093 143.179 30.4949 141.712 27.2749 139.721L20.5037 142.741L12.5181 134.723L15.5357 127.919C13.5424 124.677 12.0827 121.145 11.2056 117.441L4.3056 114.766V103.426L11.2056 100.751C12.0888 97.053 13.5424 93.5153 15.5357 90.2795L12.5181 83.4753L20.5037 75.4569L27.2749 78.4769C30.4949 76.48 34.0093 75.0131 37.7016 74.1318L40.3573 67.1858H51.6427L54.3107 74.1318C57.9907 75.0131 61.5051 76.48 64.7251 78.4769L71.4963 75.4569L79.4819 83.4753L76.4765 90.2795C78.4576 93.5214 79.9112 97.053 80.7944 100.757V100.745Z" fill="#164996"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.2368 91.5861H0C2.47787 68.2643 22.1168 50.095 46 50.095C69.8832 50.095 89.5099 68.2643 92 91.5861H82.7632C82.5056 91.0499 82.2419 90.5199 81.9597 89.9898L85.3331 82.372L72.5819 69.5648L65.0072 72.9484C62.7563 71.7589 60.4195 70.7789 57.9907 70.027L55.016 62.249H36.984L34.0093 70.027C31.5805 70.7789 29.2437 71.7527 26.9928 72.9484L19.4181 69.5648L6.66693 82.372L10.0403 89.9898C9.75813 90.5137 9.50667 91.0437 9.24907 91.58M46 47.0134C58.9168 47.0134 69.3864 36.4865 69.3864 23.5067C69.3864 10.5269 58.9168 0 46 0C33.0832 0 22.6013 10.5207 22.6013 23.5067C22.6013 36.4927 33.0771 47.0134 46 47.0134Z" fill="black"/>
    </g>
    <defs><clipPath id="cap-icon"><rect width="92" height="151" fill="white"/></clipPath></defs>
  </svg>
)

const SafetyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="139" height="155" viewBox="0 0 139 155" fill="none" style={{ width: 92, height: 'auto', maxHeight: 100 }}>
    <g clipPath="url(#saf-icon)">
      <path fillRule="evenodd" clipRule="evenodd" d="M89.8651 15.9585V0.245417C90.1754 0.381042 90.447 0.574792 90.6862 0.820208L106.429 16.5398C106.674 16.7917 106.862 17.0629 107.011 17.36H91.281C90.4987 17.36 89.8651 16.7335 89.8651 15.9585ZM16.5248 77.0802C15.096 77.0802 13.9388 78.2363 13.9388 79.6635C13.9388 81.0908 15.096 82.2469 16.5248 82.2469H74.5622C75.991 82.2469 77.1482 81.0908 77.1482 79.6635C77.1482 78.2363 75.991 77.0802 74.5622 77.0802H16.5248ZM16.5248 38.3238C15.096 38.3238 13.9388 39.4798 13.9388 40.9071C13.9388 42.3344 15.096 43.4904 16.5248 43.4904H90.725C92.1538 43.4904 93.311 42.3344 93.311 40.9071C93.311 39.4798 92.1538 38.3238 90.725 38.3238H16.5248ZM16.5248 51.2469C15.096 51.2469 13.9388 52.4029 13.9388 53.8302C13.9388 55.2575 15.096 56.4135 16.5248 56.4135H90.725C92.1538 56.4135 93.311 55.2575 93.311 53.8302C93.311 52.4029 92.1538 51.2469 90.725 51.2469H16.5248ZM16.5248 64.1635C15.096 64.1635 13.9388 65.3196 13.9388 66.7469C13.9388 68.1742 15.096 69.3302 16.5248 69.3302H90.725C92.1538 69.3302 93.311 68.1742 93.311 66.7469C93.311 65.3196 92.1538 64.1635 90.725 64.1635H16.5248ZM65.0973 114.539C66.526 114.539 67.6833 113.383 67.6833 111.955C67.6833 110.528 66.526 109.372 65.0973 109.372H16.5248C15.096 109.372 13.9388 110.528 13.9388 111.955C13.9388 113.383 15.096 114.539 16.5248 114.539H65.0973ZM25.2269 22.1779C23.7981 22.1779 22.6408 23.334 22.6408 24.7613C22.6408 26.1885 23.7981 27.3446 25.2269 27.3446H82.0229C83.4517 27.3446 84.609 26.1885 84.609 24.7613C84.609 23.334 83.4517 22.1779 82.0229 22.1779H25.2269ZM65.233 98.3927C66.6618 98.3927 67.8191 97.2367 67.8191 95.8094C67.8191 94.3821 66.6618 93.2261 65.233 93.2261H16.5248C15.096 93.2261 13.9388 94.3821 13.9388 95.8094C13.9388 97.2367 15.096 98.3927 16.5248 98.3927H65.2266H65.233ZM71.2391 118.717C70.5667 124.368 73.6377 129.199 78.8098 131.408L75.338 138.861H2.7994C1.24777 138.861 0 137.601 0 136.058V2.80292C0 1.25938 1.25423 0 2.7994 0H84.693V15.9585C84.693 19.5817 87.6411 22.5267 91.281 22.5267H107.256V68.6004C104.334 68.3163 101.328 69.1106 98.8387 70.9771C93.13 75.246 95.5932 74.3483 88.4816 74.7423C83.0638 75.0458 78.5964 78.7917 77.3551 84.0617C75.7259 90.9979 77.0448 88.7181 71.8468 93.5942C67.9031 97.2948 66.8881 103.049 69.3254 107.874C72.5451 114.229 72.086 111.645 71.2391 118.717Z" fill="black"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M136.789 97.3595C130.847 91.7924 131.643 93.1551 129.787 85.2372C129.076 82.1953 126.529 80.0705 123.419 79.8961C115.286 79.444 116.766 79.9801 110.25 75.1105C107.741 73.2376 104.431 73.2376 101.942 75.1105C95.4251 79.9865 96.8927 79.444 88.766 79.8961C85.6434 80.0705 83.1091 82.1953 82.3979 85.2372C80.536 93.1551 81.3312 91.7924 75.3962 97.3595C73.1205 99.4972 72.5386 102.752 73.9545 105.542C77.6202 112.801 77.3486 111.251 76.3789 119.324C76.0168 122.424 77.6719 125.292 80.5424 126.519C88.029 129.722 86.82 128.708 91.2745 135.515C92.9878 138.131 96.0975 139.261 99.0844 138.357C106.881 136.006 105.304 136.006 113.107 138.357C116.094 139.261 119.21 138.131 120.917 135.515C125.378 128.708 124.163 129.716 131.649 126.519C134.52 125.292 136.175 122.424 135.8 119.324C134.895 111.762 134.643 112.646 138.237 105.542C139.653 102.752 139.071 99.4972 136.795 97.3595M106.08 125.421C95.451 125.421 86.833 116.812 86.833 106.188C86.833 95.564 95.451 86.9551 106.08 86.9551C116.708 86.9551 125.339 95.5705 125.339 106.188C125.339 116.805 116.721 125.421 106.08 125.421ZM116.857 98.7609C117.827 99.8136 117.749 101.448 116.695 102.403L104.237 113.693C103.241 114.719 101.573 114.713 100.558 113.705L95.3863 108.539C94.3778 107.531 94.3778 105.897 95.3863 104.883C96.3949 103.869 98.037 103.876 99.052 104.883L102.485 108.313L113.217 98.5865C114.271 97.6242 115.9 97.7017 116.851 98.7545M98.0823 143.788L93.033 154.645C92.8197 155.097 92.1861 155.129 91.9404 154.697L87.1562 146.488L77.7947 148.122C77.2969 148.206 76.909 147.709 77.1224 147.25L83.5487 133.455C84.1564 133.804 86.4063 137.524 86.9429 138.35C89.419 142.154 93.7054 144.169 98.0823 143.788ZM135.056 147.25C135.257 147.702 134.882 148.206 134.384 148.122L125.022 146.488L120.238 154.697C119.999 155.129 119.365 155.097 119.146 154.645L114.083 143.788C118.46 144.169 122.747 142.148 125.236 138.35C125.772 137.53 128.022 133.804 128.617 133.455L135.056 147.25Z" fill="#164996"/>
    </g>
    <defs><clipPath id="saf-icon"><rect width="139" height="155" fill="white"/></clipPath></defs>
  </svg>
)

const PatientFirstIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="155" height="155" viewBox="0 0 155 155" fill="none" style={{ width: 92, height: 'auto', maxHeight: 100 }}>
    <g clipPath="url(#pat-icon)">
      <path fillRule="evenodd" clipRule="evenodd" d="M28.6092 137.556C31.1352 113.947 51.0942 95.5665 75.3396 95.5665C86.726 95.5665 97.1636 99.6213 105.298 106.362L103.145 108.386C99.7681 111.557 98.8978 116.509 100.985 120.649L102.719 124.081L102.261 127.9C101.803 131.739 103.465 135.394 106.489 137.562H28.6092V137.556ZM129.484 107.358C123.195 107.358 118.098 112.46 118.098 118.756C118.098 125.051 123.195 130.154 129.484 130.154C135.773 130.154 140.871 125.051 140.871 118.756C140.871 112.46 135.773 107.358 129.484 107.358ZM132.566 95.6844C137.396 99.3004 136.303 98.9008 142.323 99.2414C144.633 99.3724 146.518 100.951 147.042 103.205C148.416 109.087 147.833 108.072 152.231 112.205C153.919 113.79 154.345 116.207 153.304 118.284C150.582 123.675 150.785 122.522 151.505 128.516C151.779 130.815 150.556 132.944 148.422 133.855C142.88 136.233 143.77 135.486 140.471 140.536C139.202 142.475 136.898 143.314 134.68 142.646C128.908 140.897 130.073 140.897 124.295 142.646C122.076 143.314 119.773 142.475 118.503 140.536C115.199 135.486 116.095 136.233 110.553 133.855C108.426 132.944 107.195 130.815 107.47 128.516C108.184 122.522 108.386 123.669 105.664 118.284C104.617 116.214 105.043 113.797 106.737 112.205C111.135 108.072 110.553 109.087 111.927 103.205C112.457 100.945 114.335 99.3659 116.645 99.2414C122.665 98.9073 121.573 99.3069 126.402 95.6844C128.26 94.2957 130.708 94.2957 132.566 95.6844ZM122.888 148.109L119.806 154.731C119.734 154.889 119.583 154.987 119.413 154.993C119.236 155 119.086 154.915 118.994 154.764L115.454 148.666L108.511 149.877C108.341 149.91 108.177 149.845 108.066 149.707C107.961 149.57 107.942 149.393 108.013 149.236L112.136 140.373C114.885 144.578 117.057 148.168 122.881 148.102L122.888 148.109ZM136.08 148.109C141.905 148.168 144.077 144.578 146.826 140.379L150.948 149.242C151.02 149.399 151.001 149.576 150.896 149.714C150.791 149.851 150.628 149.917 150.458 149.884L143.521 148.672L139.981 154.771C139.896 154.921 139.739 155.007 139.562 155C139.385 154.993 139.241 154.895 139.169 154.738L136.087 148.115L136.08 148.109ZM75.3461 44.7078C88.4733 44.7078 99.1137 55.359 99.1137 68.4995C99.1137 81.64 88.4733 92.2912 75.3461 92.2912C62.2189 92.2912 51.5785 81.64 51.5785 68.4995C51.5785 55.359 62.2189 44.7078 75.3461 44.7078Z" fill="black"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M17.9433 51.3108L21.2677 61.6279C21.3986 62.0406 21.7716 62.3092 22.2035 62.3092L33.0337 62.2895C33.4656 62.2895 33.8321 62.5581 33.9695 62.9708C34.1069 63.3835 33.9629 63.8158 33.6096 64.0713L24.8341 70.4254C24.4808 70.6808 24.3433 71.1132 24.4742 71.5259L27.8378 81.8299C27.9752 82.2426 27.8378 82.675 27.4844 82.9304C27.1311 83.1859 26.6795 83.1859 26.3261 82.9304L17.5769 76.5436C17.2235 76.2881 16.772 76.2881 16.4186 76.5436L7.66934 82.9304C7.32251 83.1859 6.86444 83.1859 6.51761 82.9304C6.16424 82.675 6.02681 82.2426 6.16424 81.8299L9.52783 71.5259C9.66525 71.1132 9.52128 70.6808 9.16791 70.4254L0.405559 64.0648C0.0521857 63.8093 -0.0852372 63.3769 0.0456418 62.9643C0.176521 62.5516 0.549526 62.283 0.981427 62.283L11.8117 62.3026C12.2436 62.3026 12.6166 62.0341 12.7474 61.6214L16.0718 51.3042C16.2027 50.8915 16.5691 50.6229 17.0076 50.6229C17.446 50.6229 17.8059 50.8915 17.9433 51.3042M136.867 48.0355L140.191 58.3526C140.322 58.7653 140.695 59.0339 141.127 59.0339L151.957 59.0142C152.389 59.0142 152.755 59.2828 152.893 59.6955C153.03 60.1082 152.886 60.5405 152.533 60.796L143.757 67.1501C143.404 67.4056 143.267 67.8379 143.397 68.2506L146.768 78.5546C146.898 78.9673 146.761 79.3997 146.408 79.6552C146.054 79.9106 145.603 79.9106 145.256 79.6552L136.507 73.2683C136.153 73.0129 135.702 73.0129 135.348 73.2683L126.599 79.6552C126.246 79.9106 125.794 79.9106 125.441 79.6552C125.087 79.3997 124.95 78.9673 125.087 78.5546L128.451 68.2506C128.588 67.8379 128.451 67.4056 128.091 67.1501L119.316 60.796C118.962 60.5405 118.825 60.1082 118.956 59.6955C119.093 59.2828 119.46 59.0142 119.892 59.0142L130.722 59.0339C131.154 59.0339 131.52 58.7653 131.658 58.3526L134.982 48.0355C135.113 47.6228 135.486 47.3542 135.918 47.3542C136.35 47.3542 136.716 47.6228 136.853 48.0355M77.4082 0.681261L81.7272 14.0707C81.8581 14.4833 82.2311 14.7519 82.663 14.7519L96.7194 14.7257C97.1513 14.7257 97.5178 14.9943 97.6552 15.407C97.7861 15.8197 97.6487 16.252 97.2953 16.5075L85.9088 24.7547C85.5554 25.0101 85.418 25.4425 85.5489 25.8552L89.9203 39.2249C90.0577 39.6376 89.9202 40.0699 89.5669 40.3254C89.2135 40.5809 88.762 40.5809 88.4086 40.3254L77.0548 32.0324C76.7015 31.7769 76.2499 31.7769 75.8966 32.0324L64.5428 40.3254C64.196 40.5809 63.7379 40.5809 63.3911 40.3254C63.0377 40.0699 62.9003 39.6376 63.0312 39.2249L67.4025 25.8552C67.5399 25.4425 67.4025 25.0101 67.0426 24.7547L55.6561 16.5075C55.3028 16.252 55.1653 15.8197 55.2962 15.407C55.4271 14.9943 55.8001 14.7257 56.232 14.7257L70.2884 14.7519C70.7203 14.7519 71.0933 14.4833 71.2242 14.0707L75.5432 0.681261C75.6741 0.268574 76.0405 0 76.479 0C76.9174 0 77.2773 0.268574 77.4148 0.681261" fill="#164996"/>
    </g>
    <defs><clipPath id="pat-icon"><rect width="155" height="155" fill="white"/></clipPath></defs>
  </svg>
)

const PRACTICE_SECTIONS = [
  {
    icon: <CapabilitiesIcon />,
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
    icon: <SafetyIcon />,
    heading: 'Safety & Surgical Standards',
    items: [
      { bold: 'Evidence-based approaches', rest: ' reviewed by licensed medical providers' },
      { bold: 'Clean, professional clinical environment', rest: ' with medical-grade protocols' },
      { bold: 'Clear discussions', rest: ' about expectations and next steps in your care plan' },
    ],
    dark: true,
  },
  {
    icon: <PatientFirstIcon />,
    heading: 'Patient-First Philosophy',
    items: [
      { bold: 'Honest assessments -', rest: ' we provide recommendations only when appropriate' },
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
    text: "I was nervous going in, but Dr. Barsoumian took the time to explain exactly what was happening with my hair loss and what options made sense for me. No pressure at all  -  just honest answers. I finally feel like I understand what I'm dealing with and have a clear plan moving forward.",
  },
  {
    name: 'David R.',
    text: "The evaluation process was thorough and professional. I appreciated that they didn't push any particular treatment  -  they laid out the options and let me decide. The whole team was welcoming from the moment I walked in. I've already recommended Precision to two friends.",
  },
  {
    name: 'James L.',
    text: "After years of putting it off, I finally made the call and I'm so glad I did. The consultation was detailed, the doctor was knowledgeable, and the staff was great throughout. I left with a real understanding of my situation and a personalized plan I actually feel good about.",
  },
]

const StepIconSchedule = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="106" height="119" viewBox="0 0 106 119" fill="none">
    <g clipPath="url(#step-sched)">
      <path d="M90.9953 75.52C94.906 76.8872 98.3159 79.3037 100.899 82.4312C104.086 86.2969 106 91.2427 106 96.6294C106 102.016 104.161 106.784 101.081 110.612C96.9643 115.726 90.6454 119 83.5479 119C77.2119 119 71.4865 116.385 67.4078 112.178C65.4799 110.195 63.9156 107.854 62.8316 105.267C61.7167 102.607 61.0992 99.6919 61.0992 96.6294C61.0992 85.1348 69.8056 75.6567 81.0128 74.4023C81.843 74.3101 82.6903 74.2588 83.5513 74.2588C86.1653 74.2588 88.6661 74.6997 90.9988 75.52H90.9953Z" fill="white"/>
      <path d="M57.0479 83.9009C57.8197 83.9009 58.4818 84.3999 58.7219 85.0938C57.0719 88.5938 56.156 92.5005 56.156 96.6226H47.8201C46.8458 96.6226 46.0534 95.8364 46.0534 94.8623V85.668C46.0534 84.6973 46.8424 83.9043 47.8201 83.9043H57.0479V83.9009Z" fill="white"/>
      <path d="M41.3297 85.6646V94.8589C41.3297 95.8296 40.5407 96.6191 39.5596 96.6191H30.3352C29.361 96.6191 28.5651 95.833 28.5651 94.8589V85.6646C28.5651 84.6938 29.361 83.9009 30.3352 83.9009H39.5596C40.5407 83.9009 41.3297 84.6938 41.3297 85.6646Z" fill="white"/>
      <path d="M23.8414 85.6646V94.8589C23.8414 95.8296 23.0524 96.6191 22.0748 96.6191H12.8469C11.8727 96.6191 11.0803 95.833 11.0803 94.8589V85.6646C11.0803 84.6938 11.8693 83.9009 12.8469 83.9009H22.0748C23.049 83.9009 23.8414 84.6938 23.8414 85.6646Z" fill="white"/>
      <path d="M81.0231 69.4497V66.0112C81.0231 65.0405 81.8121 64.251 82.7898 64.251H92.0176C92.9918 64.251 93.7877 65.0371 93.7877 66.0112V71.3057C90.6283 70.0342 87.167 69.3335 83.5479 69.3335C82.6937 69.3335 81.8533 69.3745 81.0197 69.4497H81.0231Z" fill="white"/>
      <path d="M76.2994 66.0112V70.3008C71.8742 71.5039 67.9017 73.7905 64.6703 76.853C64.0082 76.6035 63.5314 75.9609 63.5314 75.209V66.0146C63.5314 65.0439 64.3272 64.2544 65.3015 64.2544H74.5259C75.507 64.2544 76.296 65.0405 76.296 66.0146L76.2994 66.0112Z" fill="white"/>
      <path d="M58.818 66.0112V75.2056C58.818 76.1763 58.0221 76.9692 57.0479 76.9692H47.8201C46.8458 76.9692 46.0534 76.1763 46.0534 75.2056V66.0112C46.0534 65.0405 46.8424 64.251 47.8201 64.251H57.0479C58.0221 64.251 58.818 65.0371 58.818 66.0112Z" fill="white"/>
      <path d="M41.3297 66.0112V75.2056C41.3297 76.1763 40.5407 76.9692 39.5596 76.9692H30.3352C29.361 76.9692 28.5651 76.1763 28.5651 75.2056V66.0112C28.5651 65.0405 29.361 64.251 30.3352 64.251H39.5596C40.5407 64.251 41.3297 65.0371 41.3297 66.0112Z" fill="white"/>
      <path d="M22.0748 64.251H12.8469C11.8712 64.251 11.0803 65.0391 11.0803 66.0112V75.209C11.0803 76.1811 11.8712 76.9692 12.8469 76.9692H22.0748C23.0505 76.9692 23.8414 76.1811 23.8414 75.209V66.0112C23.8414 65.0391 23.0505 64.251 22.0748 64.251Z" fill="white"/>
      <path d="M93.7877 46.3647V55.5557C93.7877 56.5264 92.9918 57.3193 92.0176 57.3193H82.7898C81.8155 57.3193 81.0231 56.5264 81.0231 55.5557V46.3647C81.0231 45.3872 81.8121 44.6011 82.7898 44.6011H92.0176C92.9918 44.6011 93.7877 45.3872 93.7877 46.3647Z" fill="white"/>
      <path d="M76.2994 46.3647V55.5557C76.2994 56.5264 75.5104 57.3193 74.5293 57.3193H65.3049C64.3307 57.3193 63.5348 56.5264 63.5348 55.5557V46.3647C63.5348 45.3872 64.3307 44.6011 65.3049 44.6011H74.5293C75.5104 44.6011 76.2994 45.3872 76.2994 46.3647Z" fill="white"/>
      <path d="M58.818 46.3647V55.5557C58.818 56.5264 58.0221 57.3193 57.0479 57.3193H47.8201C46.8458 57.3193 46.0534 56.5264 46.0534 55.5557V46.3647C46.0534 45.3872 46.8424 44.6011 47.8201 44.6011H57.0479C58.0221 44.6011 58.818 45.3872 58.818 46.3647Z" fill="white"/>
      <path d="M41.3297 46.3647V55.5557C41.3297 56.5264 40.5407 57.3193 39.5596 57.3193H30.3352C29.361 57.3193 28.5651 56.5264 28.5651 55.5557V46.3647C28.5651 45.3872 29.361 44.6011 30.3352 44.6011H39.5596C40.5407 44.6011 41.3297 45.3872 41.3297 46.3647Z" fill="white"/>
      <path d="M23.8414 46.3647V55.5557C23.8414 56.5264 23.0524 57.3193 22.0748 57.3193H12.8469C11.8727 57.3193 11.0803 56.5264 11.0803 55.5557V46.3647C11.0803 45.3872 11.8693 44.6011 12.8469 44.6011H22.0748C23.049 44.6011 23.8414 45.3872 23.8414 46.3647Z" fill="white"/>
      <path d="M85.6164 5.33545V9.50195H74.9067V5.33545C74.9067 2.38574 77.3045 0 80.2616 0C81.7435 0 83.0779 0.594727 84.0487 1.56201C85.0195 2.5293 85.6164 3.85889 85.6164 5.33545Z" fill="white"/>
      <path d="M85.6164 9.50195V18.71C85.6164 21.6563 83.2186 24.0454 80.2616 24.0454C77.3045 24.0454 74.9067 21.6563 74.9067 18.71V9.50195H85.6164Z" fill="white"/>
      <path d="M30.3009 5.33545V9.50195H19.5911V5.33545C19.5911 2.38574 21.989 0 24.946 0C26.428 0 27.7624 0.594727 28.7332 1.56201C29.704 2.5293 30.3009 3.85889 30.3009 5.33545Z" fill="white"/>
      <path d="M30.3009 9.50195V18.71C30.3009 21.6563 27.903 24.0454 24.946 24.0454C21.989 24.0454 19.5911 21.6563 19.5911 18.71V9.50195H30.3009Z" fill="white"/>
      <path d="M57.3601 104.675C58.0702 106.965 59.0684 109.125 60.3171 111.111H10.7509C4.81631 111.111 0 106.312 0 100.399V20.207C0 14.2939 4.81631 9.50195 10.7509 9.50195H14.9429V18.71C14.9429 24.2061 19.4265 28.6768 24.946 28.6768C30.4656 28.6768 34.9491 24.2095 34.9491 18.71V9.50195H70.2619V18.71C70.2619 24.2061 74.7523 28.6768 80.265 28.6768C85.7777 28.6768 90.2681 24.2095 90.2681 18.71V9.50195H94.4601C100.395 9.50195 105.211 14.2939 105.211 20.207V79.9053C103.636 77.8853 101.784 76.0908 99.712 74.5801V36.5415H5.50583V97.4736C5.50583 101.449 8.74071 104.672 12.7303 104.672H57.3601V104.675Z" fill="white"/>
      <path d="M82.1037 108.24C81.4176 108.24 80.7556 107.994 80.2307 107.546L69.5106 98.3042C68.3168 97.2754 68.1865 95.4741 69.219 94.2846C70.255 93.0918 72.0594 92.9653 73.2532 93.9941L81.6886 101.264L93.4515 86.1225C94.4189 84.8784 96.2165 84.6494 97.4651 85.6132C98.7138 86.5771 98.9436 88.3681 97.9763 89.6123L84.3644 107.133C83.8841 107.751 83.1671 108.148 82.385 108.227C82.289 108.237 82.1963 108.24 82.1003 108.24H82.1037Z" fill="#15274F"/>
    </g>
    <defs><clipPath id="step-sched"><rect width="106" height="119" fill="white"/></clipPath></defs>
  </svg>
)

const StepIconGoals = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="124" height="125" viewBox="0 0 124 125" fill="none">
    <path d="M101.963 80.3571C102.982 80.3571 103.981 80.4419 104.967 80.5655C99.5599 74.5818 94.1157 74.122 92.4764 73.741C87.4207 72.5654 81.2926 73.0654 78.0276 72.0565C77.6436 75.2366 68.321 85.6964 62.2124 92.2559L59.5623 82.125C61.554 80.9643 61.9874 78.3928 61.9874 76.2544H51.9464C51.9464 78.375 52.3753 80.9181 54.3265 82.0967L51.7214 92.2544C45.6098 85.6934 36.2902 75.2336 35.9062 72.0565C32.6397 73.0699 26.5161 72.5699 21.4574 73.744C18.8867 74.3348 6.95148 75.0922 0.491927 97.1503C-0.383944 100.147 -0.0764894 103.394 1.3483 106.067C6.64552 115.994 34.4739 119.049 56.9706 119.048C65.1294 119.048 73.9841 118.641 82.2149 117.658C79.5423 113.821 77.9661 109.174 77.9661 104.167C77.9661 91.0387 88.733 80.3571 101.964 80.3571H101.963Z" fill="white"/>
    <path d="M30.387 48.5848C32.7657 54.939 36.5331 61.1086 41.1945 65.6265C43.8311 68.183 46.7526 70.2068 49.8692 71.433C52.0124 72.2753 54.2455 72.7411 56.5417 72.7411C58.8379 72.7411 61.0725 72.2753 63.2142 71.433C66.4373 70.1637 69.4593 68.0431 72.1649 65.3571C76.7108 60.8542 80.3837 54.7798 82.7189 48.5327C84.5141 48.0089 86.3933 44.6726 87.1612 40.4107C87.9921 35.7887 87.2062 31.7559 85.4095 31.0818C85.4725 29.9539 85.5145 28.8125 85.5115 27.6428C85.468 10.8824 75.5649 1.13987 59.9492 0.101184C46.3342 -0.805066 36.0772 4.56249 31.4054 13.4836C29.8321 16.4851 28.9353 20.2396 28.5903 24.3199C28.0684 26.4449 27.7579 28.6518 27.7579 30.9345H27.8089C27.8089 30.9524 27.8044 30.9687 27.8044 30.9881C27.7699 30.9925 27.7384 30.994 27.7039 31C25.7137 31.3437 24.8064 35.5595 25.6807 40.4152C26.4801 44.8765 28.5093 48.3274 30.384 48.5878L30.387 48.5848Z" fill="white"/>
    <path d="M108.252 84.1746C111.882 85.4478 115.048 87.6982 117.445 90.6108C120.404 94.2108 122.181 98.8168 122.181 103.833C122.181 108.85 120.474 113.29 117.614 116.855C113.793 121.617 107.927 124.667 101.339 124.667C95.4571 124.667 90.1424 122.232 86.3561 118.313C84.5665 116.467 83.1144 114.287 82.1081 111.877C81.0732 109.401 80.5 106.685 80.5 103.833C80.5 93.1286 88.582 84.3019 98.9855 83.1337C99.7561 83.0477 100.543 83 101.342 83C103.768 83 106.09 83.4106 108.255 84.1746H108.252Z" fill="white"/>
    <path d="M99.7436 114.833C99.1251 114.833 98.5282 114.613 98.0551 114.211L88.3908 105.92C87.3146 104.997 87.1971 103.381 88.128 102.314C89.0619 101.244 90.6886 101.13 91.7648 102.053L99.3694 108.575L109.974 94.9919C110.846 93.8758 112.466 93.6704 113.592 94.535C114.718 95.3997 114.925 97.0064 114.053 98.1225L101.782 113.84C101.349 114.395 100.702 114.751 99.9972 114.821C99.9106 114.83 99.8271 114.833 99.7405 114.833H99.7436Z" fill="#15274F"/>
  </svg>
)

const StepIconAssessment = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="133" height="139" viewBox="0 0 133 139" fill="none">
    <g clipPath="url(#step-assess)">
      <path fillRule="evenodd" clipRule="evenodd" d="M110.071 93.3247C122.735 93.3247 133 103.552 133 116.162C133 128.773 122.735 139 110.071 139C97.4076 139 87.1426 128.776 87.1426 116.162C87.1426 103.549 97.4076 93.3247 110.071 93.3247ZM37.262 80.4141C7.4524 93.7734 2.73658 92.29 1.49217 108.369C0.247756 124.452 0 131.874 0 131.874H90.2987C86.8442 127.564 84.7776 122.107 84.7776 116.162C84.7776 104.284 93.0324 94.3258 104.139 91.6674C98.866 88.9249 90.828 85.9412 78.4937 80.4113L77.5899 80.3131L67.3221 116.039L61.4858 103.047V91.4319H62.474C63.9014 91.4319 65.0698 90.2709 65.0698 88.8464V84.8279C65.0698 83.4062 63.9014 82.2424 62.474 82.2424H53.3689C51.9415 82.2424 50.7731 83.4034 50.7731 84.8279V88.8464C50.7731 90.2681 51.9387 91.4319 53.3689 91.4319H54.2699V103.047L48.4307 116.039L38.1629 80.3131L37.2591 80.4113L37.262 80.4141ZM36.8791 6.12724C35.0913 4.09137 33.3288 2.0555 31.5608 0H59.0504C68.7298 0 71.1116 2.4509 76.2751 9.76713L76.368 9.90734H76.6524L76.9452 9.91295H76.9593C88.8741 10.3841 87.0075 28.6873 86.0756 36.4409C87.7986 36.8391 88.539 38.1151 88.3842 39.8341C88.0745 43.2468 87.5931 46.2137 86.9089 48.8861C84.7439 57.3661 80.2955 63.1372 74.4507 69.5365C64.5855 81.8358 48.8108 82.7191 38.6105 67.9745C34.9364 62.6661 27.881 52.5092 27.881 45.6528C27.881 43.3422 28.2217 40.5856 29.3422 38.4852C27.6164 33.0731 26.8928 26.6906 27.6361 21.0513C28.6496 13.4042 31.2116 10.9169 36.8791 6.12444V6.12724ZM63.1018 24.7613C61.2915 24.537 56.1674 26.5504 52.9945 27.9245C47.1046 30.482 44.613 28.9929 38.6669 29.809C35.7276 30.21 36.4877 35.2127 35.9303 37.2822C35.4629 39.018 32.2421 38.8133 32.2421 45.6556C32.2421 51.0622 38.847 60.6807 42.1861 65.5152C50.5254 77.5902 62.5218 77.5033 71.2355 66.6201C76.5904 60.7536 80.7403 55.5181 82.714 47.7364C83.2461 45.6444 83.643 43.3506 83.9246 40.7735C73.3443 42.8907 84.4567 27.4282 63.1018 24.7613ZM97.8299 111.835L106.656 120.624L122.113 103.56L126.297 107.312L106.862 128.77L93.8461 115.806L97.8299 111.838V111.835Z" fill="white"/>
      <ellipse cx="110.484" cy="116.698" rx="22.5157" ry="22.3022" fill="white"/>
      <path d="M110.484 104.769L113.188 113.011H121.938L114.859 118.106L117.563 126.349L110.484 121.254L103.405 126.349L106.109 118.106L99.0304 113.011H107.78L110.484 104.769Z" fill="#15274F"/>
    </g>
    <defs><clipPath id="step-assess"><rect width="133" height="139" fill="white"/></clipPath></defs>
  </svg>
)

const StepIconPlan = () => (
  <svg aria-hidden="true" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" fill="white" style={{ width: 112, height: 90 }}>
    <path d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"/>
  </svg>
)

interface StepItem { icon: React.ReactNode; title: string; sub: string }

const DEFAULT_STEPS: StepItem[] = [
  { icon: <StepIconSchedule />, title: 'Schedule Your Evaluation', sub: 'Pick a time that works best for you.' },
  { icon: <StepIconGoals />, title: 'Share Your Goals', sub: 'Tell us what you want to improve.' },
  { icon: <StepIconAssessment />, title: 'Hair Loss Assessment', sub: 'Your provider examines thinning patterns.' },
  { icon: <StepIconPlan />, title: 'Personalized Assessment', sub: 'Get a plan tailored to your needs.' },
]

interface PrecisionLPProps {
  heroFormId: string
  bottomFormId: string
  h1?: string
  subheading?: string
  bodyText?: string
  stepsHeading?: string
  stepsSubheading?: string
  steps?: StepItem[]
  trustHeading?: string
  trustSubheading?: string
  trustItems?: Array<{ title: string; body: string }>
  faq?: React.ReactNode
}

export default function PrecisionLP({
  heroFormId,
  bottomFormId,
  h1 = 'Medical Evaluation for Thinning Hair & Hair Loss Conditions',
  subheading = 'Discover the cause of your hair loss and learn which treatment options fit your goals and hair biology.',
  bodyText = 'Request your consultation to understand your hair loss and explore your options.',
  stepsHeading = 'Your Hair Loss Plan Is Just Three Steps Away',
  stepsSubheading = "It's simpler than you think, and it all starts with a conversation.",
  steps = DEFAULT_STEPS,
  trustHeading = 'Why Patients Feel Confident Choosing Our Team - and Why You Can Too',
  trustSubheading = 'Real care. Real support. Real patient-first focus.',
  trustItems = TRUST_ITEMS,
  faq,
}: PrecisionLPProps) {
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
                {h1}
              </h1>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                color: '#000',
                marginBottom: 16,
                lineHeight: 1.5,
              }}>
                {subheading}
              </p>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: '1rem',
                color: '#000',
                lineHeight: 1.5,
              }}>
                {bodyText}
              </p>
            </div>

            {/* Right: form card  -  starts in gray, extends into dark */}
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
                Request Your Hair Consultation
              </p>
              <GhlForm formId={heroFormId} height={408} formName="Request Your Hair Consultation - Hair Restoration Google" />
            </div>
          </div>
        </div>

        {/* Hero image dark section */}
        <div style={{
          position: 'relative',
          minHeight: 500,
          backgroundColor: '#000',
          backgroundImage: 'url(https://start.phillyhairmd.com/wp-content/uploads/2025/12/Gemini_Generated_Image_njainnnjainnnjai-2-2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.85) 100%)',
          }} />
          {/* Patient-Centered Care badge  -  bottom-right, below form card */}
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
            {stepsHeading}
          </h2>
          <p style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontSize: '1.1rem',
            textAlign: 'center',
            marginBottom: 60,
            color: '#333',
          }}>
            {stepsSubheading}
          </p>

          <div className="steps-grid" style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
            {steps.map((step) => (
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
                  {step.icon}
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
              You&apos;re in the right place  -  thousands start here every week.
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
            {trustHeading}
          </h2>
          <p style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontSize: '1.1rem',
            textAlign: 'center',
            marginBottom: 56,
            color: '#333',
          }}>
            {trustSubheading}
          </p>

          <div className="trust-grid">
            {trustItems.map((item) => (
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
                alt="Dr. Raffi Barsoumian  -  Hair Restoration Surgeon"
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
                Dr. Raffi Barsoumian is a licensed physician with advanced fellowship training and decades of experience in clinical evaluation, diagnosis, and patient care. His medical background includes dual fellowship training in complex surgical disciplines, providing him with a strong foundation in anatomy, wound healing, and comprehensive patient assessment.
              </p>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: '0.95rem',
                lineHeight: 1.75,
                color: '#444',
                marginBottom: 16,
              }}>
                Dr. Barsoumian completed fellowship training at the Nassau County Firefighters Burn Center at Nassau University Medical Center, where he focused on advanced burn care and reconstructive principles. Prior to this, he completed a fellowship in minimally invasive surgical disciplines at North Shore Long Island Jewish Health System. His early postgraduate training began in General Surgery through the SUNY at Buffalo Graduate Medical Education Consortium.
              </p>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: '0.95rem',
                lineHeight: 1.75,
                color: '#444',
                marginBottom: 16,
              }}>
                He earned his medical degree from St. George&apos;s University School of Medicine and simultaneously completed both a Bachelor of Science in Biology and a Master&apos;s degree in Speech and Hearing Sciences at the University of Illinois at Urbana-Champaign, graduating in the top percentile of his class. His academic achievements are recognized on the University&apos;s Bronze Tablet.
              </p>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: '0.95rem',
                lineHeight: 1.75,
                color: '#444',
                marginBottom: 16,
              }}>
                In addition to his clinical work, Dr. Barsoumian has contributed to published medical research across multiple fields and has participated in humanitarian medical outreach efforts internationally, providing care in underserved communities.
              </p>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: '0.95rem',
                lineHeight: 1.75,
                color: '#444',
                marginBottom: 32,
              }}>
                At the practice, Dr. Barsoumian focuses on the evaluation of hair loss conditions and works with patients to better understand contributing factors such as medical history, hair loss patterns, and individual goals. His approach emphasizes education, transparency, and thoughtful care planning to support informed decision-making.
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
                fontFamily: 'Poppins, sans-serif',
                fontSize: '0.72rem',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.6,
              }}>
                The above payment was calculated at 21.90% APR over 60 months. This purchase would have a total cost of $11,453. A down payment in the amount of monthly payment amount is due at the time of purchase. Payment amount rounded up to nearest whole number. 0% APR and other promotional rates subject to eligibility. Payment options through Cherry Technologies, Inc. are issued by the following lending partners: withcherry.com/lending-partners. See withcherry.com/terms for details.
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
                {section.icon}
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
                          fontFamily: 'Poppins, sans-serif',
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
          {faq ?? <PrecisionFaq />}
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
              <GhlForm formId={bottomFormId} height={400} formName="Footer Form - Hair Restoration Google" />
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
            &copy; 2026 Precision Hair Restoration &nbsp;&bull;&nbsp;
            <a href="https://phillyhairmd.com/privacy-policy" style={{ color: 'inherit', textDecoration: 'underline' }}>Privacy Policy</a>
            &nbsp;&bull;&nbsp;
            <a href="https://phillyhairmd.com/cookie-policy" style={{ color: 'inherit', textDecoration: 'underline' }}>Cookie Policy</a>
          </p>
        </div>
      </section>
    </>
  )
}
