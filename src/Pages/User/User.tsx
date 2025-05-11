import { useDispatch, useSelector } from "react-redux";
import SettingPopup from "../../Components/SettingPopup/SettingPopup";
import UserLeft from "../../Components/UserLeft/UserLeft";
import UserRight from "../../Components/UserRight/UserRight";
import { RootState } from "../../Store/store";
import { openMenu } from "../../Store/Slices/Main/mainSlice";
import s from "../../Components/UserRight/UserRight.module.scss";
import AddWater from "../../Components/AddWater/AddWater";
import EditWater from "../../Components/EditWater/EditWater";
import ExitPopup from "../../Components/ExitPopup/ExitPopup";
const User = () => {
  const { setting, addWater, editWater, exit } = useSelector(
    (state: RootState) => state.mainSlice
  );
  const dispatch = useDispatch();
  return (
    <div className={`wrapper`}>
      <UserLeft />
      <UserRight />
      {!!setting && (
        <>
          <SettingPopup />
          <div
            onClick={() => {
              dispatch(openMenu({ menuOpen: "remove" }));
            }}
            className={s.settingPopup}
          ></div>
        </>
      )}
      {!!addWater && (
        <>
          <AddWater />
          <div
            onClick={() => {
              dispatch(openMenu({ menuOpen: "remove" }));
            }}
            className={s.settingPopup}
          ></div>
        </>
      )}
      {!!editWater && (
        <>
          <EditWater />
          <div
            onClick={() => {
              dispatch(openMenu({ menuOpen: "remove" }));
            }}
            className={s.settingPopup}
          ></div>
        </>
      )}
      {!!exit && (
        <>
          <ExitPopup />
          <div
            onClick={() => {
              console.log(3132312)
              dispatch(openMenu({ menuOpen: "remove" }));
            }}
            className={s.settingPopup}
          ></div>
        </>
      )}
    </div>
  );
};

export default User;
