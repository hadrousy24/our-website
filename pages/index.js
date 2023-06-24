import styles from "../styles/Home.module.css";
import TeamSolarify from "../components/TeamSolarify";

export default function Home() {
  let members = [
    {
      image: "https://picsum.photos/20/300",
      name: "Basel",
      id: 1,
    },
    {
      image: "https://picsum.photos/20/30",
      name: "Norhan",
      id: 2,
    },
    {
      image: "https://picsum.photos/200/30",
      name: "Mohammed",
      id: 3,
    },
    {
      image: "https://picsum.photos/200/300",
      name: "Hadeel",
      id: 4,
    },
  ];

  return (
    <div className={styles.container}>
      <TeamSolarify circleSize={200} members={members} />
    </div>
  );
}
