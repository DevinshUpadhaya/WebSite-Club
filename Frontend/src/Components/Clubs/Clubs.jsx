import React, { useEffect } from 'react'; // Import useEffect from React library
import video1 from '../../assets/Video1.mp4'; // Import your video file
import video2 from '../../assets/video2.mp4'; // Import another video file
import imageleft from '../../assets/image-left.png';
import imageright from '../../assets/image-right.png';
import '@fortawesome/fontawesome-free/css/all.css';
import './Clubs.css';

const Events = () => {
  useEffect(() => {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.play();
    });
  }, []);

  return (
    <div>
      <div id="portfolio">
        <div className="container">
          <h1 className="sub-title">Clubs</h1>
          <div className="column">
            <div className="work-list">
              <img src={imageleft} alt="Left Image 1" className="left-image" />
              <div className="work">
                <video controls autoPlay>
                  <source src={video1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="layer">
                  <h3>LUXURY BUSINESS NETWORK</h3>
                  <a href="https://www.ibaconsultingworldwide.com/index"></a>
                </div>
              </div>
              <div className="work">
                <video controls autoPlay>
                  <source src={video2} type="video/mp4" />
                </video>
                <div className="layer">
                  <h3>GLOBAL BUSINESS NETWORK</h3>
                  <a href="https://www.ibaconsultingworldwide.com/index"></a>
                </div>
              </div>
              <img src={imageright} alt="Right Image 1" className="right-image" />
            </div>
          </div>
          <div className="column">
            <div className="work-list">
              <img src={imageleft} alt="Left Image 1" className="left-image" />
              <div className="work">
                <video controls autoPlay>
                  <source src={video1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="layer">
                  <h3>LUXURY BUSINESS NETWORK</h3>
                  <a href="https://www.ibaconsultingworldwide.com/index"></a>
                </div>
              </div>
              <div className="work">
                <video controls autoPlay>
                  <source src={video2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="layer">
                  <h3>GLOBAL BUSINESS NETWORK</h3>
                  <a href="https://www.ibaconsultingworldwide.com/index"></a>
                </div>
              </div>
              <img src={imageright} alt="Right Image 1" className="right-image" />
            </div>
          </div>
          {/* Rest of your code */}
        </div>
      </div>
    </div>
  );
};

export default Events;
