import GameScreen from "./GameScreen";
import styles from "./page.module.css";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className={styles.page}>
      <img src="background.png" style={{ backgroundSize: "cover" }} />
      <div className={styles.box1}>
        <GameScreen />
      </div>
    </div>
  );
}
