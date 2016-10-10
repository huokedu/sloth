import React from 'react';

const DirectMessageFormMember = ({ member, removeMember }) => {
  function handleClick(e) {
    e.preventDefault();
    removeMember(member);
  }

  return(
    <li>
      <button type="button" onClick={handleClick}>
        {member.username}
      </button>
    </li>
  );
};

export default DirectMessageFormMember;
