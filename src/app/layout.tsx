import "./globals.css";

import type { Metadata } from "next";

import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: {
    template: "Zyroli | %s",
    default: "Zyroli",
  },
  description: "A simple profile editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
