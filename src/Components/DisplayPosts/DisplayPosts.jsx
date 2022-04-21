
const DisplayPosts = (props) => {
    return (
    <table>
        <tbody>
          {props.parentPosts.map((post, index) =>{
          return (
            <tr key={index}>
              <td>{post.name}</td>
              <td>{post.post}</td>
            </tr>
          );
        })}
        </tbody>
    </table>


    )
}

export default DisplayPosts;