import { FriendListItem } from "components/FriendListItem/FriendListItem";

export const FriendList = () => {
  return (
    <ul className="friend-list">
  {friends.map(({avatar, name, isOnline, id}) =>(

  ))}
  
    <FriendListItem
        key={id}
        avatar={avatar}
          name={name}
          isOnline={isOnline}
          />
  </ul>;
  );
};
