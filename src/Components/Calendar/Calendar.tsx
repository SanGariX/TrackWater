import { FC, useEffect } from "react";
import s from "./Calendar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { upDateTime } from "../../Store/Slices/Main/mainSlice";
import { RootState } from "../../Store/store";
const Calendar: FC<{ targetTime: any }> = ({ targetTime }) => {
  const { time } = useSelector((state: RootState) => state.mainSlice);
  const selectorTime = time.split(":");
  const dispatch = useDispatch();
  const realTime = targetTime.split(":");
  const date = new Date(Number(realTime[0]), Number(realTime[1]) + 1, 0);
  const handleClick = (number: number) => {
    dispatch(
      upDateTime({
        year: Number(realTime[0]),
        month: Number(realTime[1]),
        day: number,
      })
    );
  };
  useEffect(()=>{

  }, [time])
  return (
    <div className={s.wrapper}>
      <div className={s.calentar}>
        {Array.from({ length: date.getDate() }).map((_, idx) => (
          <div
            onClick={() => {
              handleClick(idx);
            }}
            key={idx}
            className={`${s.item} ${
              Number(selectorTime[2]) === idx ? s.active : ""
            }`}
          >
            <p>{idx + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
