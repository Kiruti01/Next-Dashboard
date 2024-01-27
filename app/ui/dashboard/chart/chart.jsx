"use client";

import styles from "./chart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

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

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis tickFormatter={formatYAxisLabel} />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="expenses"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
