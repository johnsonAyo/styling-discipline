import type { Metadata } from "next";
import { PolicyPage, PolicySection } from "@sd/ui";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "The service terms for instructors participating in the private DriveTrack UK pilot.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <PolicyPage
      eyebrow="Private pilot terms"
      title="Terms of service"
      summary="These terms describe the working agreement for instructors invited to use the DriveTrack private pilot. They are intentionally readable and will be reviewed before external onboarding."
      updated="23 September 2026"
    >
      <PolicySection title="Pilot access">
        <p>
          DriveTrack is currently an invitation-only pilot for independent
          driving instructors operating in the United Kingdom. Access may be
          limited, changed, or paused while the product is being validated.
        </p>
        <p>
          An instructor is responsible for keeping their sign-in email secure
          and for activity carried out through their workspace.
        </p>
      </PolicySection>
      <PolicySection title="Using DriveTrack">
        <p>
          Instructors may use DriveTrack to manage availability, lesson
          bookings, student communications, operational student details, and
          lesson follow-through for their own driving instruction business.
        </p>
        <p>
          The service must not be used to send unlawful, misleading, abusive, or
          unsolicited communications, or to store information unrelated to
          providing driving lessons.
        </p>
      </PolicySection>
      <PolicySection title="Instructor responsibilities">
        <p>
          The instructor remains responsible for the accuracy of availability,
          student details, lesson decisions, communications, and any recap
          approved for sending.
        </p>
        <p>
          DriveTrack may warn about travel gaps and scheduling conditions, but
          it does not provide route planning, driving, legal, tax, safeguarding,
          or professional advice.
        </p>
      </PolicySection>
      <PolicySection title="Availability and changes">
        <p>
          We aim to provide a dependable service, but a private pilot may
          experience interruption or change. We will communicate material issues
          and avoid making silent changes to confirmed bookings.
        </p>
        <p>
          Features may evolve as the pilot develops. Changes that materially
          affect data handling or instructor responsibilities will be reflected
          in updated terms or notices.
        </p>
      </PolicySection>
      <PolicySection title="Contact and ending access">
        <p>
          Either party may end pilot participation. DriveTrack may suspend
          access where necessary for security, misuse prevention, legal
          compliance, or service protection.
        </p>
        <p>
          Questions about these terms or pilot access can be sent to
          hello@drivetrack.co.uk.
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
