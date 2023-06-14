"use client";

import Image from "next/image";
import card_front from "public/main_images/card_front.png";
import card_back from "public/main_images/card_back.png";
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useCallback,
  useRef,
  useState,
} from "react";
import type { ICard } from "@/utils/interfaces";
import ALL_OPENED_CARDS_COMP from "./all_opened_cards_comp";
import { gsap } from "gsap";

const CARDS_COMP: () => JSX.Element = (): JSX.Element => {
  const moving_card_ref: MutableRefObject<null> = useRef<null>(null);
  const text_container_ref: MutableRefObject<null> = useRef<null>(null);

  const [opened_cards, set_opened_cards]: [
    Array<ICard>,
    Dispatch<SetStateAction<Array<ICard>>>
  ] = useState<Array<ICard>>([]);
  const [current_card_idx_count, set_current_card_idx_count] =
    useState<number>(1);

  const fetch_stuff = useCallback(async () => {
    const moving_card = moving_card_ref.current;
    const moving_card_timeline = gsap.timeline();

    const animate_card = () => {
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

      set_opened_cards((cards_array: Array<ICard>) => [...cards_array, data]);
      set_current_card_idx_count((count) => count + 1);
    } catch (error) {
      console.log(error);
    }
  }, [current_card_idx_count]);

  return (
    <div
      className="absolute w-full z-50"
      style={{ top: "50%", left: 0, transform: "translate(0, -50%)" }}
    >
      <div className="flex justify-evenly items-center">
        <div className="relative">
          <button
            className="w-full h-full"
            onClick={fetch_stuff}
            disabled={current_card_idx_count > 2 ? true : false}
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
          <div
            className="absolute w-6/12 h-[70%] bg-[red] z-20 p-5"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {" "}
            <div className="text-5xl" ref={text_container_ref}>
              {opened_cards.length > 0
                ? opened_cards.at(-1)?.description
                : null}
            </div>
            <div>
              {opened_cards.map((item: ICard) => (
                <div key={item.card_index}>
                  idx: {item.card_index} / value: {item.name}
                </div>
              ))}
            </div>
          </div>
          <Image src={card_front} height={500} width={500} alt="Test" />
        </div>
      </div>
      {opened_cards.length > 0 ? (
        <ALL_OPENED_CARDS_COMP all_opened_cards={opened_cards} />
      ) : null}
    </div>
  );
};

export default CARDS_COMP;
