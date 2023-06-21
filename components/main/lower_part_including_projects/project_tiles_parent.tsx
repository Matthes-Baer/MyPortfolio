"use client";

//! Styling anpassen für Project Tile
//! TypeScript/Namen/Struktur dieser file optimieren
//! MongoDB mit erstem Projekt füllen
//! Dazugehörige Bilder erstellen und in import_images zuordnen
//! In dieser File die Variablen mit den dynamischen prop-Variablen austauschen
//! Ausprobieren
//! Dann weitere Projekte einordnen oder Styling etc. weiter anpassen und erneut ausprobieren

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Figma from "public/main_images/card_icons/icon_figma.png";
import Image from "next/image";
import { PROJECT_IMAGES } from "@/utils/import_images";

gsap.registerPlugin(ScrollTrigger);

const PROJECT_TILES_PARENT = (props: { project_data: any }) => {
  const [idx, setIdx] = useState(0);
  const sliderRef = useRef(null);
  const elements = props.project_data;
  const elements_ref = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    elements_ref.current = elements_ref.current.slice(0, elements.length);
    const animate_tiles = () => {
      ScrollTrigger.matchMedia({
        "(min-width: 1000px)": () => {
          elements_ref.current.forEach(
            (element: HTMLElement | null, index: number) => {
              if (element) {
                gsap.fromTo(
                  element,
                  { x: 0 },
                  {
                    x: index % 2 === 0 ? "200" : "-200",
                    duration: 0.25,
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

    const timeout = setTimeout(() => {
      animate_tiles();
    }, 500);

    return () => clearTimeout(timeout);
  }, [elements]);

  useEffect(() => {
    const tl = gsap.timeline();
    const slider = sliderRef.current;

    tl.fromTo(
      slider,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "linear" }
    );
  }, [idx]);

  return (
    <div className="relative bg-dark_gray_stone w-full min-h-screen z-20 border-t-2 border-card_yellow">
      <div style={{ display: "flex", flexDirection: "column" }}>
        {elements &&
          elements.map((element: any, index: number) => (
            <div key={index} className="relative mb-10">
              {index % 2 === 0 ? (
                <div
                  className="flex flex-col w-1/4 bg-[pink] text-[black]"
                  style={{ marginLeft: 0, marginRight: "auto" }}
                  ref={(el: HTMLElement | null) =>
                    (elements_ref.current[index] = el)
                  }
                >
                  <div>{element.name}</div>
                  <div>
                    <Image src={Figma} alt="Test" height={25} width={25} />
                  </div>
                  <div>
                    Hier würde eine Beschreibung zum Projekt stehen. Lorem ipsum
                    dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam
                    erat, sed diam voluptua. At vero eos et accusam et justo duo
                    dolores et ea rebum. Stet clita kasd gubergren, no sea
                    takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                    dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam
                    erat, sed diam voluptua. At vero eos et accusam et justo duo
                    dolores et ea rebum. Stet clita kasd gubergren, no sea
                    takimata sanctus est Lorem ipsum dolor sit amet.
                  </div>
                  {/* Jeweiliges Projekt ansteuern (dynamisch als prop): */}
                  <div>
                    <Image
                      src={PROJECT_IMAGES["no_framework_project"][idx].src}
                      alt="test"
                      height={400}
                      width={400}
                      className="w-full"
                      ref={sliderRef}
                    />
                  </div>
                  {idx < PROJECT_IMAGES["no_framework_project"].length - 1 && (
                    <button onClick={() => setIdx((idx) => (idx += 1))}>
                      add
                    </button>
                  )}

                  {idx > 0 && (
                    <button onClick={() => setIdx((idx) => (idx -= 1))}>
                      subtract
                    </button>
                  )}
                </div>
              ) : (
                <div
                  className="w-1/4 h-[400px] bg-[pink] text-[black]"
                  style={{ marginRight: 0, marginLeft: "auto" }}
                  ref={(el: HTMLElement | null) =>
                    (elements_ref.current[index] = el)
                  }
                >
                  {element.name}
                </div>
              )}

              {/* Mit oder ohne .via. */}
              {index % 2 === 0 ? (
                <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-dark_gray_stone via-dark_gray_stone to-[transparent] z-10"></div>
              ) : (
                <div className="absolute top-0 right-0 w-1/4 h-[400px] bg-gradient-to-l from-dark_gray_stone via-dark_gray_stone to-[transparent] z-10"></div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default PROJECT_TILES_PARENT;
