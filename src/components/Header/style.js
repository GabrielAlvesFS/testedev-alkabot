import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  position: sticky;
  top: 0;

  width: 100%;
  height: 180px;
  background: linear-gradient(90deg, var(--gradient-dark) 0%, var(--gradient-light) 100%);
`;

export const HeaderTitle = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: center;

  h1 {
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--light);
  }
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 100px;
  max-width: 1440px;
  width: 100%;
`;

export const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;

  text-decoration: none;
  color: var(--light-200);
  cursor: pointer;
`;
