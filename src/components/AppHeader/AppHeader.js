import './AppHeader.css'
const AppHeader = ( {allPost, liked}) =>{
    return(
        <div className="app-header d-flex">
           <h1>soyibov</h1>
           <h2> {allPost} post, like {liked} </h2>
        </div>
    )
}
export default AppHeader