import React, { useRef, useEffect } from 'react';
import './Globalsearch.css';
import video5 from '../../assets/video5.mp4';
import video9 from '../../assets/video9.mp4';
import video7 from '../../assets/video7.mp4';
import video3 from '../../assets/video3.mp4';
import video6 from '../../assets/video6.mp4';
import video8 from '../../assets/video8.mp4';
const Globalsearch = () => {
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
        <div className='clubbox1'>
            <div className="events-headin">
                <hr className="line" />
                <h1 className="sub-title">GLOBAL SEARCH COMPANY</h1>
            
            </div>
            <div className="services-list">

                <div className="gvideo-container">
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
                    <h2 className='htwotag'>MD, DIRECTORS, CEO</h2>
                    <h4>APPLY NOW</h4>
                    <a href="https://www.ibaglobalsearch.com/register" className="registerr-btn"><h6>JOB SEEKERS LOGIN</h6></a>
                    <a href="https://www.ibaglobalsearch.com/register" className="registerr-btn1"><h6>EMPLOYERS LOGIN</h6></a>

                </div>

                <div className="gvideo-container">
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
                    <h1 className='htwotag'>CXO, VP, GM</h1>
                    <h4>APPLY NOW</h4>

                    <a href="https://www.ibaglobalsearch.com/register" className="registerr-btn"><h6>JOB SEEKERS LOGIN</h6></a>
                    <a href="https://www.ibaglobalsearch.com/register" className="registerr-btn1"><h6>EMPLOYERS LOGIN</h6></a></div>




            </div>
            <div className="services-list1">
                <div className="gvideo-containeri">
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
                    <h1 className='htwotag'>RPO</h1>
                    <h4>APPLY NOW</h4>
                    <a href="https://www.ibaglobalsearch.com/register" className="sregisterr-btn"><h6>JOB SEEKERS LOGIN</h6></a>
                    <a href="https://www.ibaglobalsearch.com/register" className="sregisterr-btn1"><h6>EMPLOYERS LOGIN</h6></a>
                </div>


                <div className="gvideo-containeri">
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
                    <h2 className='htwotag'>CORPORATE BUSINESS</h2>
                    <h5 className='hfivetag'>ADVISORY & CONSULTING</h5>



                </div>
                <div className="gvideo-containeri">
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
                    <h2 className='htwotag'>COACHING </h2>
                    <h5 className='hfivetag'>MENTORSHIP & ASSESSMENTS</h5>
                    </div>



            </div>


        </div >
    );
}


export default Globalsearch;
