import { langHome } from "../../Helpers/Lang/Home/home-lang";
import styles from "./Home.module.scss";
import background from "../../assets/woman.jpg";
import customers from "../../assets/customers.png";
import ua_fl from "../../assets/ukraine-flag.png";
import uk_fl from "../../assets/UK-flag.jpg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/store";
import { changeLang } from "../../Store/Slices/Lang/langSlice";
const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {langState} = useSelector((state:RootState)=>state.langSlice)
  return(
    <div className={styles.wrapper}>
      <div className={`${styles.box_left} ${styles.box}`}>
        <h1 className={styles.title}>TrackWater</h1>
        <div className={styles.flex_lang_box}>
          <button
            onClick={() => {
              dispatch(changeLang("ua"));
            }}
            className={`${styles.lang_item} ${
              langState === "eng" ? styles.lang_item_active : ""
            }`}
          >
            <img src={uk_fl} alt="Uk" />
          </button>
          <button
            onClick={() => {
              dispatch(changeLang("eng"));
            }}
            className={`${styles.lang_item} ${
              langState === "ua" ? styles.lang_item_active : ""
            }`}
          >
            <img src={ua_fl} alt="Ukrain" />
          </button>
        </div>
        <div className={styles.container_title_box}>
          <strong className={styles.container_text}>
            {langHome("container_text")}
          </strong>
          <h2 className={styles.container_title}>
            {langHome("container_title")}
          </h2>
          <div className={styles.container_flex_btn}>
            <button
              className={`${styles.container_btn} ${styles.container_btn1}`}
            >
              {langHome("container_btn1")}
            </button>
            <button
              className={`${styles.container_btn} ${styles.container_btn2}`}
            >
              {langHome("container_btn2")}
            </button>
          </div>
        </div>
      </div>
      <div className={`${styles.box_right} ${styles.box}`}>
        <div className={styles.customers_img_box}>
          <img
            className={styles.customers_background_img}
            src={background}
            alt="women"
          />
        </div>
        <div className={styles.happy_customers}>
          <div className={styles.customer_boxes}>
            <div className={styles.customers_img}>
              <img src={customers} alt="customers" />
            </div>
            <div className={styles.customers_img}>
              <img src={customers} alt="customers" />
            </div>
            <div className={styles.customers_img}>
              <img src={customers} alt="customers" />
            </div>
          </div>
          <h3 className={styles.happy_customers_title}>
            {langHome("happy_customers_title_start")}
            <marker> {langHome("happy_customers_title_marker")} </marker>
            {langHome("happy_customers_title_end")}
          </h3>
          <div className={styles.happy_customer_counter}>
            <p>1</p>
          </div>
        </div>
        <div className={styles.info_grid_container}>
          <div className={`${styles.info_grid_item1} ${styles.info_grid_item}`}>
            {langHome("info_grid_item1")}
          </div>
          <div className={`${styles.info_grid_item2} ${styles.info_grid_item}`}>
            {langHome("info_grid_item2")}
          </div>
          <div
            className={`${styles["info_grid_long-item"]} ${styles.info_grid_item} `}
          >
            {langHome("info_grid_long-item")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
