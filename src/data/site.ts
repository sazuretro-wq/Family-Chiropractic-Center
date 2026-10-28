// Single source of truth for business info + homepage copy.
// Edit content here; components stay presentational.

export const site = {
  name: 'Family Chiropractic Center',
  phone: '(651) 463‑2225',
  phoneHref: 'tel:+16514632225',
  address: '530 Walnut Street, Farmington, MN 55024',
  privacyHref: '/privacy-policy',
  termsHref: '/terms',
  bookHref: '/#book',
};

export const heroHighlights = [
  { icon: '/icons/stars.svg', label: '200+ 5-Star Google Reviews' },
  { icon: '/icons/award.svg', label: '6x MN Monthly Best Doctor' },
  { icon: '/icons/shield-tick-light.svg', label: 'Trusted Since 1960' },
];

export const trustBadges = [
  { icon: '/icons/trophy.svg', title: 'Best of Cities South', subtitle: 'Finalist 2025' },
  { icon: '/icons/clock.svg', title: '60+ Years', subtitle: 'Serving Farmington' },
  { icon: '/icons/shield-tick.svg', title: '200+ Reviews', subtitle: 'Five-star average' },
  { icon: '/icons/star.svg', title: '6× Best Chiropractor', subtitle: 'Best Chiropractor' },
];

export const included = [
  {
    icon: '/icons/clipboard.svg',
    title: 'Comprehensive Exam',
    description: 'A thorough evaluation of your spine, posture, and areas of concern. We listen first, then assess.',
  },
  {
    icon: '/icons/brain.svg',
    title: 'INSiGHT Neurological Scan',
    description:
      'Our advanced scanning technology objectively measures how your nervous system is functioning. no guesswork.',
  },
  {
    icon: '/icons/message.svg',
    title: 'Doctor Consultation',
    description:
      'Your doctor walks you through the results, explains what they mean, and discusses a personalized care plan.',
  },
];

export const doctors = [
  {
    image: '/images/doctors/ashley-hartman.png',
    badge: '16 years of experience',
    credentials: 'DC · Pregnancy & Pediatric',
    name: 'Dr. Ashley Hartman',
    bio: "Dr. Ashley specializes in pregnancy and pediatric chiropractic care. She's passionate about helping moms and families live healthier, more active lives. Her gentle approach makes patients of all ages feel comfortable and cared for.",
  },
  {
    image: '/images/doctors/cley-charlson.png',
    badge: 'Sports & performance specialist',
    credentials: 'DC · TPI · FAKTR · Acupuncture',
    name: 'Dr. Cley Charlson',
    bio: "Dr. Cley is a TPI Certified, FAKTR Certified, and Board Certified Acupuncturist who helps active individuals of all ages stay moving and feeling their best. Whether you're training for competition or keeping up with your kids, Dr. Cley is your guy.",
  },
];

export const staffPhotos = [1, 2, 3, 4, 5, 6].map((n) => ({
  src: `/images/staff/staff-${n}.png`,
  alt: 'Family Chiropractic Center team member',
}));

// Widths match the Figma "team" strip at 1440px.
export const teamPhotos = [
  { src: '/images/team/team-1.png', width: 222, alt: 'Patient visit at Family Chiropractic Center' },
  { src: '/images/team/team-2.png', width: 245, alt: 'Prenatal chiropractic patients' },
  { src: '/images/team/team-3.png', width: 222, alt: 'Pediatric patient smiling' },
  { src: '/images/team/team-4.png', width: 370, alt: 'Dr. Cley Charlson and Dr. Ashley Hartman' },
  { src: '/images/team/team-5.png', width: 232, alt: 'Acupuncture treatment' },
  { src: '/images/team/team-6.png', width: 231, alt: 'Two young patients' },
  { src: '/images/team/team-7.png', width: 222, alt: 'Adjustment in progress' },
];

export const reviews = [
  {
    initial: 'S',
    name: 'Sarah M.',
    location: 'Farmington, MN',
    title: 'Finally feeling like myself again, sleeping and moving better.',
    body: "I was skeptical at first, but after my first visit I knew this was different. They actually took the time to explain what was going on with my body and put together a real plan. I'm sleeping better, moving better, and feeling like myself again.",
    avatarColor: '#f9ff57',
  },
  {
    initial: 'J',
    name: 'Jessica T.',
    location: 'Lakeville, MN',
    title: "My son's ear infections are gone thanks to Dr. Ashley.",
    body: "Dr. Ashley has been amazing with my kids. She's so gentle and patient. My son used to get ear infections constantly and since starting adjustments, he hasn't had one in over a year.",
    avatarColor: '#f2d881',
  },
  {
    initial: 'M',
    name: 'Mark R.',
    location: 'Rosemount, MN',
    title: 'Genuine care from a team that truly listens to you.',
    body: "I've been to a lot of chiropractors over the years. Family Chiropractic Center is hands down the best experience I've ever had. The staff is incredible and the doctors genuinely care.",
    avatarColor: '#664e00',
  },
  // Placeholder slots from the design ([GMB] = pull from Google Business Profile)
  {
    initial: 'M',
    name: '[GMB]',
    location: 'Rosemount, MN',
    title: 'Genuine care from a team that truly listens to you.',
    body: "I've been to a lot of chiropractors over the years. Family Chiropractic Center is hands down the best experience I've ever had. The staff is incredible and the doctors genuinely care.",
    avatarColor: '#c8b17f',
  },
  {
    initial: 'S',
    name: '[GMB]',
    location: 'Farmington, MN',
    title: 'Finally feeling like myself again, sleeping and moving better.',
    body: "I was skeptical at first, but after my first visit I knew this was different. They actually took the time to explain what was going on with my body and put together a real plan. I'm sleeping better, moving better, and feeling like myself again.",
    avatarColor: '#f9ff57',
  },
  {
    initial: 'J',
    name: '[GMB]',
    location: 'Lakeville, MN',
    title: "My son's ear infections are gone thanks to Dr. Ashley.",
    body: "Dr. Ashley has been amazing with my kids. She's so gentle and patient. My son used to get ear infections constantly and since starting adjustments, he hasn't had one in over a year.",
    avatarColor: '#f2d881',
  },
];

export const steps = [
  {
    title: 'Book your visit',
    description:
      "Fill out the short form above or give us a call. We'll get you scheduled for the soonest available appointment.",
  },
  {
    title: 'Get your scan & exam',
    description:
      "We'll greet you by name, give you a tour, run your INSiGHT Neurological Scan, and perform a comprehensive exam.",
  },
  {
    title: 'Get your personalized plan',
    description:
      'Your doctor walks you through the results, answers every question, and builds a care plan tailored to you.',
  },
];

export const services = [
  { icon: '/icons/spine.svg', title: 'Chiropractic Care', description: 'Pain relief, corrective care, and wellness for all ages.' },
  { icon: '/icons/needle.svg', title: 'Acupuncture', description: 'Performed by a dedicated Doctor of Acupuncture, not a chiropractor.' },
  { icon: '/icons/pulse.svg', title: 'Laser Therapy', description: 'Advanced therapeutic laser for pain relief and tissue healing.' },
  { icon: '/icons/waves.svg', title: 'Massage Therapy', description: 'Three licensed massage therapists on staff.' },
  { icon: '/icons/trend-up.svg', title: 'Sports & Performance', description: 'TPI golf screening, FAKTR, and movement assessments.' },
  { icon: '/icons/prenatal.svg', title: 'Prenatal & Pediatric', description: 'Gentle, specialized care for moms and kids.' },
];

export const faqs = [
  {
    question: 'What does the $59 New Patient Special include?',
    answer:
      "Your visit includes a comprehensive exam, a doctor consultation, and our advanced INSiGHT Neurological Scan - a non-invasive technology that measures how your nervous system is functioning. It's everything we need to understand what's going on and start building your care plan.",
  },
  {
    question: 'Do you accept insurance?',
    answer:
      "We are a cash-based practice with affordable care plans designed to make consistent care accessible. We are in-network with Medicare and can bill some insurance out-of-network. We also accept auto injury (PIP) and workers' compensation cases. Most patients find our cash plans are more affordable than their copay would be.",
  },
  {
    question: 'Is chiropractic care safe?',
    answer:
      "Absolutely. Chiropractic adjustments performed by trained doctors are extremely safe with very low risk. Any mild soreness after your first visit is similar to what you'd feel after a good workout and typically resolves within 24 hours.",
  },
  {
    question: 'How long does the first visit take?',
    answer:
      'Plan for about 45-60 minutes for your first visit. This gives us time to do the scan, exam, and consultation without rushing. Follow-up visits are much shorter, usually 15-20 minutes.',
  },
  {
    question: 'Do you treat children?',
    answer:
      'Yes! Dr. Ashley specializes in pediatric chiropractic and treats patients from newborns through teens. Her gentle techniques are safe and effective for children of all ages.',
  },
  {
    question: "What if I've never been to a chiropractor before?",
    answer:
      "You're in great hands. Over half of our new patients are first-timers. We'll walk you through everything, answer all your questions, and never do anything without explaining it first. Our goal is for you to feel comfortable and confident from the moment you walk in.",
  },
];
