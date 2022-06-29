import React,{useRef} from 'react';

import video from '../../assets/Hang - 30902.mp4';
import useVideoPlayer from '../../hooks/useVideoPlayer';

const VideoPlayer = () =>{
    const videoElement=useRef(null);

    const {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
        handleVideoProgress,
        handleVideoSpeed,
        toggleMute,
      } = useVideoPlayer(videoElement);

      return (
        <section  style={{backgroundImage:'url("img/bg/blog_bg.jpg")'}}>
        <div className="v_container">
          <div className="v_video-wrapper">
            <video className="v_video"
              src={video}
              ref={videoElement}
              onTimeUpdate={handleOnTimeUpdate}
            />
             <div className="v_controls">
          <div className="v_actions">
            <button onClick={togglePlay}>
              {!playerState.isPlaying ? (
                <i className="v_bx bx-play" ></i>
              ) : (
                <i className="bx bx-pause"></i>
              )}
            </button>
          </div>
          <input className="input-range"
            type="range"
            min="0"
            max="100"
            value={playerState.progress}
            onChange={(e) => handleVideoProgress(e)}
           />
           <select
            className="v_velocity"
            value={playerState.speed}
            onChange={(e) => handleVideoSpeed(e)}>
            <option value="0.50">0.50x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="2">2x</option>
          </select>
          <button className="v_mute-btn" onClick={toggleMute}>
            {!playerState.isMuted ? (
              <i className="bx bxs-volume-full"></i>
            ) : (
              <i className="bx bxs-volume-mute"></i>
            )}
          </button>

           </div>
           </div>
        </div>
        </section>
      ); 
};

export default VideoPlayer;