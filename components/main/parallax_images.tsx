"use client";

import Image from "next/image";
import fantasy_branch from "public/main_images/fantasy_branch.png";
import fantasy_cloud from "public/main_images/fantasy_cloud.png";
import fantasy_background from "public/main_images/fantasy_background.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { headers } from "next/headers";

const PARALLAX_IMAGES = () => {
  const containerRef = useRef(null);
  const cloudRef = useRef(null);
  const branchRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const container = containerRef.current;
    const cloud = cloudRef.current;
    const branch = branchRef.current;

    ScrollTrigger.matchMedia({
      "(min-width: 768px)": () => {
        gsap.to(cloud, {
          yPercent: 25,
          rotation: 135,
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "+=500",
            scrub: true,
          },
        });

        gsap.to(branch, {
          yPercent: 50,
          rotation: 135,
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "+=500",
            scrub: true,
          },
        });
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute w-full"
      style={{ top: 0, left: 0 }}
    >
      <Image
        src={fantasy_background}
        alt="test"
        width={1000}
        height={1000}
        style={{ zIndex: -1, width: "100%", height: "100%" }}
      />
      <Image
        src={fantasy_branch}
        alt="test"
        width={500}
        height={100}
        style={{
          transform: "rotate(135deg)",
          position: "absolute",
          top: 0,
          left: "-5%",
          zIndex: 1,
          width: "25%",
          height: "25%",
        }}
        ref={branchRef}
      />

      <Image
        src={fantasy_cloud}
        alt="test"
        width={250}
        height={250}
        style={{ position: "absolute", top: 250, left: 500, opacity: 0.85 }}
        ref={cloudRef}
      />
    </div>
  );
};

export default PARALLAX_IMAGES;
