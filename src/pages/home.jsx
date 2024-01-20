import React, {useEffect, useState} from "react";
import './home.css'

const Home = () => {
    const [posts, setPosts] = useState([])
    const [otherData, setOtherData] = useState([])

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=10&nat=us,ca")
        .then(res => res.json())
        .then(data => setPosts(data.results))

        fetch("https://api.unsplash.com/photos/?client_id=dJoPg65VDAhDA292NJM24VlW6o0WyfXGbmAIPpjSvyA")
        .then(res => res.json())
        .then(data => setOtherData(data));
    },[])

    return (
        <div>{
            posts.map(post => (
                otherData.map(image =>( 
                <div className="post">
                    <img src={post.picture.thumbnail} className="pfp"></img>
                    <h2 className="Name">{post.name.first} {post.name.last}</h2>
                    <img src={image.urls.regular}></img>
                </div>
            ))))
            }
        </div>
    )
}
export default Home