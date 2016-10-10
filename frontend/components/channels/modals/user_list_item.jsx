import React from 'react';

const UserListItem = ({ user, addMember }) => {
  return(
    <li className="user-list-item">
      <button onClick={addMember.bind(null, user)}>
        {user.username}
      </button>
    </li>
  );
};

export default UserListItem;
