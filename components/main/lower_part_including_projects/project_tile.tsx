"use client";

import { PROJECT_IMAGES, TECHSTACK_IMAGES } from "@/utils/import_images";
import github_icon from "public/main_images/github_icon.png";

import { IProject } from "@/utils/interfaces";

import Image from "next/image";
import Link from "next/link";
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useParams } from "next/navigation";
import { gsap } from "gsap";
import { SupportedLanguages } from "@/utils/types";

const PROJECT_TILE: (props: {
  project: IProject;
  idx: number;
}) => JSX.Element = (props: {
  project: IProject;
  idx: number;
}): JSX.Element => {
  const [current_idx, set_current_idx]: [
    number,
    Dispatch<SetStateAction<number>>
  ] = useState<number>(0);

  const slider_ref: MutableRefObject<null> = useRef(null);
  const language: string = useParams().lang;

  useEffect(() => {
    const tl: gsap.core.Timeline = gsap.timeline();
    const slider = slider_ref.current;

    tl.fromTo(
      slider,
      { opacity: 0 },
      { opacity: 1, duration: 3, ease: "easeInOut" }
    );
  }, [current_idx]);

  return (
    <div className="mb-5 mt-5">
      <div className="flex items-center">
        <div className="text-2xl p-3">
          Projekt: {props.project.name[language as "en" | "de"]}
        </div>
        <div className="flex items-center">
          {props.project.links.project && (
            <div>
              <Link href={props.project.links.project} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                  aria-label={`Placeholder`}
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
            <div>
              <Link href={props.project.links.github} target="_blank">
                <Image
                  src={github_icon}
                  alt={language === "de" ? "GitHub-Icon" : "GitHub icon"}
                  width={20}
                  height={20}
                  className="bg-[white] rounded-[50%]"
                />
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col">
        <div>Techstack:</div>
        <div className="flex p-3">
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
              />
            )
          )}
        </div>
      </div>
      <div className="p-3" style={{ whiteSpace: "pre-line" }}>
        {props.project.description[language as "en" | "de"].replaceAll(
          "\\n",
          "\n"
        )}
      </div>
      <div className="relative bg-[transparent] w-1/2 lg:w-2/3 mx-auto min-w-[250px]">
        <Image
          src={PROJECT_IMAGES[props.project.project_key][current_idx].src}
          alt={
            PROJECT_IMAGES[props.project.project_key][current_idx].alt[
              language as SupportedLanguages
            ]
          }
          height={500}
          width={500}
          ref={slider_ref}
          className={
            props.project.project_key === "divid"
              ? "w-1/3 h-[400px] mx-auto min-w-[250px]"
              : "w-full h-[165px] sm:h-[200px] md:h-[250px] lg:h-[225px] xl:h-[250px] 2xl:h-[300px]"
          }
        />

        {current_idx < PROJECT_IMAGES[props.project.project_key].length - 1 && (
          <button
            className="absolute top-1/2 right-0 -translate-y-1/2 z-10 p-2 mr-2 bg-dark_gray_stone border border-card_yellow hover:opacity-70 transition-opacity rounded-[50%] shadow-md"
            onClick={() => set_current_idx((idx: number) => (idx += 1))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        )}

        {current_idx > 0 && (
          <button
            className="absolute top-1/2 left-0 -translate-y-1/2 z-10 p-2 ml-2 bg-dark_gray_stone border border-card_yellow hover:opacity-70 transition-opacity rounded-[50%] shadow-md"
            onClick={() => set_current_idx((idx: number) => (idx -= 1))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default PROJECT_TILE;
