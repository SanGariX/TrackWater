import s from "./SettingPopup.module.scss";
import close_btn from "../../assets/x.svg";
import peapole from "../../assets/man.png";
import load from "../../assets/loadFile.svg";
import { useTranslation } from "react-i18next";
import SettingForm from "../SettingForm/SettingForm";
import { useDispatch } from "react-redux";
import { openMenu } from "../../Store/Slices/Main/mainSlice";
const SettingPopup = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <div className={s.wrapper}>
      <div className={s.popup}>
        <div className={s.popup_title_inner}>
          <h3 className={s.title_setting}>{t("titleSetting")}</h3>
          <button
            onClick={() => {
              dispatch(
                openMenu({
                  menuOpen: "setting",
                })
              );
            }}
            className={s.close_btn}
          >
            <img src={close_btn} alt="close menu" />
          </button>
        </div>
        <div className={s.image_wrapper}>
          <div className={s.image_wrapper_box}>
            <img src={peapole} alt="curtomer" />
          </div>
          <label htmlFor="loadFile" className={s.image_wrapper_load}>
            <img
              className={s.image_wrapper_load_logo}
              src={load}
              alt="load image"
            />
            <span className={s.image_wrapper_load_text}>{t("Upload_photo")}</span>
            <input className="hiddenElement" id="loadFile" type="file" />
          </label>
        </div>
        <SettingForm />
      </div>
    </div>
  );
};

export default SettingPopup;
