import { openMenu } from "../../Store/Slices/Main/mainSlice";
import { RootState } from "../../Store/store";
import AddWater from "../AddWater/AddWater";
import EditWater from "../EditWater/EditWater";
import ExitPopup from "../ExitPopup/ExitPopup";
import SettingPopup from "../SettingPopup/SettingPopup";
import s from "../UserRight/UserRight.module.scss";
import { useDispatch, useSelector } from "react-redux";
const Popups = () => {
  const { setting, addWater, editWater, exit } = useSelector(
    (state: RootState) => state.mainSlice
  );
  const dispatch = useDispatch();
  return (
    <>
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
              dispatch(openMenu({ menuOpen: "remove" }));
            }}
            className={s.settingPopup}
          ></div>
        </>
      )}
    </>
  );
};

export default Popups;
