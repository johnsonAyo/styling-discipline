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

function RouteMark() {
  return (
    <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-brand text-brand-fg shadow-sdsm">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
      >
        <path
          d="M6.5 4.5v6.75a5.25 5.25 0 0 0 5.25 5.25H18M14.5 13l3.5 3.5-3.5 3.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <circle cx="6.5" cy="4.5" r="1.75" fill="currentColor" />
      </svg>
    </span>
  );
}

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="/"
      className="inline-flex min-h-sd4 items-center gap-2 rounded-sdmd focus-visible:outline-none focus-visible:shadow-sdfocus"
    >
      <RouteMark />
      {!compact && (
        <span className="text-lg font-semibold tracking-tight">DriveTrack</span>
      )}
    </a>
  );
}

export function MarketingShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen overflow-hidden bg-bg text-fg">{children}</div>
  );
}

export function MarketingHeader() {
  return (
    <header className="relative z-50 pt-5 sm:pt-7">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4 rounded-full border border-border bg-bg-elevated/90 px-4 shadow-sdmd backdrop-blur-xl sm:px-5">
          <Brand />
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 md:flex"
          >
            <a
              className={buttonVariants({
                variant: "ghost",
                tone: "neutral",
                size: "2",
              })}
              href="/features"
            >
              Product
            </a>
            <a
              className={buttonVariants({
                variant: "ghost",
                tone: "neutral",
                size: "2",
              })}
              href="/#workflow"
            >
              How it works
            </a>
            <a
              className={buttonVariants({
                variant: "ghost",
                tone: "neutral",
                size: "2",
              })}
              href="/privacy"
            >
              Privacy
            </a>
          </nav>
          <a
            className={buttonVariants({
              variant: "solid",
              tone: "brand",
              size: "4",
              radius: "full",
            })}
            href={PILOT_LINK}
          >
            Join the pilot <ArrowIcon />
          </a>
        </div>
      </div>
    </header>
  );
}

export function MarketingNotFound() {
  return (
    <main className="marketing-grid flex min-h-screen items-center py-20">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-sd1 font-semibold uppercase tracking-wider text-accent">
          404 / Route not found
        </p>
        <h1 className="mt-5 max-w-3xl text-balance text-5xl font-semibold leading-none tracking-tight sm:text-6xl">
          This road does not lead anywhere.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
          The page may have moved, or the link may no longer be available.
          Return to the DriveTrack overview to continue.
        </p>
        <a
          className={cn(
            buttonVariants({
              variant: "solid",
              tone: "brand",
              size: "4",
              radius: "full",
            }),
            "mt-8",
          )}
          href="/"
        >
          Return home <ArrowIcon />
        </a>
      </div>
    </main>
  );
}

export function MarketingFooter() {
  return (
    <footer className="border-t border-border bg-surface py-12">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Brand />
            <p className="mt-4 max-w-sm text-sd2 leading-6 text-muted">
              The working day for independent UK driving instructors, connected
              from open slot to lesson recap.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sd2 text-muted">
            <a
              className="rounded-sdsm py-3 hover:text-fg focus-visible:outline-none focus-visible:shadow-sdfocus"
              href="/features"
            >
              Product
            </a>
            <a
              className="rounded-sdsm py-3 hover:text-fg focus-visible:outline-none focus-visible:shadow-sdfocus"
              href="/privacy"
            >
              Privacy
            </a>
            <a
              className="rounded-sdsm py-3 hover:text-fg focus-visible:outline-none focus-visible:shadow-sdfocus"
              href="/terms"
            >
              Terms
            </a>
            <a
              className="rounded-sdsm py-3 hover:text-fg focus-visible:outline-none focus-visible:shadow-sdfocus"
              href="mailto:hello@drivetrack.co.uk"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-5 text-sd1 text-muted sm:flex-row sm:justify-between">
          <p>© 2026 DriveTrack.</p>
          <p>No student accounts. No payment layer. Just the teaching day.</p>
        </div>
      </div>
    </footer>
  );
}

export function PolicyPage({
  eyebrow,
  title,
  summary,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="marketing-grid py-16 sm:py-24">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-sd1 font-semibold uppercase tracking-wider text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-5 text-balance text-5xl font-semibold leading-none tracking-tight sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{summary}</p>
        <p className="mt-6 text-sd1 text-muted">Last updated {updated}</p>
        <div className="mt-12 grid gap-10 border-t border-border pt-10">
          {children}
        </div>
      </div>
    </main>
  );
}

export function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-4 sm:grid-cols-3 sm:gap-8">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="space-y-4 text-sd3 leading-7 text-muted sm:col-span-2">
        {children}
      </div>
    </section>
  );
}

export {
  FeatureGrid,
  MarketingCallout,
  MarketingHero,
  ProofStrip,
  Workflow,
} from "./marketing-home";
