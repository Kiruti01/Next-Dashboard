"use client";

import styles from "./chart.module.css";
import { PieChart, Pie, Tooltip } from "recharts";

const data = [
  {
    name: "Sun",
    income: 4000000,
    expenses: 2400000,
  },
  {
    name: "Mon",
    income: 3000000,
    expenses: 1398000,
  },
  {
    name: "Tue",
    income: 27990000,
    expenses: 3800000,
  },
  {
    name: "Wed",
    income: 1278800,
    expenses: 3908000,
  },
  {
    name: "Thu",
    income: 18900000,
    expenses: 4800900,
  },
  {
    name: "Fri",
    income: 23900900,
    expenses: 3809000,
  },
  {
    name: "Sat",
    income: 34900000,
    expenses: 43000000,
  },
];

const formatYAxisLabel = (value) => `${(value / 1000000).toFixed(0)}M`;

const ChartDonut = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <PieChart width="100vw" height="80vh">
        <Tooltip />
        <Pie
          width={500}
          height={300}
          data={data}
          dataKey="name"
          outerRadius={250}
          innerRadius={150}
          fill="green"
          label={({ name, income, expenses }) =>
            `${name}: Income - ${income}, Expenses - ${expenses}`
          }
        />
      </PieChart>
    </div>
  );
};

export default ChartDonut;
