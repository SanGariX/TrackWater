import { useDispatch, useSelector } from "react-redux";
import Message from "./Components/Message/Message";
import AppRoutes from "./Routes/AppRoutes";
import "./app.css";

import { RootState } from "./Store/store";
import constantJSON from "./Helpers/const.json";
import { useEffect } from "react";
import { changeStatus, newDate } from "./Store/Slices/Main/mainSlice";
import { useNavigate } from "react-router-dom";
const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const type = useSelector((state: RootState) => state.mainSlice);
  useEffect(() => {
    const enter = localStorage.getItem("user");
    if (!enter) {
      navigate("/");
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
      })
    );
    dispatch(newDate())
    navigate("/user");
  }, []);
  return (
    <div
      className="wrapper"
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
