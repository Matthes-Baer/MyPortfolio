import Loading from "@/app/[lang]/loading";
import { ICard } from "@/utils/interfaces";
import { Suspense } from "react";
import Image from "next/image";
import star from "public/main_images/star.png";

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
        <div className="flex w-12/12 h-2/12 mx-auto bg-[pink]">
          {Array.from(
            { length: props.opened_card.stars },
            (_, index: number) => (
              <Image
                key={index}
                src={star}
                alt={"A star icon representing the experience for this skill"}
                width={50}
                height={50}
              />
            )
          )}
        </div>

        {props.opened_card.name}
      </div>
    </Suspense>
  );
};

export default CARD_CONTENT_COMP;
