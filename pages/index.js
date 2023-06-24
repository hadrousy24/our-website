import styles from "../styles/Home.module.css";
import TeamMember from "../components/TeamMember";

export default function Home() {
  return (
    <div className={styles.container}>
      <TeamMember memberSize={50}>Hello</TeamMember>
    </div>
  );
}
