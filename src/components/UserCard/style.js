import styled from 'styled-components';

export const UserCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  width: 100%;
  max-width: 500px;

  background-color: var(--light);
  padding: 24px;
  box-shadow: 0px 0px 10px rgba(19, 19, 31, 0.05);
  border-radius: 5px;
`;

export const UsernameContainer = styled.div`
  width: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  span {
    font-family: 'Lexend Deca', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: var(--gray);
  }
`;

export const UserImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid var(--purple);

  img {
    width: 90%;
    height: 90%;
    border-radius: 50%;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  .info-cards {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  p {
    font-size: 1.325rem;
    font-weight: 600;
    color: var(--purple);
    margin-bottom: 30px;
  }
`;

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  h4 {
    font-size: 1rem;
    font-weight: 500;
    color: var(--dark);
    margin-bottom: 10px;
  }

  span {
    font-size: 1rem;
    font-weight: 400;
    color: var(--gray);
  }

  a {
    text-decoration: none;
  }
`;
