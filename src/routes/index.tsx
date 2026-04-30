import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import heroImg from "@/assets/hero-nature.jpg";
import { Recycle, Truck, Leaf, ShieldCheck, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wastekotta — Smarter Waste Management" },
      { name: "description", content: "Wastekotta brings cleaner neighbourhoods through smart, reliable, and eco-friendly waste management services." },
      { property: "og:title", content: "Wastekotta — Smarter Waste Management" },
      { property: "og:description", content: "Cleaner neighbourhoods through smart, reliable, eco-friendly waste management." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" className="h-full w-full object-cover opacity-25" width={1536} height={1024} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
              <Leaf className="h-3.5 w-3.5" /> Eco-first waste management
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Cleaner streets.{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Greener tomorrow.
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
              Wastekotta is on a mission to transform how communities collect, sort and recycle waste —
              making sustainability simple, reliable and accessible to everyone.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:bg-[var(--primary-deep)]"
              >
                About us <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="mailto:wastekottaas@gmail.com"
                className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-background px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-accent"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What we do</h2>
          <p className="mt-3 text-muted-foreground">Practical services built around your community.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Truck, title: "Smart Collection", text: "Reliable doorstep waste pickup, scheduled and tracked for your locality." },
            { icon: Recycle, title: "Recycle & Reuse", text: "Sorting at source so recyclables get a second life, not a landfill." },
            { icon: ShieldCheck, title: "Safe Disposal", text: "Hygienic handling of organic and non-recyclable waste, the right way." },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="overflow-hidden rounded-3xl bg-gradient-hero px-6 py-12 text-center shadow-[var(--shadow-soft)] md:px-12 md:py-16">
          <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">
            Building a bigger platform — soon.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-primary-foreground/90 md:text-base">
            This is just the beginning. We're crafting a complete web app to make waste management
            seamless for households, businesses and cities. Stay in touch to be the first to know.
          </p>
          <a
            href="mailto:wastekottaas@gmail.com"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-background px-5 py-3 text-sm font-semibold text-primary transition-transform hover:scale-105"
          >
            wastekottaas@gmail.com
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
