import { IImages, IProjects } from "./interfaces";

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

export const TECHSTACK_IMAGES: IImages = {
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
  "C#": {
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
  "CSS/SCSS": {
    src: require("public/main_images/card_icons/icon_css.png"),
    alt: "An icon representing CSS & SCSS",
  },
  "Tailwind CSS": {
    src: require("public/main_images/card_icons/icon_tailwindcss.png"),
    alt: "An icon representing Tailwind CSS",
  },
  Bootstrap: {
    src: require("public/main_images/card_icons/icon_bootstrap.png"),
    alt: "An icon representing Bootstrap",
  },
  "React.js": {
    src: require("public/main_images/card_icons/icon_reactjs.png"),
    alt: "An icon representing React.js",
  },
  "Next.js": {
    src: require("public/main_images/card_icons/icon_nextjs.png"),
    alt: "An icon representing Next.js",
  },
  "React Native": {
    src: require("public/main_images/card_icons/icon_reactnative.png"),
    alt: "An icon representing React Native",
  },
  Svelte: {
    src: require("public/main_images/card_icons/icon_svelte.png"),
    alt: "An icon representing Svelte",
  },
  "Vue.js": {
    src: require("public/main_images/card_icons/icon_vuejs.png"),
    alt: "An icon representing Vue.js",
  },
  MongoDB: {
    src: require("public/main_images/card_icons/icon_mongodb.png"),
    alt: "An icon representing MongoDB",
  },
  Firebase: {
    src: require("public/main_images/card_icons/icon_firebase.png"),
    alt: "An icon representing Firebase",
  },
  "Three.js": {
    src: require("public/main_images/card_icons/icon_threejs.png"),
    alt: "An icon representing Three.js",
  },
  Redux: {
    src: require("public/main_images/card_icons/icon_redux.png"),
    alt: "An icon representing Redux",
  },
  jQuery: {
    src: require("public/main_images/card_icons/icon_jquery.png"),
    alt: "An icon representing jQuery",
  },
  "Node.js": {
    src: require("public/main_images/card_icons/icon_nodejs.png"),
    alt: "An icon representing Node.js",
  },
  GraphQL: {
    src: require("public/main_images/card_icons/icon_graphql.png"),
    alt: "An icon representing GraphQL",
  },
  Jest: {
    src: require("public/main_images/card_icons/icon_jest.png"),
    alt: "An icon representing Jest",
  },
  Git: {
    src: require("public/main_images/card_icons/icon_git.png"),
    alt: "An icon representing Git",
  },
  Figma: {
    src: require("public/main_images/card_icons/icon_figma.png"),
    alt: "An icon representing Figma",
  },
  Blender: {
    src: require("public/main_images/card_icons/icon_blender.png"),
    alt: "An icon representing Blender",
  },
};

//? For the bigger images
export const PROJECT_IMAGES: IProjects = {
  no_framework_project: [
    {
      src: require("public/main_images/project_images/no_framework_project_first_pic.png"),
      alt: "test",
    },
    {
      src: require("public/main_images/project_images/no_framework_project_second_pic.png"),
      alt: "test",
    },
    {
      src: require("public/main_images/project_images/no_framework_project_third_pic.png"),
      alt: "test",
    },
  ],
};
