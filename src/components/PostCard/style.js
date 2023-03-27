import styled from 'styled-components';

export const PostCardContainer = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;

  background-color: var(--light);
  padding: 24px;
  box-shadow: 0px 0px 10px rgba(19, 19, 31, 0.05);
  border-radius: 5px;
`;

export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  p {
    font-family: 'Lexend Deca', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: var(--gray);
  }
`;

export const PostInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    font-family: 'Lexend Deca', sans-serif;
    font-size: 1.625rem;
    font-weight: 400;
    color: var(--dark-gray);
  }

  span {
    font-family: 'Lexend Deca', sans-serif;
    font-size: 1.125rem;
    font-weight: 400;
    color: var(--gray);
  }
`;

export const CommentButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 1.1rem;
  font-weight: 400;
  color: var(--purple);
  border: none;
  background-color: transparent;
  cursor: pointer;

`;

export const PostCommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  transition: transform 0.4s ease-out;

  width: 95%;
  height: fit-content;
`;
