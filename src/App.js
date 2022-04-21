import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import NavBar from './Components/NavBar/NavBar';
import './App.css';


function App() {

  const [posts, setPosts] = useState([{name: '', post: ''}])

  function addNewPost(post){
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }


  return (
    <div className='main-background'>
     <div> 
        <NavBar />
     </div>  
        <div className='border-box'>
         <CreatePost createNewPost={addNewPost} />
        </div>
        <div className='border-box'>
          <DisplayPosts parentPosts={posts}/>
        </div>
    </div>
  );
}

export default App;
