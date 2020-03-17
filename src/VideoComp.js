import React from 'react';
import videoZoomInEN from "./15_transion_ENG.mp4";
import videoZoomInHE from "./16_transion_HEB.mp4";
import videoPoster from "./01_background.png";
import leftVideoPoster from "./07_backgroundENG.png";
import isLeftToRight from './IsLeftToRightFunc';
import './Styles.css';


function VideoComp({playVideoLogic}) {
  

  return (
    
    <video onClick={playVideoLogic} id='zoomInVideo' poster={isLeftToRight()?leftVideoPoster:videoPoster} className='videoStyle'>
        <source src={isLeftToRight()?videoZoomInEN:videoZoomInHE}></source>
    </video>
  );
}

export default VideoComp;
