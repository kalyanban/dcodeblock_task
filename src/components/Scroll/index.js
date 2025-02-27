import React from "react";
import {motion} from "framer-motion"

import "./index.css"

const Scroll = () => {
    const images = ["https://res.cloudinary.com/dwdspbybh/image/upload/v1740684560/1_780_x8gruz.png",
                    "https://res.cloudinary.com/dwdspbybh/image/upload/v1740684559/2_3256_kqaiay.png", 
                    "https://res.cloudinary.com/dwdspbybh/image/upload/v1740684559/1_781_byuwhp.png",
                    "https://res.cloudinary.com/dwdspbybh/image/upload/v1740684559/2_3255_zy9k1n.png"
                    ]

    return (
        <div className="scroll">
            <motion.div
                className="scroll-content"
                animate={{ x: ["0%", "-100%"] }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
                {[...images, ...images].map((img, index) => (
                <img key={index} src={img} alt={`img-${index}`} className="scroll-image" />
                ))}
            </motion.div>
        </div>
    );
}
export default Scroll