import { useEffect, useState } from "react";
import { openMenu } from "../../Store/Slices/Main/mainSlice";
import { RootState } from "../../Store/store";
import AddWater from "../AddWater/AddWater";
import EditWater from "../EditWater/EditWater";
import ExitPopup from "../ExitPopup/ExitPopup";
import SettingPopup from "../SettingPopup/SettingPopup";
import s from "../UserRight/UserRight.module.scss";
import { useDispatch, useSelector } from "react-redux";
const Popups = () => {
  const { setting, addWater, editWater, exit } = useSelector((state: RootState) => state.mainSlice);
  const dispatch = useDispatch();
  const [onject, setOnject] = useState({
    setting: true,
    addWater: true,
    editWater: true,
    exit: true,
  });
  useEffect(() => {
    if (setting) {
      setOnject({ ...onject, setting: false });
    } else if (addWater) {
      setOnject({ ...onject, addWater: false });
    } else if (editWater) {
      setOnject({ ...onject, editWater: false });
    } else if (exit) {
      setOnject({ ...onject, exit: false });
    }
  }, [setting, addWater, editWater, exit]);
  return (
    <>
      <div
        onTransitionEnd={() => {
          !setting ? setOnject({ ...onject, setting: true }) : "";
        }}
        className={`${s.settingWrapper} 
        ${!!setting ? s.open : ""} ${onject.setting && s.none}`}
      >
        <SettingPopup />
        <div
          onClick={() => {
            dispatch(openMenu({ menuOpen: "remove" }));
          }}
          className={s.settingPopup}
        ></div>
      </div>
      <div
        onTransitionEnd={() => {
          !addWater ? setOnject({ ...onject, addWater: true }) : "";
        }}
        className={`${s.addWaterWrapper} 
        ${!!addWater ? s.open : ""} ${onject.addWater && s.none}`}
      >
        <AddWater />
        <div
          onClick={() => {
            dispatch(openMenu({ menuOpen: "remove" }));
          }}
          className={s.settingPopup}
        ></div>
      </div>
      <div
        onTransitionEnd={() => {
          !editWater ? setOnject({ ...onject, editWater: true }) : "";
        }}
        className={`${s.editWaterWrapper} 
        ${!!editWater ? s.open : ""} ${onject.editWater && s.none}`}
      >
        <EditWater />
        <div
          onClick={() => {
            dispatch(openMenu({ menuOpen: "remove" }));
          }}
          className={s.settingPopup}
        ></div>
      </div>
       <div
        onTransitionEnd={() => {
          !exit ? setOnject({ ...onject, exit: true }) : "";
        }}
        className={`${s.exitWrapper} 
        ${!!exit ? s.open : ""} ${onject.exit && s.none}`}
      >
        <ExitPopup />
        <div
          onClick={() => {
            dispatch(openMenu({ menuOpen: "remove" }));
          }}
          className={s.settingPopup}
        ></div>
      </div> 
    </>
  );
};

export default Popups;
