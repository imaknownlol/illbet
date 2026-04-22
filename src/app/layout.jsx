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

  // إعدادات OpenGraph للمنصات مثل فيسبوك وواتساب وتلغرام
  openGraph: {
    title: "illBet | not every funeral is sad.",
    description:
      "A decentralized, non-custodial terminal for trading high-stakes health outcomes.",
    url: "https://illbet.vercel.app", // استبدله برابط موقعك الفعلي
    siteName: "illBet",
    images: [
      {
        url: "/illbetlogo.jpeg", // تأكد من وضع الصورة في مجلد public
        width: 1200,
        height: 630,
        alt: "illBet Terminal Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // إعدادات Twitter (X)
  twitter: {
    card: "summary_large_image",
    title: "illBet | not every funeral is sad.",
    description: "Privacy-first settlements via XMR.",
    images: ["/illbetlogo.jpeg"], // نفس مسار الصورة
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.className}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
