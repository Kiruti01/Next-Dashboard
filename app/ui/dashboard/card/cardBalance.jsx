import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const CardBalance = ({ item }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Balance</span>
        <span className={styles.number}>$ 58,316,373.56</span>
        <span className={styles.detail}>
          <span className={styles.positive}>73%</span> more revenue than last
          month
        </span>
      </div>
    </div>
  );
};

export default CardBalance;
