import "../globals.css";
import { Quicksand } from "next/font/google";
import type { IRootLayoutProps } from "@/utils/interfaces";
import { ResolvingMetadata, Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import SWITCH_ROUTE_LINK_COMP from "@/components/layout/switch_route_link_comp";
import { Suspense } from "react";
import Loading from "../loading";

const quicksand = Quicksand({ subsets: ["latin"] });

export async function generateMetadata(
  props: IRootLayoutProps,
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

export default function RootLayout(props: IRootLayoutProps) {
  let cookies_store = cookies();
  let language_cookie = cookies_store.get("language_cookie")?.value;
  let lang = props.params.lang;

  if (language_cookie != lang) {
    return (
      <Link href={`/${lang}`}>
        {language_cookie == "en" ? (
          <span>
            Please use the configured language changer in main when changing the
            language
          </span>
        ) : (
          <span>Bitte verwende den Language Picker zum Ändern der Sprache</span>
        )}
      </Link>
    );
  }

  return (
    <div>
      <Suspense fallback={<Loading />}>
        {language_cookie == "de" ? (
          <div>
            <SWITCH_ROUTE_LINK_COMP url={`/${lang}/main`} slug="">
              <span>Startseite</span>
            </SWITCH_ROUTE_LINK_COMP>

            <SWITCH_ROUTE_LINK_COMP
              url={`/${lang}/main/timeline`}
              slug="timeline"
            >
              <span>Zeitleiste</span>
            </SWITCH_ROUTE_LINK_COMP>
          </div>
        ) : (
          <div>
            <SWITCH_ROUTE_LINK_COMP url={`/${lang}/main`} slug="">
              <span>Home</span>
            </SWITCH_ROUTE_LINK_COMP>

            <SWITCH_ROUTE_LINK_COMP
              url={`/${lang}/main/timeline`}
              slug="timeline"
            >
              <span>Timeline</span>
            </SWITCH_ROUTE_LINK_COMP>
          </div>
        )}
        {props.children}
      </Suspense>
    </div>
  );
}
