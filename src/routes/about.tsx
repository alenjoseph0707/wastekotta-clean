import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Target, Eye, User } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Wastekotta" },
      { name: "description", content: "Our mission, vision, and the founders behind Wastekotta — building a cleaner, greener future." },
      { property: "og:title", content: "About Us — Wastekotta" },
      { property: "og:description", content: "Mission, vision and founders of Wastekotta." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border/60 bg-[var(--gradient-soft)]">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center md:py-20">
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-background px-3 py-1 text-xs font-medium text-primary">
            About Wastekotta
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Driven by a cleaner tomorrow
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We believe waste is a resource in the wrong place. Wastekotta is our step toward
            putting it where it belongs — back into a useful cycle.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
            <Target className="h-6 w-6" />
          </div>
          <h2 className="mt-4 text-2xl font-bold">Our Mission</h2>
          <p className="mt-3 text-muted-foreground">
            To make responsible waste management effortless for every household and business —
            through reliable collection, smart sorting, and education that turns small daily
            actions into lasting environmental impact.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
            <Eye className="h-6 w-6" />
          </div>
          <h2 className="mt-4 text-2xl font-bold">Our Vision</h2>
          <p className="mt-3 text-muted-foreground">
            A future where no neighbourhood struggles with waste — where technology, community
            and care work together to keep our cities clean and our planet green.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Meet the Founders</h2>
          <p className="mt-3 text-muted-foreground">The people behind the mission.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {[
            { name: "Sulfi", role: "Co-Founder" },
            { name: "Alen", role: "Co-Founder" },
          ].map((f) => (
            <div
              key={f.name}
              className="group rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-soft)]">
                <User className="h-9 w-9" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{f.name}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{f.role}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
