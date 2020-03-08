import React from 'react';
import videoZoomIn from "./transition-zoom-in.mp4";
import videoPoster from "./01_background.png";
import leftVideoPoster from "./05_leftToRightVideoPoster.png";
import isLeftToRight from './IsLeftToRightFunc';
import './Styles.css';


function VideoComp({playVideoLogic}) {
  

  return (
    <video onClick={playVideoLogic} id='zoomInVideo' poster={isLeftToRight()?leftVideoPoster:videoPoster} className='videoStyle'>
        <source src={videoZoomIn}></source>
    </video>
  );
}

export default VideoComp;
