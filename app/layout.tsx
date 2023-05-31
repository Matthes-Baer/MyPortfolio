import "./globals.css";
import { Inter } from "next/font/google";
import type { INormalLayoutProps } from "@/utils/interfaces";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html>
      <body className={inter.className}>{props.children}</body>
    </html>
  );
}
