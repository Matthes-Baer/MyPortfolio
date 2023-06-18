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
  const lang: string = useParams().lang;

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

  const front_card_text_ref: MutableRefObject<null> = useRef<null>(null);
  const front_card_image_ref: MutableRefObject<null> = useRef<null>(null);
  const moving_card_ref: MutableRefObject<null> = useRef<null>(null);
  const start_info_text_ref: MutableRefObject<null> = useRef<null>(null);

  const fetch_stuff = useCallback(async () => {
    let fetch_button_disable_timeout: NodeJS.Timeout;
    set_fetch_button_disabled(true);

    const animate_card = () => {
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

    return () => clearTimeout(fetch_button_disable_timeout);
  }, [current_card_idx_count, first_fetch]);

  return (
    <Suspense fallback={<Loading />}>
      <div
        className="absolute w-full z-50"
        style={{ top: "50%", left: 0, transform: "translate(0, -50%)" }}
      >
        {!first_fetch && (
          <div
            className="text-xl bg-dark_gray_stone p-5 rounded text-sm"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 9000,
            }}
            ref={start_info_text_ref}
          >
            {lang === "en"
              ? "Click on the left card to reveal skill cards."
              : "Klicke auf die linke Karte, um Skill-Karten aufzudecken."}
          </div>
        )}

        <div className="flex justify-evenly items-center">
          <div className="relative">
            <button
              className="w-full h-full"
              onClick={fetch_stuff}
              disabled={
                (current_card_idx_count > 2 ? true : false) ||
                fetch_button_disabled
              }
            >
              <Image src={card_back} height={500} width={500} alt="Test" />
            </button>
            <Image
              src={card_back}
              height={500}
              width={500}
              alt="Test"
              className="absolute top-0 left-0"
              ref={moving_card_ref}
              style={{ zIndex: -1 }}
            />
          </div>

          <div className="relative">
            <div ref={front_card_text_ref}>
              {opened_cards.length > 0 ? (
                <CARD_CONTENT_COMP opened_card={opened_cards.at(-1)!} />
              ) : null}
            </div>

            <Image
              src={card_front}
              height={500}
              width={500}
              alt="Test"
              style={{ opacity: 0 }}
              ref={front_card_image_ref}
            />
          </div>
        </div>
        {opened_cards.length > 0 ? (
          <ALL_OPENED_CARDS_COMP all_opened_cards={opened_cards} />
        ) : null}
      </div>
    </Suspense>
  );
};

export default CARDS_COMP;
