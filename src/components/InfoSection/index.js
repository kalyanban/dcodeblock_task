import React from "react";

import "./index.css"

const InfoSection = () => {
    return (
        <div className="info-section">
            <div className="details-container">
                <img src="/assets/images/light.png" alt="light" className="light" />
                <div className="info-stats-container">
                    <h4><span>150+</span><br/>Universities Participating</h4>
                    <div className="info-stats-container-one">
                        <p><span>72+</span><br/>Judges</p>
                        <p><span>21</span><br/>Hackathons</p>
                        <p><span>36+</span><br/>Great Speakers</p>
                    </div>
                </div>
            </div>
            <img src="/assets/images/youtube-thumbnail.png" alt="youtube" className="thumbnail" />
        </div>
    )
}
export default InfoSection