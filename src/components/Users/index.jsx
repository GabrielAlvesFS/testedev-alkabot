import { UsersContainer } from './style';
import { useFetch } from '../../hooks/useFetch';
import { UserCard } from '../UserCard';

export const Users = () => {
  const [loading, users] = useFetch('https://jsonplaceholder.typicode.com/users');

  return (
    <UsersContainer>
      {
        loading
          ? <div> Loading... </div>
          : users.map((user) => (
            <UserCard
              key={`${user.id}`}
              user={user}
            />
          ))
      }
    </UsersContainer>
  );
};
