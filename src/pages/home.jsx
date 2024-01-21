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

    let image = otherData; //allows second array mapping

    return (
        <div>{
            posts.map((post ,index) => ( //used index to display image related to post
                <div className="post">
                    <img src={post.picture.thumbnail} className="pfp"></img>
                    <h2 className="Name">{post.name.first} {post.name.last}</h2>
                    <img className="image" src={image[index].urls.regular}></img>
                    <h4 className="bottom-name">{post.name.first} {post.name.last} <p className="description">{image[index].alt_description}</p></h4>
                    <h4 className="comments">View All {Math.ceil(Math.random()*10)} comments</h4>
                </div>
            ))
            }
        </div>
    )
}
export default Home