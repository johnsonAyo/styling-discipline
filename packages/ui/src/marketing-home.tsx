import * as React from "react";
import { buttonVariants } from "./button";
import { cn } from "./lib/cn";

const PILOT_LINK = "mailto:hello@drivetrack.co.uk?subject=DriveTrack%20pilot";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
      <path
        d="M4 10h11m-4-4 4 4-4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none">
      <path
        d="m3 8.5 3 3L13 4.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none">
      <rect
        x="2.5"
        y="4"
        width="15"
        height="13"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M6 2.5v3M14 2.5v3M2.5 8h15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}

const days = [
  {
    day: "MON",
    date: "14",
    lessons: [
      { time: "09:00", name: "Amina K.", state: "booked" },
      { time: "13:30", name: "Available", state: "open" },
    ],
  },
  {
    day: "TUE",
    date: "15",
    lessons: [
      { time: "10:00", name: "Jamie L.", state: "booked" },
      { time: "15:00", name: "Priya S.", state: "focus" },
    ],
  },
  {
    day: "WED",
    date: "16",
    lessons: [
      { time: "09:30", name: "Available", state: "open" },
      { time: "14:00", name: "Noah B.", state: "booked" },
    ],
  },
  {
    day: "THU",
    date: "17",
    lessons: [
      { time: "11:00", name: "Sophie M.", state: "focus" },
      { time: "15:30", name: "Available", state: "open" },
    ],
  },
  {
    day: "FRI",
    date: "18",
    lessons: [{ time: "10:30", name: "Ethan R.", state: "booked" }],
  },
] as const;

function MiniRoute() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 96 42"
      className="h-10 w-24 text-accent"
      fill="none"
    >
      <path
        d="M5 31C22 31 16 9 34 9h18c18 0 10 23 29 23h10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="3 5"
      />
      <circle cx="5" cy="31" r="4" fill="currentColor" />
      <circle cx="91" cy="32" r="4" fill="currentColor" />
    </svg>
  );
}

function AppSidebar() {
  return (
    <aside className="hidden border-r border-border bg-surface p-4 lg:block">
      <div className="flex items-center gap-2 px-2 text-sd2 font-semibold">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-brand-fg">
          D
        </span>
        DriveTrack
      </div>
      <nav className="mt-8 space-y-2 text-sd2">
        {[
          ["Today", true],
          ["Calendar", false],
          ["Learners", false],
          ["Availability", false],
        ].map(([label, active]) => (
          <div
            key={String(label)}
            className={cn(
              "flex items-center gap-3 rounded-sdmd px-3 py-2.5",
              active
                ? "bg-accent-soft font-semibold text-accent"
                : "text-muted",
            )}
          >
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                active ? "bg-accent" : "bg-border-hover",
              )}
            />
            {label}
          </div>
        ))}
      </nav>
      <div className="mt-24 rounded-sdlg border border-border bg-bg-elevated p-4">
        <div className="flex items-center justify-between">
          <p className="text-sd1 font-semibold">Today</p>
          <span className="h-2 w-2 rounded-full bg-success" />
        </div>
        <p className="mt-3 text-2xl font-semibold">4 / 5</p>
        <p className="mt-1 text-sd1 text-muted">lessons complete</p>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-surface-active">
          <div className="h-full w-3/4 rounded-full bg-accent" />
        </div>
      </div>
    </aside>
  );
}

function WeekSurface() {
  return (
    <div className="overflow-hidden rounded-sdlg border border-border bg-bg-elevated shadow-sdsm">
      <div className="flex items-center justify-between border-b border-border px-4 py-4 sm:px-5">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-sdmd bg-accent-soft text-accent">
            <CalendarIcon />
          </span>
          <div>
            <p className="text-sd1 font-medium uppercase tracking-wider text-muted">
              14–18 April
            </p>
            <p className="mt-1 text-base font-semibold">Teaching week</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden rounded-full border border-border bg-surface px-3 py-1.5 text-sd1 text-muted sm:inline-flex">
            8 booked
          </span>
          <span className="rounded-full bg-brand px-3 py-1.5 text-sd1 font-semibold text-brand-fg">
            + Add slot
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 divide-x divide-border md:grid-cols-5">
        {days.map((item, index) => (
          <div
            key={item.day}
            className={cn(
              "min-h-64 bg-surface",
              index > 2 && "hidden md:block",
              index === 1 && "bg-accent-soft/40",
            )}
          >
            <div className="border-b border-border px-2 py-3 text-center">
              <p className="text-sd1 font-medium text-muted">{item.day}</p>
              <p className="mt-1 text-lg font-semibold">{item.date}</p>
            </div>
            <div className="space-y-2 p-2">
              {item.lessons.map((lesson) => (
                <div
                  key={`${lesson.time}-${lesson.name}`}
                  className={cn(
                    "rounded-sdmd border p-2.5",
                    lesson.state === "focus"
                      ? "border-accent bg-accent-soft"
                      : lesson.state === "open"
                        ? "border-dashed border-border-hover bg-transparent"
                        : "border-border bg-bg-elevated",
                  )}
                >
                  <p
                    className={cn(
                      "text-sd1 font-semibold",
                      lesson.state === "focus" ? "text-accent" : "text-fg",
                    )}
                  >
                    {lesson.time}
                  </p>
                  <p className="mt-1 truncate text-sd1 text-muted">
                    {lesson.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductPreview() {
  return (
    <div className="relative mx-auto mt-14 w-full max-w-6xl sm:mt-16">
      <div className="mb-3 flex justify-center gap-2">
        {["Today", "Calendar", "Lesson follow-up"].map((item, index) => (
          <span
            key={item}
            className={cn(
              "rounded-full border px-4 py-2 text-sd1 font-medium",
              index === 1
                ? "border-accent bg-accent-soft text-accent"
                : "border-border bg-bg-elevated text-muted",
            )}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-sdxl border border-border bg-bg-elevated p-2 shadow-sdlg sm:p-3">
        <div className="flex items-center justify-between px-3 py-2">
          <div className="flex gap-2 text-border-hover">
            <span className="h-2 w-2 rounded-full bg-current" />
            <span className="h-2 w-2 rounded-full bg-current" />
            <span className="h-2 w-2 rounded-full bg-current" />
          </div>
          <p className="text-sd1 font-medium text-muted">
            drivetrack.co.uk/today
          </p>
          <span className="h-2 w-8" />
        </div>
        <div className="grid overflow-hidden rounded-sdlg border border-border bg-bg lg:grid-cols-5">
          <AppSidebar />
          <div className="p-4 sm:p-6 lg:col-span-4">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-sd1 font-semibold uppercase tracking-wider text-accent">
                  Good morning, Alex
                </p>
                <p className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
                  Your week is ready to teach.
                </p>
              </div>
              <div className="hidden items-center gap-2 text-sd1 text-muted sm:flex">
                <span className="h-2 w-2 rounded-full bg-success" /> Everything
                synced
              </div>
            </div>
            <WeekSurface />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-8 left-4 hidden max-w-xs rounded-sdlg border border-warning/40 bg-warning-soft p-4 shadow-sdlg sm:block lg:-left-8">
        <div className="flex items-start gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-warning text-warning-fg">
            !
          </span>
          <div>
            <p className="text-sd2 font-semibold">Tight travel gap</p>
            <p className="mt-1 text-sd1 leading-5 text-muted">
              45 minutes between lessons. Keep it or adjust.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute -right-5 top-28 hidden rounded-sdlg border border-border bg-bg-elevated p-4 shadow-sdlg lg:block">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-success-soft text-success">
            <CheckIcon />
          </span>
          <div>
            <p className="text-sd2 font-semibold">Recap delivered</p>
            <p className="mt-1 text-sd1 text-muted">Amina · 11:06</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MarketingHero({
  compact = false,
  eyebrow = "Private UK pilot · Built with instructors",
  title = "Every lesson.",
  accent = "One clear road forward.",
  description = "Plan the week, release the right slots and finish each lesson properly—without turning your driving school into an admin job.",
}: {
  compact?: boolean;
  eyebrow?: string;
  title?: string;
  accent?: string;
  description?: string;
}) {
  return (
    <section
      className={cn(
        "marketing-grid relative isolate overflow-hidden",
        compact
          ? "pb-20 pt-16 sm:pb-24 sm:pt-24"
          : "pb-28 pt-16 sm:pb-36 sm:pt-24",
      )}
    >
      <div
        aria-hidden="true"
        className="marketing-hero-glow absolute inset-x-0 top-0 -z-10 h-full"
      />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-4 py-2 text-sd1 font-semibold text-muted shadow-sdsm">
            <span className="h-2 w-2 rounded-full bg-brand" /> {eyebrow}
          </div>
          <h1 className="mt-7 text-balance text-5xl font-semibold leading-none tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            {title}
            <br />
            <span className="text-accent">{accent}</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-balance text-lg leading-8 text-muted sm:text-xl">
            {description}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              className={buttonVariants({
                variant: "solid",
                tone: "brand",
                size: "4",
                radius: "full",
              })}
              href={PILOT_LINK}
            >
              Request pilot access <ArrowIcon />
            </a>
            <a
              className={buttonVariants({
                variant: "surface",
                tone: "neutral",
                size: "4",
                radius: "full",
              })}
              href={compact ? "/" : "#product"}
            >
              {compact ? "See the overview" : "Watch the week unfold"}
            </a>
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-x-7 gap-y-2 text-sd2 text-muted">
            {[
              "No student accounts",
              "No payment layer",
              "UK-first scheduling",
            ].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <span className="text-success">
                  <CheckIcon />
                </span>
                {item}
              </span>
            ))}
          </div>
        </div>
        {!compact && (
          <div id="product">
            <ProductPreview />
          </div>
        )}
      </div>
    </section>
  );
}

type ProofItem = { label: string; value: string; detail: string };
export function ProofStrip({ items }: { items: readonly ProofItem[] }) {
  return (
    <section
      aria-label="Product principles"
      className="border-y border-border bg-bg-elevated"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {items.map((item) => (
            <div
              key={item.label}
              className="py-9 md:px-9 md:first:pl-0 md:last:pr-0"
            >
              <p className="text-sd1 font-semibold uppercase tracking-wider text-accent">
                {item.label}
              </p>
              <p className="mt-3 text-2xl font-semibold tracking-tight">
                {item.value}
              </p>
              <p className="mt-2 text-sd2 leading-6 text-muted">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type FeatureItem = {
  index: string;
  title: string;
  description: string;
  detail: string;
};

function FeatureVisual({ index }: { index: string }) {
  if (index === "01" || index === "04") {
    return (
      <div className="mt-8 rounded-sdlg border border-border bg-surface p-4">
        <div className="flex items-center justify-between">
          <p className="text-sd1 font-semibold uppercase tracking-wider text-muted">
            Thursday · 17 April
          </p>
          <span className="rounded-full bg-success-soft px-2.5 py-1 text-sd1 text-success">
            4 lessons
          </span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {["08:30", "11:00", "15:30"].map((time, itemIndex) => (
            <div
              key={time}
              className={cn(
                "rounded-sdmd border p-3",
                itemIndex === 1
                  ? "border-accent bg-accent-soft"
                  : "border-border bg-bg-elevated",
              )}
            >
              <p className="text-sd1 font-semibold">{time}</p>
              <p className="mt-1 text-sd1 text-muted">
                {itemIndex === 2 ? "Open" : "Booked"}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (index === "02" || index === "05") {
    return (
      <div className="mt-8 rounded-sdlg border border-border bg-surface p-4">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-accent">
            ✦
          </span>
          <div>
            <p className="text-sd2 font-semibold">Lesson slots ready</p>
            <p className="text-sd1 text-muted">
              3 secure links · email delivery
            </p>
          </div>
        </div>
        <div className="mt-4 rounded-sdmd border border-border bg-bg-elevated p-3 text-sd2 text-muted">
          Hi Amina—Alex has released new lesson times for you.
        </div>
      </div>
    );
  }
  return (
    <div className="mt-8 rounded-sdlg border border-border bg-surface p-4">
      <div className="flex items-center justify-between">
        <p className="text-sd2 font-semibold">Lesson finished</p>
        <span className="text-sd1 text-success">Ready to send</span>
      </div>
      <div className="mt-4 h-2 w-3/4 rounded-full bg-surface-active" />
      <div className="mt-2 h-2 w-full rounded-full bg-surface-active" />
      <div className="mt-2 h-2 w-1/2 rounded-full bg-surface-active" />
      <div className="mt-4 flex justify-end">
        <span className="rounded-full bg-brand px-3 py-1.5 text-sd1 font-semibold text-brand-fg">
          Approve recap
        </span>
      </div>
    </div>
  );
}

export function FeatureGrid({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly FeatureItem[];
}) {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sd1 font-semibold uppercase tracking-wider text-accent">
            {eyebrow}
          </p>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            {description}
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {items.map((item, itemIndex) => (
            <article
              key={item.index}
              className={cn(
                "overflow-hidden rounded-sdxl border border-border bg-bg-elevated p-6 shadow-sdsm sm:p-8",
                itemIndex === 0 && "md:col-span-2",
              )}
            >
              <div
                className={cn(
                  itemIndex === 0 &&
                    "grid gap-8 md:grid-cols-2 md:items-center",
                )}
              >
                <div>
                  <p className="font-mono text-sd1 font-semibold text-accent">
                    {item.index}
                  </p>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sd3 leading-7 text-muted">
                    {item.description}
                  </p>
                  <p className="mt-6 border-t border-border pt-5 text-sd2 leading-6 text-muted">
                    {item.detail}
                  </p>
                </div>
                <FeatureVisual index={item.index} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type StepItem = { number: string; title: string; description: string };
export function Workflow({ items }: { items: readonly StepItem[] }) {
  return (
    <section
      id="workflow"
      className="border-y border-border bg-surface py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-2">
            <p className="text-sd1 font-semibold uppercase tracking-wider text-accent">
              One unbroken rhythm
            </p>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              From an open hour to a finished lesson.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              DriveTrack carries the context forward. Students only see the
              secure link and email they need.
            </p>
            <div className="mt-8">
              <MiniRoute />
            </div>
          </div>
          <ol className="grid overflow-hidden rounded-sdxl border border-border bg-border sm:grid-cols-2 lg:col-span-3">
            {items.map((item) => (
              <li key={item.number} className="bg-bg-elevated p-6 sm:p-7">
                <p className="font-mono text-sd1 text-accent">{item.number}</p>
                <p className="mt-8 text-lg font-semibold">{item.title}</p>
                <p className="mt-3 text-sd2 leading-6 text-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function MarketingCallout() {
  return (
    <section className="marketing-grid py-24 sm:py-32">
      <div className="mx-auto w-full max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-sdxl border border-accent/30 bg-accent-soft px-6 py-16 shadow-sdlg sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="marketing-cta-glow absolute inset-0"
          />
          <p className="relative text-sd1 font-semibold uppercase tracking-wider text-accent">
            Private UK pilot
          </p>
          <h2 className="relative mx-auto mt-5 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Run the road. Leave the admin behind.
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-lg leading-8 text-muted">
            A small group of independent instructors will shape the first
            working version of DriveTrack.
          </p>
          <a
            className={cn(
              buttonVariants({
                variant: "solid",
                tone: "brand",
                size: "4",
                radius: "full",
              }),
              "relative mt-9",
            )}
            href={PILOT_LINK}
          >
            Request pilot access <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
