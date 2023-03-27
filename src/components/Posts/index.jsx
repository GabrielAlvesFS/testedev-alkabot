import { useEffect, useState } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { useFetch } from '../../hooks/useFetch';
import { PostCard } from '../PostCard';
import { PostsContainer, PaginationContiner } from './style';

export const Posts = () => {
  const [loading, posts] = useFetch('https://jsonplaceholder.typicode.com/posts');
  const [postsWithUserInfo, setPostsWithUserInfo] = useState([]);

  useEffect(() => {
    (async () => {
      if (loading === false) {
        const userIds = posts.map((post) => post.userId);
        const uniqueUserIds = [...new Set(userIds)];

        // Busca as informações de todos os usuários que fizeram posts
        const usersRequests = uniqueUserIds.map((userId) => fetch(`https://jsonplaceholder.typicode.com/users/${userId}`));
        const usersResponses = await Promise.all(usersRequests);
        const users = await Promise.all(usersResponses.map((response) => response.json()));

        // Adiciona as informações de usuário aos posts correspondentes
        const postsWithUsers = posts.map((post) => {
          const user = users.find((currUser) => currUser.id === post.userId);
          return { ...post, name: user.name, username: user.username };
        });

        setPostsWithUserInfo(postsWithUsers);
      }
    })();
  }, [loading]);

  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(postsWithUserInfo.length / 10);
  const startIndex = currentPage * 10;
  const endIndex = startIndex + 10;
  const currentPosts = postsWithUserInfo.slice(startIndex, endIndex);

  return (
    <PostsContainer>
      {
        currentPosts.map((post) => (
          <PostCard key={`${post.id}`} id={post.id} name={post.name} username={post.username} title={post.title} body={post.body} />
        ))
      }
      <PaginationContiner>
        <button type="button" disabled={currentPage === 0} onClick={() => setCurrentPage(currentPage - 1)}>
          <MdNavigateBefore className="prevButton" />
        </button>
        <p>{currentPage + 1}</p>
        <button type="button" disabled={currentPage === pages - 1} onClick={() => setCurrentPage(currentPage + 1)}>
          <MdNavigateNext className="nextButton" />
        </button>
      </PaginationContiner>
    </PostsContainer>
  );
};
