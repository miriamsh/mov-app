import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Homeone from './pages/Homeone';
import Movie from './pages/Movie';
import MovieDetails from './pages/MovieDetails';
import TvSeries from './pages/TvSeries';
import UpcomingMovie from './components/homeone/UpcomingMovie';
import Frame from './pages/frame';
import { useEffect } from "react"
import $ from "jquery";
import Pricing from './pages/Pricing';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import ContactPage from './pages/ContactPage';
import { SignIn } from './pages/sign-in';
import { SignUp } from './pages/sign-up';
// import ContainerVideoPlayer from './pages/ContainerVideoPlayer';



function App() {

  
  useEffect(()=>{
    function preloader() {
      $('#preloader').delay(0).fadeOut();
    };
    $(window).on('load', function () {
      preloader();
      
     
    });
  })


  return (
    <div className="App">
     <Router>
       
        <Switch>
          <Route exact={true} path="/">
            <Homeone/>
          </Route>

          {/* <Route exact={true} path="/index-2">
            <HomeTwo/>
          </Route> */}

          <Route exact={true} path="/upcoming-movie">
            <UpcomingMovie/>
          </Route>

          <Route exact={true} path="/movie-frame">
            <Frame/>
          </Route>

          {/* <Route exact={true} path="/video-player">
            <ContainerVideoPlayer/>
          </Route> */}
          
          <Route exact={true} path="/sign-in">
            <SignIn/>
          </Route>

          <Route exact={true} path="/sign-up">
            <SignUp/>
          </Route>

          <Route exact={true} path="/movie">
            <Movie/>
          </Route>
          <Route exact={true} path="/movie-details">
            <MovieDetails/>

          </Route>
          <Route exact={true} path="/tv-show">
            <TvSeries/>

          </Route>
          <Route exact={true} path="/pricing">
            <Pricing/>

          </Route>
          <Route exact={true} path="/blog">
            <Blogs/>

          </Route>
          <Route exact={true} path="/blog-details">
            <BlogDetails/>

          </Route>
         
          <Route exact={true} path="/contact">
            <ContactPage/>

          </Route>


        </Switch>
        
     </Router>
     
      
        
    </div>
  );
}

export default App;
