import "../components/css/board.css";
import Nav from "../routes/nav";
import Board from "./board";

function Boardmain() {
  const [posts, setPosts] = useState([]);

  const addPost = (title, content) => {
    const newPost = { title, content };
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <div>
      <Nav />
      <Board posts={posts} />
    </div>
  );
}

export default Boardmain;
