import { useSelector } from "react-redux";
import Message from "./Components/Message/Message";
import AppRoutes from "./Routes/AppRoutes";
import "./app.css";
import { RootState } from "./Store/store";
import constantJSON from "./Helpers/const.json";
const App = () => {
  const type = useSelector((state: RootState) => state.mainSlice);
  return (
    <div
      className="wrapper"
      style={
        {
          "--anim-duration": `${constantJSON.timeAnimationCSS}s`,
        } as React.CSSProperties
      }
    >
      {type.statusMessage && <Message type={type} />}
      <AppRoutes />
    </div>
  );
};
export default App;
