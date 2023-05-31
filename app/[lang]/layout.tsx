import "./globals.css";
import { Quicksand } from "next/font/google";
import type { INormalLayoutProps } from "@/utils/interfaces";
import { ResolvingMetadata, Metadata } from "next";
import Link from "next/link";
import { NextRequest } from "next/server";
import { cookies, headers } from "next/headers";
import { usePathname } from "next/navigation";
import Layout_switchLanguageButton from "@/components/layout_switchLanguageButton";

const quicksand = Quicksand({ subsets: ["latin"] });

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
  let lang = props.params.lang;

  return (
    <html lang={props.params.lang}>
      <body className={quicksand.className}>
        <div>
          <div>
            <Link href={`/${lang}`}>Home</Link>
          </div>
          <div>
            <Link href={`/${lang}/timeline`}>timeline</Link>
          </div>
          {lang === "de" ? (
            <Layout_switchLanguageButton languages={["de", "en"]}>
              <span>Auf Englisch wechseln</span>
            </Layout_switchLanguageButton>
          ) : (
            <Layout_switchLanguageButton languages={["en", "de"]}>
              <div>Switch to German</div>
            </Layout_switchLanguageButton>
          )}
        </div>
        {props.children}
      </body>
    </html>
  );
}
