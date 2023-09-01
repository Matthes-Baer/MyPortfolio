"use client";

import { gsap } from "gsap";
import { MutableRefObject, useEffect, useRef } from "react";

import { ICard } from "@/utils/interfaces";
import SINGLE_OPENED_CARD_CONTENT from "./single_opened_card_content";

const ALL_OPENED_CARDS: (props: {
  all_opened_cards: ICard[];
}) => JSX.Element = (props: { all_opened_cards: ICard[] }): JSX.Element => {
  const container_ref: MutableRefObject<null> = useRef<null>(null);

  useEffect((): void => {
    const container = container_ref.current;
    gsap.fromTo(
      container,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <section
      className="flex flex-wrap rounded mx-auto justify-center p-5 bg-[rgba(25,25,25,0.4)]"
      ref={container_ref}
    >
      {props.all_opened_cards.map((card: ICard) => (
        <SINGLE_OPENED_CARD_CONTENT card={card} key={card.card_index} />
      ))}
    </section>
  );
};

export default ALL_OPENED_CARDS;
