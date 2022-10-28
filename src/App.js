import React, { useState } from "react";
import './App.css'


function App() {
  const [posts, setPosts] = useState([])

  function addNewPost(post){
    let tempPosts = [...posts, post];

    setPosts(tempPosts);
  }


  return (
    <div>
      <div className="headBanner">
        <h3>Social<span className='text-muted'>Feed</span></h3>
      </div>
      <div className="bodyBackground">
        <div className="container-fluid">
          <div className="border-box">
            <AddPostForm addNewPostProperty={addNewPost} />
          </div>
          <div className="createButton">
            Create
          </div>
        </div>
        <div className="feed">
          UserPosts
        </div>
      </div>
    </div>
  );
}

export default App;
