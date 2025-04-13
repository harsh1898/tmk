import React, { useState } from 'react';
import VP from '../video/Demo.mp4';
import './VideoPlay.css';

export default function VideoPlayer() {

  return (
    <div className="video-section">
        <div className="video-container fade-in">
          <iframe
            src={VP}
            title="Smart Water Controller Demo"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      
    </div>
  );
}
