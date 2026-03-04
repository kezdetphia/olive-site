'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useMemo, useState } from 'react';
import cloud from '@/assets/cloud3.jpeg';

const SUPPORT_EMAIL = 'fhrmk8@gmail.com';

export default function SupportPage() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('Olive Support Request');
  const [message, setMessage] = useState('');

  const mailtoHref = useMemo(() => {
    const safeSubject = encodeURIComponent(subject || 'Olive Support Request');
    const body = encodeURIComponent(
      `Name: ${name || 'Not provided'}\n\nMessage:\n${message || 'No details provided.'}\n`
    );
    return `mailto:${SUPPORT_EMAIL}?subject=${safeSubject}&body=${body}`;
  }, [message, name, subject]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = mailtoHref;
  };

  return (
    <div className='relative min-h-screen overflow-hidden'>
      <Image src={cloud} alt='Cloud background' fill className='object-cover' priority />
      <div className='absolute inset-0 bg-[#102746]/65' />

      <main className='relative z-10 mx-auto max-w-4xl px-6 py-10 md:px-10'>
        <section className='rounded-3xl border border-white/40 bg-white/82 p-8 text-[#112948] shadow-2xl backdrop-blur-md'>
          <div className='mb-6 flex items-center justify-between gap-4'>
            <h1 className='text-4xl'>Olive Support</h1>
            <Link href='/' className='rounded-full bg-[#17385f] px-4 py-2 text-sm font-semibold text-white'>
              Back to Olive
            </Link>
          </div>

          <p className='mb-6 leading-7 text-[#2a4a6f]'>
            Questions, feedback, or help requests? Send us a message and your email app will open with your support request pre-filled.
            This route works well as your Apple App Store Support URL.
          </p>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label htmlFor='name' className='mb-1 block text-sm font-semibold text-[#1b3a5f]'>
                Your Name
              </label>
              <input
                id='name'
                type='text'
                value={name}
                onChange={(event) => setName(event.target.value)}
                className='w-full rounded-xl border border-[#b8cbe2] bg-white/90 px-4 py-3 text-[#122c4e] outline-none ring-0 placeholder:text-[#6683a6] focus:border-[#4e77a3]'
                placeholder='Optional'
              />
            </div>

            <div>
              <label htmlFor='subject' className='mb-1 block text-sm font-semibold text-[#1b3a5f]'>
                Subject
              </label>
              <input
                id='subject'
                type='text'
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                className='w-full rounded-xl border border-[#b8cbe2] bg-white/90 px-4 py-3 text-[#122c4e] outline-none ring-0 placeholder:text-[#6683a6] focus:border-[#4e77a3]'
                required
              />
            </div>

            <div>
              <label htmlFor='message' className='mb-1 block text-sm font-semibold text-[#1b3a5f]'>
                Message
              </label>
              <textarea
                id='message'
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className='min-h-36 w-full rounded-xl border border-[#b8cbe2] bg-white/90 px-4 py-3 text-[#122c4e] outline-none ring-0 placeholder:text-[#6683a6] focus:border-[#4e77a3]'
                placeholder='How can we help you?'
                required
              />
            </div>

            <div className='flex flex-wrap items-center gap-3 pt-2'>
              <button
                type='submit'
                className='rounded-full bg-[#17385f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#214a7c]'
              >
                Email Support
              </button>
              <a href={mailtoHref} className='text-sm font-semibold text-[#1f4f83] underline underline-offset-2'>
                Open direct email link
              </a>
            </div>
          </form>

          <p className='mt-6 text-sm text-[#31557e]'>
            Support email: <strong>{SUPPORT_EMAIL}</strong>
          </p>
        </section>
      </main>
    </div>
  );
}
