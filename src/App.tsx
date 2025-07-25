import { useDispatch, useSelector } from "react-redux";
import Message from "./Components/Message/Message";
import AppRoutes from "./Routes/AppRoutes";
import "./app.css";

import { RootState } from "./Store/store";
import constantJSON from "./Helpers/const.json";
import { useEffect } from "react";
import { changeStatus, newDate, newTime } from "./Store/Slices/Main/mainSlice";
const App = () => {
  const dispatch = useDispatch();
  const type = useSelector((state: RootState) => state.mainSlice);
  useEffect(() => {
    const enter = localStorage.getItem("user");
    if (!enter) {
      return;
    }
    const user = localStorage.getItem(enter);
    if (!user) return;
    const userObject = JSON.parse(user);
    dispatch(
      changeStatus({
        enterAcc: true,
        name: userObject.name,
        email: userObject.email,
        password: userObject.password,
        id: userObject.id,
        water: userObject.water,
        gender: userObject.gender,
        weight: userObject.weight,
        ava: userObject.ava,
        sports: userObject.sports,
      })
    );
    dispatch(newDate());
    dispatch(newTime());
  }, []);

  return (
    <div
      className="main_wrapper"
      style={
        {
          "--anim-duration": `${constantJSON.timeAnimationCSS}s`,
        } as React.CSSProperties
      }
    >
      {!!type.statusMessage && <Message type={type} />}
      <AppRoutes />
    </div>
  );
};
export default App;
