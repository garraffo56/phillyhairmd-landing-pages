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

const PracticeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 54" fill="none" style={{ width: 80, height: 80 }}>
    <g clipPath="url(#prac-icon)">
      <path d="M56 26.9997C56 24.1283 52.4574 21.8577 51.6205 19.2665C50.7561 16.5812 52.2681 12.6529 50.6536 10.4164C49.0218 8.15961 44.8353 8.40196 42.5952 6.75893C40.3762 5.13248 39.3197 1.0364 36.6534 0.163738C34.0831 -0.676671 30.8497 1.9837 27.9995 1.9837C25.1494 1.9837 21.9169 -0.676671 19.3466 0.163738C16.6812 1.0364 15.6247 5.13248 13.4066 6.75893C11.1647 8.40289 6.97816 8.15961 5.34636 10.4164C3.73193 12.6519 5.24391 16.5831 4.37953 19.2665C3.54259 21.8577 0 24.1283 0 26.9997C0 29.8711 3.54259 32.1408 4.37953 34.733C5.24391 37.4182 3.73193 41.3466 5.34636 43.5831C6.97816 45.8398 11.1647 45.5975 13.4066 47.2405C15.6247 48.867 16.6812 52.963 19.3466 53.8357C21.9169 54.6761 25.1521 52.0157 28.0005 52.0157C30.8488 52.0157 34.0841 54.677 36.6543 53.8357C39.3197 52.963 40.3762 48.867 42.5961 47.2405C44.8362 45.5965 49.0228 45.8398 50.6546 43.5831C52.269 41.3475 50.757 37.4164 51.6214 34.733C52.4574 32.1417 56.0009 29.872 56.0009 26.9997H56ZM42.4297 21.6264L26.4848 37.6901C25.7549 38.4254 24.799 38.7922 23.845 38.7922C22.891 38.7922 21.9333 38.4254 21.2034 37.6901L13.5703 30.0001C12.1123 28.5312 12.1123 26.151 13.5703 24.6821C15.0283 23.2133 17.3928 23.2133 18.8508 24.6821L23.8441 29.7126L37.1483 16.3075C38.6063 14.8387 40.9717 14.8387 42.4288 16.3075C43.8868 17.7764 43.8868 20.1566 42.4288 21.6255L42.4297 21.6264Z" fill="#164996"/>
    </g>
    <defs><clipPath id="prac-icon"><rect width="56" height="54" fill="white"/></clipPath></defs>
  </svg>
)

interface StepItem { icon: React.ReactNode; title: string; sub: string }

const DEFAULT_STEPS: StepItem[] = [
  { icon: <StepIconSchedule />, title: 'Schedule Your Evaluation', sub: 'Pick a time that works best for you.' },
  { icon: <StepIconGoals />, title: 'Share Your Goals', sub: 'Tell us what you want to improve.' },
  { icon: <StepIconAssessment />, title: 'Hair Loss Assessment', sub: 'Your provider examines thinning patterns.' },
  { icon: <StepIconPlan />, title: 'Personalized Treatment Plan', sub: 'Get a plan tailored to your needs.' },
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
  subheading = 'Discover the cause of hair loss and learn which treatment options fit your goals and hair biology.',
  bodyText = 'Request your consultation to understand hair loss options and explore what fits your goals.',
  stepsHeading = 'Your Hair Loss Plan Is Just Four Steps Away',
  stepsSubheading = "It’s simpler than you think, and it all starts with a conversation.",
  steps = DEFAULT_STEPS,
  trustHeading = 'Why Patients Feel Confident Choosing Our Team — and Why You Can Too',
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
                <PracticeIcon />
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
