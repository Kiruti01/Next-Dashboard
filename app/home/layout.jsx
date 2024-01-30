import ChartDonut from "../ui/dashboard/chart/chartdonut";
import styles from "../ui/dashboard/dashboard.module.css";
import Footer from "../ui/dashboard/footer/footer";
import Navbar from "../ui/dashboard/navbar/navbar";

import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Transactions from "../ui/dashboard/transactions/transactions";

const Home = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        {children}
        <Footer className={styles.footer} />
      </div>
    </div>
  );
};

export default Home;
