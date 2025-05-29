import { useSelector } from "react-redux";
import s from "./Graph.module.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { RootState } from "../../Store/store";
const Graph = ({ targetTime }: { targetTime: any }) => {
  const { water } = useSelector((state: RootState) => state.mainSlice.account);
  const time = targetTime.split(":");
  const forGraph: any[] = [];
  const date = new Date(Number(time[0]), Number(time[1]) + 1, 0);
  for (let i = 1; i <= date.getDate(); i += 1) {
    let total = 0;
    water.forEach(({ valueWater, date }, idx) => {
      if (`${time[0]}:${time[1]}:${i}` === date) {
        total += Number(valueWater);
      }
      if (idx + 1 === water.length) {
        forGraph.push({
          value: total,
          date: `${i}`,
        });
      }
    });
  }
  console.log(forGraph);
  return (
    <div className={s.wrapper}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={forGraph}>
          <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4CAF50" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#4CAF50" stopOpacity={0.05} />
          </linearGradient>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" fill="url(#colorFill)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
