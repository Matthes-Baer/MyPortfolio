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
      title: "Portfolio - Lernpfad",
      description:
        "Dies ist mein Lernpfad, der einen Überblick über einige meiner Eckpunkte in der Softwareentwicklung auflistet.",
    };
  } else {
    return {
      title: "Portfolio - Learning Journey",
      description:
        "This is my learning journey listing an overview of some of my stages in software development.",
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
