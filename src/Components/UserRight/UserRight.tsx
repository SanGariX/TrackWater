import UserAccount from '../UserAccount/UserAccount';
import s from './UserRight.module.scss'
const UserRight = () => {
    return (
      <div className={`${s.rightbox} box`}>
        <UserAccount/>
      </div>
    );
}

export default UserRight;