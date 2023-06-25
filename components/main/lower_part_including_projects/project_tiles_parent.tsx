"use client";

//! Styling weiter anpassen für Project Tile
//! Aria-Label für project svg link image
//! ggf. weiter TypeScript/Namen/Struktur dieser file optimieren
//! Bilder zum ersten Projekt erstellen und einfügen in file
//! alt texts für alle Bilder anpassen (en und de) und beim Implementieren jeweils beachten (SupportedLanguages casting)
//! Nächstes Projekt einfügen
//! Am besten Rechteck-Format - das passt am besten rein - das mit dem Blender-Icon ist mehr ein Quadrat-Format, weshalb es so viel größer erscheint
//! Für React Native Projekt mit den vielen schmalen Bildern vielleicht am besten mehrere Bilder nebeneinander zu einem Bild machen, damit es ein Rechteck-Format bekommt?

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { MutableRefObject, useEffect, useRef } from "react";

import { IProject } from "@/utils/interfaces";
import PROJECT_TILE from "./project_tile";

gsap.registerPlugin(ScrollTrigger);

const PROJECT_TILES_PARENT: (props: {
  project_data: IProject[];
}) => JSX.Element = (props: { project_data: IProject[] }): JSX.Element => {
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
                      start: "-=500",
                      end: "+=500",
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

  return (
    <div className="relative bg-dark_gray_stone w-full min-h-screen z-20 border-t-2 border-card_yellow">
      <div className="flex flex-col mt-5 mb-[50px]">
        {props.project_data &&
          props.project_data.map((project: IProject, idx: number) => (
            <div key={project.project_key} className="relative mb-10">
              <div
                className="flex flex-col w-full lg:w-1/2 text-[white] border-0 lg:border-r-2 lg:border-r-[white] lg:border-l-2 lg:border-l-[white]"
                style={
                  idx % 2 === 0
                    ? { marginLeft: 0, marginRight: "auto" }
                    : { marginLeft: "auto", marginRight: 0 }
                }
                ref={(el: HTMLElement | null) =>
                  (projects_ref.current[idx] = el)
                }
              >
                <PROJECT_TILE project={project} idx={idx} />
              </div>

              {/* Mit oder ohne .via. */}
              {idx % 2 === 0 ? (
                <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-dark_gray_stone via-dark_gray_stone to-[transparent] z-10 opacity-0 lg:opacity-100"></div>
              ) : (
                <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-dark_gray_stone via-dark_gray_stone to-[transparent] z-10 opacity-0 lg:opacity-100"></div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default PROJECT_TILES_PARENT;
