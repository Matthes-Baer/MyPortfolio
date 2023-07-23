"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { MutableRefObject, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import fantasy_branch from "public/main_images/fantasy_branch.png";
import fantasy_background from "public/main_images/fantasy_background.jpeg";
import fantasy_tree_green_three from "public/main_images/fantasy_tree_green_three.png";
import fantasy_treeRed from "public/main_images/fantasy_treeRed.png";
import three_birds from "public/main_images/three_birds.png";
import two_birds from "public/main_images/two_birds.png";
import fantasy_merchant from "public/main_images/fantasy_merchant.png";
import fantasy_dog from "public/main_images/fantasy_dog.png";

import CARDS from "./cards";

const PARALLAX_IMAGES: () => JSX.Element = (): JSX.Element => {
  gsap.registerPlugin(ScrollTrigger);
  const container_ref: MutableRefObject<null> = useRef<null>(null);
  const fantasy_tree_green_ref: MutableRefObject<null> = useRef<null>(null);
  const fantasy_tree_red_ref: MutableRefObject<null> = useRef<null>(null);
  const fantasy_branch_ref: MutableRefObject<null> = useRef<null>(null);
  const three_birds_ref: MutableRefObject<null> = useRef<null>(null);
  const two_birds_ref: MutableRefObject<null> = useRef<null>(null);
  const fantasy_merchant_ref: MutableRefObject<null> = useRef<null>(null);
  const language = useParams().lang;

  useEffect((): void => {
    const container = container_ref.current;
    const fantasy_tree_green = fantasy_tree_green_ref.current;
    const fantasy_tree_red = fantasy_tree_red_ref.current;
    const fantasy_branch = fantasy_branch_ref.current;
    const three_birds = three_birds_ref.current;
    const two_birds = two_birds_ref.current;
    const fantasy_merchant = fantasy_merchant_ref.current;

    ScrollTrigger.matchMedia({
      "(min-width: 768px)": (): void => {
        gsap.to(fantasy_branch, {
          yPercent: 55,
          scrollTrigger: {
            trigger: container,
            start: "50",
            end: "bottom",
            scrub: true,
          },
        });

        gsap.to(fantasy_tree_green, {
          yPercent: -20,
          scrollTrigger: {
            trigger: container,
            start: "50",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(fantasy_tree_red, {
          yPercent: -25,
          scrollTrigger: {
            trigger: container,
            start: "50",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(three_birds, {
          xPercent: 25,
          scrollTrigger: {
            trigger: container,
            start: "50",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(two_birds, {
          xPercent: -75,
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
    <div ref={container_ref} className="relative w-full ">
      <CARDS />

      <div className="w-full h-full overflow-hidden">
        <Image
          src={fantasy_background}
          alt={
            language === "de"
              ? "Große Hintergrund-Szene"
              : "Large background scene"
          }
          width={2500}
          height={2500}
          className="z-[-1] w-full h-full min-h-[1250px] overflow-hidden object-none object-bottom"
          priority
          quality={65}
        />
      </div>

      <Image
        src={fantasy_branch}
        alt={
          language === "de"
            ? "Ast an der linken Seite"
            : "Branch on the left side"
        }
        width={375}
        height={375}
        quality={60}
        className="absolute top-[125px] -left-[50px] opacity-90 rotate-[135deg] object-none overflow-visible"
        ref={fantasy_branch_ref}
        placeholder="blur"
      />

      <Image
        src={fantasy_tree_green_three}
        alt={language === "de" ? "Grüner Baum" : "Green tree"}
        width={1000}
        height={1000}
        quality={40}
        className="absolute -bottom-[60%] -left-[500px] sm:-left-[650px] h-full opacity-90 z-10 rotate-[25deg] object-none overflow-visible"
        ref={fantasy_tree_green_ref}
        placeholder="blur"
      />

      <Image
        src={fantasy_treeRed}
        alt={language === "de" ? "Roter Baum" : "Red tree"}
        width={750}
        height={750}
        quality={40}
        className="absolute -bottom-1/4 -right-[375px] sm:-right-[425px] opacity-90 z-10 rotate-[-55deg] object-none overflow-visible"
        ref={fantasy_tree_red_ref}
        placeholder="blur"
      />

      <Image
        src={three_birds}
        alt={language === "de" ? "Drei Vögel" : "Three birds"}
        width={250}
        height={250}
        quality={30}
        className="absolute top-[30%] left-[45%] -translate-x-1/2 -translate-y-1/2 opacity-90 object-none overflow-visible"
        ref={three_birds_ref}
        placeholder="blur"
      />

      <Image
        src={two_birds}
        alt={language === "de" ? "Zwei Vögel" : "Two birds"}
        width={250}
        height={250}
        className="absolute top-[35%] right-[5%] opacity-90 object-none overflow-visible"
        ref={two_birds_ref}
        quality={30}
      />

      <Image
        src={fantasy_merchant}
        alt={language === "de" ? "Reisender Händler" : "Travelling salesman"}
        width={60}
        height={60}
        className="absolute bottom-[12.5%] right-[30%] opacity-90 object-none overflow-visible"
        ref={fantasy_merchant_ref}
        quality={30}
      />

      <Image
        src={fantasy_dog}
        alt={
          language === "de"
            ? "Hund des reisenden Händlers"
            : "Dog of the travelling merchant"
        }
        width={60}
        height={60}
        className="absolute bottom-[15%] right-[25%] opacity-90 object-none overflow-visible"
        quality={30}
      />
    </div>
  );
};

export default PARALLAX_IMAGES;
