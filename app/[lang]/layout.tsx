import "../globals.css";
import { Inter } from "next/font/google";
import type { INormalLayoutProps } from "@/utils/interfaces";
import { ResolvingMetadata, Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(
  props: INormalLayoutProps,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const lang = props.params.lang;

  if (lang === "en") {
    return {
      title: "This is the English title",
      description: "This is the English description.",
    };
  } else {
    return {
      title: "Dies ist der deutsche Titel",
      description: "Dies ist die deutsche Beschreibung.",
    };
  }
}

export default function RootLayout(props: INormalLayoutProps) {
  return (
    <html lang={props.params.lang}>
      <body className={inter.className}>{props.children}</body>
    </html>
  );
}
