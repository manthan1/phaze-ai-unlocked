import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Phaze AI × JECRC University — AI Workshop for Business Owners, Jaipur" },
      {
        name: "description",
        content:
          "Practical AI workshop for business owners. 18th July, JECRC University Jaipur. Two sessions: AI for Business + AI for Content & Social Media Scaling.",
      },
      { property: "og:title", content: "Phaze AI × JECRC — AI Workshop for Business Owners" },
      {
        property: "og:description",
        content:
          "AI, made useful for your business. Saturday 18th July, JECRC University, Jaipur. ₹1,999/session or ₹2,999 combined.",
      },
    ],
  }),
  component: Landing,
});

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-foreground text-background font-display text-lg font-bold">
          P
        </div>
        <span className="font-display text-lg font-semibold tracking-tight hidden sm:inline">
          Phaze AI
        </span>
      </div>
      <span className="text-muted-foreground/60 font-display text-lg">×</span>
      <div className="flex items-center gap-2">
        <div className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface-elevated font-display text-sm font-bold">
          JU
        </div>
        <span className="font-display text-lg font-semibold tracking-tight hidden sm:inline">
          JECRC
        </span>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#sessions" className="hover:text-foreground">Sessions</a>
          <a href="#outcomes" className="hover:text-foreground">Outcomes</a>
          <a href="#trainer" className="hover:text-foreground">Trainer</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
        </nav>
        <a
          href="#register"
          className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition hover:opacity-90"
        >
          Reserve seat
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 grain opacity-50" />
      <div
        className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent-lime), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-3 py-1.5 text-xs font-medium text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-lime" />
          Phaze AI × JECRC University · Jaipur · 18 July
        </div>

        <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-balance md:text-7xl lg:text-8xl">
          AI, made useful
          <br />
          for your <span className="italic text-muted-foreground">business.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Learn how to use AI in your business, and how to scale your brand on social media —
          practical sessions built for business owners, not engineers.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#register"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-base font-medium text-background transition hover:opacity-90"
          >
            Reserve your seat
            <span className="transition group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#sessions"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-base font-medium text-foreground transition hover:bg-surface"
          >
            See the sessions
          </a>
        </div>

        <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4">
          {[
            ["Date", "Sat, 18 July"],
            ["Time", "12 PM – 5 PM"],
            ["Venue", "JECRC, Jaipur"],
            ["Price", "₹1,999 / session"],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">{k}</dt>
              <dd className="mt-1 font-display text-lg font-medium">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["ChatGPT", "Claude", "Gemini", "NotebookLM", "AI Agents", "Content Systems", "SEO & Ads", "Operations"];
  return (
    <div className="overflow-hidden border-b border-border/60 bg-surface py-5">
      <div className="marquee flex w-max gap-12 whitespace-nowrap text-sm uppercase tracking-widest text-muted-foreground">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-12">
            {it}
            <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Why() {
  return (
    <section className="border-b border-border/60 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Why this, why now</div>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">Context before the pitch.</h2>
        </div>
        <div className="md:col-span-8">
          <blockquote className="border-l-2 border-accent-lime pl-6 font-display text-2xl leading-snug text-balance md:text-3xl">
            "The businesses that adopted the internet early didn't wait for it to mature. The same is
            happening with AI — right now."
          </blockquote>
          <p className="mt-8 text-lg text-muted-foreground">
            Every business owner has heard about AI. Few have actually used it to change how their
            business runs day to day, or how their brand shows up on social media. This workshop
            closes that gap — with the same tools and AI agents already being used to move faster,
            on the same budget.
          </p>
        </div>
      </div>
    </section>
  );
}

function Sessions() {
  const sessions = [
    {
      tag: "Session 1",
      time: "12:00 PM – 2:00 PM",
      title: "AI for Business",
      points: [
        "What AI actually is, why it matters now, and how it compares to past tech shifts (internet, smartphones, cloud)",
        "Using AI tools: ChatGPT, Gemini, Claude, NotebookLM",
        "Building AI agents for every department — HR, Content, SEO/Ads, Operations, Sales",
        "Common misconceptions, and what NOT to do with AI",
        "Comparing AI implementation to hiring a new employee — onboarding and time, not magic",
      ],
    },
    {
      tag: "Session 2",
      time: "3:00 PM – 5:00 PM",
      title: "AI for Content & Social Media Scaling",
      points: [
        "How to scale your brand's presence on social media using AI",
        "7 different Claude skills and AI agents for content creation, repurposing, distribution",
        "Building a content system, not just one-off posts",
        "Live demos — not theory",
      ],
    },
  ];

  return (
    <section id="sessions" className="border-b border-border/60 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Two sessions, one day</div>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Session breakdown.</h2>
          </div>
          <div className="hidden text-right text-sm text-muted-foreground md:block">
            Save ₹999<br />
            <span className="text-foreground">when you book combined.</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {sessions.map((s, i) => (
            <article
              key={s.tag}
              className="group relative flex flex-col rounded-2xl border border-border bg-surface-elevated p-8 transition hover:border-foreground/30"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
                  {s.tag}
                </span>
                <span className="font-mono text-xs text-muted-foreground">{s.time}</span>
              </div>
              <h3 className="mt-8 font-display text-2xl font-semibold md:text-3xl">{s.title}</h3>
              <ul className="mt-6 space-y-3 text-muted-foreground">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2.5 h-1 w-3 shrink-0 bg-foreground" />
                    <span className="text-[15px] leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 font-mono text-6xl font-bold text-muted/40">0{i + 1}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  const items = [
    "A working understanding of AI tools relevant to your business",
    "7 Claude skills / AI agents you can start using immediately",
    "A framework for scaling your brand's content on social media",
    "Clarity on what AI can and can't do — realistic expectations, like onboarding a new employee",
  ];
  return (
    <section id="outcomes" className="border-b border-border/60 bg-foreground px-6 py-24 text-background">
      <div className="mx-auto max-w-6xl">
        <div className="text-xs uppercase tracking-widest text-background/60">Outcomes</div>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold md:text-6xl">
          What you'll walk away with.
        </h2>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-background/10 md:grid-cols-2">
          {items.map((it, i) => (
            <div key={it} className="flex gap-6 bg-foreground p-8">
              <div className="font-mono text-sm text-accent-lime">0{i + 1}</div>
              <p className="text-lg leading-snug text-balance">{it}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Audience() {
  const who = [
    "Small & medium business owners",
    "Founders & operators",
    "Marketing / content leads",
    "Anyone tired of AI hype with no substance",
  ];
  return (
    <section className="border-b border-border/60 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Audience</div>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Who this is for.</h2>
          <p className="mt-6 text-muted-foreground">
            Built for the people running the business — not the people writing the code.
          </p>
        </div>
        <div className="md:col-span-7">
          <ul className="divide-y divide-border border-y border-border">
            {who.map((w, i) => (
              <li key={w} className="flex items-center gap-6 py-5">
                <span className="font-mono text-xs text-muted-foreground">→ 0{i + 1}</span>
                <span className="font-display text-xl md:text-2xl">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Trainer() {
  return (
    <section id="trainer" className="border-b border-border/60 px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="grid h-full w-full place-items-center text-muted-foreground">
              <div className="text-center">
                <div className="mx-auto mb-4 grid h-24 w-24 place-items-center rounded-full bg-foreground/10 font-display text-3xl text-foreground">
                  MJ
                </div>
                <div className="text-sm uppercase tracking-widest">Photo placeholder</div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-7">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Trainer</div>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Manthan Jethwani
            <span className="block text-muted-foreground">Founder, Phaze AI</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Manthan runs Phaze AI, an agency helping businesses adopt AI through practical tools,
            custom AI agents, and hands-on training — not theory.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            This session is built from real implementation work across content, sales, operations,
            and marketing — the same playbooks used with paying clients, simplified for a room of
            business owners.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border px-4 py-2 font-mono text-sm">
            <span className="h-2 w-2 rounded-full bg-accent-lime" />
            manthanjethwani@phazeai.com
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="register" className="border-b border-border/60 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Reserve your seat</div>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Pick your ticket.</h2>
          <p className="mt-4 text-muted-foreground">Seats are limited — this is a working session, not a lecture hall.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="relative overflow-hidden rounded-2xl border-2 border-foreground bg-foreground p-8 text-background md:order-2 md:-my-4 md:shadow-2xl">
            <div
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-40 blur-2xl"
              style={{ background: "var(--accent-lime)" }}
            />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-background/60">
                <span className="rounded-full bg-accent-lime px-2 py-0.5 text-[10px] font-bold text-foreground">
                  Most popular
                </span>
                <span>· Save ₹999</span>
              </div>
              <div className="mt-3 font-display text-2xl font-semibold">Both sessions</div>
              <div className="mt-1 font-mono text-sm text-background/60">12 PM – 5 PM · Full day</div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold">₹2,999</span>
                <span className="font-mono text-sm text-background/50 line-through">₹3,998</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-background/80">
                <li>✓ AI for Business (Session 1)</li>
                <li>✓ AI for Content & Social (Session 2)</li>
                <li>✓ Workbook + agent templates</li>
              </ul>
              <a
                href="#"
                className="mt-8 block rounded-full bg-accent-lime py-3 text-center font-semibold text-foreground transition hover:opacity-90"
              >
                Reserve combined →
              </a>
            </div>
          </div>

          {[
            { name: "Session 1", desc: "AI for Business", price: "1,999", time: "12 – 2 PM", order: "md:order-1" },
            { name: "Session 2", desc: "AI for Content & Social", price: "1,999", time: "3 – 5 PM", order: "md:order-3" },
          ].map((p) => (
            <div key={p.name} className={`rounded-2xl border border-border bg-surface-elevated p-8 ${p.order}`}>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{p.name}</div>
              <div className="mt-2 font-display text-2xl font-semibold">{p.desc}</div>
              <div className="mt-1 font-mono text-sm text-muted-foreground">{p.time}</div>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold">₹{p.price}</span>
              </div>
              <a
                href="#"
                className="mt-8 block rounded-full border border-foreground py-3 text-center font-medium transition hover:bg-foreground hover:text-background"
              >
                Single session
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    ["Is this beginner-friendly?", "Yes — no technical background needed."],
    ["What's included?", "Both sessions, workbook/resources, and the AI agent templates covered live."],
    ["Can my team attend?", "Yes, multiple seats can be booked."],
    ["What's the refund / reschedule policy?", "Details will be shared on confirmation. Reach out to manthanjethwani@phazeai.com."],
  ];
  return (
    <section id="faq" className="border-b border-border/60 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">FAQ</div>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Common questions.</h2>
        </div>
        <div className="md:col-span-8">
          <dl className="divide-y divide-border border-y border-border">
            {faqs.map(([q, a]) => (
              <div key={q} className="grid gap-2 py-6 md:grid-cols-5 md:gap-8">
                <dt className="font-display text-lg font-medium md:col-span-2">{q}</dt>
                <dd className="text-muted-foreground md:col-span-3">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, var(--accent-lime), transparent 50%), radial-gradient(circle at 70% 50%, var(--accent-amber), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-balance md:text-7xl">
          Reserve your spot for the Phaze AI × JECRC workshop.
        </h2>
        <p className="mt-8 text-lg text-muted-foreground">
          Saturday, 18th July · JECRC University, Jaipur
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="rounded-full bg-foreground px-8 py-4 text-base font-medium text-background transition hover:opacity-90"
          >
            Register — ₹1,999 / session
          </a>
          <a
            href="#"
            className="rounded-full border border-foreground px-8 py-4 text-base font-medium transition hover:bg-foreground hover:text-background"
          >
            Combined — ₹2,999
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-surface px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-6">
          <Logo />
          <span className="text-sm text-muted-foreground">× JECRC University</span>
        </div>
        <div className="text-sm text-muted-foreground">
          Trainer: Manthan Jethwani ·{" "}
          <a href="mailto:manthanjethwani@phazeai.com" className="underline hover:text-foreground">
            manthanjethwani@phazeai.com
          </a>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Why />
        <Sessions />
        <Outcomes />
        <Audience />
        <Trainer />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
