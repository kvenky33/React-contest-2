import React, { useEffect, useState } from "react";
import "./App.css";
import Searchfiled from "./components/Searchfiled";
import Post from "./components/Post";

function App() {
  let [postdetails, setDetails] = useState([]);
  let [likes, setLikes] = useState(0);
  let [searchpost, setSearchpost] = useState("");
  let [visible, setvisible] = useState(12);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setDetails(data);
      });
  }, []);

  const search = (event) => {
    setSearchpost(event.target.value);
    let updatedPost = [...postdetails];
    let searchedPost = updatedPost.filter((post) => {
      return post.title.toLowerCase().indexOf(searchpost.toLowerCase()) !== -1;
    });
    setDetails(searchedPost);
  };

  // const addlike = () => {
  //   setLikes(likes++);
  // };
  const moreposts = () => {
    setvisible(visible + 4);
  };
  return (
    <div className="App">
      <Searchfiled handleSearch={search} />

      <div className="postinfo">
        {postdetails.slice(0, visible).map((post) => {
          return (
            <div key={post.id}>
              <Post
                img={"https://picsum.photos/200?random=${post.id}"}
                title={post.title}
                userId={post.userId}
                like={likes}
                handlelike={() => setLikes(likes++)}
              />
            </div>
          );
        })}
      </div>
      <button className="loadmore" onClick={moreposts}>
        Load More Posts
      </button>
    </div>
  );
}

export default App;
