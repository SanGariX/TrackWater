import UserLeft from "../../Components/UserLeft/UserLeft";
import UserRight from "../../Components/UserRight/UserRight";
const User = () => {
  return (
    <div className={`wrapper`}>
      <UserLeft/>
      <UserRight/>
    </div>
  );
};

export default User;
