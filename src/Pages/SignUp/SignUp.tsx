import { useTranslation } from "react-i18next";
import BoxRight from "../../Components/BoxRight/BoxRight";
import Title from "../../Components/Title/Title";
import SetTimeout from "../../Helpers/setTimeout";
import s from "./SignUp.module.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store/store";
import { changeMessage, changeStatus } from "../../Store/Slices/Main/mainSlice";
import { useEffectTypeError } from "../../Helpers/typeMessage";
type UseFormType = {
  email: string;
  password: string | number;
  ["repeat-password"]: string | number;
};
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UseFormType>();
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [stateError, setStateError] = useState<string>("");
  const onSubmit = (data: UseFormType) => {
    if (data.password !== data["repeat-password"]) {
      setStateError("invalid_diferent_password_signup");
    } else if (data.password === data["repeat-password"]) {
      dispatch(
        changeMessage({
          statusMessage: "message",
          message: "message_enter_acc",
        })
      );
      dispatch(
        changeStatus({
          enterAcc: true,
        })
      );
      for (let i = 1; ; i += 1) {
        if (localStorage.getItem(`user_id=${i}`) === null) {
          localStorage.setItem(
            `user_id=${i}`,
            JSON.stringify({
              email: data.email,
              password: data.password,
            })
          );
          navigate("/user")
          return
        } else {
          continue;
        }
      }
    }
  };
  useEffectTypeError(setStateError, errors);
  useEffect(() => {
    !!stateError
      ? dispatch(
          changeMessage({
            error: stateError,
            statusMessage: "error",
          })
        )
      : dispatch(
          changeMessage({
            error: stateError,
            statusMessage: "",
          })
        );
  }, [stateError]);
  const handleOnClick = (type: string) => {
    setStateError("");
    if(!type) return 
    navigate(type)
  };
  return (
    <div className="wrapper">
      <div className={`content ${SetTimeout() && "loaded"} ${s.box_left} box `}>
        <Title handleOnClick={handleOnClick} />
        <div className={s.wrapper_form}>
          <h2 className={s.title}>{t("title-signup")}</h2>
          <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <label>
              <label htmlFor="email" className={s.lable}>
                {t("email-signup")}
              </label>
              <input
                placeholder={t("placeholder-email-signup")}
                id="email"
                {...register("email", {
                  required: "invalid_clear_email_signup",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "invalid_email_signup",
                  },
                })}
                type="text"
                className={s.input}
              />
            </label>
            <label>
              <label htmlFor="password" className={s.lable}>
                {t("password-signup")}
              </label>
              <input
                placeholder={t("placeholder-password-signup")}
                id="password"
                {...register("password", {
                  required: "invalid_clear_password_signup",
                })}
                type="text"
                className={s.input}
              />
            </label>
            <label>
              <label htmlFor="repeat-password" className={s.lable}>
                {t("repeat-password-signup")}
              </label>
              <input
                placeholder={t("placeholder-repeat-password-signup")}
                id="repeat-password"
                {...register("repeat-password", {
                  required: "invalid_clear_repeat_password_signup",
                })}
                type="text"
                className={s.input}
              />
            </label>
            <button type="submit" className={s.btn_form}>
              {t("btn_form_signup")}
            </button>
          </form>
          <p className={s.have_acc}>
            {t("have_acc_signup")}{" "}
            <button
              onClick={() => {
                handleOnClick("/signin");
              }}
              className={s.have_acc_link}
            >
              {t("have_acc_signup_link")}
            </button>
          </p>
        </div>
      </div>
      <BoxRight />
    </div>
  );
};

export default SignUp;
