import { IRootLayoutProps } from "@/utils/interfaces";
import { Metadata, ResolvingMetadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";
import Loading from "../../loading";
import LANGUAGE_ERROR_COMP from "@/components/language_error_comp";

export async function generateMetadata(
  props: IRootLayoutProps,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const lang: string = props.params.lang;

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
    return <LANGUAGE_ERROR_COMP language={lang} />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div>{props.children}</div>
    </Suspense>
  );
}
