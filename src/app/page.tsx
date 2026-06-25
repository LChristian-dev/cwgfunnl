'use client';

import { useState, useEffect, useCallback } from 'react';
import s from './page.module.scss';

const niches = [
  { label: 'Business Coach',   icon: '💼' },
  { label: 'Dental Coach',     icon: '🦷' },
  { label: 'Mindset Coach',    icon: '🧠' },
  { label: 'Life Coach',       icon: '🌟' },
  { label: 'Fitness Coach',    icon: '💪' },
  { label: 'Webinar Host',     icon: '🎙️' },
  { label: 'Masterclass',      icon: '🎓' },
  { label: 'Workshop',         icon: '🛠️' },
  { label: 'Online Course',    icon: '📚' },
  { label: 'Sales Trainer',    icon: '📈' },
  { label: 'Wealth Coach',     icon: '💰' },
  { label: 'Speaking Event',   icon: '🎤' },
];

const features = [
  {
    icon: '⚡',
    title: 'High-Converting Design',
    desc: 'Every pixel is crafted to move visitors toward one action — booking or buying. No fluff, no distractions.',
  },
  {
    icon: '📱',
    title: 'Mobile-First Build',
    desc: 'Over 70% of your prospects scroll on mobile. Your funnel loads fast and converts beautifully on every screen.',
  },
  {
    icon: '✍️',
    title: 'Conversion Copywriting',
    desc: "We write every headline, CTA, and bullet point. Psychology-backed copy that speaks your audience's language.",
  },
  {
    icon: '🔗',
    title: 'End-to-End Integration',
    desc: 'Email, CRM, payment gateway, calendar — all wired up and tested before we hand it over.',
  },
  {
    icon: '🧪',
    title: 'A/B Testing Ready',
    desc: 'Built-in structure for split testing headlines, CTAs, and offers so you can optimize conversions continuously.',
  },
  {
    icon: '📊',
    title: 'Analytics & Tracking',
    desc: 'Google Analytics 4, Meta Pixel, and conversion events configured out of the box. Know exactly what works.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    desc: 'We learn your offer, audience, and goals in a 30-minute strategy session. No cookie-cutter approach here.',
  },
  {
    num: '02',
    title: 'Build & Design',
    desc: 'Our team builds your full funnel — copy, design, and integrations — in 10–15 business days.',
  },
  {
    num: '03',
    title: 'Launch & Optimize',
    desc: 'We go live together, ensure everything converts, and give you a 14-day support window post-launch.',
  },
];

const showcaseNiches = [
  {
    id: 'business',
    emoji: '💼',
    title: 'Business Coach',
    desc: 'High-ticket discovery call funnels that pre-qualify leads and fill your calendar with serious buyers.',
    features: ['Strategy session booking page', 'Application form funnel', 'VSL + offer page'],
  },
  {
    id: 'dental',
    emoji: '🦷',
    title: 'Dental Coach',
    desc: 'Turn dentists into 7-figure practice owners with authority-building funnels that attract premium patients.',
    features: ['Free training opt-in', 'Case study funnel', 'Group program waitlist'],
  },
  {
    id: 'mindset',
    emoji: '🧠',
    title: 'Mindset Coach',
    desc: 'Lead with transformation. Funnels that connect emotionally, build trust, and convert at every price point.',
    features: ['Challenge funnel', 'Free guide + email sequence', 'Retreat sales page'],
  },
  {
    id: 'webinar',
    emoji: '🎙️',
    title: 'Webinar',
    desc: 'End-to-end webinar funnels — registration, reminder sequences, replay pages, and pitch conversion.',
    features: ['Registration page', 'Confirmation + reminders', 'Replay + offer page'],
  },
  {
    id: 'masterclass',
    emoji: '🎓',
    title: 'Masterclass',
    desc: 'Premium masterclass funnels that position you as the authority and sell your high-ticket programs.',
    features: ['Opt-in + delivery page', 'Pitch deck integration', 'Checkout + upsell flow'],
  },
  {
    id: 'workshop',
    emoji: '🛠️',
    title: 'Workshop',
    desc: 'Live or virtual workshop funnels designed to fill seats, maximize show-up rates, and sell on the back end.',
    features: ['Event sales page', 'Ticket checkout', 'Pre-event nurture sequence'],
  },
];

const plans = [
  {
    title: 'Starter Funnel',
    desc: 'Perfect for coaches launching their first funnel or testing a new offer.',
    price: '799',
    badge: null,
    features: [
      { text: '3-page funnel (opt-in, sales, thank you)', included: true },
      { text: 'Mobile-responsive design', included: true },
      { text: 'Basic email integration', included: true },
      { text: 'Copywriting for all pages', included: true },
      { text: '10 business day delivery', included: true },
      { text: 'A/B testing setup', included: false },
      { text: 'CRM & payment integration', included: false },
    ],
    featured: false,
  },
  {
    title: 'Pro Funnel',
    desc: 'The complete funnel system for coaches serious about scaling to 6 figures.',
    price: '1,497',
    badge: 'Most Popular',
    features: [
      { text: '5-page funnel (full flow)', included: true },
      { text: 'Mobile-responsive design', included: true },
      { text: 'Email automation (5 sequences)', included: true },
      { text: 'Conversion copywriting', included: true },
      { text: '15 business day delivery', included: true },
      { text: 'A/B testing setup', included: true },
      { text: 'CRM & payment integration', included: true },
    ],
    featured: true,
  },
  {
    title: 'Scale System',
    desc: 'Full-stack funnel ecosystem for coaches running multiple offers.',
    price: '2,997',
    badge: null,
    features: [
      { text: '3 complete funnels', included: true },
      { text: 'Webinar or VSL integration', included: true },
      { text: 'Advanced email automations', included: true },
      { text: 'Premium conversion copy', included: true },
      { text: '20 business day delivery', included: true },
      { text: 'A/B testing + analytics', included: true },
      { text: 'Full tech stack integration', included: true },
    ],
    featured: false,
  },
];

const testimonials = [
  {
    stars: 5,
    text: 'Within 30 days of launching my funnel, I closed $47,000 in coaching contracts. The ROI on this investment is insane.',
    name: 'Marcus T.',
    role: 'Business Coach',
    initials: 'MT',
  },
  {
    stars: 5,
    text: "I went from 0 to 200 webinar registrations in my first week. The registration page they built is absolutely converting.",
    name: 'Dr. Sarah K.',
    role: 'Dental Practice Coach',
    initials: 'SK',
  },
  {
    stars: 5,
    text: "My masterclass funnel paid for itself 10x over in the first launch. Best investment I've made in my coaching business.",
    name: 'Amara J.',
    role: 'Mindset & Life Coach',
    initials: 'AJ',
  },
];

const faqs = [
  {
    q: 'How long does it take to build my funnel?',
    a: 'Most funnels are delivered in 10–20 business days depending on the package. We move fast without sacrificing quality. The timeline starts once the invoice has been sent and payment is confirmed.',
  },
  {
    q: 'Do I need to write any copy myself?',
    a: "Nope. We handle all the copywriting for every page in your funnel. You'll fill out a simple intake form and we take it from there. Our copy is based on proven frameworks for coaches.",
  },
  {
    q: 'What platform will my funnel be built on?',
    a: "We build on your preferred platform — ClickFunnels, GoHighLevel, Kajabi, WordPress, or custom-coded. During the discovery call we'll recommend the best fit for your tech stack and goals.",
  },
  {
    q: "What if I'm not happy with the funnel?",
    a: 'We offer unlimited revisions during the build phase and a 14-day post-launch support window. Our goal is a funnel you love that converts — we stay until we get there.',
  },
  {
    q: 'Do you offer any guarantees?',
    a: "We can't guarantee specific revenue results (anyone who does is lying to you). But we guarantee professional delivery, unlimited revisions, and a funnel built to industry-standard conversion best practices.",
  },
  {
    q: 'Can you work with my existing brand?',
    a: 'Absolutely. We match your existing colors, fonts, and brand voice. If you need branding from scratch, we can include a brand identity add-on.',
  },
];

export default function Home() {
  const [scrolled, setScrolled]   = useState(false);
  const [openFaq, setOpenFaq]     = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal  = useCallback((e: React.MouseEvent) => { e.preventDefault(); setModalOpen(true);  }, []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [modalOpen]);

  return (
    <>
      {/* NAV */}
      <nav className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
        <div className={s.navInner}>
          <div className={s.navLogo}>
            CWG<span>Funnl</span>
          </div>
          <div className={s.navLinks}>
            <a href="#how-it-works">How It Works</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Results</a>
            <a href="#faq">FAQ</a>
          </div>
          <a href="#pricing" className={s.navCta}>
            Get Started →
          </a>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className={s.hero}>
          <div className={s.heroBg} aria-hidden="true" />
          <div className={s.heroOrb} aria-hidden="true" />
          <div className={s.heroInner}>
            <div className={s.heroBadge}>🚀 Done-For-You Funnel Agency</div>

            <h1 className={s.heroTitle}>
              We Build Funnels That
              <span className={s.highlight}>Fill Your Calendar</span>
            </h1>

            <p className={s.heroSubtitle}>
              High-converting sales funnels for coaches, consultants & educators.
              Done for you in 10–20 business days — starting at $799.
            </p>

            <div className={s.heroActions}>
              <a href="#pricing" className={s.heroCta}>
                Build My Funnel — From $799
              </a>
              <a href="#how-it-works" className={s.heroSecondary}>
                See How It Works
              </a>
            </div>

            <div className={s.heroProof}>
              <span>No templates — custom-built</span>
              <span>10–20 business day delivery</span>
              <span>Unlimited revisions</span>
            </div>

            <div className={s.heroStats}>
              <div className={s.heroStat}>
                <span className={s.heroStatNum}>200+</span>
                <span className={s.heroStatLabel}>Funnels Launched</span>
              </div>
              <div className={s.heroStat}>
                <span className={s.heroStatNum}>$12M+</span>
                <span className={s.heroStatLabel}>Revenue Generated</span>
              </div>
              <div className={s.heroStat}>
                <span className={s.heroStatNum}>4.9★</span>
                <span className={s.heroStatLabel}>Average Rating</span>
              </div>
            </div>
          </div>
        </section>

        {/* NICHES STRIP */}
        <section className={s.niches}>
          <div className={s.nichesInner}>
            <p className={s.nichesLabel}>We Build Funnels For</p>
            <div className={s.nichesGrid}>
              {niches.map((n) => (
                <div key={n.label} className={s.nicheTag}>
                  <span className={s.icon}>{n.icon}</span>
                  {n.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className={s.problem}>
          <div className={s.problemInner}>
            <div className={s.problemContent}>
              <div className={s.eyebrow}>The Real Problem</div>
              <h2 className={s.problemTitle}>
                Your Expertise Is World-Class.{' '}
                <span className={s.gradientText}>Your Funnel&nbsp;Isn&apos;t.</span>
              </h2>
              <p className={s.lead}>
                You&apos;re spending thousands on ads, posting every day, and still watching
                hot leads go cold. The problem isn&apos;t your offer — it&apos;s where you&apos;re
                sending them.
              </p>
              <div className={s.problemList}>
                {[
                  'Visitors arrive and bounce in under 10 seconds',
                  'Your opt-in page has a 5% CVR (industry avg is 40%+)',
                  'No follow-up sequence means leads forget you by tomorrow',
                  'Your checkout is losing 70% of buyers at the final step',
                ].map((item) => (
                  <div key={item} className={s.problemItem}>
                    <span className={s.icon}>✗</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={s.problemVisual}>
              <div className={s.problemCard}>
                <div className={s.problemCardHeader}>
                  <div className={s.problemCardDot} />
                  <span className={s.problemCardTitle}>Your Funnel Analytics — Right Now</span>
                </div>
                {[
                  { label: 'Landing Page CVR',    value: '4.2%',    cls: 'bad' },
                  { label: 'Ad → Lead Cost',       value: '$87',     cls: 'bad' },
                  { label: 'Email Open Rate',      value: '11%',     cls: 'warn' },
                  { label: 'Checkout Completion',  value: '22%',     cls: 'bad' },
                  { label: 'Monthly Revenue',      value: '$1,200',  cls: 'warn' },
                ].map((m) => (
                  <div key={m.label} className={s.problemMetric}>
                    <span className={s.problemMetricLabel}>{m.label}</span>
                    <span className={`${s.problemMetricValue} ${s[m.cls]}`}>{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTION / FEATURES */}
        <section className={s.solution}>
          <div className={s.solutionInner}>
            <div className={s.solutionHeader}>
              <div className={s.eyebrow}>The Solution</div>
              <h2>Everything You Need to Convert Strangers Into Clients</h2>
              <p className={s.lead}>
                A done-for-you funnel system built by experts who live and breathe
                conversions — so you can focus on coaching.
              </p>
            </div>
            <div className={s.featuresGrid}>
              {features.map((f) => (
                <div key={f.title} className={s.featureCard}>
                  <div className={s.featureIcon}>{f.icon}</div>
                  <h3 className={s.featureTitle}>{f.title}</h3>
                  <p className={s.featureDesc}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className={s.process}>
          <div className={s.processInner}>
            <div className={s.sectionHeader}>
              <div className={s.eyebrow}>The Process</div>
              <h2>From Zero to Live in 3 Simple Steps</h2>
            </div>
            <div className={s.processSteps}>
              {steps.map((step) => (
                <div key={step.num} className={s.processStep}>
                  <div className={s.processStepNum}>{step.num}</div>
                  <h3 className={s.processStepTitle}>{step.title}</h3>
                  <p className={s.processStepDesc}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NICHE SHOWCASE */}
        <section className={s.showcase}>
          <div className={s.showcaseInner}>
            <div className={s.sectionHeader}>
              <div className={s.eyebrow}>Built For Your Niche</div>
              <h2>Custom Funnels for Every Coaching Model</h2>
              <p className={s.lead}>
                Whether you sell a $997 course or a $25,000 mastermind, we know the
                funnel architecture that converts in your market.
              </p>
            </div>
            <div className={s.showcaseGrid}>
              {showcaseNiches.map((n) => (
                <div key={n.id} className={s.showcaseCard} data-niche={n.id}>
                  <span className={s.showcaseEmoji}>{n.emoji}</span>
                  <h3 className={s.showcaseCardTitle}>{n.title}</h3>
                  <p className={s.showcaseCardDesc}>{n.desc}</p>
                  <div className={s.showcaseCardFeatures}>
                    {n.features.map((f) => (
                      <span key={f} className={s.showcaseCardFeature}>{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className={s.pricing}>
          <div className={s.pricingBg} aria-hidden="true" />
          <div className={s.pricingInner}>
            <div className={s.sectionHeader}>
              <div className={s.eyebrow}>Transparent Pricing</div>
              <h2>Invest Once. Convert Forever.</h2>
              <p className={s.lead}>
                No retainers. No hidden fees. Pay once and own your funnel outright.
              </p>
            </div>
            <div className={s.pricingGrid}>
              {plans.map((plan) => (
                <div
                  key={plan.title}
                  className={`${s.pricingCard} ${plan.featured ? s['pricingCard--featured'] : ''}`}
                >
                  {plan.badge && (
                    <div className={s.pricingBadge}>{plan.badge}</div>
                  )}
                  <h3 className={s.pricingCardTitle}>{plan.title}</h3>
                  <p className={s.pricingCardDesc}>{plan.desc}</p>
                  <div className={s.pricingPrice}>
                    <div className={s.pricingAmount}>
                      <sup>$</sup>{plan.price}
                    </div>
                    <p className={s.pricingAmountNote}>One-time investment</p>
                  </div>
                  <div className={s.pricingFeatures}>
                    {plan.features.map((f) => (
                      <div
                        key={f.text}
                        className={`${s.pricingFeature} ${!f.included ? s.muted : ''}`}
                      >
                        <span className={s.check}>{f.included ? '✓' : '✗'}</span>
                        {f.text}
                      </div>
                    ))}
                  </div>
                  <a href="#contact" className={s.pricingCta}>
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className={s.testimonials}>
          <div className={s.testimonialsInner}>
            <div className={s.sectionHeader}>
              <div className={s.eyebrow}>Client Results</div>
              <h2>Coaches Who Scaled With CWGFunnl</h2>
            </div>
            <div className={s.testimonialsGrid}>
              {testimonials.map((t) => (
                <div key={t.name} className={s.testimonialCard}>
                  <div className={s.testimonialStars}>{'★'.repeat(t.stars)}</div>
                  <p className={s.testimonialText}>{t.text}</p>
                  <div className={s.testimonialAuthor}>
                    <div className={s.testimonialAvatar}>{t.initials}</div>
                    <div>
                      <p className={s.testimonialName}>{t.name}</p>
                      <p className={s.testimonialRole}>{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className={s.faq}>
          <div className={s.faqInner}>
            <div className={s.sectionHeader}>
              <div className={s.eyebrow}>FAQ</div>
              <h2>Questions Answered</h2>
            </div>
            <div className={s.faqList}>
              {faqs.map((item, i) => (
                <div
                  key={item.q}
                  className={s.faqItem}
                  data-open={openFaq === i ? 'true' : 'false'}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className={s.faqQuestion}>
                    <span className={s.faqQuestionText}>{item.q}</span>
                    <span className={s.faqIcon}>+</span>
                  </div>
                  <p className={s.faqAnswer}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="contact" className={s.cta}>
          <div className={s.ctaBg} aria-hidden="true" />
          <div className={s.ctaOrb} aria-hidden="true" />
          <div className={s.ctaInner}>
            <div className={s.eyebrow}>Ready to Scale?</div>
            <h2 className={s.ctaTitle}>
              Your Next Client Is One{' '}
              <span className={s.highlight}>Great Funnel</span> Away
            </h2>
            <p className={s.ctaSubtitle}>
              Let&apos;s build the funnel your expertise deserves. Discovery calls are
              free and commitment-free.
            </p>
            <div className={s.ctaActions}>
              <button onClick={openModal} className={s.ctaBtn}>
                Start Building →
              </button>
            </div>
            <p className={s.ctaNote}>
              ✓ Free discovery call &nbsp;·&nbsp; ✓ No contracts &nbsp;·&nbsp; ✓ 14-day support included
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className={s.footer}>
        <div className={s.footerInner}>
          <div className={s.footerBrand}>
            <div className={s.footerLogo}>CWG<span>Funnl</span></div>
            <p className={s.footerTagline}>
              Done-for-you sales funnels for coaches, educators, and online experts
              who are serious about scaling.
            </p>
          </div>
          <div className={s.footerCol}>
            <h4 className={s.footerColTitle}>Services</h4>
            <div className={s.footerColLinks}>
              {['Starter Funnel', 'Pro Funnel', 'Scale System', 'Funnel Audit'].map((l) => (
                <a key={l} href="#pricing" className={s.footerLink}>{l}</a>
              ))}
            </div>
          </div>
          <div className={s.footerCol}>
            <h4 className={s.footerColTitle}>Niches</h4>
            <div className={s.footerColLinks}>
              {['Business Coach', 'Dental Coach', 'Mindset Coach', 'Webinar & Events'].map((l) => (
                <a key={l} href="#" className={s.footerLink}>{l}</a>
              ))}
            </div>
          </div>
          <div className={s.footerCol}>
            <h4 className={s.footerColTitle}>Company</h4>
            <div className={s.footerColLinks}>
              {['About', 'Results', 'FAQ', 'Contact'].map((l) => (
                <a key={l} href="#" className={s.footerLink}>{l}</a>
              ))}
            </div>
          </div>
        </div>
        <div className={s.footerBottom}>
          <p className={s.footerCopy}>© 2026 CWGFunnl. All rights reserved.</p>
          <div className={s.footerLegal}>
            <a href="#" className={s.footerLegalLink}>Privacy Policy</a>
            <a href="#" className={s.footerLegalLink}>Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* FORM MODAL */}
      {modalOpen && (
        <div className={s.modalOverlay} onClick={closeModal} role="dialog" aria-modal="true" aria-label="Strategy Funnel Form">
          <div className={s.modalPanel} onClick={(e) => e.stopPropagation()}>
            <div className={s.modalHeader}>
              <div>
                <p className={s.modalEyebrow}>Free Strategy Session</p>
                <h2 className={s.modalTitle}>Let&apos;s Build Your Funnel</h2>
              </div>
              <button className={s.modalClose} onClick={closeModal} aria-label="Close">✕</button>
            </div>
            <div className={s.modalBody}>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/vlR69EFkQpiQzeoshquc"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
                id="inline-vlR69EFkQpiQzeoshquc"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Strategy Funnel - Form"
                data-height="461"
                data-layout-iframe-id="inline-vlR69EFkQpiQzeoshquc"
                data-form-id="vlR69EFkQpiQzeoshquc"
                title="Strategy Funnel - Form"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
