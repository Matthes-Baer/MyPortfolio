import Image from "next/image";

import styles from "../../../CSS/project_tiles_background_images_style.module.css";
import fantasy_treeGreen from "public/main_images/fantasy_treeGreen.png";
import fantasy_tree_green_two from "public/main_images/fantasy_tree_green_two.png";

const PROJECT_TILES_BACKGROUND_IMAGES = () => {
  return (
    <div>
      <div className={styles.line}></div>
      <Image
        className="absolute top-0 -left-[800px] z-50 hidden lg:block"
        src={fantasy_tree_green_two}
        alt="test"
        height={1000}
        width={1000}
      />
      <Image
        className="absolute top-[1400px] -right-[700px] z-50 hidden lg:block"
        src={fantasy_treeGreen}
        alt="test"
        height={1000}
        width={1000}
        style={{ transform: "rotateY(180deg)" }}
      />
      <Image
        className="absolute top-[2500px] -left-[750px] z-50 rotate-[25deg] hidden lg:block"
        src={fantasy_treeGreen}
        alt="test"
        height={1000}
        width={1000}
      />
      <Image
        className="absolute top-[3700px] -right-[795px] z-50 rotate-[255deg] hidden lg:block"
        src={fantasy_treeGreen}
        alt="test"
        height={1000}
        width={1000}
      />
    </div>
  );
};

export default PROJECT_TILES_BACKGROUND_IMAGES;
