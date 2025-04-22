import s from "./UserLeft.module.scss";

import Title from "../Title/Title";
import Progress_bar from "../Progress_bar/Progress_bar";
import Water_btn from "../Water_btn/Water_btn";
import DailyNorma from "../DailyNorma/DailyNorma";
import { useNavigate } from "react-router-dom";
const UserLeft = () => {
  const navigate = useNavigate();
  const handleOnClick = (type: string): void => {
    navigate(type);
  };
  return (
    <div className={`${s.leftbox} box`}>
      <Title handleOnClick={handleOnClick} />
      <div className={s.wrapper}>
        <DailyNorma />
        <Progress_bar />
        <Water_btn />
      </div>
    </div>
  );
};

export default UserLeft;
