import React from "react";

import "./index.css"

const Home = () => {
    return (
        <div className="home-section">
            <video autoPlay loop muted playsInline className="video-bg">
                <source src="/assets/videos/bg-video.mp4" type="video/mp4" />
                Your Browser does not support the video tag.
            </video>
            <div className="home-content">
                <div className="home-header">
                    <div className="home-logo">
                        <img src="/assets/images/home-header.png" alt="home-logo"/>
                        <p className="home-logo-text">HACKINDIA</p>
                    </div>
                    <ul className="home-header-tabs-container">
                        <li>
                            <button class="svg-button">
                                <svg viewBox="0 0 190 60" xmlns="http://www.w3.org/2000/svg">
                                    <polygon class="svg-border" points="5,10 20,10 20,60 5,60 5,40 10,40 10,30 5,20"/>
                                    <polygon class="svg-border-one" points="30,10 80,10 100,20 180,20 180,50 170,60 30,60"/>
                                    <text x="50%" y="55%"  text-anchor="middle" alignment-baseline="middle">Overview</text>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button class="svg-button">
                                <svg viewBox="0 0 190 60" xmlns="http://www.w3.org/2000/svg">
                                    <polygon class="svg-border" points="5,10 20,10 20,60 5,60 5,40 10,40 10,30 5,20"/>
                                    <polygon class="svg-border-one" points="30,10 80,10 100,20 180,20 180,50 170,60 30,60"/>
                                    <text x="50%" y="55%"  text-anchor="middle" alignment-baseline="middle">Create Team</text>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button class="svg-button">
                                <svg viewBox="0 0 190 60" xmlns="http://www.w3.org/2000/svg">
                                    <polygon class="svg-border" points="5,10 20,10 20,60 5,60 5,40 10,40 10,30 5,20"/>
                                    <polygon class="svg-border-one" points="30,10 80,10 100,20 180,20 180,50 170,60 30,60"/>
                                    <text x="50%" y="55%"  text-anchor="middle" alignment-baseline="middle">Prizes & Sponsers</text>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button class="svg-button">
                                <svg viewBox="0 0 190 60" xmlns="http://www.w3.org/2000/svg">
                                    <polygon class="svg-border" points="5,10 20,10 20,60 5,60 5,40 10,40 10,30 5,20"/>
                                    <polygon class="svg-border-one" points="30,10 80,10 100,20 180,20 180,50 170,60 30,60"/>
                                    <text x="50%" y="55%"  text-anchor="middle" alignment-baseline="middle">FAQ's</text>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button class="svg-button">
                                <svg viewBox="0 0 190 60" xmlns="http://www.w3.org/2000/svg">
                                    <polygon class="svg-border" points="5,10 20,10 20,60 5,60 5,40 10,40 10,30 5,20"/>
                                    <polygon class="svg-border-one" points="30,10 80,10 100,20 180,20 180,50 170,60 30,60"/>
                                    <text x="50%" y="55%"  text-anchor="middle" alignment-baseline="middle">Judging & Rules</text>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button class="svg-button">
                                <svg viewBox="0 0 190 60" xmlns="http://www.w3.org/2000/svg">
                                    <polygon class="svg-border" points="5,10 20,10 20,60 5,60 5,40 10,40 10,30 5,20"/>
                                    <polygon class="svg-border-one" points="30,10 80,10 100,20 180,20 180,50 170,60 30,60"/>
                                    <text x="50%" y="55%"  text-anchor="middle" alignment-baseline="middle">Resources</text>
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
                <img src="/assets/images/home-logo-one.png" alt="home-logo-one" className="home-logo-one" />
                <div className="home-details-container">
                    <h1 className="main-head"><span>Ha</span>ckIndia2025</h1>
                    <h3>India's biggest Web3 & AI Hackathon</h3>
                    <p className="dates">February 28 - September 28</p>
                    <div className="stats">
                        <p><span>$150+ </span>Price Pool</p>
                        <p>|</p>
                        <p><span>150+ </span>Price Pool</p>
                        <p>|</p>
                        <p><span>25,000+ </span>Price Pool</p>
                    </div>
                    <button class="reg-button">
                        <svg viewBox="0 0 190 60" xmlns="http://www.w3.org/2000/svg">
                            <polygon class="svg-border" points="5,10 20,10 20,60 5,60 5,40 10,40 10,30 5,20"/>
                            <polygon class="svg-border-one" points="30,10 80,10 100,20 180,20 180,50 170,60 30,60"/>
                            <text x="50%" y="55%"  text-anchor="middle" alignment-baseline="middle">Register</text>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Home