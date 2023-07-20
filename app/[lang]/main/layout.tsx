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
import LANGUAGE_ERROR_COMP from "@/components/language_error_comp";

export async function generateMetadata(
  props: IRootLayoutProps,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const language = props.params.lang;

  if (language === "de") {
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

const ROOT_LAYOUT: (props: IRootLayoutProps) => JSX.Element = (
  props: IRootLayoutProps
): JSX.Element => {
  let cookies_store: ReadonlyRequestCookies = cookies();
  let language_cookie: string | undefined =
    cookies_store.get("language_cookie")?.value;
  let language: string = props.params.lang;

  //* In case the language parameter in the URL is manually adjusted which would lead to an "ugly" reload of the page without the Loading screen (images just blink in)
  if (language_cookie != language) {
    return <LANGUAGE_ERROR_COMP language={language} />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="relative">
        <div className="flex justify-between h-32 p-1 text-xl">
          <div className="z-[9001]">
            <RESET_LANGUAGE_BUTTON_COMP />
          </div>
          <div className="z-[9001]">
            <div className="flex justify-end">
              <SWITCH_ROUTE_LINK_COMP url={`/${language}/main`} slug="">
                <div>{language_cookie === "de" ? "Startseite" : "Home"}</div>
              </SWITCH_ROUTE_LINK_COMP>

              <SWITCH_ROUTE_LINK_COMP
                url={`/${language}/main/timeline`}
                slug="timeline"
              >
                <div>
                  {language_cookie === "de" ? "Zeitleiste" : "Timeline"}
                </div>
              </SWITCH_ROUTE_LINK_COMP>
            </div>
          </div>
        </div>
        {props.children}
      </div>
    </Suspense>
  );
};

export default ROOT_LAYOUT;
