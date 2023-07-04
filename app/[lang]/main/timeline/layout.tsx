import { IRootLayoutProps } from "@/utils/interfaces";
import { Metadata, ResolvingMetadata } from "next";
import { Suspense } from "react";
import Loading from "../../loading";
import Link from "next/link";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";

export async function generateMetadata(
  props: IRootLayoutProps,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const lang = props.params.lang;

  if (lang === "de") {
    return {
      title: "Portfolio - Zeitleiste",
      description:
        "Dies ist eine Zeitleiste, die einen Überblick über einige meiner Stationen in der Softwareentwicklung auflistet.",
    };
  } else {
    return {
      title: "Portfolio - Timeline",
      description:
        "This is a timeline listing an overview of some of my stages in software development.",
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
    <div>
      <Suspense fallback={<Loading />}>{props.children}</Suspense>
    </div>
  );
}
