import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from '../../images/default-avatar.jpg';
import s from './userMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName)
  const avatar = defaultAvatar;

  return (
    <div className={s.container}>
      <img src={avatar} alt='default avatar' width='32' />
      <span >Welcome, {name}</span>
      <button type='button' className={s.btn} onClick={() => dispatch(authOperations.logOut())}>Log out</button>
    </div>
  )
}

export default UserMenu;