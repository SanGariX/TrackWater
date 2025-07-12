import s from "./UserAccount.module.scss";
import people from "../../assets/man.png";
import arrow from "../../assets/arrow_down.png";
import option from "../../assets/settings.svg";
import LogOut from "../../assets/log-out.svg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/store";
import { openMenu } from "../../Store/Slices/Main/mainSlice";
import { useTranslation } from "react-i18next";
import { useState } from "react";
const UserAccount = () => {
  const { name, ava } = useSelector((state: RootState) => state.mainSlice.account);
  const [open, setOpen] = useState({ Open: false, menuOpen: true });
  const [openName, setOpenName] = useState(false);
  let nameValue: string = name;
  if (name.length > 10) {
    nameValue = name.slice(0, 10) + "..."; // Truncate name if it's too long
  }
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();
  const handleMouse = (boolean: boolean) => {
    if (name.length > 10) {
      if (boolean) {
        setOpenName(boolean);
      } else {
        setOpenName(boolean);
      }
    }
  };
  return (
    <div className={s.wrapper}>
      <h2
        onMouseEnter={() => {
          handleMouse(true);
        }}
        onMouseLeave={() => {
          handleMouse(false);
        }}
        className={s.title_account}
      >
        {t("userAccountHello")}, <span>{!!name ? nameValue : "Guest"}</span>
        {openName && <div className={s.openName}>бугага, переграв і унічтожив, тримай: {name}</div>}
      </h2>
      <div className={s.wrapper_btn}>
        <button
          onClick={() => {
            if (open.Open) {
              setOpen({ ...open, Open: false });
            } else {
              setOpen({ ...open, menuOpen: false });
              setTimeout(() => {
                setOpen({ menuOpen: false, Open: true });
              }, 100);
            }
          }}
          className={s.account_btn}
        >
          <span className={s.account_btn_text}>{name.slice(0, 3) + "..."}</span>
          <span className={s.account_btn_img}>
            <img src={!!ava ? ava : people} alt="avatar" />
          </span>
          <span className={s.account_btn_arrow}>
            <img
              className={`${s.account_btn_arrow_image} ${open.Open && s.open}`}
              src={arrow}
              alt="open option"
            />
          </span>
        </button>

        <div
          onTransitionEnd={() => {
            if (open.Open) {
              return;
            } else {
              setOpen({ ...open, menuOpen: true });
            }
          }}
          className={`${s.account_option} ${open.Open ? s.open : ""} ${
            open.menuOpen ? s.none : ""
          }`}
        >
          <button
            onClick={() => {
              if (open.Open) {
                setOpen({ ...open, Open: false });
              } else {
                setOpen({ ...open, menuOpen: false });
                setTimeout(() => {
                  setOpen({ menuOpen: false, Open: true });
                }, 100);
              }
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
            <span className={s.account_option_btn_setting}>{t("open_setting")}</span>
          </button>
          <button
            onClick={() => {
              if (open.Open) {
                setOpen({ ...open, Open: false });
              } else {
                setOpen({ ...open, menuOpen: false });
                setTimeout(() => {
                  setOpen({ menuOpen: false, Open: true });
                }, 100);
              }
              dispatch(openMenu({ menuOpen: "exit" }));
            }}
            className={s.account_option_btn}
          >
            <span className={s.account_option_btn_img}>
              <img src={LogOut} alt="Log out" />
            </span>
            <span className={s.account_option_btn_LogOut}>{t("exit_account")}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
