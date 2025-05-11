import s from "./UserAccount.module.scss";
import people from "../../assets/man.png";
import arrow from "../../assets/arrow_down.png";
import option from "../../assets/settings.svg";
import LogOut from "../../assets/log-out.svg";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store/store";
import { openMenu } from "../../Store/Slices/Main/mainSlice";
import { useTranslation } from "react-i18next";
import { useState } from "react";
const UserAccount = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();

  return (
    <div className={s.wrapper}>
      <h2 className={s.title_account}>
        {t("userAccountHello")}, <span>{"Nadia!"}</span>
      </h2>
      <div className={s.wrapper_btn}>
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className={s.account_btn}
        >
          <span className={s.account_btn_text}>{"Nadia"}</span>
          <span className={s.account_btn_img}>
            <img src={people} alt="avatar" />
          </span>
          <span className={s.account_btn_arrow}>
            <img
              className={`${s.account_btn_arrow_image} ${open && s.open}`}
              src={arrow}
              alt="open option"
            />
          </span>
        </button>
        <div className={`${s.account_option} ${open && s.open}`}>
          <button
            onClick={() => {
              dispatch(
                openMenu({
                  menuOpen: "setting",
                })
              );
            }}
            className={s.account_option_btn}
          >
            <span className={s.account_option_btn_img}>
              <img src={option} alt="Setting" />
            </span>
            <span className={s.account_option_btn_setting}>
              {t("open_setting")}
            </span>
          </button>
          <button
            onClick={() => {
              dispatch(openMenu({ menuOpen: "exit" }));
            }}
            className={s.account_option_btn}
          >
            <span className={s.account_option_btn_img}>
              <img src={LogOut} alt="Log out" />
            </span>
            <span className={s.account_option_btn_LogOut}>
              {t("exit_account")}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
