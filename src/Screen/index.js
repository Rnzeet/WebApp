import React, { useState } from 'react';
import './index.css';
import teddyGif from '../assest/teddy.gif';
import crack from '../assest/crack.gif'
import ted from '../assest/ted.gif'
import ted1 from '../assest/ted1.png'
const HomeScreen = () => {
    const [showImage, setShowImage] = useState(false);
    const [showFullScreenGif, setShowFullScreenGif] = useState(false);
    const [showTed1Image, setShowTed1Image] = useState(true);
    const [showTedImage, setShowTedImage] = useState(false);
    const handleYesClick = () => {
      setShowImage(true);
      setShowFullScreenGif(true);
      setShowTed1Image(false);
      setShowTedImage(false);
    };
  
    // const handleNoClick = () => {
    //   setShowImage(false);
    //   setShowTed1Image(false);
    // };
    const handleNoClick = () => {
        setShowImage(false);
        setShowTed1Image(false);
        setShowTedImage(true);
        const noButton = document.getElementById("no-button");
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const randomX = Math.floor(Math.random() * (screenWidth - buttonWidth));
        const randomY = Math.floor(Math.random() * (screenHeight - buttonHeight));
        noButton.style.position = "absolute";
        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";
      };
      
      

      const handleCloseFullScreen = () => {
        setShowFullScreenGif(false);
        // setShowTed1Image(false);
        setShowTedImage(false);
      };
  return (
    <div className="app">
    <h1 className="love-header" style={{elevation:5}}>Date Please....?????</h1>
    {showTed1Image && <img src={ted1}  className="ted1-image" />}
    {showImage && <img src={teddyGif}  style={{ width: '200px', height: '200px',alignContent:'center',borderRadius:10
     }}/>}
        {showTedImage && <img src={ted}  className="ted-image" />}
    <div className="buttons">
      <button onClick={handleYesClick} style={{backgroundColor:'red',borderRadius:10,elevation:15}}>Yes</button>
      <button id="no-button" onClick={handleNoClick}>No don't click me</button>

    </div>
    {showFullScreenGif && (
        <div className="full-screen-gif-overlay" onClick={handleCloseFullScreen}>
          <img src={crack}  className="full-screen-gif" />
        </div>
      )}
  </div>
  );
};

export default HomeScreen;
