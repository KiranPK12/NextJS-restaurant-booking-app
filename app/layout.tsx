import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Notification from "./components/Notification";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthProvider from "./components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Restaurant App",
  description: "Best food in the town",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']`}
      >
        <AuthProvider>
          <div>
            <Notification />
            <Navbar />
            {children}
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
