import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <>
     {posts.map((post) => {
        const { id } = post;
        return <Post key={id} post={post} />
      })}
    </>
  );
};

export default Posts;
