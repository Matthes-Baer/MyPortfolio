import "../globals.css";
import type { IRootLayoutProps } from "@/utils/interfaces";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { ResolvingMetadata, Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import SWITCH_ROUTE_LINK_COMP from "@/components/layout/switch_route_link_comp";
import { Suspense } from "react";
import Loading from "../loading";
import RESET_LANGUAGE_BUTTON_COMP from "@/components/layout/reset_language_button_comp";

export async function generateMetadata(
  props: IRootLayoutProps,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const lang = props.params.lang;

  if (lang === "de") {
    return {
      title: "Portfolio - Startseite",
      description:
        "Dies ist die Startseite meines Portfolios, auf der ich meine Softwareentwicklungs-Fähigkeiten vorstelle und einen Überblick über meine bisherigen Projekte gebe.",
    };
  } else {
    return {
      title: "Portfolio - Homepage",
      description:
        "This is the homepage of my portfolio, where I present my software development skills and give an overview of my previous projects.",
    };
  }
}

export default function RootLayout(props: IRootLayoutProps): JSX.Element {
  let cookies_store: ReadonlyRequestCookies = cookies();
  let language_cookie: string | undefined =
    cookies_store.get("language_cookie")?.value;
  let lang: string = props.params.lang;

  if (language_cookie != lang) {
    return (
      <Link href={`/${lang}`}>
        <span>
          {" "}
          {language_cookie === "de"
            ? "Bitte verwenden Sie die Sprachauswahl, um die Sprache zu ändern."
            : "Please use the language selector to change the language."}
        </span>
      </Link>
    );
  }

  return (
    <div className="relative">
      <Suspense fallback={<Loading />}>
        <div className="flex justify-between h-32 p-4 text-xl">
          <div className="z-[9001]">
            <RESET_LANGUAGE_BUTTON_COMP />
          </div>
          <div className="z-[9001]">
            <div className="flex justify-end">
              <SWITCH_ROUTE_LINK_COMP url={`/${lang}/main`} slug="">
                <div className="mr-5">
                  {language_cookie === "de" ? "Startseite" : "Home"}
                </div>
              </SWITCH_ROUTE_LINK_COMP>

              <SWITCH_ROUTE_LINK_COMP
                url={`/${lang}/main/timeline`}
                slug="timeline"
              >
                <div className="mr-2">
                  {language_cookie === "de" ? "Zeitleiste" : "Timeline"}
                </div>
              </SWITCH_ROUTE_LINK_COMP>
            </div>
          </div>
        </div>
        {props.children}
      </Suspense>
    </div>
  );
}
