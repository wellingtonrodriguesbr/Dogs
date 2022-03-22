import { useEffect, useState } from "react";
import { VictoryBar, VictoryChart, VictoryPie } from "victory";
import styles from "./UserStatsGraphs.module.css";

export default function UserStatsGraphs({ data }) {
  const [graphs, setGraphs] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.data,
        y: Number(item.acessos),
      };
    });
    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0)
    );
    setGraphs(graphData);
  }, [data]);

  return (
    <section className={`${styles.graph} animatedEntry`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={styles.graphItem}>
        <VictoryPie
          data={graphs}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>
      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graphs}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
}
