// import { AuthNav } from '../../components/AuthNav/AuthNav';
import { Navigation } from '../../components/Navigation/Navigation';
import { UserMenu } from '../../components/UserMenu/UserMenu';
import { useAuth } from '../../hooks/useAuth';
import { Header } from 'components/AppBar/AppBar.styled';
import { logOut } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : null}
    </Header>
  );
};
