"use client";

import Loading from "@/app/[lang]/loading";
import { ICard } from "@/utils/interfaces";
import { MutableRefObject, Suspense, useEffect, useRef } from "react";
import { gsap } from "gsap";

const CARD_CONTENT_COMP: (props: {
  opened_card: ICard;
}) => JSX.Element = (props: { opened_card: ICard }): JSX.Element => {
  return (
    <Suspense fallback={<Loading />}>
      <div
        className="absolute w-6/12 h-[70%] bg-[red] z-20 p-5"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {" "}
        {props.opened_card.name}
      </div>
    </Suspense>
  );
};

export default CARD_CONTENT_COMP;
