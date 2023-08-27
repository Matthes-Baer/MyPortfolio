"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

import { IProject, IProjects } from "@/utils/interfaces";
import PROJECT_TILE from "./project_tile";
import PROJECT_TILES_BACKGROUND_IMAGES from "./project_tiles_background_images";
import Loading from "@/app/[lang]/loading";
import { PROJECT_IMAGES } from "@/utils/import_images";
import NEXTPAGE_INFORMATION from "./nextpage_information";

const PROJECT_TILES_PARENT: (props: {
  project_data: IProject[] | undefined;
}) => JSX.Element = (props: {
  project_data: IProject[] | undefined;
}): JSX.Element => {
  const language: string = useParams().lang;
  const project_images: IProjects = PROJECT_IMAGES;

  return (
    <section className="relative bg-dark_gray_stone w-full min-h-screen z-20 border-t-2 border-card_yellow">
      <PROJECT_TILES_BACKGROUND_IMAGES />
      <div className="mx-auto mt-5 mb-5">
        <div className="flex flex-col items-center text-[white] text-center">
          <h1
            style={{
              fontSize: "calc(26px + 1.75vw)",
            }}
          >
            {language === "de" ? "Meine Projekte" : "My Projects"}
          </h1>
          <span
            style={{
              fontSize: "calc(14px + 0.35vw)",
            }}
          >
            {language === "de"
              ? "exkl. der Portfolio-Website"
              : "excl. the portfolio website"}
          </span>
          <Link
            href="https://github.com/Matthes-Baer/MyPortfolio"
            target="_blanket"
            className="transition-all border-b border-card_yellow hover:text-card_yellow hover:border-b-[white]"
            style={{
              fontSize: "calc(12px + 0.35vw)",
            }}
          >
            (
            {language === "de" ? "Code auf GitHub anschauen" : "View on GitHub"}
            )
          </Link>
        </div>
      </div>

      <div className="flex flex-col mb-[75px]">
        {props.project_data ? (
          props.project_data.map((project: IProject, idx: number) => (
            <div key={project.project_key} className="relative mb-10">
              <div
                className="flex flex-col w-full lg:w-1/2 text-[white] border-0"
                style={
                  idx % 2 === 0
                    ? { marginLeft: 0, marginRight: "auto" }
                    : { marginLeft: "auto", marginRight: 0 }
                }
              >
                <PROJECT_TILE
                  project={project}
                  idx={idx}
                  project_images={project_images[project.project_key]}
                />
              </div>

              {/* Mit oder ohne .via. */}
              {idx % 2 === 0 ? (
                <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-dark_gray_stone via-dark_gray_stone to-[transparent] z-10 opacity-0 lg:opacity-100"></div>
              ) : (
                <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-dark_gray_stone via-dark_gray_stone to-[transparent] z-10 opacity-0 lg:opacity-100"></div>
              )}
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>

      <NEXTPAGE_INFORMATION />
    </section>
  );
};

export default PROJECT_TILES_PARENT;
