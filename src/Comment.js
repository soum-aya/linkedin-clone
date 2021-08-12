import React from "react";

import { Avatar } from "@material-ui/core";
import "./Comment.css";

const Comment = ({ photoUrl, postId, comment, name, description }) => {
  return (
    <div className="comment">
      <Avatar src={photoUrl}>{name[0]}</Avatar>
      <div className="comment_info">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="comment_body">
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
