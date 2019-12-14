import React from "react";
import "./post.component.styles.css";

interface IPostProps {
  post: any;
}

const Post: React.FC<IPostProps> = ({ post }) => {
  const { postId, title, date } = post;

  return (
    <div>
      {postId} - {title} - {date}
    </div>
  );
};

export default Post;
