import React from "react"
const Header=()=>{
    return(
      <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/a586d9116324325.605f8b343e11c.jpg" alt="logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
      </div>
    )
}
export default Header