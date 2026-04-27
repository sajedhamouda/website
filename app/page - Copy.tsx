import Container from "@/components/Container";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Section>
        <Container>
          <div className="space-y-8">
            
            <Reveal>
              <p className="text-sm tracking-widest text-gray-500 uppercase">
                AI Visibility Platform
              </p>
            </Reveal>

            <Reveal>
              <h1 className="text-6xl font-semibold leading-tight">
                Understand how AI sees your brand
              </h1>
            </Reveal>

            <Reveal>
              <p className="text-lg text-gray-600 max-w-[520px]">
                Track, analyze, and optimize your presence inside AI-generated answers across modern search systems.
              </p>
            </Reveal>

            <Reveal>
              <div className="flex gap-4 pt-4">
                <button className="px-6 py-3 bg-black text-white rounded-full text-sm">
                  Get Started
                </button>

                <button className="px-6 py-3 border border-gray-300 rounded-full text-sm">
                  Learn More
                </button>
              </div>
            </Reveal>

          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <p className="text-gray-600">
              Scroll to continue...
            </p>
          </Reveal>
        </Container>
      </Section>

    </main>
  );
}