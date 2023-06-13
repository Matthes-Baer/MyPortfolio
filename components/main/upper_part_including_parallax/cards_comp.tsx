import Image from "next/image";
import card_front from "public/main_images/card_front.png";
import card_back from "public/main_images/card_back.png";
import { useState } from "react";
import type { ICard } from "@/utils/interfaces";

const CARDS_COMP = (): JSX.Element => {
  const [opened_cards, set_opened_cards] = useState<Array<ICard>>([]);
  const [card_idx_count, set_card_idx_count] = useState<number>(1);

  const fetch_stuff = async () => {
    let data: ICard;

    try {
      let res = await fetch("/api/POST_card_content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ card_idx: card_idx_count }),
      });

      data = await res.json();

      if (!res.ok) {
        throw new Error();
      }

      set_opened_cards((cards_array: Array<ICard>) => [...cards_array, data]);
      set_card_idx_count((count) => count + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="absolute w-full"
      style={{ top: "50%", left: 0, transform: "translate(0, -50%)" }}
    >
      <button
        className="w-6/12 h-6/12 bg-[black]"
        onClick={fetch_stuff}
        disabled={card_idx_count > 3 ? true : false}
      >
        CLICK ME
      </button>
      <div className="flex justify-evenly items-center">
        <div className="bg-[white]">
          <Image src={card_back} height={500} width={500} alt="Test" />
        </div>
        <div className="relative bg-[white]">
          <div
            className="absolute w-6/12 h-[70%] bg-[red] z-20 p-5"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {" "}
            <div className="text-5xl">
              {opened_cards.length > 0
                ? JSON.stringify(opened_cards.at(-1)?.card_index)
                : null}
            </div>
            <div>
              {opened_cards.map((item: ICard) => (
                <div key={item.card_index}>
                  idx: {item.card_index} / value: {item.value}
                </div>
              ))}
            </div>
          </div>
          <Image src={card_front} height={500} width={500} alt="Test" />
        </div>
      </div>
    </div>
  );
};

export default CARDS_COMP;
