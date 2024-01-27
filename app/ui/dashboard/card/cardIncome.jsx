import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const CardIncome = ({ item }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Income</span>
        <span className={styles.number}>$ 60,657,073.56</span>
        <span className={styles.detail}>
          <span className={styles.positive}>146%</span> more than last month
        </span>
      </div>
    </div>
  );
};

export default CardIncome;
