import type { Metadata } from "next";
import { Kanit, Ubuntu } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";

const kanit = Kanit({
  subsets: ["latin"],
  variable: "--font-kanit",
  weight: "400",
});

// const ubuntu = Ubuntu({
//   subsets: ["latin"],
//   variable: "--font-ubuntu",
//   weight: "400"
// })

export const metadata: Metadata = {
  title: "PawFront",
  description: "The pet professional portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${kanit.className} antialiased`}>
          <Header />
          <main className="container mx-auto">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
