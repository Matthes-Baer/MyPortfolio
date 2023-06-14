import { ICard } from "@/utils/interfaces";

const ALL_OPENED_CARDS_COMP = (props: { all_opened_cards: ICard[] }) => {
  return (
    <div className="flex w-6/12 mx-auto justify-center flex-wrap">
      {props.all_opened_cards.map((card: ICard) => (
        <div key={card.card_index}>{card.value}</div>
      ))}
    </div>
  );
};

export default ALL_OPENED_CARDS_COMP;
