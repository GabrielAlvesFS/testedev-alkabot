import styled from 'styled-components';

export const CommentCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--light-200);
  padding: 24px;
  box-shadow: 0px 0px 10px rgba(19, 19, 31, 0.05);
  border-radius: 5px;

  h3 {
    font-family: 'Lexend Deca', sans-serif;
    font-size: 1.125rem;
    font-weight: 400;
    color: var(--dark-gray);
    margin-top: 10px;
  }

  p {
    font-family: 'Lexend Deca', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: var(--gray);
    margin-top: 5px;
  }

  span {
    font-family: 'Lexend Deca', sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--gray);
  }
`;
