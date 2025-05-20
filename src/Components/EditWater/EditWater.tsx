import s from "./EditWater.module.scss";
import close from "../../assets/x.svg";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  changeMessage,
  EditItemWater,
  openMenu,
} from "../../Store/Slices/Main/mainSlice";
import { RootState } from "../../Store/store";
import { useForm } from "react-hook-form";
import constantJSON from "../../Helpers/const.json";
const EditWater = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { currentEdit } = useSelector((state: RootState) => state.mainSlice);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    dispatch(
      EditItemWater({
        ...currentEdit,
        time: data.time,
        valueWater: data.valueWater,
      })
    );
    dispatch(openMenu({
      menuOpen: "remove"
    }))
    dispatch(
      changeMessage({
        statusMessage: "message",
        message: "message_editWater",
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
      <form onSubmit={handleSubmit(onSubmit)} className={s.water_inner}>
        <h3 className={s.title}>{t("editWater_title")}</h3>
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
        <strong className={s.content_inner_strong}>
          {t("editWater_corect")}
        </strong>
        <div className={s.content_input}>
          <p className={s.content_input_text}>{t("addWater_time")}</p>
          <input
            {...register("time", { required: "This field is required" })}
            defaultValue={currentEdit.time}
            className={s.content_input_input}
            type="text"
          />
        </div>
        <div className={s.content_input}>
          <p className={s.content_input_text_bold}>{t("addWater_valueUsed")}</p>
          <input
            {...register("valueWater", { required: "This field is required" })}
            defaultValue={currentEdit.valueWater}
            className={s.content_input_input}
            type="text"
          />
        </div>
        <button className={s.content_btn}>{t("addWater_save")}</button>
      </form>
    </div>
  );
};

export default EditWater;
