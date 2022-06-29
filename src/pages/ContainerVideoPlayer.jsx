import React from 'react';
import VideoPlayerCloudHosted from '../components/video/videoPlayerCloudHosted';
import VideoPlayerClass from "../components/video/VideoPlayerClass";


const ContainerVideoPlayer = () =>{

  // const videoOptions={ cloudName: "daemopdob", publicId: "v1654191400" };

    return  (
      <section>
      {/* <div className="video-card">
      <h2>Video Player Cloud Hosted</h2>
      <div className="vp">
        <VideoPlayerCloudHosted options={videoOptions} />
      </div>
    </div> */}
     <div className="video-card">
       <h2>Video Player in Class</h2>
       <div className="vp">
         <VideoPlayerClass />
       </div>
     </div>
     </section>
    )

    
};

export default ContainerVideoPlayer;
 