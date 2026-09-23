import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@sd/ui";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://drivetrack.co.uk"),
  title: {
    default: "DriveTrack — Scheduling for UK driving instructors",
    template: "%s — DriveTrack",
  },
  description:
    "A calm scheduling and lesson follow-through workspace for independent UK driving instructors.",
  applicationName: "DriveTrack",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "DriveTrack",
    title: "DriveTrack — Every lesson. One clear road forward.",
    description:
      "Plan availability, release lesson slots, manage bookings, and finish lessons without carrying the admin home.",
  },
  twitter: {
    card: "summary",
    title: "DriveTrack — Every lesson. One clear road forward.",
    description:
      "Scheduling and lesson follow-through for independent UK driving instructors.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="min-h-screen bg-bg text-fg antialiased">
        <ThemeProvider appearance="light">{children}</ThemeProvider>
      </body>
    </html>
  );
}
