import { IImages, IProjects } from "./interfaces";

export const FLAG_IMAGES: IImages = {
  flag_german: {
    src: require("public/flag_images/flag_german.png"),
    alt: {
      en: "A flag representing the German language",
      de: "Eine Flagge, die die deutsche Sprache repräsentiert",
    },
  },
  flag_english: {
    src: require("public/flag_images/flag_english.png"),
    alt: {
      en: "A flag representing the English language",
      de: "Eine Flagge, die die englische Sprache repräsentiert",
    },
  },
};

export const TECHSTACK_IMAGES: IImages = {
  JavaScript: {
    src: require("public/main_images/card_icons/icon_javascript.png"),
    alt: {
      en: "An icon representing JavaScript",
      de: "Ein Symbol, das JavaScript repräsentiert",
    },
  },
  TypeScript: {
    src: require("public/main_images/card_icons/icon_typescript.png"),
    alt: {
      en: "An icon representing TypeScript",
      de: "Ein Symbol, das TypeScript repräsentiert",
    },
  },
  PHP: {
    src: require("public/main_images/card_icons/icon_php.png"),
    alt: {
      en: "An icon representing PHP",
      de: "Ein Symbol, das PHP repräsentiert",
    },
  },
  "C#": {
    src: require("public/main_images/card_icons/icon_C-Sharp.png"),
    alt: {
      en: "An icon representing C#",
      de: "Ein Symbol, das C# repräsentiert",
    },
  },
  Python: {
    src: require("public/main_images/card_icons/icon_python.png"),
    alt: {
      en: "An icon representing Python",
      de: "Ein Symbol, das Python repräsentiert",
    },
  },
  Solidity: {
    src: require("public/main_images/card_icons/icon_solidity.png"),
    alt: {
      en: "An icon representing Solidity",
      de: "Ein Symbol, das Solidity repräsentiert",
    },
  },
  Haskell: {
    src: require("public/main_images/card_icons/icon_haskell.png"),
    alt: {
      en: "An icon representing Haskell",
      de: "Ein Symbol, das Haskell repräsentiert",
    },
  },
  HTML: {
    src: require("public/main_images/card_icons/icon_html.png"),
    alt: {
      en: "An icon representing HTML",
      de: "Ein Symbol, das JavaScript repräsentiert",
    },
  },
  "CSS/SCSS": {
    src: require("public/main_images/card_icons/icon_css.png"),
    alt: {
      en: "An icon representing CSS & SCSS",
      de: "Ein Symbol, das CSS & SCSS repräsentiert",
    },
  },
  "Tailwind CSS": {
    src: require("public/main_images/card_icons/icon_tailwindcss.png"),
    alt: {
      en: "An icon representing Tailwind CSS",
      de: "Ein Symbol, das Tailwind CSS repräsentiert",
    },
  },
  Bootstrap: {
    src: require("public/main_images/card_icons/icon_bootstrap.png"),
    alt: {
      en: "An icon representing Bootstrap",
      de: "Ein Symbol, das Bootstrap repräsentiert",
    },
  },
  "React.js": {
    src: require("public/main_images/card_icons/icon_reactjs.png"),
    alt: {
      en: "An icon representing React.js",
      de: "Ein Symbol, das React.js repräsentiert",
    },
  },
  "Next.js": {
    src: require("public/main_images/card_icons/icon_nextjs.png"),
    alt: {
      en: "An icon representing Next.js",
      de: "Ein Symbol, das Next.js repräsentiert",
    },
  },
  "React Native": {
    src: require("public/main_images/card_icons/icon_reactnative.png"),
    alt: {
      en: "An icon representing React Native",
      de: "Ein Symbol, das React Native repräsentiert",
    },
  },
  Svelte: {
    src: require("public/main_images/card_icons/icon_svelte.png"),
    alt: {
      en: "An icon representing Svelte",
      de: "Ein Symbol, das Svelte repräsentiert",
    },
  },
  "Vue.js": {
    src: require("public/main_images/card_icons/icon_vuejs.png"),
    alt: {
      en: "An icon representing Vue.js",
      de: "Ein Symbol, das Vue.js repräsentiert",
    },
  },
  MongoDB: {
    src: require("public/main_images/card_icons/icon_mongodb.png"),
    alt: {
      en: "An icon representing MongoDB",
      de: "Ein Symbol, das MongoDB repräsentiert",
    },
  },
  Firebase: {
    src: require("public/main_images/card_icons/icon_firebase.png"),
    alt: {
      en: "An icon representing Firebase",
      de: "Ein Symbol, das Firebase repräsentiert",
    },
  },
  "Three.js": {
    src: require("public/main_images/card_icons/icon_threejs.png"),
    alt: {
      en: "An icon representing Three.js",
      de: "Ein Symbol, das Three.js repräsentiert",
    },
  },
  Redux: {
    src: require("public/main_images/card_icons/icon_redux.png"),
    alt: {
      en: "An icon representing Redux",
      de: "Ein Symbol, das Redux repräsentiert",
    },
  },
  jQuery: {
    src: require("public/main_images/card_icons/icon_jquery.png"),
    alt: {
      en: "An icon representing jQuery",
      de: "Ein Symbol, das jQuery repräsentiert",
    },
  },
  "Node.js": {
    src: require("public/main_images/card_icons/icon_nodejs.png"),
    alt: {
      en: "An icon representing Node.js",
      de: "Ein Symbol, das Node.js repräsentiert",
    },
  },
  GraphQL: {
    src: require("public/main_images/card_icons/icon_graphql.png"),
    alt: {
      en: "An icon representing GraphQL",
      de: "Ein Symbol, das GraphQL repräsentiert",
    },
  },
  Jest: {
    src: require("public/main_images/card_icons/icon_jest.png"),
    alt: {
      en: "An icon representing Jest",
      de: "Ein Symbol, das Jest repräsentiert",
    },
  },
  Git: {
    src: require("public/main_images/card_icons/icon_git.png"),
    alt: {
      en: "An icon representing Git",
      de: "Ein Symbol, das Git repräsentiert",
    },
  },
  Figma: {
    src: require("public/main_images/card_icons/icon_figma.png"),
    alt: {
      en: "An icon representing Figma",
      de: "Ein Symbol, das Figma repräsentiert",
    },
  },
  Blender: {
    src: require("public/main_images/card_icons/icon_blender.png"),
    alt: {
      en: "An icon representing Blender",
      de: "Ein Symbol, das Blender repräsentiert",
    },
  },
};

//? For the bigger images
export const PROJECT_IMAGES: IProjects = {
  Divid: [
    {
      src: require("public/main_images/project_images/task_tour/Loading.jpg"),
      alt: {
        en: "Image representing the initial loading state of the app",
        de: "Bild, das den anfänglichen Ladezustand der Anwendung darstellt",
      },
    },
    {
      src: require("public/main_images/project_images/task_tour/Start.jpg"),
      alt: {
        en: "Image representing the start screen with a login and register option",
        de: "Bild, das den Startbildschirm mit einer Anmelde- und Registrierungsoption darstellt",
      },
    },
    {
      src: require("public/main_images/project_images/task_tour/Home.jpg"),
      alt: {
        en: "Image representing the home screen with the user's profile",
        de: "Bild, das den Startbildschirm mit dem Profil des Nutzers darstellt",
      },
    },
    {
      src: require("public/main_images/project_images/task_tour/Gamemode.jpg"),
      alt: {
        en: "Image representing the game screen where you choose the different game modes",
        de: "Bild des Spielbildschirms, auf dem die verschiedenen Spielmodi ausgewählt werden",
      },
    },
    {
      src: require("public/main_images/project_images/task_tour/Instructions.jpg"),
      alt: {
        en: "Image representing the instructions for the game",
        de: "Bild, das die Spielanleitung darstellt",
      },
    },
    {
      src: require("public/main_images/project_images/task_tour/Game.jpg"),
      alt: {
        en: "Image representing the game screen with an active game session",
        de: "Bild des Spielbildschirms mit einer aktiven Spielsitzung",
      },
    },
    {
      src: require("public/main_images/project_images/task_tour/Scores.jpg"),
      alt: {
        en: "Image representing the scores screen",
        de: "Bild, das den Score-Bildschirm darstellt",
      },
    },
    {
      src: require("public/main_images/project_images/task_tour/Store.jpg"),
      alt: {
        en: "Image representing the store screen",
        de: "Bild, das den Store-Bildschirm darstellt",
      },
    },
  ],
  no_framework_project: [
    {
      src: require("public/main_images/project_images/no_framework_project/no_framework_project_first_pic.png"),
      alt: {
        en: "Image representing one part of the webpage",
        de: "Bild, das einen Teil der Webseite darstellt",
      },
    },
    {
      src: require("public/main_images/project_images/no_framework_project/no_framework_project_second_pic.png"),
      alt: {
        en: "Image representing one part of the webpage",
        de: "Bild, das einen Teil der Webseite darstellt",
      },
    },
    {
      src: require("public/main_images/project_images/no_framework_project/no_framework_project_third_pic.png"),
      alt: {
        en: "Image representing one part of the webpage",
        de: "Bild, das einen Teil der Webseite darstellt",
      },
    },
  ],
};
