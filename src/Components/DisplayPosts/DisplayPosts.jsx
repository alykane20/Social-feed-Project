import PostFormat from "../Post/Post";
import './DisplayPosts.css'
import Datetime from "../AddDate/AddDate";


const DisplayPosts = (props) => {
    return (
    <table>
        <tbody >
          {props.parentPosts.map((post, index) =>{
            if(post.name === ' ' && post.post === ' '){
              return ' '
            }
            
              else{
          return (
            <div key={index} className='display'>
              <div className='name'>{post.name}</div>
              <div>{post.post}</div>
              <div className='like-dislike'>
                <PostFormat />
              </div>
                <Datetime />
              </div>
          )};
        })}
        </tbody>
    </table>


    )
}

export default DisplayPosts;