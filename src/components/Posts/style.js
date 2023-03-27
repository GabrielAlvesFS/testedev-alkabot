import styled from 'styled-components';

export const PostsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin-top: 30px;
`;

export const PaginationContiner = styled.section`
  display: flex;
  align-items: center;

  p {
    font-size: 1.325rem;
  }

  button {
    width: 80px;
    height: 60px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .prevButton, .nextButton {
    font-size: 2.5rem;
    color: var(--gradient-light);
  }

  button:disabled {
    cursor: default;
  }

  button:disabled .prevButton, button:disabled .nextButton {
    color: var(--gray);
  }
`;
