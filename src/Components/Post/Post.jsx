import React, { useState } from 'react';
import './PostButton.css'


const PostFormat = (props) => {
    
    const [likeButtonClass, setLikeButtonClass] = useState ("inactive");
    const [dislikeButtonClass, setDislikeButtonClass] = useState ("inactive");
    
    function handleLikeClick() {
        if(likeButtonClass === "inactive"){
            setLikeButtonClass("likeActive");
        }
        else {
            setLikeButtonClass("inactive");
        }}
    function handleDislikeClick() {
        if(dislikeButtonClass === "inactive"){
            setDislikeButtonClass("dislikeActive");
            }
        else{
            setDislikeButtonClass("inactive");
            }}  
            
    return (
        
           /* FROM THE CREATEPOST FILE BRING IN NAME AND POST, SO IT CAN ALL BE IN ONE FORM */
            <div>
                <button className={likeButtonClass} onClick={handleLikeClick}>Like</button>
                <button className={dislikeButtonClass} onClick={handleDislikeClick}>Dislike</button>
            </div>
        
      );

}
export default PostFormat;