import { useTranslation } from "react-i18next";
import s from "./SettingForm.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/store";
import { settingAcc } from "../../Store/Slices/Main/mainSlice";
import dayliNorma from "../../Helpers/dailyNorm";
const SettingForm = () => {
  const { account } = useSelector((state: RootState) => state.mainSlice);
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const [radio, setRadio] = useState<string>(account.gender);
  const [input, setInput] = useState({
    name: account.name,
    email: account.email,
    sports: account.sports,
    weight: account.weight,
  });
  useEffect(() => {
    dispatch(
      settingAcc({
        gender: radio,
        email: input.email,
        name: input.name,
        sports: input.sports,
        weight: input.weight,
      })
    );
  }, [input, radio]);
  return (
    <>
      <form className={s.form}>
        <div className={s.form_left}>
          <div className={s.form_input_box}>
            <span className={s.form_input_box_span}>{t("gender_radio")}</span>
            <div className={s.form_input_box_radio}>
              <label htmlFor="Woman">
                <span
                  className={`${s.form_input_box_radio_input} ${
                    radio === "Woman" && s.active
                  }`}
                ></span>
                <input
                  onChange={() => {
                    setRadio("Woman");
                  }}
                  className="hiddenElement"
                  id="Woman"
                  type="radio"
                  name="gender"
                  defaultValue={"Woman"}
                />
                <span className={s.form_input_box_radio_text}>
                  {t("gender_radio_women")}
                </span>
              </label>
              <label htmlFor="Man">
                <span
                  className={`${s.form_input_box_radio_input}  ${
                    radio === "Man" && s.active
                  }`}
                ></span>
                <input
                  onChange={() => {
                    setRadio("Man");
                  }}
                  className="hiddenElement"
                  id="Man"
                  type="radio"
                  name="gender"
                  defaultValue={"Man"}
                />
                <span className={s.form_input_box_radio_text}>
                  {t("gender_radio_man")}
                </span>
              </label>
            </div>
          </div>
          <div className={s.form_input_box}>
            <span className={s.form_input_box_span}>{t("setting_name")}</span>
            <input
              placeholder={t("setting_name")}
              className={s.form_input_box_input}
              type="text"
              name="name"
              defaultValue={account.name}
              onChange={(evt) => {
                setInput({ ...input, name: evt.target.value });
              }}
            />
          </div>
          <div className={s.form_input_box}>
            <span className={s.form_input_box_span}>{t("setting_email")}</span>
            <input
              onChange={(evt) => {
                setInput({ ...input, email: evt.target.value });
              }}
              defaultValue={account.email}
              placeholder={t("setting_email")}
              className={s.form_input_box_input}
              type="text"
              name="email"
            />
          </div>
        </div>
        <div className={s.form_right}>
          <div className={s.form_right_input}>
            <span className={s.form_right_inner_span}>
              {t("setting_weight")}
            </span>
            <input
              onChange={(evt) => {
                setInput({ ...input, weight: Number(evt.target.value) });
              }}
              defaultValue={account.weight}
              placeholder="0"
              className={s.form_input_box_input}
              type="text"
              name="weight"
            />
          </div>
          <div className={s.form_right_input}>
            <span className={s.form_right_inner_span}>
              {t("setting_participation")}
            </span>
            <input
              onChange={(evt) => {
                setInput({ ...input, sports: evt.target.value });
              }}
              defaultValue={account.sports}
              placeholder="2.20"
              className={`${s.form_input_box_input} ${s.form_input_box_input_right}`}
              type="text"
              name="sports"
            />
          </div>
        </div>
      </form>
      <div className={s.setting_bottom}>
        <div className={s.form_box_daily_norma}>
          <h4 className={`${s.form_input_box_span} ${s.center}`}>
            {t("dayly_title")}
          </h4>
          <div className={s.form_box_daily_norma_inner}>
            <div className={s.daily_norma_inner_item}>
              <div className={s.daily_norma_inner_item_title}>
                {t("dayly_woman")}
              </div>
              <div className={s.daily_norma_inner_item_number}>
                V=(M*0,03) + (T*0,4)
              </div>
            </div>
            <div className={s.daily_norma_inner_item}>
              <div className={s.daily_norma_inner_item_title}>
                {t("dayly_man")}
              </div>
              <div className={s.daily_norma_inner_item_number}>
                V=(M*0,04) + (T*0,6)
              </div>
            </div>
          </div>
        </div>
        <div className={s.form_box_daily_desc}>
          <span>*</span> {t("setting_desc")}
        </div>
        <p className={s.form_right_result}>
          {t("setting_result")} <span>{dayliNorma(account).toFixed(1)} L</span>
        </p>
      </div>
    </>
  );
};

export default SettingForm;
