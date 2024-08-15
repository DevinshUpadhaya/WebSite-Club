import React, { useRef, useEffect } from 'react';
import './Business.css';
import video5 from '../../assets/video5.mp4';
import video9 from '../../assets/video9.mp4';
import video7 from '../../assets/video7.mp4';
import video3 from '../../assets/video3.mp4';
import video6 from '../../assets/video6.mp4';
import video8 from '../../assets/video8.mp4';
const Business = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        // Play the video when the component mounts
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    const playVideo = () => {
        // Play the video when the user interacts with the page
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const replayVideo = () => {
        // Replay the video by resetting its playback time to 0
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    };
    return (
        <div className='gclubbox1'>
            <div className="gevents-headin">
                <hr className="gline" />
                <h1 className="gsub-title">TOP BUSINESS OPPORTUNITIES</h1>
            
            </div>
            <div className="gservices-list">

                <div className="gvideo-containera">
                    <video
                        ref={videoRef}
                        width="400"
                        height="225"
                        autoPlay // Autoplay the video
                        muted // Mute the video
                        controls={false} // Hide default controls
                    >
                        <source src={video9} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h2 className='ghtwotag'>FRANCHISE PARTNERSHIP</h2>
                    <a href="https://www.ibaglobalsearch.com/register" className="gregisterr-btn1">REGISTER NOW</a>

                </div>

                <div className="gvideo-containera">
                    <video
                        ref={videoRef}
                        width="400"
                        height="225"
                        autoPlay // Autoplay the video
                        muted // Mute the video
                        controls={false} // Hide default controls
                    >
                        <source src={video9} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h2 className='ghtwotag'>BUSINESS PARTNERSHIP</h2>
                    <h3 className='ghtwotag'>ALLAINCE, COLLABORATION & TIE UPS</h3>

                    <a href="https://www.ibaglobalsearch.com/register" className="gregisterr-btn1">REGISTER NOW</a></div>




            </div>
            <div className="gservices-list1">
                <div className="gvideo-containerib">
                    <video
                        ref={videoRef}
                        width="400"
                        height="225"
                        autoPlay // Autoplay the video
                        muted // Mute the video
                        controls={false} // Hide default controls
                    >
                        <source src={video5} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h2 className='htwotag'>INVESTOR RELATIONS</h2>
                    <a href="https://www.ibaglobalsearch.com/register" className="gsregisterr-btn1">REGISTER NOW</a>
                </div>


                <div className="gvideo-containerib">
                    <video
                        ref={videoRef}
                        width="400"
                        height="225"
                        autoPlay // Autoplay the video
                        muted // Mute the video
                        controls={false} // Hide default controls
                    >
                        <source src={video6} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h2 className='htwotag'>MERGERS & AQUISITION</h2>

                    <a href="https://www.ibaglobalsearch.com/register" className="gsregisterr-btn1">REGISTER NOW</a>


                </div>
                <div className="gvideo-containerib">
                    <video
                        ref={videoRef}
                        width="400"
                        height="225"
                        autoPlay // Autoplay the video
                        muted // Mute the video
                        controls={false} // Hide default controls
                    >
                        <source src={video3} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h2 className='htwotag'>VRK FOUNDATION</h2>
                    <a href="https://www.ibaglobalsearch.com/register" className="gsregisterr-btn1">REGISTER NOW</a>
                </div>



            </div>


        </div >
    );
}


export default Business;
