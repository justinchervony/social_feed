import React from "react";
import './App.css'


function App() {
  return (
    <div>
      <div className="header">
        <h3>Social<span className='text-muted'>Feed</span></h3>
      </div>
      <div className="userInputBox">
        <div className="nameInput">
          NameInputBox
        </div>
        <div className="postInput">
          PostInputBox
        </div>
        <div className="createButton">
          Create
        </div>
      </div>
      <div className="feed">
        UserPosts
      </div>
    </div>
  );
}

export default App;
