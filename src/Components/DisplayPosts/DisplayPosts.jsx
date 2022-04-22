import PostFormat from "../Post/Post";
import './DisplayPosts.css'

const DisplayPosts = (props) => {
    return (
    <table>
        <tbody >
          {props.parentPosts.map((post, index) =>{
          return (
            <div key={index} className='display'>
              <div className='name'>{post.name}</div>
              <div>{post.post}</div>
              <PostFormat />
            </div>
          );
        })}
        </tbody>
    </table>


    )
}

export default DisplayPosts;