import styles from "@/CSS/start_background_style.module.css";

const START_BACKGROUND_COMP = () => {
  return (
    <div className="w-full h-full -z-50">
      <div
        className={styles.lineOne + " " + "animate-pulse hidden md:block"}
      ></div>
      <div className={styles.lineTwo + " " + "animate-pulse"}></div>
      <div className={styles.lineThree + " " + "animate-pulse"}></div>
      <div
        className={styles.lineFour + " " + "animate-pulse hidden sm:block"}
      ></div>
    </div>
  );
};

export default START_BACKGROUND_COMP;
