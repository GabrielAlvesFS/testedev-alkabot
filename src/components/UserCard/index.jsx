import {
  UserCardContainer, UserImageContainer, UserInfoContainer, UsernameContainer, Informations,
} from './style';
import randomImage from '../../assets/images/random-image.jpg';

export const UserCard = (user) => {
  const {
    name, username, email, phone, website, company, address,
  } = user.user;

  return (
    <UserCardContainer>
      <UsernameContainer>
        <UserImageContainer>
          <img src={randomImage} alt="User profile" />
        </UserImageContainer>

        <span>{`@${username}`}</span>
      </UsernameContainer>

      <UserInfoContainer>
        <p>{name}</p>

        <div className="info-cards">
          <Informations>
            <h4>Contact-me:</h4>
            <span>{email}</span>
            <span>{phone}</span>
            <a href="#">{website}</a>
          </Informations>

          <Informations>
            <h4>My company:</h4>
            <span>{company.name}</span>
            <span>{company.catchPhrase}</span>
            <span>{company.bs}</span>
          </Informations>

          <Informations>
            <h4>My address:</h4>
            <span>{address.street}</span>
            <span>{address.suite}</span>
            <span>{address.city}</span>
            <span>{address.zipcode}</span>
          </Informations>
        </div>
      </UserInfoContainer>

    </UserCardContainer>
  );
};
