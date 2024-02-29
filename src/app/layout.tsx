import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WhatsApp Web com Next.JS",
  description: "Criando o layout do whatsapp web com next.js, tailwind.css ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-[#0c1317] p-5" lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
