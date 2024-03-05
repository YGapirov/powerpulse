import { useAuth } from '../../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { UserBtn, Text, Wrapper } from './UserMenu.styled';
import sprite from '../../images/sprite.svg';
import { useNavigate } from 'react-router-dom';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logOut());

    navigate('/');
  };
  return (
    <Wrapper>
      {/* <p>сетінгс</p> */}
      {/* <p>аватарка</p> */}

      <UserBtn type="button" onClick={onLogout}>
        <span>Logout</span>
        <svg width="24" height="24">
          <use href={`${sprite}#icon-log-out`}></use>
        </svg>
      </UserBtn>
    </Wrapper>
  );
};
