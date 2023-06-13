import Image from "next/image";
import card_front from "public/main_images/card_front.png";
import card_back from "public/main_images/card_back.png";

const CARDS_COMP = (): JSX.Element => {
  return (
    <div
      className="absolute w-full"
      style={{ top: "50%", left: 0, transform: "translate(0, -50%)" }}
    >
      <div className="flex justify-evenly items-center">
        <div className="">
          <Image src={card_back} height={500} width={500} alt="Test" />
        </div>
        <div className="">
          <Image src={card_front} height={500} width={500} alt="Test" />
        </div>
      </div>
    </div>
  );
};

export default CARDS_COMP;
