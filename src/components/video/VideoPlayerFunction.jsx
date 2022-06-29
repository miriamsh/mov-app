function VideoPlayerFunction(props) {
    const videoPlayerInit = () => {
      window.cloudinary.videoPlayer(document.querySelector(".fn-video"), {
        cloud_name: props.options.cloudName,
        publicId: props.options.publicId,
        fluid: true,
        controls: true,
        preload: "auto",
        mute: true,
        autoplay: false,
      });
    };
  
    useEffect(() => {
      return (videoPlayerInit(),[]);
    });
    return (
      <>
        <video className="fn-video" />
      </>
    );
  }
  
  export default VideoPlayerFunction;