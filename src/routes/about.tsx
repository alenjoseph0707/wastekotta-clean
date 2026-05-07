import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Target, Eye, Sparkles, Recycle } from "lucide-react";
import sulfikkarImg from "@/assets/founder-sulfikkar.jpg";
import alenImg from "@/assets/founder-alen.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Wastekotta" },
      {
        name: "description",
        content:
          "Our mission, vision, and the founders behind Wastekotta — building a cleaner, greener future.",
      },
      { property: "og:title", content: "About Us — Wastekotta" },
      { property: "og:description", content: "Mission, vision and founders of Wastekotta." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      {/* Animated background */}
      <div className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-pulse" />
          <div
            className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-[oklch(0.75_0.12_180)]/20 blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-primary-glow/20 blur-3xl animate-pulse"
            style={{ animationDelay: "3s" }}
          />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        {/* Hero */}
        <section className="mx-auto max-w-5xl px-4 pt-20 pb-10 text-center md:pt-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/60 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> About Wastekotta
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl">
              Building the future of{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                waste, reimagined
              </span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
              A technology-driven ecosystem turning everyday waste into lasting value — for
              people, businesses, and the planet.
            </p>
          </Reveal>
        </section>

        {/* Mission */}
        <section className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          <Reveal>
            <article className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/70 p-8 shadow-[var(--shadow-card)] backdrop-blur-xl md:p-12">
              <div
                aria-hidden
                className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gradient-hero opacity-20 blur-2xl"
              />
              <div className="relative flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero text-primary-foreground shadow-[var(--shadow-soft)]">
                    <Target className="h-7 w-7" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                    Our Mission
                  </h2>
                </div>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  <p>
                    To transform the way waste is managed by building a reliable,
                    technology-driven system that connects people, collectors, and recyclers
                    into one seamless network.
                  </p>
                  <p>
                    We aim to make waste disposal effortless for households and businesses
                    while ensuring that every piece of waste is properly tracked, collected,
                    and directed toward its highest possible value.
                  </p>
                  <p>
                    Through innovation and efficient logistics, we are committed to reducing
                    environmental impact, improving livelihoods within the waste ecosystem, and
                    turning everyday waste into a sustainable economic opportunity.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        </section>

        {/* Vision */}
        <section className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          <Reveal>
            <article className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-soft p-8 shadow-[var(--shadow-card)] backdrop-blur-xl md:p-12">
              <div
                aria-hidden
                className="absolute -left-16 -bottom-16 h-72 w-72 rounded-full bg-primary-glow/30 blur-2xl"
              />
              <div
                aria-hidden
                className="absolute right-6 top-6 opacity-10"
              >
                <Recycle className="h-40 w-40 text-primary" />
              </div>
              <div className="relative flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-background text-primary ring-1 ring-primary/30 shadow-[var(--shadow-soft)]">
                    <Eye className="h-7 w-7" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                    Our Vision
                  </h2>
                </div>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  <p>
                    To create a waste-free society where no material is wasted, and every
                    resource is continuously reused, recycled, or repurposed.
                  </p>
                  <p>
                    We envision a future where waste flows through a structured and intelligent
                    system—eliminating inefficiencies, reducing environmental harm, and
                    unlocking its full economic potential.
                  </p>
                  <p>
                    By becoming a widely trusted and adopted platform, we strive to redefine
                    waste management as an organized, scalable, and value-driven ecosystem that
                    benefits communities, businesses, and the planet.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        </section>

        {/* Founders */}
        <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <Reveal>
            <div className="text-center">
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-background/60 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
                The team
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                Meet the Founders
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Two builders on a mission to make sustainability the default.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                name: "Sulfikkar",
                role: "Co-Founder · Strategy & Partnerships",
                bio: "Drives strategy and partnerships with a focus on real-world adoption—making sure Wastekotta solves problems operators and citizens face every day.",
                img: sulfikkarImg,
              },
              {
                name: "Alen Joseph",
                role: "Co-Founder · Product & Technology",
                bio: "Leads product and technology direction—shipping a dependable experience today while laying the groundwork for the full platform ahead.",
                img: alenImg,
              },
            ].map((f, i) => (
              <Reveal key={f.name} delay={i * 150}>
                <div className="group relative h-full rounded-3xl p-[1.5px] transition-all duration-500 hover:scale-[1.015]">
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/60 via-primary-glow/40 to-[oklch(0.75_0.12_180)]/40 opacity-60 blur-[2px] transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="relative h-full rounded-3xl border border-border/60 bg-card/80 p-8 text-center shadow-[var(--shadow-card)] backdrop-blur-xl">
                    <div className="relative mx-auto h-32 w-32">
                      <div
                        aria-hidden
                        className="absolute -inset-2 rounded-full bg-gradient-hero opacity-40 blur-xl transition-opacity duration-500 group-hover:opacity-70"
                      />
                      <img
                        src={f.img}
                        alt={`${f.name} — co-founder of Wastekotta`}
                        className="relative h-32 w-32 rounded-full object-cover ring-4 ring-background shadow-[var(--shadow-soft)] transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold tracking-tight">{f.name}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{f.role}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {f.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
