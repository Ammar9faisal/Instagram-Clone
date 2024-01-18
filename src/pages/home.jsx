import React, {useEffect, useState} from "react";
import './home.css'

const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=10&nat=us,ca")
        .then(res => res.json())
        .then(data => setPosts(data.results))
    },[])

    return (
        <div>{
            posts.map(post => (
                <div className="post">
                    <img src={post.picture.thumbnail} className="pfp"></img>
                    <h2 className="Name">{post.name.first} {post.name.last}</h2>
                </div>
            ))
            }
        </div>
    )
}
export default Home