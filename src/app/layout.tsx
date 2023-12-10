import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  metadataBase: new URL(process.env.ORIGIN || "https://fredhong.space"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="mx-auto max-w-7xl px-4 space-y-8 sm:px-6 lg:px-8 page-layout">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
