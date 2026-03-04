import Image from 'next/image';
import Link from 'next/link';
import cloud from '@/assets/cloud2.jpeg';

const features = [
  {
    title: 'Daily Verses & Topics',
    description: 'Begin every morning with a hand-picked verse centered on real experiences like joy, anxiety, conflict, and grief.',
  },
  {
    title: 'Personal AI Mentor',
    description: 'Share what is on your heart and receive compassionate support, practical next steps, and Scripture grounded in grace.',
  },
  {
    title: 'Elegant Offline Bible Reading',
    description:
      'Read the full World English Bible (WEB) in a distraction-free interface with customizable text and easy chapter navigation.',
  },
  {
    title: 'Community Prayer Journal',
    description: 'Capture prayers and gratitude privately or share with others receiving Blessings and Amens from a supportive community.',
  },
  {
    title: 'Deep Habit Tracking',
    description: 'Track reading minutes and streaks to see your spiritual rhythm grow over time with calm visual progress.',
  },
  {
    title: 'Stunning, Calming UI',
    description: 'Enjoy a polished glass-morphism experience with smooth motion and soothing light and dark friendly themes.',
  },
];

export default function Home() {
  return (
    <div className='relative min-h-screen overflow-hidden'>
      <Image src={cloud} alt='Soft white clouds in a blue sky' fill priority className='object-cover' />
      <div className='absolute inset-0 bg-gradient-to-b from-[#0e2a4d]/65 via-[#22456f]/40 to-[#f3f8ff]/90' />

      <main className='relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-10 md:px-10'>
        <header className='rounded-3xl border border-white/40 bg-white/20 p-6 shadow-2xl backdrop-blur-xl'>
          <div className='flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
            <div className='max-w-3xl space-y-3'>
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-white/95'>Olive</p>
              <h1 className='text-5xl leading-tight text-white md:text-6xl'>Your Daily Bible & Spiritual Guide</h1>
              <p className='max-w-2xl text-lg text-white/92'>Find your peace, grow your faith, and connect with God deeply every day.</p>
            </div>
            <div className='flex gap-3 text-sm font-semibold'>
              <Link
                href='/support'
                className='rounded-full border border-white/70 bg-white/20 px-5 py-2 text-center align-center text-white transition hover:bg-white/35'
              >
                Support
              </Link>
              <Link
                href='/privacy-policy'
                className='rounded-full border border-white/70 bg-white/20 px-5 py-2 text-center align-center text-white transition hover:bg-white/35'
              >
                Privacy Policy
              </Link>
              <Link
                href='/terms-and-conditions'
                className='rounded-full border border-white/70 bg-white/20 px-5 py-2 text-center text-white transition hover:bg-white/35'
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </header>

        <section className='rounded-3xl border border-white/50 bg-white/70 p-7 shadow-xl backdrop-blur-md'>
          <p className='text-lg leading-8 text-[#1b3558]'>
            Olive is not just another Bible app. It is designed with breathtaking aesthetics and built to help you maintain a consistent
            spiritual habit. Whether you are dealing with anxiety, seeking clarity, or simply trying to stay rooted in Scripture, Olive
            becomes your gentle daily companion.
          </p>
        </section>

        <section className='grid gap-5 md:grid-cols-2'>
          {features.map((feature) => (
            <article
              key={feature.title}
              className='rounded-2xl border border-white/60 bg-[#f9fcff]/82 p-6 shadow-lg backdrop-blur-sm transition hover:-translate-y-0.5'
            >
              <h2 className='text-3xl text-[#102a4b]'>{feature.title}</h2>
              <p className='mt-3 text-[1.03rem] leading-7 text-[#27486f]'>{feature.description}</p>
            </article>
          ))}
        </section>

        {/* <footer className="rounded-2xl border border-white/50 bg-white/65 px-6 py-5 text-sm text-[#1f4268] shadow-lg backdrop-blur-md">
          <p>Contact: fhrmk8@gmail.com</p>
        </footer> */}
      </main>
    </div>
  );
}
