"use client";

import Image from "next/image";
import fantasy_branch from "public/main_images/fantasy_branch.png";
import fantasy_background from "public/main_images/fantasy_background.png";
import fantasy_tree_green from "public/main_images/fantasy_tree_green.png";
import fantasy_tree_red from "public/main_images/fantasy_tree_red.png";
import three_birds from "public/main_images/three_birds.png";
import two_birds from "public/main_images/two_birds.png";
import fantasy_merchant from "public/main_images/fantasy_merchant.png";
import fantasy_dog from "public/main_images/fantasy_dog.png";

import { MutableRefObject, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CARDS_COMP from "./cards_comp";

//! Bei jedem Bild Alt hinzufügen, weitere wichtige props?

gsap.registerPlugin(ScrollTrigger);

const PARALLAX_IMAGES_COMP: () => JSX.Element = (): JSX.Element => {
  const container_ref: MutableRefObject<null> = useRef<null>(null);
  const fantasy_tree_green_ref: MutableRefObject<null> = useRef<null>(null);
  const fantasy_tree_red_ref: MutableRefObject<null> = useRef<null>(null);
  const fantasy_branch_ref: MutableRefObject<null> = useRef<null>(null);
  const three_birds_ref: MutableRefObject<null> = useRef<null>(null);
  const two_birds_ref: MutableRefObject<null> = useRef<null>(null);
  const fantasy_merchant_ref: MutableRefObject<null> = useRef<null>(null);

  useEffect(() => {
    const container = container_ref.current;
    const fantasy_tree_green = fantasy_tree_green_ref.current;
    const fantasy_tree_red = fantasy_tree_red_ref.current;
    const fantasy_branch = fantasy_branch_ref.current;
    const three_birds = three_birds_ref.current;
    const two_birds = two_birds_ref.current;
    const fantasy_merchant = fantasy_merchant_ref.current;

    ScrollTrigger.matchMedia({
      "(min-width: 768px)": () => {
        gsap.to(fantasy_branch, {
          top: "25%",
          scrollTrigger: {
            trigger: container,
            start: "50",
            end: "bottom",
            scrub: true,
          },
        });

        gsap.to(fantasy_tree_green, {
          yPercent: 7.5,
          scrollTrigger: {
            trigger: container,
            start: "50",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(fantasy_tree_red, {
          yPercent: 10,
          scrollTrigger: {
            trigger: container,
            start: "50",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(three_birds, {
          xPercent: 20,
          scrollTrigger: {
            trigger: container,
            start: "50",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(two_birds, {
          xPercent: -15,
          scrollTrigger: {
            trigger: container,
            start: "50",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(fantasy_merchant, {
          xPercent: 50,
          yPercent: -40,
          scrollTrigger: {
            trigger: container,
            start: "50",
            end: "bottom top",
            scrub: true,
          },
        });
      },
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <div ref={container_ref} className="relative w-full">
      <CARDS_COMP />
      <Image
        src={fantasy_background}
        alt="test"
        width={1000}
        height={1000}
        className="z-[-1] w-full h-full min-h-[800px]"
      />

      <Image
        src={fantasy_branch}
        alt="test"
        width={500}
        height={100}
        className="absolute top-[10%] -left-[4%] opacity-90 w-1/4 h-1/4 rotate-[135deg]"
        ref={fantasy_branch_ref}
      />

      <Image
        src={fantasy_tree_green}
        alt="test"
        width={1000}
        height={1000}
        className="absolute -bottom-[60%] -left-[300px] md:-left-1/3 w-1/2 h-full z-10 rotate-y-180 min-w-[400px]"
        ref={fantasy_tree_green_ref}
      />

      <Image
        src={fantasy_tree_red}
        alt="test"
        width={1000}
        height={1000}
        className="absolute -bottom-1/4 -right-[275px] lg:-right-1/4 w-2/5 h-4/5 opacity-85 z-10 min-w-[400px] rotate-[-15deg]"
        ref={fantasy_tree_red_ref}
      />

      <Image
        src={three_birds}
        alt="test"
        width={500}
        height={500}
        className="absolute top-[30%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[10%] h-1/5 opacity-90"
        ref={three_birds_ref}
      />

      <Image
        src={two_birds}
        alt="test"
        width={500}
        height={500}
        className="absolute top-[35%] right-[5%] w-[10%] h-1/5 opacity-90"
        ref={two_birds_ref}
      />

      <Image
        src={fantasy_merchant}
        alt="test"
        width={500}
        height={500}
        className="absolute bottom-[15%] right-[32.5%] w-[4%] h-[8%] opacity-90"
        ref={fantasy_merchant_ref}
      />

      <Image
        src={fantasy_dog}
        alt="test"
        width={500}
        height={500}
        className="absolute bottom-[15%] right-[25%] w-[4%] h-[8%] opacity-90"
      />
    </div>
  );
};

export default PARALLAX_IMAGES_COMP;
