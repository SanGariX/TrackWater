import s from "./AddWater.module.scss";
import close from "../../assets/x.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addAmountWater,
  changeMessage,
  openMenu,
} from "../../Store/Slices/Main/mainSlice";
import { useTranslation } from "react-i18next";
import { RootState } from "../../Store/store";
import { useForm } from "react-hook-form";
import constantJSON from "../../Helpers/const.json";
const AddWater = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { time } = useSelector((state: RootState) => state.mainSlice);
  const date = new Date();
  const HourValue = String(date.getHours()).padStart(2, "0");
  const MinutesValue = String(date.getMinutes()).padStart(2, "0");
  const timeValue = HourValue + ":" + MinutesValue;
  const onSubmit = (data: any) => {
    const dateDay = time;
    const id = Date.now();
    const result = {
      ...data,
      date: dateDay,
      id: id,
    };
    dispatch(addAmountWater(result));
    dispatch(
      openMenu({
        menuOpen: "remove",
      })
    );
    dispatch(
      changeMessage({
        message: "addWater_message",
        statusMessage: "message",
      })
    );
    setTimeout(() => {
      dispatch(
        changeMessage({
          error: "",
          statusMessage: "",
        })
      );
    }, Number(constantJSON.timeAnimationCSS) * 1000);
  };
  return (
    <div className={s.wrapper}>
      <form className={s.water_inner} onSubmit={handleSubmit(onSubmit)}>
        <div
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
        </div>
        <h3 className={s.title}>{t("addWater_title")}</h3>
        <strong className={s.content_inner_strong}>
          {t("addWater_choose")}
        </strong>
        <div className={s.content_input}>
          <p className={s.content_input_text}>{t("addWater_time")}</p>
          <input
            defaultValue={timeValue}
            className={s.content_input_input}
            type="text"
            {...register("time")}
          />
        </div>
        <div className={s.content_input}>
          <p className={s.content_input_text_bold}>{t("addWater_valueUsed")}</p>
          <input
            defaultValue={"50"}
            className={s.content_input_input}
            type="text"
            {...register("valueWater")}
          />
        </div>
        <button className={s.content_btn}>{t("addWater_save")}</button>
      </form>
    </div>
  );
};

export default AddWater;
