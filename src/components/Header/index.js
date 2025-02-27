import React from "react";

import "./index.css"

const Header = () => {
    return (
        <div className="header-section">
            <img src="/assets/images/logo.png" alt="logo" className="logo" />
            <button class="svg-button">
                <svg viewBox="0 0 190 60" xmlns="http://www.w3.org/2000/svg">
                    <polygon class="svg-border" points="5,10 20,10 20,60 5,60 5,40 10,40 10,30 5,20"/>
                    <polygon class="svg-border-one" points="30,10 80,10 100,20 180,20 180,50 170,60 30,60"/>
                    <text x="50%" y="55%"  text-anchor="middle" alignment-baseline="middle">Sign In</text>
                </svg>
            </button>
        </div>
    )
}
export default Header