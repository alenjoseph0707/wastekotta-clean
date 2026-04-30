import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Wastekotta" },
      { name: "description", content: "Get in touch with Wastekotta. Email us at wastekottaas@gmail.com." },
      { property: "og:title", content: "Contact — Wastekotta" },
      { property: "og:description", content: "Reach the Wastekotta team by email." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-4 py-20 text-center md:py-28">
        <span className="inline-flex items-center rounded-full border border-primary/30 bg-accent px-3 py-1 text-xs font-medium text-primary">
          Contact
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
          We'd love to hear from you
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Have a question, partnership idea, or want to bring Wastekotta to your area?
          Drop us a line — we read every message.
        </p>

        <div className="mx-auto mt-10 max-w-md rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-soft)]">
            <Mail className="h-7 w-7" />
          </div>
          <p className="mt-5 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Email us
          </p>
          <a
            href="mailto:wastekottaas@gmail.com"
            className="mt-2 block break-all text-xl font-bold text-primary hover:underline md:text-2xl"
          >
            wastekottaas@gmail.com
          </a>
          <a
            href="mailto:wastekottaas@gmail.com"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:bg-[var(--primary-deep)]"
          >
            <Mail className="h-4 w-4" /> Send a message
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
