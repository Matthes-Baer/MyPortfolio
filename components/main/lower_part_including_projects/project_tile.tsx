"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";
import { useParams } from "next/navigation";
import { gsap } from "gsap";

import { TECHSTACK_IMAGES } from "@/utils/import_images";
import github_icon from "public/main_images/github_icon.png";
import { IImage_Props, IProject } from "@/utils/interfaces";
import { SupportedLanguages } from "@/utils/types";
import Loading from "@/app/[lang]/loading";
import CHANGE_PROJECT_IMAGE_BUTTON from "./change_project_image_button";

const PROJECT_TILE: (props: {
  project: IProject;
  idx: number;
  project_images: IImage_Props[];
}) => JSX.Element = (props: {
  project: IProject;
  idx: number;
  project_images: IImage_Props[];
}): JSX.Element => {
  const [current_idx, set_current_idx]: [
    number,
    Dispatch<SetStateAction<number>>
  ] = useState<number>(0);

  const slider_ref: MutableRefObject<null> = useRef(null);
  const language: string = useParams().lang;

  useEffect((): void => {
    const slider = slider_ref.current;

    gsap.fromTo(
      slider,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "easeInOut" }
    );
  }, [current_idx]);

  return (
    <Suspense fallback={<Loading />}>
      <div className="mb-5 mt-5 p-3">
        <div className="flex flex-col sm:flex-row items-center text-center">
          <div
            className="p-1"
            style={{
              fontSize: "calc(22px + 1.75vw)",
            }}
          >
            {language === "de" ? "Projekt" : "Project"}:{" "}
            <span className="border-b border-b-card_yellow">
              {props.project.name[language as "en" | "de"]}
            </span>
          </div>
          <div className="flex items-center">
            {props.project.links.project && (
              <div className="ml-2">
                <Link href={props.project.links.project} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-[30px] h-[30px] shadow"
                    aria-label={
                      language === "de"
                        ? `Projekt-Link für ${props.project.name.de}`
                        : `project link for ${props.project.name.en}`
                    }
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </Link>
              </div>
            )}
            {props.project.links.github && (
              <div className="ml-2">
                <Link href={props.project.links.github} target="_blank">
                  <Image
                    src={github_icon}
                    alt={
                      language === "de"
                        ? `GitHub-Link für ${props.project.name.de}`
                        : `GitHub link for ${props.project.name.en}`
                    }
                    width={25}
                    height={25}
                    className="rounded-[50%]"
                  />
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col mt-3 mb-3">
          <div className="flex flex-wrap justify-center sm:justify-start">
            {props.project.techstack.map(
              (techstack_item: string, idx: number) => (
                <Image
                  key={idx}
                  src={TECHSTACK_IMAGES[techstack_item].src}
                  alt={
                    TECHSTACK_IMAGES[techstack_item].alt[
                      language as SupportedLanguages
                    ]
                  }
                  height={35}
                  width={35}
                  className="m-1"
                  title={techstack_item}
                />
              )
            )}
          </div>
        </div>
        <div className="p-1 text-xl whitespace-pre-wrap text-justify">
          {props.project.description[language as "en" | "de"].replaceAll(
            "\\n",
            "\n"
          )}
        </div>
        <div className="relative bg-[transparent] w-full mx-auto min-w-[250px] mt-5">
          <Suspense fallback={<Loading />}>
            <Image
              src={props.project_images[current_idx].src}
              alt={
                props.project_images[current_idx].alt[
                  language as SupportedLanguages
                ]
              }
              height={750}
              width={750}
              ref={slider_ref}
              className={
                "mx-auto " +
                (props.project.project_key === "divid" ? "w-2/5" : "w-4/5")
              }
              style={{ boxShadow: "0px 3px 7.5px 0px rgba(0,0,0,0.25)" }}
              quality={40}
              placeholder="blur"
              priority
            />

            <CHANGE_PROJECT_IMAGE_BUTTON
              style_direction="left"
              logic_direction="downwards"
              language={language}
              project_key={props.project.project_key}
              current_idx={current_idx}
              set_current_idx={set_current_idx}
              path_d="M15.75 19.5L8.25 12l7.5-7.5"
            />

            <CHANGE_PROJECT_IMAGE_BUTTON
              style_direction="right"
              logic_direction="upwards"
              language={language}
              project_key={props.project.project_key}
              current_idx={current_idx}
              set_current_idx={set_current_idx}
              path_d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </Suspense>
        </div>
      </div>
    </Suspense>
  );
};

export default PROJECT_TILE;
