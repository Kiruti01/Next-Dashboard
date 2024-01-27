import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const CardExpense = ({ item }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Expenses</span>
        <span className={styles.number}>$ 2,340,700.00</span>
        <span className={styles.detail}>
          <span className={styles.negative}>6%</span> more than last month
        </span>
      </div>
    </div>
  );
};

export default CardExpense;
