import PostFormat from "../Post/Post";
import './DisplayPosts.css'

const DisplayPosts = (props) => {
    return (
    <table>
        <tbody >
          {props.parentPosts.map((post, index) =>{
            if(post.name == ' ' && post.post == ' '){
              return ' '
            }
            // if the value of post.name == " "
                // insdide of this try a blank return so return; or a break; and see what that does and repot back
              else{
          return (
            <div key={index} className='display'>
              <div className='name'>{post.name}</div>
              <div>{post.post}</div>
              <div className='like-dislike'>
                <PostFormat />
              </div>
            </div>
          )};
        })}
        </tbody>
    </table>


    )
}

export default DisplayPosts;