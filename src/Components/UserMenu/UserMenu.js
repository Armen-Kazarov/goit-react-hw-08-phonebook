import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from '../../images/default-avatar.jpg';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName)
  const avatar = defaultAvatar;

  return (
    <div className='container'>
      <img src={avatar} alt='default avatar' width='32' className={s.avatar}/>
      <span className={s.name}>Welcome, {name}</span>
      <button type='button' onClick={() => dispatch(authOperations.logOut())}>Log out</button>
    </div>
  )
}

export default UserMenu;