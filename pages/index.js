import styles from "../styles/Home.module.css";
import TeamSolarify from "../components/TeamSolarify";

export default function Home() {
  return (
    <div className={styles.container}>
      <TeamSolarify circleSize={200} />
    </div>
  );
}
