"use client";

//! Styling weiter anpassen für Project Tile
//! ggf. weiter TypeScript/Namen/Struktur dieser file optimieren
//! Bilder zum ersten Projekt erstellen und einfügen in file
//! Nächstes Projekt einfügen

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";

import { PROJECT_IMAGES, TECHSTACK_IMAGES } from "@/utils/import_images";
import { IProject } from "@/utils/interfaces";
import { useParams } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const PROJECT_TILES_PARENT: (props: {
  project_data: IProject[];
}) => JSX.Element = (props: { project_data: IProject[] }): JSX.Element => {
  console.log(props.project_data);
  const language: string = useParams().lang;
  const [current_idx, set_current_idx]: [
    number,
    Dispatch<SetStateAction<number>>
  ] = useState(0);
  const slider_ref: MutableRefObject<null> = useRef(null);
  const projects_ref: MutableRefObject<(HTMLElement | null)[]> = useRef<
    (HTMLElement | null)[]
  >([]);

  useEffect(() => {
    projects_ref.current = [...projects_ref.current];

    const animate_tiles: () => void = (): void => {
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          projects_ref.current.forEach(
            (element: HTMLElement | null, index: number) => {
              if (element) {
                gsap.fromTo(
                  element,
                  { x: 0 },
                  {
                    x: index % 2 === 0 ? "50%" : "-50%",
                    duration: 1,
                    scrollTrigger: {
                      trigger: element,
                      start: "-=250",
                      end: "+=200",
                      scrub: true,
                    },
                  }
                );
              }
            }
          );
        },
      });
    };

    const timeout: NodeJS.Timeout = setTimeout((): void => {
      animate_tiles();
    }, 500);

    return (): void => clearTimeout(timeout);
  }, [props.project_data]);

  useEffect(() => {
    const tl: gsap.core.Timeline = gsap.timeline();
    const slider = slider_ref.current;

    tl.fromTo(
      slider,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "linear" }
    );
  }, [current_idx]);

  return (
    <div className="relative bg-dark_gray_stone w-full min-h-screen z-20 border-t-2 border-card_yellow">
      <div className="flex flex-col">
        {props.project_data &&
          props.project_data.map((project: IProject, idx: number) => (
            <div key={project.project_key} className="relative mb-10">
              {idx % 2 === 0 ? (
                <div
                  className="flex flex-col w-full lg:w-1/2 ml-0 mr-auto text-[white] border-0 lg:border-r-2 lg:border-r-[white] lg:border-l-2 lg:border-l-[white]"
                  ref={(el: HTMLElement | null) =>
                    (projects_ref.current[idx] = el)
                  }
                >
                  <div className="text-2xl p-3">
                    Projekt: {project.name[language as "en" | "de"]}
                  </div>
                  <div className="flex p-3 mt-2">
                    {project.techstack.map(
                      (techstack_item: string, idx: number) => (
                        <Image
                          key={idx}
                          src={TECHSTACK_IMAGES[techstack_item].src}
                          alt={TECHSTACK_IMAGES[techstack_item].alt}
                          height={35}
                          width={35}
                          className="m-1"
                        />
                      )
                    )}
                  </div>
                  <div className="p-3">
                    {project.description[language as "en" | "de"]}
                  </div>
                  <div className="relative bg-[red] w-1/2 mx-auto">
                    <Image
                      src={PROJECT_IMAGES[project.project_key][current_idx].src}
                      alt="test"
                      height={200}
                      width={200}
                      className=""
                      ref={slider_ref}
                    />

                    {current_idx <
                      PROJECT_IMAGES[project.project_key].length - 1 && (
                      <button
                        className="absolute top-1/2 right-0 -translate-y-1/2 z-10 bg-transparent border-none"
                        onClick={() =>
                          set_current_idx((idx: number) => (idx += 1))
                        }
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
                        className="absolute top-1/2 left-0 -translate-y-1/2 z-10 bg-transparent border-none"
                        onClick={() =>
                          set_current_idx((idx: number) => (idx -= 1))
                        }
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
              ) : (
                //? Projects on the right side - so wahrscheinlich unsinnig, am besten eher inline condtionally arbeiten damit es nicht so DRY ist.
                <div
                  className="w-1/4 h-[400px] bg-[pink] text-[white]"
                  style={{ marginRight: 0, marginLeft: "auto" }}
                  ref={(el: HTMLElement | null) =>
                    (projects_ref.current[idx] = el)
                  }
                >
                  {project.name[language as "en" | "de"]}
                </div>
              )}

              {/* Mit oder ohne .via. */}
              {idx % 2 === 0 ? (
                <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-dark_gray_stone via-dark_gray_stone to-[transparent] z-10 opacity-0 lg:opacity-100"></div>
              ) : (
                <div className="absolute top-0 right-0 w-1/4 h-[400px] bg-gradient-to-l from-dark_gray_stone via-dark_gray_stone to-[transparent] z-10 opacity-0 lg:opacity-100"></div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default PROJECT_TILES_PARENT;
