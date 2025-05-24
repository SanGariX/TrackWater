/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import s from "./Progress_bar.module.scss";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { useEffect, useState } from "react";
import procentsBar from "../../Helpers/procentsBar";
import dayliNorma from "../../Helpers/dailyNorm";
const Progress_bar = () => {
  const { t } = useTranslation();
  const [resultBar, setResultBar] = useState(0);
  const { account, date } = useSelector((state: RootState) => state.mainSlice);
  const reduxTime = `${date.split(":")[0]}:${date.split(":")[1]}:${
    date.split(":")[2]
  }`;
  const progresStyle = (procent: number) => css`
    width: ${procent}%;
  `;
  useEffect(() => {
    let result = 0;
    account.water.forEach((item) => {
      if (String(item.date) === String(reduxTime)) {
        result += Number(item.valueWater);
      }
    });
    setResultBar(result);
  }, [account.water]);
  return (
    <div className={s.wrapper_progress_bar}>
      <h4 className={s.progress_bar_title}>{t("progressBar_title")}</h4>
      <div className={s.progress_bar}>
        <div
          css={progresStyle(procentsBar(dayliNorma(account), resultBar / 1000))}
          className={s.progress_bar_dote}
        ></div>
      </div>
      <div className={s.wrapper_number_box}>
        <p className={s.wrapper_number_box_text}>0%</p>
        <p className={s.wrapper_number_box_text}>50%</p>
        <p className={s.wrapper_number_box_text}>100%</p>
      </div>
    </div>
  );
};

export default Progress_bar;
