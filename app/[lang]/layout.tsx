import "./globals.css";
import { Quicksand } from "next/font/google";
import type { IMetadata, IRootLayoutProps } from "@/utils/interfaces";
import { ResolvingMetadata, Metadata } from "next";
import { cookies } from "next/headers";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { NextFont } from "next/dist/compiled/@next/font";

const quicksand: NextFont = Quicksand({ subsets: ["latin"] });

const german_metadata: IMetadata = {
  title: "Dies ist der deutsche Titel",
  description: "Dies ist die deutsche Beschreibung.",
};

const english_metadata: IMetadata = {
  title: "This is the English title",
  description: "This is the English description.",
};

export async function generateMetadata(
  props: IRootLayoutProps,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const lang: string = props.params.lang;

  if (lang === "de") {
    return german_metadata;
  } else {
    return english_metadata;
  }
}

export default function RootLayout(props: IRootLayoutProps): JSX.Element {
  let cookies_store: ReadonlyRequestCookies = cookies();
  let language_cookie: string | undefined =
    cookies_store.get("language_cookie")?.value;

  return (
    <html lang={language_cookie || props.params.lang}>
      <body className={quicksand.className} style={{ overflowX: "hidden" }}>
        {props.children}
      </body>
    </html>
  );
}
