import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

const features = [
  {
    title: "Visibility analysis",
    description:
      "See when your brand appears in AI responses, how prominently it’s mentioned and which competitors are surfaced alongside you over time.",
  },
  {
    title: "Sentiment insight",
    description:
      "Understand how AI describes your brand. The language it uses, the confidence of its references and the trust signals it relies on.",
  },
  {
    title: "Actionable direction",
    description:
      "Identify where visibility is strong, where it drops away and where opportunity exists. Solais highlights the sources that influence how AI engines surface your brand.",
  },
];

const processSteps = [
  {
    number: "01",
    label: "Strategising",
    title: "Set your prompts",
    description:
      "Define the questions people ask when they’re trying to learn, compare or decide. These might include category research, brand comparisons or product recommendations relevant to your market.",
  },
  {
    number: "02",
    label: "Analysing",
    title: "Track responses",
    description:
      "Solais runs these prompts repeatedly, capturing how responses evolve over time. See if and when you appear, how early you’re mentioned and how you’re framed alongside competing brands.",
  },
  {
    number: "03",
    label: "Optimising",
    title: "Act with confidence",
    description:
      "Solais surfaces patterns across responses to show which sources influence visibility and where changes to content, PR, directory, socials or overall online presence can improve outcomes.",
  },
];

const advantages = [
  {
    title: "Transparent reporting",
    description:
      "Solais makes AI visibility easy to communicate beyond your team. Export clear, shareable reports that summarise visibility, sentiment and changes over selected time periods.",
  },
  {
    title: "Functional dashboards",
    description:
      "Key metrics including visibility, sentiment, rankings, sources and live prompt simulation are easily accessible, designed to be understood without specialist knowledge.",
  },
  {
    title: "Model visibility",
    description:
      "Track outputs across leading large language models and compare how visibility differs across each model.",
  },
  {
    title: "Verified data",
    description:
      "Every result is captured from real prompt simulation, creating an exact record of how a question was answered at that moment in time.",
  },
];

const industries = [
  {
    number: "01",
    title: "Marketing Teams",
    description:
      "Use Solais to understand AI visibility across key prompts and make informed decisions that guide content, messaging and distribution.",
  },
  {
    number: "02",
    title: "Agencies",
    description:
      "Benchmark clients clearly, support GEO strategies with evidence and show organic progress beyond traditional SEO metrics.",
  },
  {
    number: "03",
    title: "Brand Managers",
    description:
      "Track how AI speaks about your brand across categories and use cases, and understand how that narrative shifts over time.",
  },
  {
    number: "04",
    title: "Business Leaders",
    description:
      "Gain a clearer view of market perception, competitor movement and how audiences are using AI to research and compare.",
  },
];

const repeatedIndustries = [...industries, ...industries];

const demoCards = [
  {
    title: "Schedule a Demo",
    description: "See Solais in action and discover how it can work for you.",
  },
  {
    title: "Set your prompts",
    description:
      "Define the questions that shape discovery and comparison in your market.",
  },
  {
    title: "Track your presence",
    description:
      "See how your brand appears in AI search and improve it over time.",
  },
];

export default function Home() {
  return (
    <main className="bg-background text-foreground selection:bg-black selection:text-white">
      <header className="border-b border-line/70">
        <Container>
          <nav className="flex items-center justify-between py-6 text-sm">
            <p className="font-semibold tracking-[0.24em]">SOLAIS</p>
            <span className="text-xs uppercase tracking-[0.16em] text-muted">
              AI Visibility Platform
            </span>
          </nav>
        </Container>
      </header>

      <Section id="about" spacing="lg" className="pt-20 md:pt-30">
        <Container className="max-w-6xl">
          <div className="space-y-7 md:space-y-9">
            <Reveal>
              <p className="max-w-sm text-sm leading-relaxed text-muted">
                A visibility and intelligence platform that monitors AI-driven
                discovery.
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="max-w-[980px] font-serif text-[42px] leading-[1.01] tracking-tight md:text-[94px]">
                Analytics for
                <br />
                <span className="tracking-[0.02em]">VISIBILITY</span>
                <br />
                <span className="tracking-[0.02em]">IN AI SEARCH</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="max-w-[700px] text-[15px] leading-relaxed text-muted md:text-[18px]">
                People don’t search for information the way they used to. They
                ask questions, and AI answers. Solais shows how your brand
                appears within those answers, and how that visibility shifts
                over time.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-3.5 pt-2 md:pt-3">
                <button className="rounded-full bg-foreground px-7 py-3 text-[13px] text-white transition-colors hover:bg-black/85">
                  Get Started
                </button>
                <button className="rounded-full border border-line bg-surface px-7 py-3 text-[13px] text-foreground transition-colors hover:border-foreground/30">
                  Schedule a Demo
                </button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section
        id="features"
        spacing="md"
        className="border-y border-line bg-surface py-24 md:py-32"
      >
        <Container className="max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Understanding
            </p>
          </Reveal>
          <Reveal delay={0.04}>
            <h2 className="mt-3 max-w-xl font-serif text-4xl leading-tight md:text-6xl">
              What is
              <br />
              Solais?
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:mt-16 md:grid-cols-3">
            {features.map((item, index) => (
              <Reveal key={item.title} delay={0.05 + index * 0.05}>
                <article className="space-y-4 border-l border-line pl-5">
                  <h3 className="text-[22px] leading-snug">{item.title}</h3>
                  <p className="max-w-[360px] text-[14px] leading-relaxed text-muted">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section
        id="how-it-works"
        spacing="md"
        className="border-b border-line py-24 md:py-32"
      >
        <Container className="max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              How it Works
            </p>
          </Reveal>
          <Reveal delay={0.04}>
            <h2 className="mt-3 max-w-lg font-serif text-4xl leading-tight md:text-6xl">
              Discovering
              <br />
              Your voice
            </h2>
          </Reveal>

          <div className="mt-12 space-y-9 md:mt-14 md:space-y-11">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} delay={0.05 + index * 0.04}>
                <div className="grid gap-4 border-b border-line pb-9 md:grid-cols-[60px_120px_1fr] md:pb-10">
                  <p className="text-sm text-muted">{step.number}</p>
                  <p className="text-sm text-muted">{step.label}</p>
                  <div className="space-y-3">
                    <h3 className="text-[28px] leading-tight md:text-[30px]">
                      {step.title}
                    </h3>
                    <p className="max-w-[860px] text-[14px] leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="advantage" spacing="md" className="bg-surface py-24 md:py-32">
        <Container className="max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Your advantage
            </p>
          </Reveal>
          <Reveal delay={0.04}>
            <h2 className="mt-3 max-w-2xl font-serif text-4xl leading-tight md:text-6xl">
              Why brands
              <br />
              choose Solais
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-7 md:mt-14 md:grid-cols-2">
            {advantages.map((item, index) => (
              <Reveal key={item.title} delay={0.05 + index * 0.04}>
                <article className="space-y-3 border-b border-line pb-7">
                  <h3 className="text-[24px] leading-snug">{item.title}</h3>
                  <p className="max-w-[500px] text-[14px] leading-relaxed text-muted">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 grid gap-4 border-t border-line pt-8 md:grid-cols-[1fr_auto] md:items-center">
              <div className="grid gap-2 text-2xl text-muted md:grid-cols-6 md:text-3xl">
                <span>Solais</span>
                <span>Solais</span>
                <span>Solais</span>
                <span>Solais</span>
                <span>Solais</span>
                <span>Solais</span>
              </div>
              <div className="h-20 w-20 rounded-2xl border border-line bg-gradient-to-br from-[#f1eee6] to-white" />
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section
        id="industries"
        spacing="md"
        className="border-y border-line bg-background py-24 md:py-32"
      >
        <Container className="max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Find Your Industry
            </p>
          </Reveal>
          <Reveal delay={0.04}>
            <h2 className="mt-3 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
              Built for the teams responsible for how brands are seen.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-8 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-muted md:mt-10">
              <p>Drag</p>
              <button className="rounded-full border border-line bg-surface px-5 py-2 text-foreground transition-colors hover:border-foreground/30">
                Get Started
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-7 -mx-2 overflow-x-auto px-2 pb-2 hide-scrollbar md:mt-8">
              <div className="flex min-w-max gap-4.5 md:gap-5">
                {repeatedIndustries.map((industry, index) => (
                  <article
                    key={`${industry.title}-${index}`}
                    className="flex h-full w-[280px] flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-foreground/25 md:w-[300px] md:p-7"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">
                      ai
                    </p>
                    <p className="mt-6 text-xs text-muted">{industry.number}</p>
                    <h3 className="mt-3 text-xl">{industry.title}</h3>
                    <p className="mt-4 text-[14px] leading-relaxed text-muted">
                      {industry.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section spacing="sm" className="pt-0">
        <Container className="max-w-6xl">
          <Reveal>
            <div className="rounded-3xl border border-line bg-surface p-8 md:p-12">
              <h3 className="max-w-[820px] font-serif text-[34px] leading-tight md:text-[56px]">
                Take control of the conversation
              </h3>
              <p className="mt-5 max-w-[760px] text-[14px] leading-relaxed text-muted md:mt-6 md:text-[16px]">
                AI engines have already formed opinions about your brand. Solais
                gives you a look inside that conversation, and the power to
                influence how it evolves.
              </p>
              <button className="mt-7 rounded-full bg-foreground px-7 py-3 text-[13px] text-white transition-colors hover:bg-black/85 md:mt-8">
                Get Started
              </button>

              <div className="mt-8 grid gap-6 border-t border-line pt-7 md:mt-10 md:grid-cols-3 md:pt-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted">
                    Active Users
                  </p>
                  <p className="mt-2 text-3xl font-semibold">12</p>
                </div>
                {demoCards.slice(1).map((card) => (
                  <div key={card.title}>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted">
                      {card.title}
                    </p>
                    <p className="mt-2 max-w-[320px] text-[14px] leading-relaxed text-muted">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <footer className="border-t border-line bg-surface">
        <Container className="max-w-6xl">
          <div className="grid gap-10 py-14 md:grid-cols-[1.15fr_0.75fr_1.1fr] md:gap-12 md:py-16">
            <div>
              <p className="text-sm font-semibold tracking-[0.18em]">SOLAIS</p>
              <p className="mt-4 max-w-[340px] text-sm leading-relaxed text-muted">
                People don’t search for information the way they used to. They
                ask questions, and AI answers.
              </p>
              <div className="mt-6 flex gap-5 text-sm text-muted">
                <a href="#" className="transition-colors hover:text-foreground">
                  LinkedIn
                </a>
                <a href="#" className="transition-colors hover:text-foreground">
                  Instagram
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                Explore
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#about" className="transition-colors hover:text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                Get started
              </p>
              <p className="mt-3 text-xs text-muted">* indicates required fields</p>
              <form className="mt-4 space-y-2.5">
                <input
                  type="text"
                  placeholder="First name*"
                  className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-foreground/40"
                />
                <input
                  type="text"
                  placeholder="Last name*"
                  className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-foreground/40"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-foreground/40"
                />
                <button
                  type="submit"
                  className="w-full rounded-xl bg-foreground px-5 py-3 text-sm text-white transition-colors hover:bg-black/85"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="grid gap-5 border-t border-line py-7 md:grid-cols-3 md:py-8">
            {demoCards.map((card, index) => (
              <Reveal key={card.title} delay={0.02 * index}>
                <article className="rounded-2xl border border-line p-6">
                  <h4 className="text-base">{card.title}</h4>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">
                    {card.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="flex flex-col gap-2 border-t border-line py-5 text-xs text-muted md:flex-row md:items-center md:justify-between md:py-6">
            <p>© 2026 The Start. All Rights Reserved.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="transition-colors hover:text-foreground">
                Terms & conditions
              </a>
              <a href="#" className="transition-colors hover:text-foreground">
                Privacy policy
              </a>
              <a href="#" className="transition-colors hover:text-foreground">
                Site by The Start
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
