import "../globals.css";
import { Quicksand } from "next/font/google";
import type { IRootLayoutProps } from "@/utils/interfaces";
import { ResolvingMetadata, Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import SWITCH_ROUTE_LINK_COMP from "@/components/layout/switch_route_link_comp";
import { Suspense } from "react";
import Loading from "../loading";
import RESET_LANGUAGE_BUTTON_COMP from "@/components/layout/reset_language_button_comp";

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
        <span>
          {" "}
          {language_cookie === "en"
            ? "Please use the configured language changer in main when changing the language"
            : "Bitte verwende den Language Picker zum Ändern der Sprache"}
        </span>
      </Link>
    );
  }

  return (
    <div className="bg-basalt_gray_stone">
      <Suspense fallback={<Loading />}>
        <div className="flex justify-between h-32 p-4 text-xl bg-gradient-to-t from-basalt_gray_stone to-forest_green">
          <div className="z-50">
            <RESET_LANGUAGE_BUTTON_COMP />
          </div>
          <div>
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
