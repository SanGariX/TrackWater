import s from "./SwiperWater.module.scss";

import plus from "../../assets/btn_plus.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/store";
import { newDate, openMenu } from "../../Store/Slices/Main/mainSlice";
import "swiper/css";
import "swiper/css/scrollbar";
import SwiperItem from "../SwiperItem/SwiperItem";
import { useEffect, useState } from "react";
const SwiperWater = () => {
  const { account, time: reduxTime } = useSelector(
    (state: RootState) => state.mainSlice
  );
  const [filtered, setFiltered] = useState(
    account.water.filter(({ date }) => {
      return String(date) === String(reduxTime);
    })
  );
  useEffect(() => {
    setFiltered(
      account.water.filter(({ date }) => {
        return String(date) === String(reduxTime);
      })
    );
  }, [account.water]);
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.title_inner}>
          <h3 className={s.title}>{t("swiper_today")}</h3>
          <button
            onClick={() => {
              dispatch(openMenu({ menuOpen: "addWater" }));
              dispatch(newDate());
            }}
            className={s.title_btn}
          >
            <img src={plus} alt="plus" />
            <span>{t("swiper_Addwater")}</span>
          </button>
        </div>
        <Swiper
          modules={[Scrollbar]}
          scrollbar={{ draggable: true }}
          grabCursor={true}
          spaceBetween={-40}
          slidesPerView={2.6}
          className={s.swiper_wrapper}
        >
          {!!filtered.length &&
            filtered.map((item, idx) => (
              <SwiperSlide key={idx}>
                <SwiperItem item={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperWater;
