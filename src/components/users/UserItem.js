import React from "react";
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  //const { login, avatar_url, html_url } = props.user;
  return (
    <div className="card">
      <img src={avatar_url} alt="" className="circle"></img>
      <h3>{login}</h3>
      <div>
        <a href={html_url}>click me</a>
      </div>
    </div>
  );
};

UserItem.prototypes={
    user:PropTypes.object.isRequired,
}

export default UserItem;
