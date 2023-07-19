import { Metadata, ResolvingMetadata } from "next";
import { Suspense } from "react";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";

import { IRootLayoutProps } from "@/utils/interfaces";
import Loading from "../../loading";
import LANGUAGE_ERROR_COMP from "@/components/language_error_comp";

export async function generateMetadata(
  props: IRootLayoutProps,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const language: string = props.params.lang;

  if (language === "de") {
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

const ROOT_LAYOUT: (props: IRootLayoutProps) => JSX.Element = (
  props: IRootLayoutProps
): JSX.Element => {
  let cookies_store: ReadonlyRequestCookies = cookies();
  let language_cookie: string | undefined =
    cookies_store.get("language_cookie")?.value;
  let language: string = props.params.lang;

  //* In case the language parameter in the URL is manually adjusted
  if (language_cookie != language) {
    return <LANGUAGE_ERROR_COMP language={language} />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div>{props.children}</div>
    </Suspense>
  );
};

export default ROOT_LAYOUT;
