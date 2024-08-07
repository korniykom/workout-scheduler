import styles from "./BigCard.module.css";
import image from "/home/max/workout-scheduler/TODO-app/src/components/chair1.jpg";
export default function BigCard() {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Arms</h1>
      <h2 className={styles.subTitle}>Monday & Friday</h2>
      <img className={styles.image} src={image} alt="img" />
      <div className={styles.lowerCard}>
        <div className={styles.duration}>
          <h3 className={styles.durationTitle}>Duration</h3>
          <h4 className={styles.durationSubTitle}>15 min</h4>
        </div>
        <button>Start workout</button>
      </div>
    </div>
  );
}
