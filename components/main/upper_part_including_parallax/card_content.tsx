"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

import star from "public/main_images/star.png";
import { TECHSTACK_IMAGES } from "@/utils/import_images";
import { SupportedLanguages } from "@/utils/types";
import { ICard } from "@/utils/interfaces";

const CARD_CONTENT: (props: { opened_card: ICard }) => JSX.Element = (props: {
  opened_card: ICard;
}): JSX.Element => {
  const language: string = useParams().lang;

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6/12 h-[55%] z-20 p-5 text-dark_gray_stone">
      <div className="flex justify-evenly w-full h-3/12 p-2">
        <div className="flex items-center w-4/12 border-r-2 border-dark_gray_stone">
          <Image
            src={TECHSTACK_IMAGES[props.opened_card.name].src}
            alt={
              TECHSTACK_IMAGES[props.opened_card.name].alt[
                language as SupportedLanguages
              ]
            }
            height={45}
            width={45}
            placeholder="blur"
          />
        </div>
        <div className="flex items-end h-full w-8/12 flex-col">
          <div className="h-8/12 text-xl">{props.opened_card.name}</div>
          <div className="flex h-4/12">
            {Array.from({ length: 5 }, (_, index: number) => (
              <Image
                key={index}
                src={star}
                alt={
                  language === "de"
                    ? `Ein Sternsymbol, das die Erfahrung mit ${props.opened_card.name} darstellt`
                    : `A star icon representing the experience for my ${props.opened_card.name} skill`
                }
                width={25}
                height={25}
                style={{
                  opacity: props.opened_card.stars > index ? 1 : 0.25,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-5/12 p-2">
        {props.opened_card.description[language as SupportedLanguages]}
      </div>
    </div>
  );
};

export default CARD_CONTENT;
