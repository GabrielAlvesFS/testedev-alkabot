import { GrDown, GrUp } from 'react-icons/gr';
import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import {
  PostCardContainer, UserInfo, PostInfo, PostCommentsContainer, CommentButton,
} from './style';
import { CommentCard } from '../CommentCard';

export const PostCard = ({
  id, name, username, title, body,
}) => {
  const [loading, comments] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  const [showComment, setShowComment] = useState(false);

  console.log(comments);

  return (
    <PostCardContainer>
      <UserInfo>
        <p>{name}</p>

        <p>{`@${username}`}</p>
      </UserInfo>

      <PostInfo>
        <h2>{title}</h2>

        <span>{body}</span>
      </PostInfo>

      <CommentButton onClick={() => { setShowComment(!showComment); }}>
        {
          showComment
            ? (
              <>
                Hide Comments
                <GrUp />
              </>
            )
            : (
              <>
                Show Comments
                <GrDown />
              </>
            )
        }
      </CommentButton>

      {
        !loading
          && (
          <PostCommentsContainer>
            {
                showComment && comments.map((comment) => (
                  <CommentCard key={`${comment.id}`} name={comment.name} email={comment.email} body={comment.body} />
                ))
              }
          </PostCommentsContainer>
          )

      }

    </PostCardContainer>
  );
};
