import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from '@/context/CartContext';
import Header from "./components/Header";


export const metadata: Metadata = {
  title: "ShowLesstani",
  description: "گالری نقاشی شولستانی",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className="bg-black text-white"
      >
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
