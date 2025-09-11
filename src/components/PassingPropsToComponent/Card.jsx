import styles from "./index.module.scss";
export default function Card({ children }) {
  return (
    <div className={styles.card}>
      <div className={styles["card-content"]}>{children}</div>
    </div>
  );
}
