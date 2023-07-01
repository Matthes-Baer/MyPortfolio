"use client";

import { ICard } from "@/utils/interfaces";
import { gsap } from "gsap";
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import SINGLE_OPENED_CARD_CONTENT_COMP from "./single_opened_card_content_comp";

const ALL_OPENED_CARDS_COMP: (props: {
  all_opened_cards: ICard[];
}) => JSX.Element = (props: { all_opened_cards: ICard[] }): JSX.Element => {
  const container_ref: MutableRefObject<null> = useRef<null>(null);
  const [is_mobile, set_is_mobile]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);

  useEffect(() => {
    const container = container_ref.current;
    const handle_screen_resize: () => void = (): void => {
      set_is_mobile(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handle_screen_resize);

    handle_screen_resize();

    gsap.fromTo(
      container,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );

    return () => {
      window.removeEventListener("resize", handle_screen_resize);
    };
  }, [is_mobile]);

  return (
    <div
      className="absolute left-1/2 -bottom-1/4 -translate-x-1/2 max-w-full w-full sm:w-auto sm:max-w-9/12 flex flex-wrap rounded mx-auto justify-center p-5 bg-[rgba(25,25,25,0.4)]"
      ref={container_ref}
    >
      {props.all_opened_cards.map((card: ICard) => (
        <SINGLE_OPENED_CARD_CONTENT_COMP
          card={card}
          mobile={is_mobile}
          key={card.card_index}
        />
      ))}
    </div>
  );
};

export default ALL_OPENED_CARDS_COMP;
