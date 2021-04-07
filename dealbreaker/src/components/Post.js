import React from 'react'
import './Navbar.css'
function Post(props) {
    return (
        <div className="posts" >
           {props.category}
        </div>
    )
}

export default Post
