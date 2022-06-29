import React from 'react';
import Footer from '../components/Footer';
import Header from "../components/Header";
import VideoPlayer from '../components/video/VideoPlayer';

const Frame = () => {
  return (
  <div>
      <Header/>
    <main>
      <VideoPlayer/>
    </main>
      <Footer/>
  </div>

  )
}

export default Frame