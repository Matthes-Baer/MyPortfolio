import "./globals.css";
import { Quicksand } from "next/font/google";
import type { INormalLayoutProps } from "@/utils/interfaces";
import { ResolvingMetadata, Metadata } from "next";
import Switch_language_link_comp from "@/components/layout/switch_language_link_comp";
import Switch_route_link_comp from "@/components/layout/switch_route_link_comp";

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
          {lang === "de" ? (
            <div>
              <Switch_route_link_comp url={`/${lang}/`} slug="">
                <span>Startseite</span>
              </Switch_route_link_comp>

              <Switch_route_link_comp url={`/${lang}/timeline`} slug="timeline">
                <span>Zeitleiste</span>
              </Switch_route_link_comp>
              <Switch_language_link_comp languages={["de", "en"]}>
                <span>Auf Englisch wechseln</span>
              </Switch_language_link_comp>
            </div>
          ) : (
            <div>
              <Switch_route_link_comp url={`/${lang}/`} slug="">
                <span>Home</span>
              </Switch_route_link_comp>

              <Switch_route_link_comp url={`/${lang}/timeline`} slug="timeline">
                <span>Timeline</span>
              </Switch_route_link_comp>
              <Switch_language_link_comp languages={["en", "de"]}>
                <div>Switch to German</div>
              </Switch_language_link_comp>
            </div>
          )}
        </div>
        {props.children}
      </body>
    </html>
  );
}
