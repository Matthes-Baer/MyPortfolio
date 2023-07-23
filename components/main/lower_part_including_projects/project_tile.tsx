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
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IMAGE_BACKGROUND_DOTS from "./image_background_dots";

const PROJECT_TILE: (props: {
  project: IProject;
  idx: number;
  project_images: IImage_Props[];
}) => JSX.Element = (props: {
  project: IProject;
  idx: number;
  project_images: IImage_Props[];
}): JSX.Element => {
  gsap.registerPlugin(ScrollTrigger);

  const [load_state, set_load_state]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);

  const [current_idx, set_current_idx]: [
    number,
    Dispatch<SetStateAction<number>>
  ] = useState<number>(0);

  const container_ref: MutableRefObject<null> = useRef(null);
  const slider_ref: MutableRefObject<null> = useRef(null);
  const language: string = useParams().lang;

  const image_slide_click_function = (): void => {
    const slider = slider_ref.current;

    gsap.fromTo(
      slider,
      { y: "-200%", opacity: 0.1 },
      {
        y: 0,
        duration: 3.5,
        ease: "Power1.easeOut",
        onComplete: () => {
          gsap.fromTo(
            slider,
            { opacity: 0.1 },
            { opacity: 1, duration: 1, ease: "linear", delay: 0.25 }
          );
        },
      }
    );
  };

  useEffect((): (() => void) => {
    const animate_tiles = (): void => {
      ScrollTrigger.refresh();

      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          gsap.fromTo(
            container_ref.current,
            { x: 0 },
            {
              x: props.idx % 2 === 0 ? "50%" : "-50%",
              duration: 1,
              scrollTrigger: {
                trigger: container_ref.current,
                start: "-=75% top",
                // props.project.name.en === "No Framework"
                //   ? "-=15% top"
                //   : props.project.name.en === "Divid"
                //   ? "-=900px top"
                //   : "-=900px top",
                end: "-=100px top",
                // props.project.name.en === "No Framework"
                //   ? "-=100px top"
                //   : props.project.name.en === "Divid"
                //   ? "-=50px top"
                //   : "-=50px top",
                scrub: true,
                markers: true,
              },
            }
          );
        },
      });
    };

    //* Fix for reload animation breaking bug
    const timeout: NodeJS.Timeout = setTimeout((): void => {
      animate_tiles();
    }, 5000);

    ScrollTrigger.refresh();

    return (): void => clearTimeout(timeout);
  }, [props.idx, props.project.name]);

  return (
    <Suspense fallback={<Loading />}>
      <div className="mb-5 mt-5 p-3" ref={container_ref}>
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
                    quality={65}
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
        <div className="relative bg-[transparent] w-full mx-auto min-w-[250px] mt-5 overflow-hidden">
          <Suspense fallback={<Loading />}>
            <IMAGE_BACKGROUND_DOTS />
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
                (props.project.project_key === "divid" ? "w-1/3" : "w-4/5")
              }
              placeholder="blur"
            />

            <CHANGE_PROJECT_IMAGE_BUTTON
              style_direction="left"
              logic_direction="downwards"
              language={language}
              project_key={props.project.project_key}
              current_idx={current_idx}
              set_current_idx={set_current_idx}
              path_d="M15.75 19.5L8.25 12l7.5-7.5"
              image_slide_click_function={image_slide_click_function}
              load_state={load_state}
              set_load_state={set_load_state}
            />

            <CHANGE_PROJECT_IMAGE_BUTTON
              style_direction="right"
              logic_direction="upwards"
              language={language}
              project_key={props.project.project_key}
              current_idx={current_idx}
              set_current_idx={set_current_idx}
              path_d="M8.25 4.5l7.5 7.5-7.5 7.5"
              image_slide_click_function={image_slide_click_function}
              load_state={load_state}
              set_load_state={set_load_state}
            />
          </Suspense>
        </div>
      </div>
    </Suspense>
  );
};

export default PROJECT_TILE;
