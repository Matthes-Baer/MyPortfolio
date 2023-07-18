"use client";

import gsap from "gsap";
import { MutableRefObject, useEffect, useRef } from "react";

const ERROR_BACKGROUND_TILES: () => JSX.Element = (): JSX.Element => {
  const first_square_ref: MutableRefObject<null> = useRef<null>(null);
  const second_square_ref: MutableRefObject<null> = useRef<null>(null);
  const third_square_ref: MutableRefObject<null> = useRef<null>(null);
  const fourth_square_ref: MutableRefObject<null> = useRef<null>(null);
  const fifth_square_ref: MutableRefObject<null> = useRef<null>(null);
  const sixth_square_ref: MutableRefObject<null> = useRef<null>(null);
  const seventh_square_ref: MutableRefObject<null> = useRef<null>(null);
  const eight_square_ref: MutableRefObject<null> = useRef<null>(null);
  const ninth_square_ref: MutableRefObject<null> = useRef<null>(null);
  const tenth_square_ref: MutableRefObject<null> = useRef<null>(null);
  const eleventh_square_ref: MutableRefObject<null> = useRef<null>(null);

  useEffect(() => {
    const [
      first_square,
      second_square,
      third_square,
      fourth_square,
      fifth_square,
      sixth_square,
      seventh_square,
      eight_square,
      ninth_square,
      tenth_square,
      eleventh_square,
    ] = [
      first_square_ref.current,
      second_square_ref.current,
      third_square_ref.current,
      fourth_square_ref.current,
      fifth_square_ref.current,
      sixth_square_ref.current,
      seventh_square_ref.current,
      eight_square_ref.current,
      ninth_square_ref.current,
      tenth_square_ref.current,
      eleventh_square_ref.current,
    ];

    gsap.to(first_square, {
      opacity: 0.35,
      x: 25,
      duration: 1.65,
      ease: "easeInOut",
      repeat: -1,
      yoyo: true,
      repeatDelay: 2,
    });

    gsap.to(second_square, {
      opacity: 0.65,
      y: 15,
      delay: 2,
      duration: 1.25,
      ease: "easeInOut",
      repeat: -1,
      yoyo: true,
      repeatDelay: 1.5,
    });

    gsap.to(third_square, {
      opacity: 0.45,
      x: 35,
      delay: 1,
      duration: 1.15,
      ease: "easeInOut",
      repeat: -1,
      yoyo: true,
      repeatDelay: 2.5,
    });

    gsap.to(fourth_square, {
      opacity: 0.75,
      x: -15,
      delay: 0.5,
      duration: 1.5,
      ease: "easeInOut",
      repeat: -1,
      yoyo: true,
      repeatDelay: 4,
    });

    gsap.to(fifth_square, {
      opacity: 0.35,
      y: 15,
      delay: 3,
      duration: 1.5,
      ease: "easeInOut",
      repeat: -1,
      yoyo: true,
      repeatDelay: 4,
    });

    gsap.to(sixth_square, {
      opacity: 0.45,
      x: 25,
      delay: 0.5,
      duration: 1,
      ease: "easeInOut",
      repeat: -1,
      yoyo: true,
      repeatDelay: 2,
    });

    gsap.to(seventh_square, {
      opacity: 0.25,
      x: -35,
      duration: 1,
      ease: "easeInOut",
      repeat: -1,
      yoyo: true,
      repeatDelay: 1.5,
    });

    gsap.to(eight_square, {
      opacity: 0.25,
      y: -25,
      duration: 1,
      ease: "easeInOut",
      repeat: -1,
      yoyo: true,
      repeatDelay: 2.5,
    });

    gsap.to(ninth_square, {
      opacity: 0.35,
      y: -35,
      delay: 5.5,
      duration: 1,
      ease: "easeInOut",
      repeat: -1,
      yoyo: true,
      repeatDelay: 2.5,
    });

    gsap.to(tenth_square, {
      opacity: 0.55,
      x: -15,
      delay: 4,
      duration: 1,
      ease: "easeInOut",
      repeat: -1,
      yoyo: true,
      repeatDelay: 3,
    });

    gsap.to(eleventh_square, {
      opacity: 0.2,
      delay: 3.5,
      duration: 1,
      ease: "easeInOut",
      repeat: -1,
      yoyo: true,
      repeatDelay: 3,
    });
  }, []);

  return (
    <div className="-z-50">
      <div
        className="absolute top-[15%] left-[25%] w-[300px] h-[300px] bg-dark_gray_tile opacity-0 rounded-3xl"
        ref={first_square_ref}
      ></div>
      <div
        className="absolute top-[19.5%] left-[22.5%] w-[150px] h-[150px] bg-dark_gray_tile opacity-0 rounded-3xl hidden sm:block"
        ref={second_square_ref}
      ></div>
      <div
        className="absolute top-[22.5%] left-[34.5%] w-[200px] h-[200px] bg-dark_gray_tile opacity-0 rounded-3xl hidden lg:block"
        ref={third_square_ref}
      ></div>
      <div
        className="absolute top-[5%] right-[25%] w-[75px] h-[75px] bg-dark_gray_tile opacity-0 rounded-3xl hidden xl:block"
        ref={fourth_square_ref}
      ></div>
      <div
        className="absolute top-[35%] left-[5%] w-[350px] h-[350px] bg-dark_gray_tile opacity-0 rounded-3xl hidden md:block"
        ref={fifth_square_ref}
      ></div>
      <div
        className="absolute top-[55%] left-[15%] w-[250px] h-[250px] bg-dark_gray_tile opacity-0 rounded-3xl hidden xl:block"
        ref={sixth_square_ref}
      ></div>
      <div
        className="absolute bottom-[35%] right-[5%] w-[150px] h-[150px] bg-dark_gray_tile opacity-0 rounded-3xl"
        ref={seventh_square_ref}
      ></div>
      <div
        className="absolute top-[5%] right-[10%] w-[200px] h-[200px] bg-dark_gray_tile opacity-0 rounded-3xl hidden xl:block"
        ref={eight_square_ref}
      ></div>
      <div
        className="absolute top-[15%] right-[15%] w-[375px] h-[375px] bg-dark_gray_tile opacity-0 rounded-3xl hidden 2xl:block"
        ref={ninth_square_ref}
      ></div>
      <div
        className="absolute bottom-[8.5%] right-[23.5%] w-[175px] h-[175px] bg-dark_gray_tile opacity-0 rounded-3xl hidden xl:block"
        ref={tenth_square_ref}
      ></div>
      <div
        className="absolute bottom-[10%] right-[25%] w-[275px] h-[275px] bg-dark_gray_tile opacity-0 rounded-3xl"
        ref={eleventh_square_ref}
      ></div>
    </div>
  );
};

export default ERROR_BACKGROUND_TILES;
