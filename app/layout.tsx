import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HomeLayout from "@/shared/layouts/home-layout";
import { LanguageProvider } from "@/shared/providers/language-provider";
import { Toaster } from "sonner";
import { GlobalLoading } from "@/shared/common/global-loading";
import { ThemeProvider } from "@/shared/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mai Tu's Portfolio",
  description: "This is website about Mai Tu's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <LanguageProvider>
          <GlobalLoading>
            <HomeLayout>
              <Toaster richColors position="bottom-right" />
              {children}
            </HomeLayout>
          </GlobalLoading>
        </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
