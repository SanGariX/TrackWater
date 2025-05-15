import s from "./Water_btn.module.scss";
import plus from "../../assets/plus.png";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store/store";
import { newDate, openMenu } from "../../Store/Slices/Main/mainSlice";
const Water_btn = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  return (
    <button
      onClick={() => {
        dispatch(openMenu({ menuOpen: "addWater" }));
        dispatch(newDate())
      }}
      className={s.water_btn}
    >
      <span className={s.water_btn_box}>
        <img src={plus} alt="plus" />
      </span>
      <span className={s.water_btn_text}>{t("left_main_waterBtn")}</span>
    </button>
  );
};

export default Water_btn;
