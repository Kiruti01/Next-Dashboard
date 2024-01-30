import Home from "./home/page";
import Footer from "./ui/dashboard/footer/footer";
import Sidebar from "./ui/dashboard/sidebar/sidebar";
import styles from "../app/ui/dashboard/dashboard.module.css";
import CardBalance from "./ui/dashboard/card/cardBalance";
import CardIncome from "./ui/dashboard/card/cardIncome";
import CardExpense from "./ui/dashboard/card/cardExpense";
import Rightbar from "./ui/dashboard/rightbar/rightbar";
import Navbar from "./ui/dashboard/navbar/navbar";

// TODO
const Homepage = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        {children}
        <div className={styles.main}>
          <Navbar />
          <div className={styles.text}>Your Balance is</div>
          <div className={styles.cards}>
            <CardBalance />
            <CardExpense />
            <CardIncome />
          </div>
          <div className={styles.text}>
            Calculate your Income with our new TS2.5
          </div>
          <div className={styles.cards}>
            <CardIncome />
          </div>
          <div className={styles.text}>
            Calculate your Expenses with our new TS2.5
          </div>
          <div className={styles.cards}>
            <CardExpense />
          </div>
        </div>

        <Footer className={styles.footer} />
      </div>
    </div>
  );
};

export default Homepage;
