import s from "./DailyNorma.module.scss";
import bottle from "../../assets/bottle.png";
import { useTranslation } from "react-i18next";
const DailyNorma = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={s.wrapper_img}>
        <img src={bottle} alt="bottle" />
      </div>
      <div className={s.daily_norma}>
        <h4 className={s.daily_norma_title}>{t("user_left_daylyNorma")}</h4>
        <p className={s.daily_norma_text}>1.5 L</p>
      </div>
    </>
  );
};

export default DailyNorma;
