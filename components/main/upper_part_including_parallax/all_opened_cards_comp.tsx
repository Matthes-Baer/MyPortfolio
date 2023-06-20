"use client";

import { ICard } from "@/utils/interfaces";
import { gsap } from "gsap";
import { MutableRefObject, useEffect, useRef } from "react";
import SINGLE_OPENED_CARD_CONTENT_COMP from "./single_opened_card_content_comp";

const ALL_OPENED_CARDS_COMP: (props: {
  all_opened_cards: ICard[];
}) => JSX.Element = (props: { all_opened_cards: ICard[] }): JSX.Element => {
  const container_ref: MutableRefObject<null> = useRef<null>(null);

  useEffect(() => {
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
    <div
      className="absolute flex flex-wrap max-w-[75%] rounded mx-auto justify-center p-5 bg-[rgba(25,25,25,0.4)]"
      style={{
        left: "50%",
        bottom: "-20%",
        transform: "translate(-50%, 0)",
      }}
      ref={container_ref}
    >
      {props.all_opened_cards.map((card: ICard) => (
        <SINGLE_OPENED_CARD_CONTENT_COMP card={card} key={card.card_index} />
      ))}
    </div>
  );
};

export default ALL_OPENED_CARDS_COMP;
