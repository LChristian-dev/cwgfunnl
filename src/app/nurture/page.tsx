'use client';

import s from './page.module.scss';

export default function NurturePage() {
  return (
    <div className={s.page}>
      <div className={s.bg} aria-hidden="true" />

      {/* Header */}
      <header className={s.header}>
        <div className={s.headerInner}>
          <div className={s.logo}>CWG<span>Funnl</span></div>
        </div>
      </header>

      {/* Hero */}
      <div className={s.hero}>
        <div className={s.icon}>🙌</div>
        <div className={s.eyebrow}>Survey Submitted</div>
        <h1 className={s.title}>
          Thank You for <span>Your Time!</span>
        </h1>
        <p className={s.subtitle}>
          We appreciate you taking the time to fill out our survey. Your responses have
          been received and our team will review everything carefully.
        </p>
        <p className={s.subtitle}>
          We&apos;ll be in touch soon with next steps. In the meantime, feel free to explore
          the resources below to get a head start on your funnel journey.
        </p>
      </div>

      {/* What to expect */}
      <section className={s.cards}>
        <div className={s.cardsInner}>
          <h2 className={s.sectionTitle}>What Happens From Here</h2>
          <div className={s.grid}>
            <div className={s.card}>
              <div className={s.cardIcon}>📬</div>
              <h3 className={s.cardTitle}>Check Your Inbox</h3>
              <p className={s.cardDesc}>
                Keep an eye on your email — our team will be reaching out shortly with
                more information tailored to what you shared with us.
              </p>
            </div>
            <div className={s.card}>
              <div className={s.cardIcon}>📈</div>
              <h3 className={s.cardTitle}>We&apos;re Reviewing Your Answers</h3>
              <p className={s.cardDesc}>
                Our team takes every submission seriously. We&apos;ll go through your
                responses and come back to you with the best path forward for your business.
              </p>
            </div>
            <div className={s.card}>
              <div className={s.cardIcon}>🚀</div>
              <h3 className={s.cardTitle}>Big Things Ahead</h3>
              <p className={s.cardDesc}>
                We&apos;re excited about what&apos;s possible for you. Stay tuned — great
                things are coming and we can&apos;t wait to be part of your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className={s.cta}>
        <p className={s.ctaText}>Want to learn more about what we do?</p>
        <a href="/" className={s.ctaBtn}>Explore CWGFunnl →</a>
      </div>

      <footer className={s.footer}>
        <p className={s.footerText}>© 2026 CWGFunnl · All rights reserved</p>
      </footer>
    </div>
  );
}
