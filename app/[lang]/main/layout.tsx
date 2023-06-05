import "../globals.css";
import { Quicksand } from "next/font/google";
import type { IRootLayoutProps } from "@/utils/interfaces";
import { ResolvingMetadata, Metadata } from "next";
import Switch_language_link_comp from "@/components/layout/switch_language_link_comp";
import Switch_route_link_comp from "@/components/layout/switch_route_link_comp";
import { cookies } from "next/headers";
import Reset_Language_Button_Comp from "@/components/layout/reset_language_button_comp";
import { useRouter } from "next/router";
import Link from "next/link";

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
    console.log(language_cookie, lang);
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
      {language_cookie == "de" ? (
        <div>
          <Switch_route_link_comp url={`/${lang}/main`} slug="">
            <span>Startseite</span>
          </Switch_route_link_comp>

          <Switch_route_link_comp
            url={`/${lang}/main/timeline`}
            slug="timeline"
          >
            <span>Zeitleiste</span>
          </Switch_route_link_comp>
        </div>
      ) : (
        <div>
          <Switch_route_link_comp url={`/${lang}/main`} slug="">
            <span>Home</span>
          </Switch_route_link_comp>

          <Switch_route_link_comp
            url={`/${lang}/main/timeline`}
            slug="timeline"
          >
            <span>Timeline</span>
          </Switch_route_link_comp>
        </div>
      )}
      {props.children}
    </div>
  );
}
