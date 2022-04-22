import React, { useState } from 'react';
import './PostButton.css'


const PostFormat = (props) => {
    
    const [likeButtonClass, setLikeButtonClass] = useState ("inactive");
    const [dislikeButtonClass, setDislikeButtonClass] = useState ("inactive");
    
    function handleLikeClick() {
        if(likeButtonClass === "inactive"){
            setLikeButtonClass("likeActive"); setDislikeButtonClass("inactive");
        }
        else {
            setLikeButtonClass("inactive"); setDislikeButtonClass("inactive")
        }}
    function handleDislikeClick() {
        if(dislikeButtonClass === "inactive"){
            setDislikeButtonClass("dislikeActive"); setLikeButtonClass("inactive")
            }
        else{
            setDislikeButtonClass("inactive");
            }}  
            
    return (
        
            <div>
                <button className={likeButtonClass} onClick={handleLikeClick}>Like</button>
                <button className={dislikeButtonClass} onClick={handleDislikeClick}>Dislike</button>
            </div>
        
      );

}
export default PostFormat;