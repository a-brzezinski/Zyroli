import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editor",
};

export default function EditorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
