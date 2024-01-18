import React from "react"
import "./header.css"

const Header = () => {
    return (
        <div className="header">
                <img className="logo" src="/instagram.svg"></img>
                <h1 className="name">Instagram</h1>
                <input className="search" type="text" placeholder="Search..."></input>
        </div>
    )
}
export default Header