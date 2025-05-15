import { useDispatch } from "react-redux";
import Popups from "../../Components/Popups/Popups";
import UserLeft from "../../Components/UserLeft/UserLeft";
import UserRight from "../../Components/UserRight/UserRight";
import { useEffect } from "react";
import { newDate } from "../../Store/Slices/Main/mainSlice";
const User = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newDate());
  }, []);
  return (
    <div className={`wrapper`}>
      <UserLeft />
      <UserRight />
      <Popups />
    </div>
  );
};

export default User;
