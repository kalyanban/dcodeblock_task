import React from "react";

import "./index.css"

import { FaCopyright } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="footer">
            <img src="/assets/images/footer-frame.png" alt="frame" className="footer-frame" />
            <div className="main-footer">
                <p className="copyright">Copyright <span><FaCopyright/></span> 2024 DcodeBlock</p>
                <div className="footer-nav">
                    <p className="nav-f">Help Center</p>
                    <p>|</p>
                    <p className="nav-f">Terms & Conditions</p>
                    <p>|</p>
                    <p className="nav-f">Privacy Polocy</p>
                </div>
            </div>
        </div>
    )
}
export default Footer