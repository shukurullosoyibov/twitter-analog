import PostListItem from "../PostListItem"
import './PostList.css'
const PostList = ({posts, onDelete, onToggelImportant, onToggelLiked}) =>{
   
    const elements = posts.map( (item) =>{
        const {id, ...itemProps} = item;
        return(
           
            <li key={item.id} className="list-group-item">
                <PostListItem 
                    {...itemProps} 
                    onDelete = {() =>  onDelete(id)}
                    onToggelImportant = { () => onToggelImportant(id)}
                    onToggelLiked = { () => onToggelLiked(id)}
                />
            </li>
            
        )
    })
    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
export default PostList