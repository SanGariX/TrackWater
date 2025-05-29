import s from "./SwiperItem.module.scss";
import water from "../../assets/water.svg";
import changeImage from "../../assets/change.svg";
import deleteImage from "../../assets/delete.svg";
import {
  deleteItemWater,
  EditItemWater,
  newDate,
  openMenu,
} from "../../Store/Slices/Main/mainSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store/store";
import { FC } from "react";

const SwiperItem: FC<any> = ({ item }) => {
  const dispatch = useDispatch<AppDispatch>();
  const bole = Number(item.valueWater) >= 1000 ? true : false;
  return (
    <div className={s.content_item}>
      <img className={s.img} src={water} alt="water" />
      <div className={s.content_item_center}>
        <strong className={s.content_item_center_title}>
          {bole ? Math.floor(Number(item.valueWater)) / 1000 + "L" : item.valueWater + "ml"}
        </strong>
        <p className={s.content_item_center_time}>{item.time} AM</p>
      </div>
      <div className={s.content_item_center}>
        <button
          id={item.id}
          onClick={() => {
            dispatch(openMenu({ menuOpen: "editWater" }));
            dispatch(newDate());
            dispatch(EditItemWater(item));
          }}
          className={s.content_item_center_btn}
        >
          <img src={changeImage} alt="change" />
        </button>
        <button
          onClick={() => {
            dispatch(deleteItemWater(item));
          }}
          className={s.content_item_center_btn}
        >
          <img src={deleteImage} alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default SwiperItem;
