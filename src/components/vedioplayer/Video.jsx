import React from "react";
import "./Video.css";
import { assets } from "../../assets/asset";
import { useState } from 'react';


function Video() {
   const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
   };

  return (
    <div className="video-container">
      <div className="video-details">
      <h1 className="title">Video Tour</h1>
      <p className="para">
        Find out more with our video of the most beautiful and <br />
        pleasant places for you and your family.
      </p>
      </div>
       <video
       className="video"
        src={assets.video} // Replace with your video file
        type="video.mp4"
        height={100}
        controls// Add browser controls
         autoPlay={isPlaying} // Start playback automatically if isPlaying is true
      >
      </video>
       {/* <button onClick={handlePlay} disabled={isPlaying}>
        
      </button>
      <button onClick={handlePause} disabled={!isPlaying}>
        Pause
      </button>  */}

    </div>
  );
}

export default Video;
