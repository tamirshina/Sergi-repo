import React from 'react';
import videoZoomIn from "./transition-zoom-in.mp4";
import videoPoster from "./01_background.png";
import './Styles.css';


function VideoComp({playVideoLogic}) {

  return (
    <video onClick={playVideoLogic} id='zoomInVideo' poster={videoPoster} className='videoStyle'>
        <source src={videoZoomIn}></source>
    </video>
  );
}

export default VideoComp;
