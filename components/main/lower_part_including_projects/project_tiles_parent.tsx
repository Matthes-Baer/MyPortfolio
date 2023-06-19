"use client";

import { connect_to_database } from "@/utils/mongoDB_connect";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PROJECT_TILES_PARENT = (props: { project_data: any }) => {
  const elements = props.project_data;
  const elements_ref = useRef<(HTMLElement | null)[]>([]);
  console.log(elements);

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

  return (
    <div className="relative bg-dark_gray_stone w-full min-h-screen z-20 border-t-4 border-[white]">
      <div style={{ display: "flex", flexDirection: "column" }}>
        {elements &&
          elements.map((element: any, index: number) => (
            <div key={index} className="relative mb-10">
              <div
                className="w-[300px] h-[150px] bg-[pink] text-[black]"
                style={
                  index % 2 === 0
                    ? { marginLeft: 0, marginRight: "auto" }
                    : { marginRight: 0, marginLeft: "auto" }
                }
                ref={(el: HTMLElement | null) =>
                  (elements_ref.current[index] = el)
                }
              >
                {element.name}
              </div>
              {/* Mit oder ohne .via. */}
              {index % 2 === 0 ? (
                <div className="absolute top-0 left-0 w-[300px] h-[150px] bg-gradient-to-r from-dark_gray_stone via-dark_gray_stone to-[transparent] z-10"></div>
              ) : (
                <div className="absolute top-0 right-0 w-[300px] h-[150px] bg-gradient-to-l from-dark_gray_stone via-dark_gray_stone to-[transparent] z-10"></div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default PROJECT_TILES_PARENT;
