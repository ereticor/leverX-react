import PostForm from "../../components/PostForm";
import React from "react";

import "./postPage.scss";

const PostPage = () => {
  return (
    <>
      <main className="main">
        <div className="main__create__wrapper wrapper">
          <PostForm />
        </div>
      </main>
    </>
  );
};

export default PostPage;
