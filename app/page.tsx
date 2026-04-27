import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { tokens } from "@/src/styles/tokens";

const features = [
  {
    title: "Visibility Analysis",
    description:
      "Track when your brand appears in AI answers and how prominently it is mentioned.",
  },
  {
    title: "Sentiment Insight",
    description:
      "Understand how AI systems describe your brand, tone, and trust signals over time.",
  },
  {
    title: "Actionable Direction",
    description:
      "Identify opportunities and improve your content to strengthen AI search visibility.",
  },
];

const process = [
  {
    step: "01",
    title: "Set your prompts",
    description:
      "Define the questions your audience asks during discovery, comparison, and decision-making.",
  },
  {
    step: "02",
    title: "Analyze responses",
    description:
      "Monitor how AI answers evolve, when your brand appears, and how you compare to competitors.",
  },
  {
    step: "03",
    title: "Improve visibility",
    description:
      "Use insights to optimize messaging, content, and presence across the sources AI relies on.",
  },
];

export default function Home() {
  return (
    <main className={`${tokens.color.bg} ${tokens.color.text.primary}`}>
      <Section>
        <Container>
          <div className={tokens.spacing.block}>
            <Reveal>
              <p className={tokens.color.text.secondary}>AI Visibility Platform</p>
            </Reveal>

            <Reveal>
              <h1 className="text-5xl leading-tight md:text-7xl">
                Analytics for Visibility in AI Search
              </h1>
            </Reveal>

            <Reveal>
              <p className={tokens.color.text.secondary}>
                Solais helps teams monitor how brands appear in AI-generated
                answers and improve visibility with clear, actionable insights.
              </p>
            </Reveal>

            <Reveal>
              <div className={`flex flex-wrap ${tokens.spacing.gap}`}>
                <button className="rounded-full border border-[#0A0A0A] px-6 py-3 text-[#0A0A0A]">
                  Get Started
                </button>
                <button className="rounded-full border border-[#EDEDED] px-6 py-3 text-[#0A0A0A]">
                  Schedule a Demo
                </button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className={tokens.spacing.block}>
            <Reveal>
              <h2 className="text-4xl leading-tight md:text-5xl">Features</h2>
            </Reveal>

            <div className={`grid md:grid-cols-3 ${tokens.spacing.gap}`}>
              {features.map((feature) => (
                <Reveal key={feature.title}>
                  <article className={`border ${tokens.color.border} ${tokens.radius.card} p-6`}>
                    <h3 className="text-2xl leading-tight">{feature.title}</h3>
                    <p className={`mt-4 ${tokens.color.text.secondary}`}>
                      {feature.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className={tokens.spacing.block}>
            <Reveal>
              <h2 className="text-4xl leading-tight md:text-5xl">Process</h2>
            </Reveal>

            <div className={tokens.spacing.block}>
              {process.map((item) => (
                <Reveal key={item.step}>
                  <article className={`border-b ${tokens.color.border} pb-8`}>
                    <p className={tokens.color.text.secondary}>{item.step}</p>
                    <h3 className="mt-4 text-3xl leading-tight">{item.title}</h3>
                    <p className={`mt-4 ${tokens.color.text.secondary}`}>
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <div className={`border ${tokens.color.border} ${tokens.radius.card} p-8 md:p-12`}>
              <h2 className="text-4xl leading-tight md:text-5xl">
                Take control of the conversation
              </h2>
              <p className={`mt-6 ${tokens.color.text.secondary}`}>
                AI engines already shape brand perception. Solais gives you the
                clarity and direction to improve how your brand is represented.
              </p>
              <button className="mt-8 rounded-full border border-[#0A0A0A] px-6 py-3 text-[#0A0A0A]">
                Get Started
              </button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </main>
  );
}
