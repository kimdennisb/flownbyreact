const Post = ({ post }) => {
  const { image, text, publishDate } = post;
  return (
    <>
      <div>
        <img src={image} alt={text} />
        <h3>{text}</h3>
        <div>{publishDate}</div>
      </div>
    </>
  );
};

export default Post;