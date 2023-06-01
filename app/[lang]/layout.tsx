import "./globals.css";
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

  return (
    <html lang={language_cookie || props.params.lang}>
      <body className={quicksand.className}>{props.children}</body>
    </html>
  );
}
