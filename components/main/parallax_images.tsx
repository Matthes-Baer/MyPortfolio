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
import fantasy_house from "public/main_images/fantasy_house.png";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//! Bei jedem Bild Alt hinzufügen, weitere wichtige props?

const PARALLAX_IMAGES = () => {
  const container_ref = useRef(null);
  const fantasy_tree_green_ref = useRef(null);
  const fantasy_tree_red_ref = useRef(null);
  const fantasy_branch_ref = useRef(null);
  const three_birds_ref = useRef(null);
  const two_birds_ref = useRef(null);
  const fantasy_merchant_ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

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
          yPercent: 100,
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(fantasy_tree_green, {
          yPercent: 7.5,
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(fantasy_tree_red, {
          yPercent: 10,
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(three_birds, {
          xPercent: 20,
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(two_birds, {
          xPercent: -15,
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(fantasy_merchant, {
          xPercent: 50,
          yPercent: -40,
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        // gsap.to(fantasy_merchant, {
        //   xPercent: 50,
        //   yPercent: -40,
        //   scrollTrigger: {
        //     trigger: container,
        //     start: "top top",
        //     end: "bottom top",
        //     scrub: true,
        //   },
        // });
      },
    });
  }, []);

  return (
    <div ref={container_ref} className="relative w-full">
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
          top: "10%",
          left: "-4%",
          zIndex: 1,
          width: "25%",
          height: "25%",
          opacity: 0.9,
        }}
        ref={fantasy_branch_ref}
      />

      <Image
        src={fantasy_tree_green}
        alt="test"
        width={1000}
        height={1000}
        style={{
          position: "absolute",
          bottom: "-60%",
          left: "-30%",
          width: "50%",
          height: "100%",
          zIndex: 5,
          transform: "rotateY(180deg)",
          opacity: 0.85,
        }}
        ref={fantasy_tree_green_ref}
      />

      <Image
        src={fantasy_tree_red}
        alt="test"
        width={1000}
        height={1000}
        style={{
          position: "absolute",
          bottom: "-25%",
          right: "-25%",
          width: "40%",
          height: "80%",
          opacity: 0.85,
        }}
        ref={fantasy_tree_red_ref}
      />

      <Image
        src={three_birds}
        alt="test"
        width={500}
        height={500}
        style={{
          position: "absolute",
          top: "30%",
          left: "25%",
          transform: "translate(-50%, -50%)",
          width: "10%",
          height: "20%",
          opacity: 0.9,
        }}
        ref={three_birds_ref}
      />

      <Image
        src={two_birds}
        alt="test"
        width={500}
        height={500}
        style={{
          position: "absolute",
          top: "35%",
          right: "35%",
          width: "10%",
          height: "20%",
          opacity: 0.9,
        }}
        ref={two_birds_ref}
      />

      <Image
        src={fantasy_merchant}
        alt="test"
        width={500}
        height={500}
        style={{
          position: "absolute",
          bottom: "15%",
          right: "32.5%",
          width: "4%",
          height: "8%",
          opacity: 0.9,
        }}
        ref={fantasy_merchant_ref}
      />

      <Image
        src={fantasy_dog}
        alt="test"
        width={500}
        height={500}
        style={{
          position: "absolute",
          bottom: "15%",
          right: "25%",
          width: "4%",
          height: "8%",
          opacity: 0.9,
        }}
      />

      <Image
        src={fantasy_house}
        alt="test"
        width={500}
        height={500}
        style={{
          position: "absolute",
          top: "65%",
          right: "48%",
          width: "4.5%",
          height: "9%",
          opacity: 0.68,
        }}
      />
    </div>
  );
};

export default PARALLAX_IMAGES;
