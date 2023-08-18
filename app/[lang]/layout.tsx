import "./globals.css";

import { Quicksand, MedievalSharp, Cinzel } from "next/font/google";
import { ResolvingMetadata, Metadata } from "next";
import { cookies } from "next/headers";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { NextFont } from "next/dist/compiled/@next/font";

import type { IRootLayoutProps } from "@/utils/interfaces";
import MAIN_NAVBAR from "@/components/layout/main_navbar";

const quicksand: NextFont = Quicksand({
  subsets: ["latin"],
  weight: "400",
});

const german_metadata: Metadata = {
  title: "Matthes Bär - Portfolio",
  description:
    "Diese Website repräsentiert mein Software-Entwicklungs-Portfolio.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

const english_metadata: Metadata = {
  title: "Matthes Bär - Portfolio",
  description: "This website represents my software development portfolio.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export async function generateMetadata(
  props: IRootLayoutProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const language: string = props.params.lang;

  if (language === "de") {
    return german_metadata;
  } else {
    return english_metadata;
  }
}

const ROOT_LAYOUT: (props: IRootLayoutProps) => JSX.Element = (
  props: IRootLayoutProps
): JSX.Element => {
  let cookies_store: ReadonlyRequestCookies = cookies();
  let language_cookie: string | undefined =
    cookies_store.get("language_cookie")?.value;

  return (
    <html lang={props.params.lang || language_cookie}>
      <body
        className={`${quicksand.className} text-[white] bg-dark_gray_stone`}
        style={{ overflowX: "hidden" }}
      >
        {props.children}
      </body>
    </html>
  );
};

export default ROOT_LAYOUT;
