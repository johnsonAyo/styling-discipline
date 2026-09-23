import type { Metadata } from "next";
import {
  FeatureGrid,
  MarketingCallout,
  MarketingHero,
  ProofStrip,
  Workflow,
} from "@sd/ui";

export const metadata: Metadata = {
  title: "DriveTrack — Every lesson. One clear road forward.",
  description:
    "Plan availability, release lesson slots, manage bookings, and send useful lesson recaps with DriveTrack—built for independent UK driving instructors.",
  alternates: { canonical: "/" },
};

const proof = [
  {
    label: "Default lesson",
    value: "2 hours",
    detail: "Customisable when the day needs something different.",
  },
  {
    label: "Learner access",
    value: "One secure link",
    detail: "No account, profile, password, or payment screen.",
  },
  {
    label: "Lesson follow-through",
    value: "Under 60 seconds",
    detail: "Capture the outcome while the lesson is still fresh.",
  },
] as const;

const features = [
  {
    index: "01",
    title: "A calendar that understands teaching days",
    description:
      "Create and duplicate availability, see the shape of the week, and get a calm warning when travel time looks tight.",
    detail:
      "Real overlaps are blocked. Travel buffers stay advisory, because you know the route.",
  },
  {
    index: "02",
    title: "Release only the slots you mean to offer",
    description:
      "Select a useful set of openings, choose the students, preview the message, and publish secure booking links.",
    detail:
      "Every release is deliberate—there is no permanent public booking page to babysit.",
  },
  {
    index: "03",
    title: "Give students a smaller, better interface",
    description:
      "A student opens their link, sees the slots meant for them, and confirms without typing their details again.",
    detail:
      "Cancellation and rescheduling remain self-service until the 48-hour boundary.",
  },
] as const;

const workflow = [
  {
    number: "01",
    title: "Plan",
    description: "Shape the week around the hours you actually want to teach.",
  },
  {
    number: "02",
    title: "Release",
    description:
      "Choose openings and send each student their own secure route in.",
  },
  {
    number: "03",
    title: "Teach",
    description: "Use Today as the calm command surface between lessons.",
  },
  {
    number: "04",
    title: "Close the loop",
    description:
      "Capture outcomes and send the approved recap while context is fresh.",
  },
] as const;

export default function HomePage() {
  return (
    <main>
      <MarketingHero />
      <ProofStrip items={proof} />
      <FeatureGrid
        eyebrow="The details generic calendars miss"
        title="Your working week, connected from start to finish."
        description="Three focused tools replace the tabs, messages and mental notes that usually follow an instructor through the day."
        items={features}
      />
      <Workflow items={workflow} />
      <MarketingCallout />
    </main>
  );
}
