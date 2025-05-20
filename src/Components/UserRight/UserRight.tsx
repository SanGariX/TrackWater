import UserAccount from "../UserAccount/UserAccount";
import s from "./UserRight.module.scss";
import SwiperWater from "../SwiperWater/SwiperWater.tsx";
import VisualStatus from "../VisualStatus/VisualStatus.tsx";
const UserRight = () => {
  return (
    <div className={`${s.rightbox} box`}>
      <UserAccount />
      <SwiperWater />
      <VisualStatus />
    </div>
  );
};

export default UserRight;
