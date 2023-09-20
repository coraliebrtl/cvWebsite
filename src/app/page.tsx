import styles from "./page.module.scss";
import Description from "@/Description/Description";
import Card from "@/components/Card/Card";

export default function Home() {
  return (
    <div className={styles.container}>
      <Description />
      <div className={styles.cards}>
        <Card title="Expériences Pro" link="/" />
        <Card title="Conférences" link="/" />
      </div>
    </div>
  );
}
