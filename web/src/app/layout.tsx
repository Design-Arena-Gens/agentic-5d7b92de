import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter"
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-manrope"
});

export const metadata: Metadata = {
  title: "Сеть стрелковых тиров | Управляющая компания",
  description:
    "Комплексное управление стрелковыми тирами по всей России: безопасность, цифровая аналитика, обучение и развитие стрелкового спорта.",
  keywords: [
    "стрелковый тир",
    "управляющая компания",
    "стрельба",
    "спорт",
    "Россия",
    "безопасность",
    "тактическая подготовка"
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
