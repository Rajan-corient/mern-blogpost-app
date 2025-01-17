import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <li className={styles.post}>
      <p className={styles.author}>{props.author}</p>
      <p className={styles.content}>{props.body}</p>
    </li>
  );
};

export default Post;
