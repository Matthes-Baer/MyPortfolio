import { IImage_Props } from "./interfaces";

interface IImages {
  [key: string]: IImage_Props;
}

export const FLAG_IMAGES: IImages = {
  flag_german: {
    src: require("public/flag_images/flag_german.png"),
    alt: "A flag representing the German language",
  },
  flag_english: {
    src: require("public/flag_images/flag_english.png"),
    alt: "A flag representing the English language",
  },
};

export const CARD_IMAGES: IImages = {
  JavaScript: {
    src: require("public/main_images/card_icons/icon_javascript.png"),
    alt: "An icon representing JavaScript",
  },
  TypeScript: {
    src: require("public/main_images/card_icons/icon_typescript.png"),
    alt: "An icon representing TypeScript",
  },
  PHP: {
    src: require("public/main_images/card_icons/icon_php.png"),
    alt: "An icon representing PHP",
  },
  C_Sharp: {
    src: require("public/main_images/card_icons/icon_C-Sharp.png"),
    alt: "An icon representing C#",
  },
  Python: {
    src: require("public/main_images/card_icons/icon_python.png"),
    alt: "An icon representing Python",
  },
  Solidity: {
    src: require("public/main_images/card_icons/icon_solidity.png"),
    alt: "An icon representing Solidity",
  },
  Haskell: {
    src: require("public/main_images/card_icons/icon_haskell.png"),
    alt: "An icon representing Haskell",
  },
  HTML: {
    src: require("public/main_images/card_icons/icon_html.png"),
    alt: "An icon representing HTML",
  },
  CSS_SCSS: {
    src: require("public/main_images/card_icons/icon_css.png"),
    alt: "An icon representing CSS & SCSS",
  },
};
