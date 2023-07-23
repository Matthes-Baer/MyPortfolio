import styles from "@/CSS/timeline_information_part_background_style.module.css";

const INFORMATION_PART_BACKGROUND = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-50">
      <div className={styles.lineOne}></div>
      <div className={styles.lineTwo}></div>
      <div className={styles.lineThree}></div>
      <div className={styles.lineFour}></div>
    </div>
  );
};

export default INFORMATION_PART_BACKGROUND;
