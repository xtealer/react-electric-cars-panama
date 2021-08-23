import React from 'react';

const SocialBarComponent = () => {
    return <div className="position-sticky col-1 px-0 text-center" style={{ top: 0, right: 0, zIndex: 1 }}>
        <a href="https://youtube.com/"><img className="position-sticky social-icon mt-2" src={require("../images/youtube-icon.png")} alt="youtube-icon" /></a>
        <a href="https://facebook.com/"><img className="social-icon mt-2" src={require("../images/facebook.png")} alt="facebook-icon" /></a>
        <a href="https://instagram.com/"><img className="social-icon mt-2" src={require("../images/instagram.png")} alt="instagram-icon" /></a>
        <a href="https://twitter.com/secdeenergia?lang=es"><img className="social-icon mt-2" src={require("../images/twitter.png")} alt="twitter-icon" /></a>
    </div>;
};

export default SocialBarComponent;