
import UserAccount from "../UserAccount/UserAccount";
import s from "./UserRight.module.scss";
import SwiperWater from "../SwiperWater/SwiperWater.tsx";
const UserRight = () => {

  return (
    <div className={`${s.rightbox} box`}>
      <UserAccount />
      <SwiperWater />
    </div>
  );
};

export default UserRight;
