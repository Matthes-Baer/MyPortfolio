"use client";

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

import { TECHSTACK_IMAGES } from "@/utils/import_images";
import { IImage_Props, IProject } from "@/utils/interfaces";
import { SupportedLanguages } from "@/utils/types";
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

  const container_ref: MutableRefObject<any> = useRef();
  const slider_ref: MutableRefObject<any> = useRef();

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
              end: "-=150px top",
              scrub: true,
            },
          }
        );
      },
    });

    //* Fix for reload animation breaking bug
    const interval: NodeJS.Timeout = setInterval((): void => {
      ScrollTrigger.refresh();
    }, 250);

    return (): void => clearInterval(interval);
  }, [props.idx, props.project.name]);

  return (
    <div className="mb-5 mt-5 p-3" ref={container_ref}>
      <div className="flex flex-col items-center text-center">
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

        <div className="flex flex-col md:flex-row text-2xl items-center justify-center w-full mt-4 mb-4">
          {props.project.links.project && (
            <Link
              href={props.project.links.project}
              target="_blank"
              className="transition-all p-2 border-b border-card_yellow hover:text-card_yellow hover:border-b-[white]"
              style={{
                fontSize: "calc(16px + 0.5vw)",
              }}
            >
              {language === "de" ? "Website aufrufen" : "Visit the website"}
            </Link>
          )}
          {props.project.links.project && (
            <div className="w-4 h-4 ml-5 mr-5 mt-1 bg-card_yellow rounded-full shadow hidden md:block"></div>
          )}
          {props.project.links.github && (
            <Link
              href={props.project.links.github}
              target="_blank"
              className="transition-all p-2 border-b border-card_yellow hover:text-card_yellow hover:border-b-[white]"
              style={{
                fontSize: "calc(16px + 0.5vw)",
              }}
            >
              {language === "de"
                ? "Code auf GitHub anschauen"
                : "View on GitHub"}
            </Link>
          )}
        </div>
      </div>

      <div className="flex flex-col mt-3 mb-3">
        <div className="flex flex-wrap justify-center">
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
                height={50}
                width={50}
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
      <div className="relative bg-[transparent] w-full h-full mx-auto mt-5 overflow-hidden">
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
      </div>
    </div>
  );
};

export default PROJECT_TILE;
