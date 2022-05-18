import React from "react";
import "./NFTSocials.css";
import openseaImg from "./Images/opensea.png";
import twitterImg from "./Images/twitter.png";
import instagramImg from "./Images/instagram.png";
import discordImg from "./Images/discord.png";

function NFTSocials() {
    return (
        <div className="social-div">
            <img className="social-img" src={openseaImg} alt="Image not found"></img>
            <img className="social-img" src={twitterImg} alt="Image not found"></img>
            <img className="social-img" src={instagramImg} alt="Image not found"></img>
            <img className="social-img" src={discordImg} alt="Image not found"></img>
        </div>
    );
}

export default NFTSocials;