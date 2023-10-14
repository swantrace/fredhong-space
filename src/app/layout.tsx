import { Inter } from "next/font/google";
import Image from "next/legacy/image";
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal App - Fred Hong",
  description: "Personal App - Fred Hong",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <main className="mx-auto max-w-7xl px-4 space-y-8 sm:px-6 lg:px-8">
            <div className="relative">
              <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
                <NavigationBar />
                <Header />
              </div>
              <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <Image
                  priority
                  layout="fill"
                  alt=""
                  className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1369&q=60"
                />
              </div>
            </div>
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              {children}
            </div>
          </main>
          <Footer />
        </>
      </body>
    </html>
  );
}
