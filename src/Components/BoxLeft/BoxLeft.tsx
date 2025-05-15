import { useTranslation } from "react-i18next";
import s from "./BoxLeft.module.scss";
import SetTimeout from "../../Helpers/setTimeout";
import Title from "../Title/Title";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { exitAccount } from "../../Store/Slices/Main/mainSlice";
const BoxLeft = () => {
  const { t } = useTranslation();
  const { enterAcc } = useSelector((state: RootState) => state.mainSlice);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      exitAccount()
    );
  };
  return (
    <div className={`content ${SetTimeout() && "loaded"} ${s.box_left} box`}>
      <Title />
      <div className={s.container_title_box}>
        <strong className={s.container_text}>{t("container_text")}</strong>
        <h2 className={s.container_title}>{t("container_title")}</h2>

        <div className={s.container_flex_btn}>
          {!enterAcc && (
            <>
              <Link
                to="/signup"
                className={`${s.container_btn} ${s.container_btn1}`}
              >
                {t("container_btn1")}
              </Link>
              <Link
                to="/signin"
                className={`${s.container_btn} ${s.container_btn2}`}
              >
                {t("container_btn2")}
              </Link>
            </>
          )}
          {enterAcc && (
            <>
              <Link
                to="/user"
                className={`${s.container_btn} ${s.container_btn1} ${s.container_btn3}`}
              >
                {t("enter_in_account_btn")}
              </Link>
              <button
                onClick={handleClick}
                className={`${s.container_btn} ${s.container_btn2} ${s.container_btn3}`}
              >
                {t("exit_account_btn")}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoxLeft;
