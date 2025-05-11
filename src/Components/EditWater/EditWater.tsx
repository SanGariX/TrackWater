import s from "./EditWater.module.scss";
import close from "../../assets/x.svg";
import { useDispatch } from "react-redux";
import minus from "../../assets/minus_change_water-btn.svg";
import plus from "../../assets/plus_change_water-btn.svg";
import { useTranslation } from "react-i18next";
import { openMenu } from "../../Store/Slices/Main/mainSlice";
const EditWater = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <div className={s.wrapper}>
      <div className={s.water_inner}>
        <h3 className={s.title}>{t("editWater_title")}</h3>
        <button
          onClick={() => {
            dispatch(
              openMenu({
                menuOpen: "remove",
              })
            );
          }}
          className={s.close_btn}
        >
          <img src={close} alt="close" />
        </button>
        <strong className={s.content_inner_strong}>
          {t("editWater_corect")}
        </strong>
        <div className={s.content_inner}>
          <p className={s.content_inner_text}>{t("addWater_amount")}</p>
          <div className={s.content_inner_btn}>
            <button className={s.content_inner_btn_change}>
              <img src={minus} alt="minus" />
            </button>
            <div className={s.content_inner_btn_value}>
              <p className={s.content_inner_btn_value_text}>
                50{t("addWater_amount_value")}
              </p>
            </div>
            <button className={s.content_inner_btn_change}>
              <img src={plus} alt="plus" />
            </button>
          </div>
        </div>
        <div className={s.content_input}>
          <p className={s.content_input_text}>{t("addWater_time")}</p>
          <input defaultValue={"7:00"} className={s.content_input_input} type="text" />
        </div>
        <div className={s.content_input}>
          <p className={s.content_input_text_bold}>{t("addWater_valueUsed")}</p>
          <input defaultValue={"50"} className={s.content_input_input} type="text" />
        </div>
        <button className={s.content_btn}>{t("addWater_save")}</button>
      </div>
    </div>
  );
};

export default EditWater;
