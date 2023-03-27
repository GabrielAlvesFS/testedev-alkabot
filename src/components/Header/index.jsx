import {
  HeaderContainer, HeaderTitle, HeaderNavigation, ButtonLink,
} from './style';

export const Header = () => (
  <HeaderContainer>
    <HeaderTitle>
      <h1>Alkabot Blog</h1>
    </HeaderTitle>

    <HeaderNavigation>
      <ButtonLink to="/posts">
        POSTS
      </ButtonLink>

      <ButtonLink to="/users">
        USERS
      </ButtonLink>
    </HeaderNavigation>
  </HeaderContainer>
);
