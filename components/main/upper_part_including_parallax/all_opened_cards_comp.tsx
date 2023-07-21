"use client";

import { gsap } from "gsap";
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";

import { ICard } from "@/utils/interfaces";
import SINGLE_OPENED_CARD_CONTENT_COMP from "./single_opened_card_content_comp";
import Loading from "@/app/[lang]/loading";

const ALL_OPENED_CARDS_COMP: (props: {
  all_opened_cards: ICard[];
}) => JSX.Element = (props: { all_opened_cards: ICard[] }): JSX.Element => {
  const container_ref: MutableRefObject<null> = useRef<null>(null);
  const [is_mobile, set_is_mobile]: [
    boolean[],
    Dispatch<SetStateAction<boolean[]>>
  ] = useState<boolean[]>([false, false, false]);

  useEffect((): (() => void) => {
    const container = container_ref.current;
    //* This is used for responsive adjustments based on specific screen sizes
    const handle_resize: () => void = (): void => {
      set_is_mobile([
        window.innerWidth <= 350,
        window.innerWidth <= 400,
        window.innerWidth <= 1000,
      ]);
    };

    window.addEventListener("resize", handle_resize);

    handle_resize();

    gsap.fromTo(
      container,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );

    return (): void => {
      window.removeEventListener("resize", handle_resize);
    };
  }, []);

  return (
    <section
      className="absolute left-1/2 -bottom-[150px] sm:-bottom-1/4 -translate-x-1/2 max-w-full w-full sm:w-auto sm:max-w-9/12 flex flex-wrap rounded mx-auto justify-center p-5 bg-[rgba(25,25,25,0.4)]"
      ref={container_ref}
      style={{
        bottom: is_mobile[0] ? "-230px" : is_mobile[1] ? "-200px" : "",
      }}
    >
      {props.all_opened_cards.map((card: ICard) => (
        <SINGLE_OPENED_CARD_CONTENT_COMP
          card={card}
          mobile={is_mobile[is_mobile.length - 1]}
          key={card.card_index}
        />
      ))}
    </section>
  );
};

export default ALL_OPENED_CARDS_COMP;
