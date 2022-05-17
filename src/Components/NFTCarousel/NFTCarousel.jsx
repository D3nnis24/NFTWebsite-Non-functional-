import React from "react";
import "./NFTCarousel.css" 
import img1 from "./NFTImages/1.png";
import img2 from "./NFTImages/2.png";
import img3 from "./NFTImages/3.png";
import img4 from "./NFTImages/4.png";
import img5 from "./NFTImages/5.png";
import img6 from "./NFTImages/6.png";
import img7 from "./NFTImages/7.png";
import img8 from "./NFTImages/8.png";
import img9 from "./NFTImages/9.png";

function NFTCarousel() {
    return (
        <div>
            <div className="container">
                <div className="carousel">
                    <div className="carousel__face" style={{ backgroundImage: `url( ${img1} )` }}></div>
                    <div className="carousel__face" style={{ backgroundImage: `url( ${img2} )` }}></div>
                    <div className="carousel__face" style={{ backgroundImage: `url( ${img3} )` }}></div>
                    <div className="carousel__face" style={{ backgroundImage: `url( ${img4} )` }}></div>
                    <div className="carousel__face" style={{ backgroundImage: `url( ${img5} )` }}></div>
                    <div className="carousel__face" style={{ backgroundImage: `url( ${img6} )` }}></div>
                    <div className="carousel__face" style={{ backgroundImage: `url( ${img7} )` }}></div>
                    <div className="carousel__face" style={{ backgroundImage: `url( ${img8} )` }}></div>
                    <div className="carousel__face" style={{ backgroundImage: `url( ${img9} )` }}></div>
                </div>
            </div>
        </div>
    );
}

export default NFTCarousel;