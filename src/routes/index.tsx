import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import photo from "@/assets/profile-photo.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lakshya Agarwal — Distributed Systems & AI Backend Engineer" },
      {
        name: "description",
        content:
          "B.Tech ECE at IIIT Nagpur. I build distributed task queues, large-scale graph APIs and serverless AI platforms — with the latency numbers to prove it.",
      },
      {
        property: "og:title",
        content: "Lakshya Agarwal — Distributed Systems & AI Backend Engineer",
      },
      {
        property: "og:description",
        content:
          "Distributed task queues, 10M-node graph APIs, serverless AI platforms. 9+ hackathons, open-source contributor, IIIT Nagpur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ------------------------------------------------------------------ data */

const CONTACT = {
  email: "lakshyawal152@gmail.com",
  phone: "+91 7060022010",
  linkedin: "https://linkedin.com/in/lakshya-agarwal-1706bb322",
  github: "https://github.com/Lakshya2025-web",
};

const STACK = [
  {
    key: "languages",
    label: "Languages",
    items: ["Python", "Java", "C", "JavaScript", "Go (basics)"],
  },
  {
    key: "fundamentals",
    label: "CS Fundamentals",
    items: [
      "Data Structures & Algorithms",
      "Distributed Systems",
      "Concurrency & Multithreading",
      "OOP",
    ],
  },
  {
    key: "backend",
    label: "Backend",
    items: ["Django", "DRF", "WebSockets", "REST APIs", "Docker", "Spring Boot (basics)"],
  },
  {
    key: "databases",
    label: "Databases",
    items: ["PostgreSQL", "CockroachDB", "MySQL", "MongoDB", "ChromaDB", "Redis"],
  },
  {
    key: "frontend",
    label: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML/CSS/JS"],
  },
  {
    key: "cloud",
    label: "Cloud & Infra",
    items: ["AWS Lambda", "Amazon S3", "Amazon RDS", "Amazon Bedrock", "API Gateway"],
  },
  {
    key: "tools",
    label: "Tools",
    items: ["Git", "Docker", "PyTest", "Locust", "Postman", "Linux/Bash"],
  },
];

type Project = {
  id: string;
  index: string;
  name: string;
  role: string;
  stack: string[];
  summary: string;
  bullets: string[];
  metrics: { label: string; value: string; sub?: string }[];
  meter?: { label: string; before: string; after: string; pct: number };
};

const PROJECTS: Project[] = [
  {
    id: "task-queue",
    index: "01",
    name: "Distributed Task Queue Engine",
    role: "Concurrency / fault tolerance",
    stack: ["Python", "Redis", "PostgreSQL", "Docker", "PyTest"],
    summary:
      "A multi-worker task queue with concurrent job execution over Python threading and Redis pub/sub, engineered for exactly-once semantics across worker crashes.",
    bullets: [
      "Sustained 500+ simultaneous tasks with zero message loss.",
      "Retry with exponential backoff, dead-letter queues and idempotency tokens for exactly-once delivery.",
      "Profiled with Locust; tuned worker and connection pools for a 3× latency cut.",
      "Full Docker Compose stack, 92% test coverage over concurrency edge-cases.",
    ],
    metrics: [
      { label: "Concurrent tasks", value: "500+", sub: "no message loss" },
      { label: "Test coverage", value: "92%", sub: "PyTest integration" },
    ],
    meter: { label: "P95 latency", before: "800 ms", after: "260 ms", pct: 67 },
  },
  {
    id: "graph-api",
    index: "02",
    name: "Large-Scale Graph Query API",
    role: "Algorithms / read scaling",
    stack: ["Python", "PostgreSQL", "REST", "AWS"],
    summary:
      "Shortest-path queries over sparse graphs of 10M+ nodes using bidirectional Dijkstra with a binary-heap priority queue and lazy-deletion optimisation.",
    bullets: [
      "Cached high-centrality neighbourhoods and pre-computed hub labels for frequent origin–destination pairs.",
      "Served 1,000+ concurrent reads via thread-safe structures, read replicas and connection pooling.",
      "Deployed on AWS with auto-scaling behind a benchmarked REST surface.",
      "Benchmark suite measuring throughput, P99 latency and memory across graph densities.",
    ],
    metrics: [
      { label: "Graph size", value: "10M+", sub: "nodes" },
      { label: "Concurrent reads", value: "1,000+", sub: "thread-safe" },
    ],
    meter: { label: "Avg query latency", before: "820 ms", after: "115 ms", pct: 86 },
  },
  {
    id: "edugenie",
    index: "03",
    name: "Edugenie — AI Learning Platform",
    role: "Serverless AI / product",
    stack: ["Django", "CockroachDB", "AWS Lambda", "Amazon Bedrock", "JavaScript"],
    summary:
      "A serverless adaptive-quiz engine on Lambda + Bedrock that scales to zero cost off-peak, paired with an LLM resume-scoring pipeline.",
    bullets: [
      "Real-time adaptive question generation with sub-200 ms cold starts.",
      "Apache Tika + Bedrock resume parser for ATS benchmarking; +34% average score lift in A/B testing.",
      "Role-based dashboards with email + OTP login and CAPTCHA.",
      "Load-tested to 5,000 virtual users on Locust with zero failed requests.",
    ],
    metrics: [
      { label: "Resume score lift", value: "+34%", sub: "A/B tested" },
      { label: "Spam precision", value: "94%", sub: "−60% moderation" },
      { label: "Peak load", value: "5,000 VUs", sub: "0 failures" },
    ],
  },
  {
    id: "code-editor",
    index: "04",
    name: "Real-Time Collaborative Code Editor",
    role: "Realtime / OT",
    stack: ["Next.js", "Django", "WebSockets", "Redis", "Docker"],
    summary:
      "Low-latency multi-user editing with live cursor sync and Operational Transformation for conflict-free concurrent edits.",
    bullets: [
      "Presence awareness and room-based sessions coordinated through Redis.",
      "Consistent state at 200 concurrent editors per room.",
      "Syntax highlighting for 15+ languages with real-time linting feedback.",
      "Backend and frontend containerised for one-command deploys.",
    ],
    metrics: [
      { label: "Editors / room", value: "200", sub: "consistent state" },
      { label: "Languages", value: "15+", sub: "highlight + lint" },
    ],
  },
];

const TIMELINE = [
  {
    period: "2024 — 2028",
    title: "B.Tech, Electronics & Communication Engineering",
    org: "IIIT Nagpur",
    detail: "Distributed systems, concurrency and applied AI alongside core ECE.",
  },
  {
    period: "2025",
    title: "Open Source Contributor",
    org: "Open Source Connect India · GirlScript Summer of Code",
    detail: "Merged pull requests across Python backend and documentation repositories.",
  },
  {
    period: "Ongoing",
    title: "Hackathon Lead",
    org: "9+ hackathons",
    detail:
      "Led cross-functional teams at Google Solution Challenge, Adobe Hiring Hackathon and AXIS'25 VNIT — production-quality full-stack builds in 24–48 hour windows.",
  },
];

const HONORS = [
  { name: "Finalist — AXIS'25 Web Reshape Hackathon", org: "VNIT Nagpur", when: "2025" },
  { name: "AWS Lambda Foundations", org: "Amazon Web Services", when: "Jun 2025" },
  { name: "Postman API Fundamentals Student Expert", org: "Postman", when: "Jul 2025" },
];

const EDUCATION = [
  { label: "Class 12 — Dewan Public School", value: "80%" },
  { label: "Class 10 — Dewan Public School (ICSE)", value: "93%" },
];

const TICKER = [
  "500+ concurrent tasks",
  "P95 800ms → 260ms",
  "10M+ node graphs",
  "1,000+ concurrent reads",
  "sub-200ms cold starts",
  "5,000 VUs · 0 failures",
  "200 editors per room",
  "92% test coverage",
  "9+ hackathons",
];

const NAV = [
  { href: "#systems", label: "Systems" },
  { href: "#stack", label: "Stack" },
  { href: "#log", label: "Log" },
  { href: "#contact", label: "Contact" },
];

/* --------------------------------------------------------------- helpers */

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, seen };
}

function Uptime() {
  const [t, setT] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setT((v) => v + 1), 1000);
    return () => window.clearInterval(id);
  }, []);
  const hh = String(Math.floor(t / 3600)).padStart(2, "0");
  const mm = String(Math.floor((t % 3600) / 60)).padStart(2, "0");
  const ss = String(t % 60).padStart(2, "0");
  return (
    <span className="font-mono tabular-nums text-signal">
      {hh}:{mm}:{ss}
    </span>
  );
}

function SectionHeading({
  index,
  title,
  note,
}: {
  index: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="mb-12 flex flex-wrap items-baseline gap-x-5 gap-y-2 border-b border-border pb-5">
      <span className="font-mono text-xs tracking-[0.28em] text-signal">{index}</span>
      <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {note ? <p className="label-mono ml-auto">{note}</p> : null}
    </div>
  );
}

function LatencyMeter({
  label,
  before,
  after,
  pct,
}: NonNullable<Project["meter"]>) {
  const { ref, seen } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className="rounded-sm border border-border bg-background/60 p-4">
      <div className="flex items-baseline justify-between">
        <span className="label-mono">{label}</span>
        <span className="font-mono text-xs text-muted-foreground">
          <s className="opacity-60">{before}</s>
          <span className="mx-2 text-signal">→</span>
          <span className="text-foreground">{after}</span>
        </span>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className={seen ? "meter-bar h-full rounded-full" : "h-full rounded-full"}
          style={{
            width: seen ? `${pct}%` : "0%",
            background: "var(--gradient-signal)",
          }}
        />
      </div>
      <p className="mt-2 font-mono text-[11px] text-muted-foreground">
        {pct}% reduction under sustained load
      </p>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="console-panel scanlines group rounded-sm p-6 transition-colors sm:p-8">
      <div className="flex flex-wrap items-start gap-x-6 gap-y-3">
        <span className="font-mono text-xs text-signal-dim">{project.index}</span>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
            {project.name}
          </h3>
          <p className="label-mono mt-1">{project.role}</p>
        </div>
      </div>

      <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
        {project.summary}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {project.metrics.map((m) => (
          <div key={m.label} className="rounded-sm border border-border bg-background/60 p-4">
            <div className="font-display text-2xl font-semibold tracking-tight text-foreground">
              {m.value}
            </div>
            <div className="label-mono mt-1">{m.label}</div>
            {m.sub ? (
              <div className="mt-1 font-mono text-[11px] text-signal-dim">{m.sub}</div>
            ) : null}
          </div>
        ))}
        {project.meter ? <LatencyMeter {...project.meter} /> : null}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-sm border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground"
          >
            {s}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-signal transition-opacity hover:opacity-70"
      >
        <span
          className="inline-block transition-transform"
          style={{ transform: open ? "rotate(90deg)" : "none" }}
          aria-hidden="true"
        >
          ▸
        </span>
        {open ? "Collapse build notes" : "Read build notes"}
      </button>

      {open ? (
        <ul className="mt-5 space-y-3 border-l border-signal-dim/40 pl-5">
          {project.bullets.map((b) => (
            <li key={b} className="text-sm leading-relaxed text-muted-foreground">
              {b}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

/* ------------------------------------------------------------------ page */

function Index() {
  const [activeStack, setActiveStack] = useState(STACK[0].key);
  const current = STACK.find((s) => s.key === activeStack) ?? STACK[0];

  return (
    <div className="blueprint min-h-screen">
      <a
        href="#systems"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="font-mono text-xs tracking-[0.2em] text-foreground">
            LAKSHYA<span className="text-signal">.</span>AGARWAL
          </a>
          <nav className="hidden gap-7 sm:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-signal"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-signal" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            <span className="label-mono hidden sm:inline">Open to internships</span>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div className="trace-in">
              <p className="label-mono">
                IIIT Nagpur · B.Tech ECE · Nagpur, India
              </p>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
                I build systems that stay
                <br />
                <span className="signal-text">fast when everything else</span>
                <br />
                falls over.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
                Distributed task queues, 10M-node graph APIs and serverless AI
                platforms — designed around concurrency, fault tolerance and
                measured latency rather than guesswork.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#systems"
                  className="rounded-sm bg-primary px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-85"
                >
                  Inspect systems
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="rounded-sm border border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-signal hover:text-signal"
                >
                  Get in touch
                </a>
              </div>
            </div>

            <div className="trace-in relative mx-auto w-full max-w-xs lg:mx-0">
              <div className="signal-ring scanlines overflow-hidden rounded-sm border border-border bg-surface">
                <img
                  src={photo.url}
                  alt="Portrait of Lakshya Agarwal"
                  width={932}
                  height={1014}
                  className="aspect-[4/5] w-full object-cover object-top"
                  loading="eager"
                />
              </div>
              <dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border">
                <div className="bg-surface px-4 py-3">
                  <dt className="label-mono">Session uptime</dt>
                  <dd className="mt-1 text-sm">
                    <Uptime />
                  </dd>
                </div>
                <div className="bg-surface px-4 py-3">
                  <dt className="label-mono">Hackathons</dt>
                  <dd className="mt-1 font-mono text-sm text-foreground">9+</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Ticker */}
        <div className="overflow-hidden border-y border-border bg-surface/60 py-3">
          <div className="marquee-track flex gap-10 whitespace-nowrap">
            {[...TICKER, ...TICKER].map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
              >
                <span className="mr-10 text-signal-dim">◆</span>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Projects */}
        <section id="systems" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
          <SectionHeading
            index="01"
            title="Systems I've shipped"
            note="Four builds · measured"
          />
          <div className="grid gap-6">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
          <SectionHeading index="02" title="Technical stack" note="Select a layer" />
          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            <div className="flex flex-wrap gap-2 lg:flex-col">
              {STACK.map((s) => {
                const active = s.key === activeStack;
                return (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => setActiveStack(s.key)}
                    aria-pressed={active}
                    className={
                      "rounded-sm border px-4 py-3 text-left font-mono text-[11px] uppercase tracking-[0.18em] transition-colors " +
                      (active
                        ? "border-signal bg-surface text-signal"
                        : "border-border text-muted-foreground hover:border-signal/50 hover:text-foreground")
                    }
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>
            <div className="console-panel scanlines rounded-sm p-6 sm:p-10">
              <p className="label-mono">{current.label}</p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {current.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-sm border border-border bg-background/60 px-4 py-2 font-display text-sm tracking-tight"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Log */}
        <section id="log" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
          <SectionHeading index="03" title="Log" note="Education · experience · honors" />
          <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr]">
            <ol className="relative space-y-10 border-l border-border pl-7">
              {TIMELINE.map((t) => (
                <li key={t.title} className="relative">
                  <span className="absolute -left-[34px] top-1.5 h-2 w-2 rounded-full bg-signal" />
                  <p className="label-mono">{t.period}</p>
                  <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">
                    {t.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-signal-dim">{t.org}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t.detail}
                  </p>
                </li>
              ))}
            </ol>

            <div className="space-y-10">
              <div>
                <p className="label-mono">Honors & certifications</p>
                <ul className="mt-5 space-y-4">
                  {HONORS.map((h) => (
                    <li
                      key={h.name}
                      className="border-b border-border pb-4 last:border-0"
                    >
                      <p className="text-sm text-foreground">{h.name}</p>
                      <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                        {h.org} · {h.when}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="label-mono">Schooling</p>
                <ul className="mt-5 space-y-3">
                  {EDUCATION.map((e) => (
                    <li key={e.label} className="flex items-baseline justify-between gap-4">
                      <span className="text-sm text-muted-foreground">{e.label}</span>
                      <span className="font-mono text-sm text-signal">{e.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-20 border-t border-border bg-surface/40 py-24"
        >
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Got a system that needs to <span className="signal-text">hold up</span> under
              load?
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              I'm open to backend, distributed-systems and AI-infrastructure
              internships, and to collaborating on open source.
            </p>

            <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              <a
                href={`mailto:${CONTACT.email}`}
                className="bg-background px-5 py-6 transition-colors hover:bg-surface-raised"
              >
                <p className="label-mono">Email</p>
                <p className="mt-2 break-all font-mono text-sm text-signal">
                  {CONTACT.email}
                </p>
              </a>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="bg-background px-5 py-6 transition-colors hover:bg-surface-raised"
              >
                <p className="label-mono">Phone</p>
                <p className="mt-2 font-mono text-sm text-signal">{CONTACT.phone}</p>
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
                className="bg-background px-5 py-6 transition-colors hover:bg-surface-raised"
              >
                <p className="label-mono">GitHub</p>
                <p className="mt-2 font-mono text-sm text-signal">Lakshya2025-web</p>
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                className="bg-background px-5 py-6 transition-colors hover:bg-surface-raised"
              >
                <p className="label-mono">LinkedIn</p>
                <p className="mt-2 font-mono text-sm text-signal">lakshya-agarwal</p>
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-border">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              © {new Date().getFullYear()} Lakshya Agarwal
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Nagpur, India · UTC+05:30
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
