"use client";

import { TECHSTACK_IMAGES } from "@/utils/import_images";
import { ICard } from "@/utils/interfaces";
import Image from "next/image";
import { MutableRefObject, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useParams } from "next/navigation";
import { SupportedLanguages } from "@/utils/types";

const SINGLE_OPENED_CARD_CONTENT_COMP: (props: {
  card: ICard;
  mobile: boolean;
}) => JSX.Element = (props: { card: ICard; mobile: boolean }): JSX.Element => {
  const image_ref: MutableRefObject<null> = useRef<null>(null);
  const language = useParams().lang;

  useEffect(() => {
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
      height={props.mobile ? 30 : 35}
      width={props.mobile ? 30 : 35}
      ref={image_ref}
      className="m-1 rounded"
    />
  );
};

export default SINGLE_OPENED_CARD_CONTENT_COMP;
