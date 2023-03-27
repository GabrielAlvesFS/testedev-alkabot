import { CommentCardContainer } from './style';

export const CommentCard = ({
  name, email, body,
}) => (
  <CommentCardContainer>
    <span>{email}</span>
    <h3>{name}</h3>
    <p>{body}</p>
  </CommentCardContainer>
);
