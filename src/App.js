import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost'

function App() {

  const [posts, setPosts] = useState()

  function addNewPost(post){
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }


  return (
    <div>
     <h3>SocialFeed</h3>
        <div>
        <CreatePost createNewPost={addNewPost} />
        </div>
  
      
    </div>
  );
}

export default App;
