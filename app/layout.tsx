import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roster",
  description: "A simple CRM for contacts, companies and deals.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
