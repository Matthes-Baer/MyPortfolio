import "../globals.css";
import type { IRootLayoutProps } from "@/utils/interfaces";
import { ResolvingMetadata, Metadata } from "next";
import { Suspense } from "react";

import Loading from "../loading";
import MAIN_NAVBAR from "@/components/layout/main_navbar";

export async function generateMetadata(
  props: IRootLayoutProps,
  parent: ResolvingMetadata
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
      title: "Portfolio - Main",
      description:
        "This is the main page of my portfolio, where I present my software development skills and give an overview of my previous projects.",
    };
  }
}

const ROOT_LAYOUT: (props: IRootLayoutProps) => JSX.Element = (
  props: IRootLayoutProps
): JSX.Element => {
  let language: string = props.params.lang;

  return (
    <Suspense fallback={<Loading />}>
      <div className="min-h-screen flex flex-col">
        <MAIN_NAVBAR language={language} />
        {props.children}
      </div>
    </Suspense>
  );
};

export default ROOT_LAYOUT;
