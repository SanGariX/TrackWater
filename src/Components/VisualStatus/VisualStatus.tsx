import s from "./VisualStatus.module.scss";
import left_arrow from "../../assets/left_arrow.svg";
import right_arrow from "../../assets/right_arrow.svg";
import graph from "../../assets/grahp.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import monthSearch from "../../Helpers/monthArray";
import { useEffect, useState } from "react";
import Calendar from "../Calendar/Calendar";
import disabledMonthBtn from "../../Helpers/disabledMonthBtn";
import { useTranslation } from "react-i18next";
const VisualStatus = () => {
  const {t} = useTranslation()
  const { time, date } = useSelector((state: RootState) => state.mainSlice);
  const [targetTime, setTargetTime] = useState(time);
  useEffect(() => {
    setTargetTime(time);
  }, [time]);
  const dispatchTime = (type: boolean) => {
    const currentTime = targetTime.split(":");
    if (type) {
      if (Number(currentTime[1]) + 1 >= 12) {
        setTargetTime(
          `${Number(currentTime[0]) + 1}:${0}:${Number(currentTime[2])}`
        );
        return;
      }
      setTargetTime(
        `${Number(currentTime[0])}:${Number(currentTime[1]) + 1}:${Number(
          currentTime[2]
        )}`
      );
    } else {
      if (Number(currentTime[1]) - 1 <= -1) {
        setTargetTime(
          `${Number(currentTime[0]) - 1}:${11}:${Number(currentTime[2])}`
        );
        return;
      }
      setTargetTime(
        `${Number(currentTime[0])}:${Number(currentTime[1]) - 1}:${Number(
          currentTime[2]
        )}`
      );
    }
  };
  return (
    <div className={s.wapper}>
      <div className={s.inner}>
        <h3 className={s.title}>{t("visual_month")}</h3>
        <div className={s.inner_btns}>
          <button
            onClick={() => {
              dispatchTime(false);
            }}
            className={s.inner_btns_month}
          >
            <img src={left_arrow} alt="left arrow" />
          </button>
          <p className={s.inner_text}>
            {monthSearch(Number(targetTime.split(":")[1]))},{" "}
            {targetTime.split(":")[0]}
          </p>
          <button
            onClick={() => {
              dispatchTime(true);
            }}
            className={`${s.inner_btns_month} ${
              disabledMonthBtn(date, targetTime) ? s.disabled : ""
            }`}
            disabled={disabledMonthBtn(date, targetTime)}
          >
            <img src={right_arrow} alt="right arrow" />
          </button>
          <button className={s.inner_btns_type}>
            <img src={graph} alt="graph" />
          </button>
        </div>
      </div>
      <Calendar targetTime={targetTime} />
    </div>
  );
};

export default VisualStatus;
