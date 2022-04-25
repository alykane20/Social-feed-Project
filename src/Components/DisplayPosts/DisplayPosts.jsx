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
                <table>
                  <tr>
                    <td colspan="2"> <PostFormat /> </td>
                    <td colspan="2"> <Datetime /></td>
                </tr>    
                </table>
              </div>
          )};
        })}
        </tbody>
    </table>


    )
}

export default DisplayPosts;