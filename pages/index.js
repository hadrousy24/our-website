import styles from "../styles/Home.module.css";
import TeamSolarify from "../components/TeamSolarify";

export default function Home() {
  const members = [
    {
      image: "https://picsum.photos/100",
      name: "Basel",
      id: 1,
    },
    {
      image: "https://picsum.photos/100",
      name: "Norhan",
      id: 2,
    },
    {
      image: "https://picsum.photos/100",
      name: "Mohammed",
      id: 3,
    },
    {
      image: "https://picsum.photos/100",
      name: "Hadeel",
      id: 4,
    },
  ];

  return (
    <div className={styles.container}>
      <TeamSolarify circleSize={300} memberSize={100}>
        {members}
      </TeamSolarify>
    </div>
  );
}
