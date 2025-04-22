import s from "./Water_btn.module.scss";
import plus from "../../assets/plus.png";
const Water_btn = () => {
  return (
    <button className={s.water_btn}>
      <span className={s.water_btn_box}>
        <img src={plus} alt="plus" />
      </span>
      <span className={s.water_btn_text}>Add water</span>
    </button>
  );
};

export default Water_btn;
