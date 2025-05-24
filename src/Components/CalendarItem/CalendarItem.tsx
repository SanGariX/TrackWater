import { useDispatch, useSelector } from "react-redux";
import s from "./CalendarItem.module.scss";
import { upDateTime } from "../../Store/Slices/Main/mainSlice";
import { RootState } from "../../Store/store";
import { useEffect, useState } from "react";
import procentsBar from "../../Helpers/procentsBar";
import dayliNorma from "../../Helpers/dailyNorm";
import styleCalendar from "../../Helpers/styleCalendar";
const CalendarItem = ({ idx, realTime }: { idx: any; realTime: string }) => {
  const { time, account } = useSelector((state: RootState) => state.mainSlice);
  const dispatch = useDispatch();
  const [ResultBar, setResultBar] = useState(0);
  const result = procentsBar(dayliNorma(account), ResultBar / 1000);
  const handleClick = (number: number) => {
    dispatch(
      upDateTime({
        year: Number(realTime[0]),
        month: Number(realTime[1]),
        day: number,
      })
    );
  };
  useEffect(() => {
    let result = 0;
    account.water.forEach((item: any) => {
      if (
        String(item.date) === String(`${realTime[0]}:${realTime[1]}:${idx + 1}`)
      ) {
        result += Number(item.valueWater);
      }
    });
    setResultBar(result);
  }, [account.water, realTime]);
  return (
    <div className={s.inner_item} key={idx}>
      <div
        onClick={() => {
          handleClick(idx + 1);
        }}
        className={`${s.item} ${
          time === `${realTime[0]}:${realTime[1]}:${idx + 1}` ? s.active : ""
        } ${styleCalendar(Math.floor(result), s)}`}
      >
        <p>{idx + 1}</p>
      </div>
      <p className={s.procent}>{Math.floor(result)}%</p>
    </div>
  );
};

export default CalendarItem;
