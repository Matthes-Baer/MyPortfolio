import Image from "next/image";
import { useParams } from "next/navigation";

import styles from "../../../CSS/project_tiles_background_images_style.module.css";
import fantasy_treeGreen from "public/main_images/fantasy_treeGreen.png";
import fantasy_tree_green_two from "public/main_images/fantasy_tree_green_two.png";

const PROJECT_TILES_BACKGROUND_IMAGES: () => JSX.Element = (): JSX.Element => {
  const language: string = useParams().lang;

  return (
    <div>
      <div className={styles.lineOne}></div>
      <div className={styles.lineTwo}></div>
      <Image
        className="absolute top-0 -left-[800px] z-50 hidden lg:block"
        src={fantasy_tree_green_two}
        alt={language === "de" ? "Ein grüner Baum" : "A green tree"}
        height={1000}
        width={1000}
        quality={50}
      />
      <Image
        className="absolute top-[1400px] -right-[700px] z-50 hidden lg:block"
        src={fantasy_treeGreen}
        alt={language === "de" ? "Ein grüner Baum" : "A green tree"}
        height={1000}
        width={1000}
        style={{ transform: "rotateY(180deg)" }}
        quality={50}
      />
      <Image
        className="absolute top-[2500px] -left-[750px] z-50 rotate-[25deg] hidden lg:block"
        src={fantasy_treeGreen}
        alt={language === "de" ? "Ein grüner Baum" : "A green tree"}
        height={1000}
        width={1000}
        quality={50}
      />
      <Image
        className="absolute top-[3700px] -right-[795px] z-50 rotate-[255deg] hidden lg:block"
        src={fantasy_treeGreen}
        alt={language === "de" ? "Ein grüner Baum" : "A green tree"}
        height={1000}
        width={1000}
        quality={50}
      />
    </div>
  );
};

export default PROJECT_TILES_BACKGROUND_IMAGES;
