import { Metadata, ResolvingMetadata } from "next";
import { Suspense } from "react";

import { IRootLayoutProps } from "@/utils/interfaces";
import Loading from "../../loading";

export async function generateMetadata(
  props: IRootLayoutProps,
  parent: ResolvingMetadata
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
  return (
    <Suspense fallback={<Loading />}>
      <div>{props.children}</div>
    </Suspense>
  );
};

export default ROOT_LAYOUT;
