import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DerbyDecor Furniture",
  description: "Developer: Sayyed Saad",
  icons: {
    icon: "logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-5 z-50 w-full flex justify-center items-center">
          <Navbar />
        </header>
        <main className="flex justify-center items-center w-full flex-col min-h-screen">
          {children}
        </main>
        <footer className="w-full lg:py-4 bg-white flex justify-center items-center flex-col lg:gap-y-3">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
