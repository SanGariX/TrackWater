import { useTranslation } from "react-i18next";
import BoxRight from "../../Components/BoxRight/BoxRight";
import Title from "../../Components/Title/Title";
import SetTimeout from "../../Helpers/setTimeout";
import s from "./SignIn.module.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store/store";
import { useEffectTypeError } from "../../Helpers/typeMessage";
import { changeMessage, changeStatus } from "../../Store/Slices/Main/mainSlice";
type UseFormType = {
  email: string;
  password: string | number;
};
// const UseForm = {
//   email: "",
//   password: "",
//   ["repeat-password"]: "",
// };
const SignIn = () => {
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
    for (let i = 1; ; i += 1) {
      const getItem = localStorage.getItem(`user_id=${i}`);
      if (!getItem) {
        dispatch(
          changeMessage({
            statusMessage: "error",
            error: "error_enter_account_signin",
          })
        );
        return;
      }
      const object_acc = JSON.parse(getItem);
      if (
        object_acc.email === data.email &&
        object_acc.password === data.password
      ) {
        dispatch(
          changeMessage({
            statusMessage: "message",
            message: "message_enter_acc",
          })
        );
        dispatch(
          changeStatus({
            enterAcc: true,
            name: object_acc.name,
            email: data.email,
            password: data.password,
          })
        );
        localStorage.setItem("user", `user_id=${i}`);
        navigate("/user");
        return;
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
  const handleOnClick = (type: string | undefined) => {
    setStateError("");
    if (!type) return;
    navigate(type);
  };
  return (
    <div className="wrapper">
      <div className={`content ${SetTimeout() && "loaded"} box ${s.box_left}`}>
        <Title handleOnClick={handleOnClick} />
        <div className={s.wrapper_form}>
          <h2 className={s.title}>{t("title-signin")}</h2>
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
            <button type="submit" className={s.btn_form}>
              {t("btn_form_signin")}
            </button>
          </form>
          <p className={s.have_acc}>
            {t("have_acc_signin")}{" "}
            <button
              onClick={() => {
                handleOnClick("/signup");
              }}
              className={s.have_acc_link}
            >
              {t("have_acc_signin_link")}
            </button>
          </p>
        </div>
      </div>
      <BoxRight />
    </div>
  );
};

export default SignIn;
