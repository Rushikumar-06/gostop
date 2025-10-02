import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import ChatButton from "../components/layout/ChatButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "goSTOPS Bengaluru, HSR Silk Board",
  description: "Book your stay at goSTOPS in Bengaluru.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <ChatButton />
      </body>
    </html>
  );
}