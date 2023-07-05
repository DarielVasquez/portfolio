import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dariel Vasquez",
  description: "Dariel Vasquez Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      className="scroll-smooth scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-teal-900 scrollbar-track-stone-800"
      lang="en"
    >
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
