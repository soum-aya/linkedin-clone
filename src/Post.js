import React, { useState, forwardRef } from "react";
import { db } from "./firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import InputOption from "./InputOption";
import { Avatar } from "@material-ui/core";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import Comment from "./Comment";
import "./Post.css";

const Post = forwardRef(({ postId, name, description, message, photoUrl }, ref) => {
  const [showComments, setShowComments] = useState(false);
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [comments, setComments] = useState([]);

  const sendComment = (e) => {
    e.preventDefault();

    db.collection("posts")
      .doc(postId)
      .collection("comments")
      .add({
        commenterName: user.displayName,
        commenterDesc: user.email,
        comment: input,
        commenterPhotoUrl: user.photoUrl || "",
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

    setInput("");
  };

  const addComment = () => {
    db.collection("posts")
      .doc(postId)
      .collection("comments")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setComments(
          snapshot.docs.map((doc) => ({
            commentId: doc.id,
            data: doc.data(),
          }))
        );
      });

    setShowComments(!showComments);
  };

  return (
    <div ref={ref} className="post">
      <div className="post_header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>

      <div className="post_buttons">
        <InputOption Icon={ThumbUpOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" onAdd={addComment} showCom={showComments} />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
      <div>
        {showComments && (
          <div className="comment_input">
            <Avatar src={photoUrl}>{user?.displayName[0]}</Avatar>
            <form>
              <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Add a comment..." />
              <button onClick={sendComment} type="submit">
                Send
              </button>
            </form>
          </div>
        )}
        {showComments && comments.map(({ commentId, data: { commenterName, comment, commenterPhotoUrl, commenterDesc } }) => <Comment key={commentId} name={commenterName} description={commenterDesc} comment={comment} photoUrl={commenterPhotoUrl} />)}
      </div>
    </div>
  );
});

export default Post;
