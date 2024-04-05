import React, { useEffect, useState } from "react";
import Post from "./Post";
import styles from "./PostList.module.css";

const PostList = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    getBlogPost();
  }, []);

  const getBlogPost = async () => {
    const res = await fetch("http://localhost:5050/posts");
    const data = await res.json();
    setPostList(data);
    console.log("postList", data);
  };

  return (
    <ul className={styles.posts}>
      {postList.map(({ title, description }) => (
        <Post author={title} body={description} />
      ))}
    </ul>
  );
};

export default PostList;
