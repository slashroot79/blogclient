

import { Link } from "react-router-dom"

const NavBar = ()=>{
    return (
        <div className="navbar">
            <p className="navbar-title">TECH NEWS BLOG</p>
            <div className="navbar-links">
                <Link to="/" className="navbar-links__link">BLOGS</Link>
                <Link to="/create" className="navbar-links__link">CREATE</Link>
            </div>
        </div>
    )
}

export default NavBar