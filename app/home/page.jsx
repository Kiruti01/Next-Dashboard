import CardBalance from "../ui/dashboard/card/cardBalance";
import CardExpense from "../ui/dashboard/card/cardExpense";
import CardIncome from "../ui/dashboard/card/cardIncome";
import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
// import Transactions from "../ui/dashboard/transactions/transactions";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <CardBalance />
        </div>

        <Chart />
        <div className={styles.cards}>
          <CardIncome />
          <CardExpense />
        </div>
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
