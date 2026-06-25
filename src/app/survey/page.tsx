'use client';

import Script from 'next/script';
import s from './page.module.scss';

export default function SurveyPage() {
  return (
    <div className={s.page}>
      {/* Header */}
      <header className={s.header}>
        <div className={s.headerInner}>
          <div className={s.logo}>CWG<span>Funnl</span></div>
          <div className={s.stepIndicator}>
            <span className={`${s.stepDot} ${s.done}`} />
            <span className={`${s.stepDot} ${s.active}`} />
            <span className={s.stepDot} />
            <span className={s.stepDot} />
            &nbsp;Step 2 of 4
          </div>
        </div>
      </header>

      <main className={s.main}>
        {/* Intro */}
        <div className={s.intro}>
          <div className={s.eyebrow}>Quick Survey — 2 Minutes</div>
          <h1 className={s.title}>
            Tell Us About <span>Your Business</span>
          </h1>
          <p className={s.subtitle}>
            A few quick questions so we can build a funnel strategy tailored specifically
            to your offer and audience — before we even get on a call.
          </p>
        </div>

        {/* GHL Survey Embed */}
        <div className={s.embedWrapper}>
          <iframe
            src="https://api.leadconnectorhq.com/widget/survey/oheM6TuoVfo6OWeGFiK4"
            style={{ border: 'none', width: '100%' }}
            scrolling="no"
            id="oheM6TuoVfo6OWeGFiK4"
            title="CWGFunnl Qualification Survey"
          />
        </div>

        <div className={s.footer}>
          <p className={s.footerText}>© 2026 CWGFunnl · Your information is kept private</p>
        </div>
      </main>

      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}
