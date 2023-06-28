"use client";

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
import { useParams } from "next/navigation";

const AGE_AND_EXPERIENCE_COMP = () => {
  //* Used for the GSAP animations
  const age_slide_ref: MutableRefObject<null> = useRef<null>(null);
  const experience_slide_ref: MutableRefObject<null> = useRef<null>(null);
  const circle_from_experience_ref: MutableRefObject<null> = useRef<null>(null);
  const circle_from_age_ref: MutableRefObject<null> = useRef<null>(null);

  //* Required to prevent bugging due to spam-/fast-clicking
  const [is_age_button_disabled, set_is_age_button_disabled]: [
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

  const language: string = useParams().lang;

  //* Adjust the timeout timing to GSAP animation's timing if GSAP animations are edited
  const slide_changer_handler: (a: string) => (() => void) | undefined = (
    slide: string
  ): (() => void) | undefined => {
    if (slide === "age" && !is_age_button_disabled) {
      set_is_experience_button_disabled(true);
      const timeout: NodeJS.Timeout = setTimeout(() => {
        set_is_experience_button_disabled(false);
      }, 1000);

      set_current_slide("age");

      return () => clearTimeout(timeout);
    } else if (slide === "experience" && !is_experience_button_disabled) {
      set_is_age_button_disabled(true);
      const timeout: NodeJS.Timer = setTimeout(() => {
        set_is_age_button_disabled(false);
      }, 1000);

      set_current_slide("experience");
      return () => clearTimeout(timeout);
    }
  };

  useEffect(() => {
    //* GSAP animations for age & experience icons and associated elements
    const age_circle_timeline = gsap.timeline({ repeat: -1, paused: true });
    const experience_circle_timeline = gsap.timeline({
      repeat: -1,
      paused: true,
    });

    age_circle_timeline.to(circle_from_age_ref.current, {
      rotate: "+=360deg",
      duration: 8,
      ease: "linear",
    });

    experience_circle_timeline.to(circle_from_experience_ref.current, {
      rotate: "+=360deg",
      duration: 8,
      ease: "linear",
    });

    if (current_slide === "age") {
      age_circle_timeline.play();
      experience_circle_timeline.pause();

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
    } else if (current_slide === "experience") {
      age_circle_timeline.pause();
      experience_circle_timeline.play();

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

    return () => {
      age_circle_timeline.kill();
      experience_circle_timeline.kill();
    };
  }, [current_slide]);

  useEffect(() => {
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
  }, []);

  return (
    <div
      className="relative w-full bg-dark_gray_stone border-warm_terracotta"
      style={{ boxShadow: "inset 0 0 40px rgba(0, 0, 0, 0.5)" }}
    >
      <div className="flex justify-evenly pt-5">
        <div className="relative w-[10%]">
          <button
            onClick={() => slide_changer_handler("age")}
            disabled={is_age_button_disabled || current_slide === "age"}
            className="relative w-full p-2 bg-[white] shadow z-20 rounded-[50%] opacity-90"
          >
            <Image src={cake_icon} height={250} width={250} alt="Test" />
            <div
              className="absolute w-[110%] h-[110%] rounded-[50%] border-2 border-[transparent] border-r-card_yellow bg-[transparent]"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              ref={circle_from_age_ref}
            ></div>
          </button>
        </div>

        <div className="relative w-[10%]" style={{ borderRadius: "50%" }}>
          <button
            onClick={() => slide_changer_handler("experience")}
            disabled={
              is_experience_button_disabled || current_slide === "experience"
            }
            className="relative w-full p-2 bg-[white] shadow z-20 rounded-[50%] opacity-90"
          >
            <Image src={computer_icon} height={250} width={250} alt="Test" />
            <div
              className="absolute w-[110%] h-[110%] rounded-[50%] border-2 border-[transparent] border-l-card_yellow bg-[transparent]"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              ref={circle_from_experience_ref}
            ></div>
          </button>
        </div>
      </div>
      <div
        className="flex justify-center p-4 text-center w-9/12 mx-auto"
        style={{
          fontSize: "calc(8px + 1.75vw)",
        }}
      >
        {current_slide === "age" ? (
          <div ref={age_slide_ref}>
            <div>
              {language === "de" ? "Alter (in Jahren)" : "Age (in years)"}
            </div>

            <div className="p-5">{age.toFixed(8)}</div>
          </div>
        ) : (
          <div ref={experience_slide_ref}>
            <div>
              {language === "de"
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
