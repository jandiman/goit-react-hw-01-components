export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    {friends.map (friend =>(
        <li className="item">
      <span className="status"></span>
      <img className="avatar" src="" alt="User avatar" width="48" />
      <p className="name"></p>
    </li>
    ))}
    
  );
};
