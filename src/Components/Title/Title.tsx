import s from "./Title.module.scss";
import ua_fl from "../../assets/ukraine-flag.png";
import uk_fl from "../../assets/UK-flag.jpg";
import { useTranslation } from "react-i18next";
import { FC } from "react";
type props = {
  handleOnClick?: (type:string) => void;
}
const Title: FC<props> = ({handleOnClick}) => {
  const { i18n } = useTranslation();
  const changeLang = (lang: string): void => {
    i18n.changeLanguage(lang);
  };
  return (
    <>
      <h1 onClick={()=>{handleOnClick?.("/")}} className={s.title}>TrackWater</h1>
      <div className={s.flex_lang_box}>
        <button
          onClick={() => {
            changeLang("uk");
          }}
          className={`${s.lang_item} ${
            i18n.language === "uk" && s.lang_item_active
          }`}
        >
          <img src={ua_fl} alt="Ukrain" />
        </button>
        <button
          onClick={() => {
            changeLang("en");
          }}
          className={`${s.lang_item} ${
            i18n.language === "en" && s.lang_item_active
          }`}
        >
          <img src={uk_fl} alt="Uk" />
        </button>
      </div>
    </>
  );
};

export default Title;
