import user from "../../data/user.json";
import "./Profile.css";
import React, { useState } from "react";

export const Profile = () => {
  const [userData, setArticleState] = React.useState(user);
  return (
    <div className="profile">
      {userData &&
        userData.map(({ avatar, username, tag, location, stats }) => (
          <>
            <div className="description">
              <img src={avatar} alt="User avatar" className="avatar" />
              <p className="name">{username}</p>
              <p className="tag">@{tag}</p>
              <p className="location">{location}</p>
            </div>

            <ul className="stats">
              <li>
                <span className="label">Followers</span>
                <span className="quantity">{stats.followers}</span>
              </li>
              <li>
                <span className="label">Views</span>
                <span className="quantity">{stats.views}</span>
              </li>
              <li>
                <span className="label">Likes</span>
                <span className="quantity">{stats.likes}</span>
              </li>
            </ul>
          </>
        ))}
    </div>
  );
};
