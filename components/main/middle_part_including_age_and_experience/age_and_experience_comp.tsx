"use client";

import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import Image from "next/image";
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import cake_icon from "public/main_images/cake_icon.png";
import computer_icon from "public/main_images/computer_icon.png";
import BACKGROUND_STYLING_COMP from "./background_styling_comp";

const AGE_AND_EXPERIENCE_COMP = (props: {
  language: RequestCookie | string;
}) => {
  //* Used for the GSAP animations
  const age_slide_ref: MutableRefObject<null> = useRef<null>(null);
  const experience_slide_ref: MutableRefObject<null> = useRef<null>(null);
  const line_from_age_ref: MutableRefObject<null> = useRef<null>(null);
  const circle_from_age_ref: MutableRefObject<null> = useRef<null>(null);

  //* Required to prevent bugging due to spam-/fast-clicking
  const [is_age_button_disabled, set_age_is_button_disabled]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);
  const [is_experience_button_disabled, set_is_experience_button_disabled]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);

  //* States for age & experience
  const [age, set_age]: [number, Dispatch<SetStateAction<number>>] =
    useState<number>(
      (new Date().getTime() - new Date("1998-05-03").getTime()) *
        3.1709791983765 *
        10 ** -11
    );
  const [experience, set_experience]: [
    number,
    Dispatch<SetStateAction<number>>
  ] = useState<number>(
    (new Date().getTime() - new Date("2021-10-01").getTime()) *
      3.1709791983765 *
      10 ** -11
  );
  const [current_slide, set_current_slide]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState<string>("age");

  //* Adjust the timeout timing to GSAP animation's timing if GSAP animations are edited
  const slide_changer_handler: (a: string) => (() => void) | undefined = (
    slide: string
  ): (() => void) | undefined => {
    if (slide === "age" && !is_age_button_disabled) {
      set_age_is_button_disabled(true);
      const timeout: NodeJS.Timeout = setTimeout(() => {
        set_age_is_button_disabled(false);
      }, 1000);

      set_current_slide("age");

      return () => clearTimeout(timeout);
    } else if (slide === "experience" && !is_experience_button_disabled) {
      set_is_experience_button_disabled(true);
      const timeout: NodeJS.Timer = setTimeout(() => {
        set_is_experience_button_disabled(false);
      }, 1000);

      set_current_slide("experience");
      return () => clearTimeout(timeout);
    }
  };

  useEffect(() => {
    //* GSAP animations for age & experience icons and associated elements
    if (current_slide === "age") {
      gsap.fromTo(
        age_slide_ref.current,
        { opacity: 0, x: -100 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
        }
      );

      gsap.to(line_from_age_ref.current, {
        width: "100%",
        duration: 0.5,
        ease: "power2.out",
        onComplete: function () {
          gsap.to(circle_from_age_ref.current, {
            x: 100,
            duration: 0.5,
            ease: "power2.out",
          });
        },
      });
    } else if (current_slide === "experience") {
      gsap.to(circle_from_age_ref.current, {
        x: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: function () {
          gsap.to(line_from_age_ref.current, {
            width: "0%",
            duration: 0.5,
            ease: "power2.out",
          });
        },
      });

      gsap.fromTo(
        experience_slide_ref.current,
        { opacity: 0, x: 100 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
        }
      );
    }

    //* Updating age and experience states
    const interval: NodeJS.Timer = setInterval(() => {
      set_age(
        (new Date().getTime() - new Date("1998-05-03").getTime()) *
          3.1709791983765 *
          10 ** -11
      );

      set_experience(
        (new Date().getTime() - new Date("2021-10-01").getTime()) *
          3.1709791983765 *
          10 ** -11
      );
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [current_slide]);

  return (
    <div
      className="bg-dark_gray_stone border-warm_terracotta relative w-full"
      style={{ boxShadow: "inset 0 0 40px rgba(0, 0, 0, 0.5)" }}
    >
      <BACKGROUND_STYLING_COMP />
      <div className="flex w-full justify-evenly pt-5 pb-5">
        <div
          className="relative w-[10%] h-[10%] p-2 flex"
          style={{ borderRadius: "50%" }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full p-2 flex bg-[white] border-4 border-warm_terracotta shadow-2xl z-20"
            style={{ borderRadius: "50%" }}
          ></div>
          <div
            className="absolute h-[2px] w-[100%] bg-sky-100 z-10"
            style={{
              left: "100%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            ref={line_from_age_ref}
          ></div>
          <div>
            <div
              className="absolute h-[25%] bg-[transparent] border-4 border-[white] z-10"
              style={{
                left: "150%",
                top: "50%",
                transform: "translate(0%, -50%)",
                borderRadius: "50%",
                width: "25%",
              }}
            ></div>
            <div
              className="absolute h-[50%] bg-[pink] border-4 border-dark_gray_stone z-10"
              style={{
                left: "145%",
                top: "50%",
                transform: "translate(0%, -50%)",
                borderRadius: "50%",
                width: "50%",
              }}
              ref={circle_from_age_ref}
            ></div>
          </div>

          <button
            onClick={() => slide_changer_handler("age")}
            disabled={is_experience_button_disabled}
            className="z-30"
          >
            <Image src={cake_icon} height={250} width={250} alt="Test" />
          </button>
        </div>

        <div
          className="relative w-[10%] h-[10%] p-2 flex"
          style={{ borderRadius: "50%" }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full p-2 flex bg-[white] border-4 border-warm_terracotta shadow-2xl z-20"
            style={{ borderRadius: "50%" }}
          ></div>
          <button
            onClick={() => slide_changer_handler("experience")}
            className="z-30"
            disabled={is_age_button_disabled}
          >
            <Image src={computer_icon} height={250} width={250} alt="Test" />
          </button>
        </div>
      </div>
      <div className="flex justify-center text-5xl p-4 text-center w-9/12 mx-auto">
        {current_slide === "age" ? (
          <div ref={age_slide_ref}>
            <div>
              {props.language === "de" ? "Alter (in Jahren)" : "Age (in years)"}
            </div>

            <div className="p-5">{age.toFixed(8)}</div>
          </div>
        ) : (
          <div ref={experience_slide_ref}>
            <div>
              {props.language === "de"
                ? "Software-Entwicklungs-Erfahrung (in Jahren)"
                : "Software Development Experience (in years)"}
            </div>

            <div className="p-5">{experience.toFixed(8)}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AGE_AND_EXPERIENCE_COMP;
