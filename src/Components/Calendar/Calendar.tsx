import { FC } from "react";
import s from "./Calendar.module.scss";
import CalendarItem from "../CalendarItem/CalendarItem";
const Calendar: FC<{ targetTime: any }> = ({ targetTime }) => {
  const realTime = targetTime.split(":");
  const date = new Date(Number(realTime[0]), Number(realTime[1]) + 1, 0);
  return (
    <div className={s.wrapper}>
      <div className={s.calentar}>
        {Array.from({ length: date.getDate() }).map((_, idx) => (
          <CalendarItem key={idx} idx={idx} realTime={realTime} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
