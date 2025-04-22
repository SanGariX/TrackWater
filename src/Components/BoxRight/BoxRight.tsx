import s from './BoxRight.module.scss'
import background from "../../assets/woman.jpg";
import customers from "../../assets/customers.png";
import { useTranslation } from 'react-i18next';
import SetTimeout from '../../Helpers/setTimeout';
const BoxRight = () => {
  const { t } = useTranslation();
    return (
      <div className={`content ${SetTimeout() && "loaded"} ${s.box_right} box`}>
      <div className={s.customers_img_box}>
        <img
          className={s.customers_background_img}
          src={background}
          alt="women"
        />
      </div>
      <div className={s.happy_customers}>
        <div className={s.customer_boxes}>
          <div className={s.customers_img}>
            <img src={customers} alt="customers" />
          </div>
          <div className={s.customers_img}>
            <img src={customers} alt="customers" />
          </div>
          <div className={s.customers_img}>
            <img src={customers} alt="customers" />
          </div>
        </div>
        <h3 className={s.happy_customers_title}>
          {t("happy_customers_title_start")}
          <span> {t("happy_customers_title_marker")} </span>
          {t("happy_customers_title_end")}
        </h3>
        <div className={s.happy_customer_counter}>
          <p>1</p>
        </div>
      </div>
      <div className={s.info_grid_container}>
        <div className={`${s.info_grid_item1} ${s.info_grid_item}`}>
          {t("info_grid_item1")}
        </div>
        <div className={`${s.info_grid_item2} ${s.info_grid_item}`}>
          {t("info_grid_item2")}
        </div>
        <div
          className={`${s["info_grid_long-item"]} ${s.info_grid_item} `}
        >
          {t("info_grid_long-item")}
        </div>
      </div>
    </div>
    );
}

export default BoxRight;