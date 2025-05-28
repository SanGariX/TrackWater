import s from "./SettingPopup.module.scss";
import close_btn from "../../assets/x.svg";
import peapole from "../../assets/man.png";
import load from "../../assets/loadFile.svg";
import { useTranslation } from "react-i18next";
import SettingForm from "../SettingForm/SettingForm";
import { useDispatch, useSelector } from "react-redux";
import { loadImage, openMenu } from "../../Store/Slices/Main/mainSlice";
import { RootState } from "../../Store/store";
const SettingPopup = () => {
  const { t } = useTranslation();
  const { ava } = useSelector((state: RootState) => state.mainSlice.account);
  const dispatch = useDispatch();
  const onLoadImage = (e: any) => {
    const target = e.target.files[0];
    if (target) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target === null) return;
        dispatch(loadImage(event.target.result));
      };
      reader.readAsDataURL(target);
    }
  };
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
            <img src={!!ava ? ava : peapole} alt="curtomer" />
          </div>
          <label htmlFor="loadFile" className={s.image_wrapper_load}>
            <img
              className={s.image_wrapper_load_logo}
              src={load}
              alt="load image"
            />
            <span className={s.image_wrapper_load_text}>
              {t("Upload_photo")}
            </span>
            <input
              onChange={onLoadImage}
              className="hiddenElement"
              id="loadFile"
              type="file"
            />
          </label>
        </div>
        <SettingForm />
      </div>
    </div>
  );
};

export default SettingPopup;
