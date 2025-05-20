import s from "./VisualStatus.module.scss";
import left_arrow from "../../assets/left_arrow.svg";
import right_arrow from "../../assets/right_arrow.svg";
import graph from "../../assets/grahp.svg";
const VisualStatus = () => {
  return (
    <div className={s.wapper}>
      <div className={s.inner}>
        <h3 className={s.title}>Month</h3>
        <div className={s.inner_btns}>
          <button className={s.inner_btns_month}>
            <img src={left_arrow} alt="left arrow" />
          </button>
          <p className={s.inner_text}>April, 2024</p>
          <button className={s.inner_btns_month}>
            <img src={right_arrow} alt="right arrow" />
          </button>
          <button className={s.inner_btns_type}>
            <img src={graph} alt="graph" />
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default VisualStatus;
