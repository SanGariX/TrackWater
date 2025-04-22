import s from "./UserAccount.module.scss";
import people from "../../assets/man.png";
import arrow from "../../assets/arrow_down.png";
import option from "../../assets/settings.svg";
import LogOut from "../../assets/log-out.svg";
const UserAccount = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title_account}>
        Hello, <span>{"Nadia!"}</span>
      </h2>
      <div className={s.wrapper_btn}>
        <button className={s.account_btn}>
          <span className={s.account_btn_text}>{"Nadia"}</span>
          <span className={s.account_btn_img}>
            <img src={people} alt="avatar" />
          </span>
          <span className={s.account_btn_arrow}>
            <img src={arrow} alt="open option" />
          </span>
        </button>
        <div style={{"display": "none;"}} className={s.account_option}>
          <button className={s.account_option_btn}>
            <span className={s.account_option_btn_img}>
              <img src={option} alt="Setting" />
            </span>
            <span className={s.account_option_btn_setting}>Setting</span>
          </button>
          <button className={s.account_option_btn}>
            <span className={s.account_option_btn_img}>
              <img src={LogOut} alt="Log out" />
            </span>
            <span className={s.account_option_btn_LogOut}>Log out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
