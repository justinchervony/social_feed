import React, { useState } from "react";
import AddPostForm from "./components/AddPostForm";
import DisplayPosts from "./components/DisplayPosts";
import './App.css'


function App() {
  const [posts, setPosts] = useState([])

  function addNewPost(post){
    let tempPosts = [post, ...posts, ];

    setPosts(tempPosts);
  }


  return (
    <div className="page">
      <div className="headBanner">
        <h3>Social<span className='text-muted'>Feed</span></h3>
      </div>
      <div className="bodyClass">
        <div className="postBox">
          <AddPostForm addNewPostProperty={addNewPost} />
        </div>
      </div>
      <div className="bodyClass">
        <div>
          <DisplayPosts parentPosts={posts} />
        </div>
      </div>
    </div>
  );
}

export default App;
