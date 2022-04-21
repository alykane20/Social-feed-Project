import React, { useState } from 'react';
import './CreatePost.css'



const CreatePost = (props) => {

const [name, setName] = useState('');
const [post, setPost] = useState('');

function handleSubmit(event) {
    event.preventDefault();
    let newPost = {
        name: name,
        post: post
    };
    props.createNewPost(newPost)
}

    return (  
        <form onSubmit={handleSubmit} className="form-group">
            <div>
                <label>Name</label>
                <input type="text" className='name-box' value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div>
                <label>Post</label>
                <input type="text" className='post-box' value={post} onChange={(event) => setPost(event.target.value)}/>
            </div>
            <button type='submit' className='button'>Create</button>
        </form>
    );
}

export default CreatePost;