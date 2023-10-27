"use client";

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
import { gsap } from "gsap";
import { useParams } from "next/navigation";
import Image from "next/image";

import card_front from "public/main_images/card_front.png";
import card_back from "public/main_images/card_back.png";
import type { ICard } from "@/utils/interfaces";
import ALL_OPENED_CARDS from "./all_opened_cards";
import Loading from "@/components/loading";
import CARD_CONTENT from "./card_content";

const CARDS: () => JSX.Element = (): JSX.Element => {
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

  //* Adjust if skills get added
  const cards_amount = 26;

  useEffect((): (() => void) => {
    //* This is used for responsive adjustment based on a specific screen size
    const handle_screen_resize = () => {
      set_is_mobile(window.innerWidth < 1024);
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
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-3/4 z-[9000] bg-dark_gray_stone p-5 rounded text-xl text-center w-1/4"
            style={{
              boxShadow: "0px 3px 7.5px 0px rgba(0,0,0,0.5)",
            }}
            ref={start_info_text_ref}
          >
            {language === "de"
              ? "Klicken Sie auf die linke Karte, um meine Skill-Karten aufzudecken."
              : "Click on the left card to reveal my skill cards."}
          </div>
        )
      ) : (
        <button
          onClick={fetch_stuff}
          disabled={
            (current_card_idx_count > cards_amount ? true : false) ||
            fetch_button_disabled
          }
          className="absolute bottom-0 bg-dark_gray_stone p-5 rounded text-md sm:text-xl w-full"
          style={{ boxShadow: "0px 3px 7.5px 0px rgba(0,0,0,0.5)" }}
        >
          <div className="whitespace-pre-wrap">
            {language === "de"
              ? "Klicken Sie, um oben eine Fähigkeit aufzudecken.\nEs ist zu empfehlen, diese Website auf einem Gerät mit größerem Bildschirm zu nutzen."
              : "Click to reveal a skill above.\nIt is recommended to use this website on a device with a larger screen."}
          </div>
          <div className="mt-5">
            {language === "de"
              ? "Noch verdeckte Fähigkeiten: "
              : "Skills still covered: "}{" "}
            {cards_amount - current_card_idx_count + 1}
          </div>
        </button>
      )}

      <div className="flex justify-evenly items-center">
        {!is_mobile ? (
          <div className="relative flex items-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-dark_gray_stone text-2xl font-semibold">
              {language === "de" ? "Verdeckte Karten: " : "Covered cards: "}{" "}
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
            <Suspense fallback={<Loading />}>
              {opened_cards.length > 0 ? (
                <CARD_CONTENT opened_card={opened_cards.at(-1)!} />
              ) : null}
            </Suspense>
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

      <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-full sm:w-auto sm:max-w-9/12">
        <Suspense fallback={<Loading />}>
          {opened_cards.length > 0 ? (
            <ALL_OPENED_CARDS all_opened_cards={opened_cards} />
          ) : null}
        </Suspense>
      </div>
    </div>
  );
};

export default CARDS;
