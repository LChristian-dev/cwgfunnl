'use client';

import { useEffect, useState } from 'react';
import s from './page.module.scss';

const nextSteps = [
  {
    num: '1',
    title: 'Check Your Email',
    desc: "You'll receive a calendar invite with the call link and a short prep guide — check your spam folder if you don't see it.",
  },
  {
    num: '2',
    title: 'Prepare Your Goal',
    desc: 'Think about your #1 outcome for the next 90 days. The clearer you are, the more valuable the call will be.',
  },
  {
    num: '3',
    title: 'Show Up Ready',
    desc: "We'll walk you through a custom funnel strategy. Bring questions — this call is yours. No slides, no pitch.",
  },
];

const resources = [
  {
    icon: '📞',
    title: 'High-Converting Discovery Call Script',
    desc: 'Use this battle-tested script to close more clients on your own discovery calls.',
    link: 'https://drive.google.com/file/d/1vAZRnmKf0z0kaIONzk8jr7K2STlUG0s4/view?usp=sharing',
  },
  {
    icon: '🎯',
    title: 'Lead Response Playbook',
    desc: 'The exact process we use to follow up with leads within minutes — and the templates that get replies.',
    link: 'https://drive.google.com/file/d/1TVXyxoIs0xXeLOW0Zq9Ys-ERnKrX_M7k/view?usp=sharing',
  },
  {
    icon: '🛡️',
    title: 'Objection Handling Cheat Sheet',
    desc: "Word-for-word responses to the 10 most common objections your prospects throw at you.",
    link: 'https://drive.google.com/file/d/1sXH6HXJN8SBWwGARUHN2GQe3GeL8eh34/view?usp=sharing',
  },
];

export default function ThankYouPage() {
  const [booking, setBooking] = useState<{ date: string; time: string } | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem('cwg_booking');
    if (stored) setBooking(JSON.parse(stored));
  }, []);

  return (
    <div className={s.page}>
      <div className={s.bg} aria-hidden="true" />

      {/* Header */}
      <header className={s.header}>
        <div className={s.headerInner}>
          <div className={s.logo}>CWG<span>Funnl</span></div>
          <div className={s.stepIndicator}>
            <span className={s.stepDot} />
            <span className={s.stepDot} />
            <span className={s.stepDot} />
            <span className={s.stepDot} />
            &nbsp;Complete ✓
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className={s.hero}>
        <div className={s.checkmark}>✓</div>
        <div className={s.eyebrow}>You&apos;re all set</div>
        <h1 className={s.title}>
          Your Call Is <span>Booked!</span>
        </h1>
        <p className={s.subtitle}>
          We&apos;re looking forward to speaking with you. A calendar invite is on its way
          to your inbox right now.
        </p>

        {booking && (
          <div className={s.bookingBox}>
            <p className={s.bookingBoxTitle}>Your Booking Details</p>
            <div className={s.bookingDetail}>
              <span className={s.bookingDetailLabel}>📅 Date</span>
              <span className={s.bookingDetailValue}>{booking.date}</span>
            </div>
            <div className={s.bookingDetail}>
              <span className={s.bookingDetailLabel}>🕐 Time</span>
              <span className={s.bookingDetailValue}>{booking.time}</span>
            </div>
            <div className={s.bookingDetail}>
              <span className={s.bookingDetailLabel}>⏱️ Duration</span>
              <span className={s.bookingDetailValue}>30 minutes</span>
            </div>
            <div className={s.bookingDetail}>
              <span className={s.bookingDetailLabel}>📍 Format</span>
              <span className={s.bookingDetailValue}>Video call (link in email)</span>
            </div>
          </div>
        )}
      </div>

      {/* Next Steps */}
      <section className={s.nextSteps}>
        <h2 className={s.sectionTitle}>What Happens Next</h2>
        <div className={s.stepsGrid}>
          {nextSteps.map((step) => (
            <div key={step.num} className={s.stepCard}>
              <div className={s.stepNum}>{step.num}</div>
              <h3 className={s.stepTitle}>{step.title}</h3>
              <p className={s.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Free Resources */}
      <section className={s.resources}>
        <div className={s.resourcesInner}>
          <div className={s.resourcesHeader}>
            <div className={s.resourcesEyebrow}>Free Bonus Resources</div>
            <h2 className={s.resourcesTitle}>While You Wait — Start Here</h2>
            <p className={s.resourcesSubtitle}>
              Three free tools to help you prepare for the call and get a head start.
            </p>
          </div>
          <div className={s.resourcesGrid}>
            {resources.map((r) => (
              <div key={r.title} className={s.resourceCard}>
                <span className={s.resourceIcon}>{r.icon}</span>
                <h3 className={s.resourceTitle}>{r.title}</h3>
                <p className={s.resourceDesc}>{r.desc}</p>
                <a href={r.link} className={s.resourceLink} target="_blank" rel="noopener noreferrer">
                  Download Free →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share */}
      <div className={s.share}>
        <h3 className={s.shareTitle}>Know a Coach Who Needs a Better Funnel?</h3>
        <p className={s.shareSubtitle}>
          Share CWGFunnl and help them stop losing leads every day.
        </p>
        <div className={s.shareButtons}>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://cwgfunnl.com')}&quote=${encodeURIComponent('🚀 If you\'re a coach or creator still losing leads because your funnel isn\'t built right — this is worth checking out.\n\nCWGFunnl builds done-for-you, high-converting funnels that fill your calendar and close more clients. Fast turnaround, conversion copy included, fully integrated.\n\nStop leaving money on the table 👇')}`}
            target="_blank"
            rel="noopener noreferrer"
            className={s.shareBtn}
          >Share on Facebook</a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://cwgfunnl.com')}&summary=${encodeURIComponent('If you\'re a coach or creator still losing leads because your funnel isn\'t converting — this is worth looking at. CWGFunnl builds done-for-you funnels that fill your calendar and close more clients. Fast turnaround, conversion copy included, fully integrated. Check it out 👇')}&title=${encodeURIComponent('High-Converting Funnels for Coaches & Creators — CWGFunnl')}`}
            target="_blank"
            rel="noopener noreferrer"
            className={s.shareBtn}
          >Share on LinkedIn</a>
          <button
            className={s.shareBtn}
            onClick={() => {
              navigator.clipboard.writeText('https://cwgfunnl.com');
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
          >{copied ? 'Copied!' : 'Copy Link'}</button>
        </div>
      </div>

      <footer className={s.footer}>
        <p className={s.footerText}>© 2026 CWGFunnl · All rights reserved</p>
      </footer>
    </div>
  );
}
