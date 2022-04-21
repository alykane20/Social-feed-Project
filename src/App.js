import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';


function App() {

  const [posts, setPosts] = useState([{name: 'Test', post: 'Does this work?'}])

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
        <div>
          <DisplayPosts parentPosts={posts}/>
        </div>
  
      
    </div>
  );
}

export default App;
