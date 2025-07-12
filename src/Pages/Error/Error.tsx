import { Link } from "react-router-dom";
import styles from "./Error.module.scss";
const Error = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Ой, сталася помилка</h1>
      <Link className={styles.link} to="/">Головна</Link>
    </div>
  );
};

export default Error;
