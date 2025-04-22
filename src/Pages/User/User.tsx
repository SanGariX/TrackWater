import UserLeft from "../../Components/UserLeft/UserLeft";
import UserRight from "../../Components/UserRight/UserRight";
import s from "./User.module.scss";
const User = () => {
  return (
    <div className={`wrapper`}>
      <UserLeft/>
      <UserRight/>
    </div>
  );
};

export default User;
