import Post from "./Post";
import PropTypes from "prop-types";

const Posts = ({ posts }, store) => {
  console.log(posts, store);
  return (
    <>
      {posts.map((post) => {
        const { id } = post;
        return <Post key={id} post={post} />;
      })}
    </>
  );
};

Posts.contextTypes = {
  store: PropTypes.object,
};

export default Posts;
