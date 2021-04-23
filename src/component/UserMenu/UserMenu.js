import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from '../Logout';
import styles from './UserMenu.module.css';
import { getCurrenUser } from '../../redux/user/operations';
import defaultAvatar from '../avatar2.jpg';

const UserMenu = () => {
  const name = useSelector(state => state.user.user.name);
  
  const dispatch = useDispatch();
  dispatch(getCurrenUser());

  return (
    <div className={styles.menu}>
      <img src={defaultAvatar} alt="" width="32" style={styles.avatar} />
      <span className={styles.name}>Welcome, {name}</span>
      <LogoutButton />
    </div>
  );
};

export default UserMenu;
