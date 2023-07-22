"use client";

import Image from "next/image";
import card_front from "public/main_images/card_front.png";
import card_back from "public/main_images/card_back.png";
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import type { ICard } from "@/utils/interfaces";
import ALL_OPENED_CARDS_COMP from "./all_opened_cards_comp";
import { gsap } from "gsap";
import CARD_CONTENT_COMP from "./card_content_comp";
import Loading from "@/app/[lang]/loading";
import { useParams } from "next/navigation";

const CARDS_COMP: () => JSX.Element = (): JSX.Element => {
  const language: string = useParams().lang;

  const [current_card_idx_count, set_current_card_idx_count]: [
    number,
    Dispatch<SetStateAction<number>>
  ] = useState<number>(1);
  const [opened_cards, set_opened_cards]: [
    Array<ICard>,
    Dispatch<SetStateAction<Array<ICard>>>
  ] = useState<Array<ICard>>([]);
  const [fetch_button_disabled, set_fetch_button_disabled]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);
  const [first_fetch, set_first_fetch]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);
  const [is_mobile, set_is_mobile]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);

  const front_card_text_ref: MutableRefObject<null> = useRef<null>(null);
  const front_card_image_ref: MutableRefObject<null> = useRef<null>(null);
  const moving_card_ref: MutableRefObject<null> = useRef<null>(null);
  const start_info_text_ref: MutableRefObject<null> = useRef<null>(null);
  const cards_amount = 27;

  useEffect((): (() => void) => {
    //* This is used for responsive adjustment based on a specific screen size
    const handle_screen_resize = () => {
      set_is_mobile(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handle_screen_resize);

    handle_screen_resize();

    return () => {
      window.removeEventListener("resize", handle_screen_resize);
    };
  }, []);

  //* Includes all the logic for fetching data for the current skill card and activating the corresponding animation
  const fetch_stuff: () => Promise<() => void> = useCallback(async (): Promise<
    () => void
  > => {
    let fetch_button_disable_timeout: NodeJS.Timeout;
    set_fetch_button_disabled(true);

    const animate_card: () => void = (): void => {
      const moving_card = moving_card_ref.current;
      const front_card_image = front_card_image_ref.current;
      const moving_card_timeline = gsap.timeline();

      if (!first_fetch) {
        gsap.to(front_card_image, {
          opacity: 1,
          duration: 0.5,
          ease: "easeInOut",
        });

        set_first_fetch(true);
      }

      gsap.to(start_info_text_ref.current, {
        opacity: 0,
        duration: 0.1,
        ease: "linear",
      });

      moving_card_timeline.to(moving_card, {
        xPercent: 150,
        duration: 2,
        ease: "easeInOut",
      });

      // Add the opacity animation at 50% progress of the xPercent animation
      moving_card_timeline.to(
        moving_card,
        {
          opacity: 0,
          duration: 0.5,
        },
        "-=1"
      );

      moving_card_timeline.to(moving_card, {
        xPercent: 0,
        opacity: 1,
        duration: 0,
      });
    };

    try {
      let data: ICard;
      const front_card_text = front_card_text_ref.current;

      animate_card();

      let res: Response = await fetch("/api/POST_card_content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ card_idx: current_card_idx_count }),
      });
      data = await res.json();

      if (!res.ok) {
        throw new Error();
      }

      fetch_button_disable_timeout = setTimeout(() => {
        set_fetch_button_disabled(false);
      }, 2000);

      gsap.fromTo(
        front_card_text,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "easeInOut" }
      );

      set_opened_cards((cards_array: Array<ICard>) => [...cards_array, data]);
      set_current_card_idx_count((count) => count + 1);
    } catch (error) {
      console.log(error);
    }

    return (): void => clearTimeout(fetch_button_disable_timeout);
  }, [current_card_idx_count, first_fetch]);

  return (
    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full z-50">
      {!is_mobile ? (
        !first_fetch && (
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9000] bg-dark_gray_stone p-5 rounded text-sm text-center"
            style={{ boxShadow: "0px 3px 7.5px 0px rgba(0,0,0,0.5)" }}
            ref={start_info_text_ref}
          >
            {language === "de"
              ? "Klicken Sie auf die linke Karte, um die Skill-Karten aufzudecken."
              : "Click on the left card to reveal the skill cards."}
          </div>
        )
      ) : (
        <button
          onClick={fetch_stuff}
          disabled={
            (current_card_idx_count > cards_amount ? true : false) ||
            fetch_button_disabled
          }
          className="absolute top-[15%] left-1/2 -translate-x-1/2 bg-dark_gray_stone p-5 rounded text-sm"
          style={{ boxShadow: "0px 3px 7.5px 0px rgba(0,0,0,0.5)" }}
        >
          <div className="whitespace-pre-wrap">
            {language === "de"
              ? "Klicken Sie, um eine Fähigkeit aufzudecken. Es ist zu empfehlen, diese Website auf einem Gerät mit größerem Bildschirm zu nutzen."
              : "Click to reveal a skill. \nIt is recommended to use this website on a device with a larger screen."}
          </div>
          <div className="mt-2">
            {language === "de"
              ? "Noch verdeckte Fähigkeiten: "
              : "Skills still hidden: "}{" "}
            {cards_amount - current_card_idx_count + 1}
          </div>
        </button>
      )}

      <div className="flex justify-evenly items-center">
        {!is_mobile ? (
          <div className="relative flex items-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-dark_gray_stone text-2xl font-semibold">
              {language === "de" ? "Verdeckte Karten: " : "Hidden cards: "}{" "}
              {cards_amount - current_card_idx_count + 1}
            </div>
            <button
              className="w-full h-full"
              onClick={fetch_stuff}
              disabled={
                (current_card_idx_count > cards_amount ? true : false) ||
                fetch_button_disabled
              }
            >
              <Image
                src={card_back}
                height={500}
                width={500}
                alt={
                  language === "de"
                    ? "Die Rückseite der Karte"
                    : "The back of the card"
                }
              />
            </button>
            <Image
              src={card_back}
              height={500}
              width={500}
              alt={
                language === "de"
                  ? "Die Rückseite der Karte"
                  : "The back of the card"
              }
              className="absolute top-0 left-0 z-[-1]"
              ref={moving_card_ref}
            />
          </div>
        ) : null}

        <div
          className="relative"
          style={{ visibility: is_mobile ? "hidden" : "visible" }}
        >
          <div ref={front_card_text_ref}>
            {opened_cards.length > 0 ? (
              <CARD_CONTENT_COMP opened_card={opened_cards.at(-1)!} />
            ) : null}
          </div>

          <Image
            src={card_front}
            height={500}
            width={500}
            alt={
              language === "de"
                ? "Die Vorderseite der Karte"
                : "The front of the card"
            }
            className="opacity-0"
            ref={front_card_image_ref}
          />
        </div>
      </div>

      {opened_cards.length > 0 ? (
        <ALL_OPENED_CARDS_COMP all_opened_cards={opened_cards} />
      ) : null}
    </div>
  );
};

export default CARDS_COMP;
