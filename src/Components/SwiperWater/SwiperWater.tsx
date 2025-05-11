import s from "./SwiperWater.module.scss";
import water from "../../assets/water.svg";
import changeImage from "../../assets/change.svg";
import deleteImage from "../../assets/delete.svg";
import plus from "../../assets/btn_plus.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store/store";
import { openMenu } from "../../Store/Slices/Main/mainSlice";
import "swiper/css";
import "swiper/css/scrollbar";
const SwiperWater = () => {
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
          spaceBetween={50}
          slidesPerView={3}
          className={s.swiper_wrapper}
        >
          <SwiperSlide>
            <div className={s.content_item}>
              <img className={s.img} src={water} alt="water" />
              <div className={s.content_item_center}>
                <strong className={s.content_item_center_title}>250 ml</strong>
                <p className={s.content_item_center_time}>7:00 AM</p>
              </div>
              <div className={s.content_item_center}>
                <button
                  onClick={() => {
                    dispatch(openMenu({ menuOpen: "editWater" }));
                  }}
                  className={s.content_item_center_btn}
                >
                  <img src={changeImage} alt="change" />
                </button>
                <button className={s.content_item_center_btn}>
                  <img src={deleteImage} alt="delete" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperWater;
