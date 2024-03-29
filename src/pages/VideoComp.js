import React from "react";
import videoZoomInEN from "../assets/15_transion_ENG.mp4";
import videoZoomInHE from "../assets/16_transion_HEB.mp4";
import videoPoster from "../assets/01_background.png";
import leftVideoPoster from "../assets/07_backgroundENG.png";
import isLeftToRight from "../fragments/IsLeftToRightFunc";
import "../css/Styles.css";

function VideoComp({ playVideoLogic }) {
  return (
    <video
      onClick={playVideoLogic}
      id="zoomInVideo"
      src={isLeftToRight() ? videoZoomInEN : videoZoomInHE}
      poster={isLeftToRight() ? leftVideoPoster : videoPoster}
      className="fullBackground"
    />
  );
}

export default VideoComp;
