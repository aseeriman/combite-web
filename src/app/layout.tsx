import type { Metadata } from "next";
import { archivo, archivoBlack } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Automation for Recruitment Agencies | Combite",
  description:
    "Combite designs AI-assisted recruitment workflows for candidate follow-up, database reactivation, ATS and CRM automation, scheduling, and operational reporting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${archivoBlack.variable}`}>
      <body className="bg-space text-ink antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
