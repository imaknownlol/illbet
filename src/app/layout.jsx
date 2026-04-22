import { Geist, Geist_Mono, PT_Serif } from "next/font/google";
import "./globals.css";

const serif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "illBet | not every funeral is sad.",
  description:
    "A decentralized, non-custodial terminal for trading high-stakes health outcomes. Privacy-first settlements via XMR.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.className}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
