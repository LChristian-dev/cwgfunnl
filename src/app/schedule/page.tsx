'use client';

import Script from 'next/script';
import s from './page.module.scss';

const benefits = [
  {
    icon: '🎯',
    title: 'A Custom Funnel Strategy',
    desc: 'We map out the exact funnel architecture that fits your offer, audience, and goals.',
  },
  {
    icon: '🔍',
    title: 'Lead Flow Audit',
    desc: "We pinpoint exactly where you're losing leads right now — and what to fix first.",
  },
  {
    icon: '📋',
    title: 'A Clear Roadmap',
    desc: 'You leave with a step-by-step build plan — whether we work together or not.',
  },
];

export default function SchedulePage() {
  return (
    <div className={s.page}>
      {/* Header */}
      <header className={s.header}>
        <div className={s.headerInner}>
          <div className={s.logo}>CWG<span>Funnl</span></div>
          <div className={s.stepIndicator}>
            <span className={`${s.stepDot} ${s.done}`} />
            <span className={`${s.stepDot} ${s.done}`} />
            <span className={`${s.stepDot} ${s.active}`} />
            <span className={s.stepDot} />
            &nbsp;Step 3 of 4
          </div>
        </div>
      </header>

      <main className={s.main}>
        {/* Left Panel */}
        <div className={s.left}>
          <div className={s.eyebrow}>🗓️ Free Discovery Call</div>
          <h1 className={s.title}>
            Book Your <span>Strategy Session</span>
          </h1>
          <p className={s.subtitle}>
            30 minutes. No sales pitch. Just a clear plan for your funnel — built around
            the answers you just gave us.
          </p>

          <div className={s.surveyConfirm}>
            <span className={s.icon}>✅</span>
            <span>
              <strong>Survey received.</strong> We&apos;ve reviewed your answers and have
              a strategy ready to walk you through.
            </span>
          </div>

          <div className={s.benefitsList}>
            {benefits.map((b) => (
              <div key={b.title} className={s.benefit}>
                <div className={s.benefitIcon}>{b.icon}</div>
                <div className={s.benefitContent}>
                  <p className={s.benefitTitle}>{b.title}</p>
                  <p className={s.benefitDesc}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={s.socialProof}>
            <div className={s.socialProofStars}>★★★★★</div>
            <p className={s.socialProofText}>
              The discovery call alone was worth it. They mapped out my entire funnel
              in 30 minutes — I finally knew exactly what to build.
            </p>
            <div className={s.socialProofAuthor}>
              <div className={s.socialProofAvatar}>JR</div>
              <div>
                <p className={s.socialProofName}>James R.</p>
                <p className={s.socialProofRole}>Online Business Coach</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel — GHL Calendar Embed */}
        <div className={s.right}>
          <div className={s.calendarCard}>
            <div className={s.calendarHeader}>
              <span className={s.calendarTitle}>CWGFunnl Discovery Call</span>
              <span className={s.calendarDuration}>
                <span className={s.dot} />
                30 min · Free
              </span>
            </div>
            <div className={s.embedWrapper}>
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/fG5Q11kJ8LiQeruzBuh8"
                style={{ width: '100%', border: 'none', overflow: 'hidden' }}
                scrolling="no"
                id="fG5Q11kJ8LiQeruzBuh8_1782340019660"
                title="Book a Discovery Call"
              />
            </div>
            <p className={s.calendarNote}>
              All times shown in your local timezone · You&apos;ll receive a calendar invite by email
            </p>
          </div>
        </div>
      </main>

      <div className={s.footer}>
        <p className={s.footerText}>© 2026 CWGFunnl · Your information is kept private</p>
      </div>

      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}
