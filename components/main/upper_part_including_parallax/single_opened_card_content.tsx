"use client";

import Image from "next/image";
import { MutableRefObject, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useParams } from "next/navigation";

import { SupportedLanguages } from "@/utils/types";
import { TECHSTACK_IMAGES } from "@/utils/import_images";
import { ICard } from "@/utils/interfaces";

const SINGLE_OPENED_CARD_CONTENT: (props: {
  card: ICard;
}) => JSX.Element = (props: { card: ICard }): JSX.Element => {
  const image_ref: MutableRefObject<null> = useRef<null>(null);
  const language: string = useParams().lang;

  useEffect((): void => {
    const image = image_ref.current;

    gsap.fromTo(
      image,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "easeInOut" }
    );
  }, []);

  return (
    <Image
      src={TECHSTACK_IMAGES[props.card.name].src}
      alt={
        TECHSTACK_IMAGES[props.card.name].alt[language as SupportedLanguages]
      }
      height={35}
      width={35}
      ref={image_ref}
      className="m-1 rounded w-[25px] sm:w-[35px] h-[25px] sm:h-[35px]"
      title={props.card.name}
    />
  );
};

export default SINGLE_OPENED_CARD_CONTENT;
