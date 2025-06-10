import React from "react";
import video from "./video/bg1.mp4";

function Video() {
  return (
    <div>
      <video controls autoPlay loop muted playsInline name="video">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;
