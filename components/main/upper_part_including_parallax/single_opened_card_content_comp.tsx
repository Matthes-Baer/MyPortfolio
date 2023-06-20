"use client";

import { CARD_IMAGES } from "@/utils/import_images";
import { ICard } from "@/utils/interfaces";
import Image from "next/image";
import { MutableRefObject, useEffect, useRef } from "react";
import { gsap } from "gsap";

const SINGLE_OPENED_CARD_CONTENT_COMP: (props: {
  card: ICard;
  mobile: boolean;
}) => JSX.Element = (props: { card: ICard; mobile: boolean }): JSX.Element => {
  const image_ref: MutableRefObject<null> = useRef<null>(null);

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
      src={CARD_IMAGES[props.card.name].src}
      alt={CARD_IMAGES[props.card.name].alt}
      height={props.mobile ? 30 : 35}
      width={props.mobile ? 30 : 35}
      ref={image_ref}
      className="m-1 rounded"
    />
  );
};

export default SINGLE_OPENED_CARD_CONTENT_COMP;
