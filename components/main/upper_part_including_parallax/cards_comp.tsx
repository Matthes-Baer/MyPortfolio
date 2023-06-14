import Image from "next/image";
import card_front from "public/main_images/card_front.png";
import card_back from "public/main_images/card_back.png";
import { useCallback, useState } from "react";
import type { ICard } from "@/utils/interfaces";
import ALL_OPENED_CARDS_COMP from "./all_opened_cards_comp";

const CARDS_COMP: () => JSX.Element = (): JSX.Element => {
  const [opened_cards, set_opened_cards] = useState<Array<ICard>>([]);
  const [current_card_idx_count, set_current_card_idx_count] =
    useState<number>(1);

  const fetch_stuff = useCallback(async () => {
    let data: ICard;

    try {
      let res: Response = await fetch("/api/POST_card_content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ card_idx: current_card_idx_count }),
      });

      data = await res.json();

      if (!res.ok) {
        throw new Error();
      }

      set_opened_cards((cards_array: Array<ICard>) => [...cards_array, data]);
      set_current_card_idx_count((count) => count + 1);
    } catch (error) {
      console.log(error);
    }
  }, [current_card_idx_count]);

  return (
    <div
      className="absolute w-full z-50"
      style={{ top: "50%", left: 0, transform: "translate(0, -50%)" }}
    >
      <div className="flex justify-evenly items-center">
        <div>
          <button
            className="w-full h-full bg-[black]"
            onClick={fetch_stuff}
            disabled={current_card_idx_count > 3 ? true : false}
          >
            <Image src={card_back} height={500} width={500} alt="Test" />
          </button>
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
      <ALL_OPENED_CARDS_COMP all_opened_cards={opened_cards} />
    </div>
  );
};

export default CARDS_COMP;
