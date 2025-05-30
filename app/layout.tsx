import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI-powered image editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: '#624cf5' }
      }}
    >
      <html lang="en">
        <body
          className={cn("font-poppins antialiased", poppins.variable)}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
