import React from "react";
import PropTypes from "prop-types";

export default function BlurBlob({position , size}){
    // Destructuring position and size.
    // Will give the value of position and size in Runtime.
    const { top, left } = position
    const { width, height } = size 

    return (
        <div
        className="absolute"
        style={{
            top: top,
            left: left,
            width: width,
            height: height,
            transform: 'translate(-50%, -50%)',
        }}
        >
        <div
            className="w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob"
        ></div>
        </div>
    );
}
// Giving the value of position ans size in Runtime , checking that the value is valid (stirng) and storing it. 
BlurBlob.propTypes = {
    position: PropTypes.shape({
        top: PropTypes.string,
        left: PropTypes.string,
    }),
    size: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
    }),
};
