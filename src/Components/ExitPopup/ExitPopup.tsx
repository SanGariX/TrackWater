import { useDispatch } from "react-redux";
import { exitAccount, openMenu } from "../../Store/Slices/Main/mainSlice";
import s from "./ExitPopup.module.scss";
import { useNavigate } from "react-router-dom";
const ExitPopup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const HandleOnClick = ()=>{
    dispatch(exitAccount())
    navigate("/")
  }
  return (
    <div className={s.wrapper}>
      <div className={s.exit}>
        <h3 className={s.title}>Delete entry</h3>
        <p className={s.text}>Are you sure you want to delete the entry?</p>
        <div className={s.exit_inner}>
          <button onClick={HandleOnClick} className={s.btn_accept}>Delete</button>
          <button
            onClick={() => {
              dispatch(openMenu({
                menuOpen: "remove",
              }))
            }}
            className={s.btn_desline}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitPopup;
