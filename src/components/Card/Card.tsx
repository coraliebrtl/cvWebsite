import Link from "next/link";
import styles from "./Card.module.scss";

interface CardProps {
  title: string;
  link: string;
}

const Card = ({ title, link }: CardProps) => (
  <Link href={link} className={styles.container}>
    <p className={title}>{title}</p>
  </Link>
);

export default Card;
