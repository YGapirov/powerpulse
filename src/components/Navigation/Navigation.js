import { useAuth } from '../../hooks/useAuth';
import { LinkNav, Svg, HeadContainer, Nav } from './Navigation.styled';

import sprite from '../../images/sprite.svg';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <LinkNav to="/">
        <Svg>
          <use href={`${sprite}#icon-logo`}></use>
        </Svg>
      </LinkNav>
      {/* {isLoggedIn && <LinkNav to="/contacts">Profile Settings</LinkNav>} */}
    </Nav>
  );
};
