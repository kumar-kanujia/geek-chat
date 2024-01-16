import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans as Sans } from "next/font/google";

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

const font = Sans({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Geek Chat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
