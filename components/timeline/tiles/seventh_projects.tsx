import Link from "next/link";
import TEMPLATE_INNER_PART from "./template_inner_part";
import Image from "next/image";
import { Suspense } from "react";

import github_icon from "public/main_images/github_icon.png";
import Loading from "@/app/[lang]/loading";

const SEVENTH_PROJECTS: (props: { language: string }) => JSX.Element = (props: {
  language: string;
}): JSX.Element => {
  const title: string = props.language === "de" ? "Projekte" : "Projects";
  const content: string =
    props.language === "de"
      ? "Obwohl ich zuvor bereits kontinuierlich an praxisbezogenen Projekten gearbeitet hatte, legte ich ab 2023 einen besonderen Fokus darauf, verschiedene Projekte abzuschließen, um ein aussagekräftiges Portfolio aufzubauen. Im Laufe des Jahres 2023 habe ich auch diese Portfolio-Website konzipiert, bearbeitet und abgeschlossen."
      : "Although I have worked continuously on practice-based projects before, from 2023 onwards I have put a special focus on completing various projects in order to build a meaningful portfolio. During 2023, I also designed, edited and completed this portfolio website.";
  const date: string = props.language === "de" ? "Seit 2023" : "Since 2023";

  return (
    <div className="relative pb-[35px]">
      <div className="absolute right-0 bottom-0">
        <Link href={"https://github.com/Matthes-Baer"} target="_blank">
          <Image
            src={github_icon}
            alt={
              props.language === "de"
                ? `GitHub-Link für mein Profil`
                : `GitHub link for my profile`
            }
            width={40}
            height={40}
            className="rounded-[50%] shadow hover:opacity-70 transition"
            title="GitHub"
            style={{ boxShadow: "1px 1px 2.5px 0px rgba(0,0,0,0.5)" }}
          />
        </Link>
      </div>
      <TEMPLATE_INNER_PART title={title} content={content} date={date} />
    </div>
  );
};

export default SEVENTH_PROJECTS;
