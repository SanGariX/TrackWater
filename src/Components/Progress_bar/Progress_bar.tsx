/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import s from "./Progress_bar.module.scss";
import { useTranslation } from "react-i18next";
const Progress_bar = () => {
  const { t } = useTranslation();
  const progresStyle = (procent: number) => css`
    width: ${procent}%;
  `;
  return (
    <div className={s.wrapper_progress_bar}>
      <h4 className={s.progress_bar_title}>{t("progressBar_title")}</h4>
      <div className={s.progress_bar}>
        <div css={progresStyle(140)} className={s.progress_bar_dote}></div>
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
