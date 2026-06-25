'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import s from './page.module.scss';

const plans = [
  {
    id: 'starter',
    name: 'Starter Funnel',
    price: '$799',
    desc: '3-page funnel · 10 business day delivery',
  },
  {
    id: 'pro',
    name: 'Pro Funnel',
    price: '$1,497',
    desc: '5-page funnel · 15 business day delivery',
    popular: true,
  },
  {
    id: 'scale',
    name: 'Scale System',
    price: '$2,997',
    desc: '3 complete funnels · 20 business day delivery',
  },
];

export default function PlanPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  function handleContinue() {
    if (!selected) return;
    router.push('/survey');
  }

  return (
    <div className={s.page}>
      {/* Header */}
      <header className={s.header}>
        <div className={s.headerInner}>
          <div className={s.logo}>CWG<span>Funnl</span></div>
          <div className={s.stepIndicator}>
            <span className={`${s.stepDot} ${s.active}`} />
            <span className={s.stepDot} />
            <span className={s.stepDot} />
            <span className={s.stepDot} />
            &nbsp;Step 1 of 4
          </div>
        </div>
      </header>

      <main className={s.main}>
        <div className={s.intro}>
          <div className={s.eyebrow}>Quick Survey — 2 Minutes</div>
          <h1 className={s.title}>
            Which Package Are You <span>Interested In?</span>
          </h1>
          <p className={s.subtitle}>
            Select the funnel package that best fits your goals. You can always discuss this
            further on your free discovery call.
          </p>
        </div>

        <div className={s.questionCard}>
          <div className={s.questionNum}>Question 1 of 1</div>
          <p className={s.questionText}>Which funnel package would you like to get started with?</p>
          <div className={s.options}>
            {plans.map((plan) => (
              <button
                key={plan.id}
                className={`${s.option} ${selected === plan.id ? s.selected : ''}`}
                onClick={() => setSelected(plan.id)}
                type="button"
              >
                <span className={s.optionRadio} />
                <span className={s.optionContent}>
                  <span className={s.optionLabel}>
                    {plan.name}
                    {plan.popular && <span className={s.popularBadge}>Most Popular</span>}
                  </span>
                  <span className={s.optionMeta}>{plan.desc}</span>
                </span>
                <span className={s.optionPrice}>{plan.price}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={s.submitArea}>
          <button
            className={s.submitBtn}
            onClick={handleContinue}
            disabled={!selected}
            type="button"
          >
            Continue →
          </button>
          <p className={s.submitNote}>No commitment required · Free discovery call included</p>
        </div>

        <div className={s.footer}>
          <p className={s.footerText}>© 2026 CWGFunnl · Your information is kept private</p>
        </div>
      </main>
    </div>
  );
}
