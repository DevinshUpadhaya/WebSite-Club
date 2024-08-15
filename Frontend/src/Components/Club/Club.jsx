import React, { useRef, useEffect } from 'react';
import './Club.css'; // Assuming you have a CSS file named Club.css
import video1 from '../../assets/Video1.mp4';
import video2 from '../../assets/video2.mp4';
import video3 from '../../assets/video3.mp4';
import video5 from '../../assets/video5.mp4';

const Club = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        // Play the video when the component mounts
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    return (
        <div className='clubbox2'>
            <div className="events-heading">
                <h1 className="sub-title1"> GLOBAL BUSINESS NETWORK CLUBS</h1>
            </div>
            <div className="two-column-layout1">
                {/* First column with one large video */}
                <div className="column1">
                    <div className="video-container-large1">
                        <video
                            ref={videoRef}
                            width="400"
                            height="225"
                            autoPlay // Autoplay the video
                            muted // Mute the video
                            controls={false} // Hide default controls
                        >
                            <source src={video1} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <h1>ELITE BUSINESS CLUB</h1>
                        <a href="https://www.ibaglobalsearch.com/register" className="register-btn"><h2>MEMBERSHIP OPEN</h2></a>
                    </div>
                </div>
                {/* Second column with three smaller videos in a row */}
                <div className="column2">
                    <div className="video-row1">
                        {/* Assuming consistent video dimensions */}
                        <div className="video-container-small">
                            <video
                                width="300"
                                height="180"
                                autoPlay
                                muted
                                loop
                            >
                                <source src={video1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <h5>LUXURY BUSINESS NETWORK CLUB</h5>
                            <a href="https://www.ibaglobalsearch.com/register" className="register-btn">MEMBERSHIP OPEN</a>
                        </div>
                        <div className="video-container-small1">
                            <video
                                width="300"
                                height="180"
                                autoPlay
                                muted
                                loop
                            >
                                <source src={video2} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <h5>DIVERSITY  BUSINESS NETWORK CLUB</h5>
                            <a href="https://www.ibaglobalsearch.com/register" className="register-btn">MEMBERSHIP OPEN</a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bottomrow">
                
                <div className="video-container-bottom">
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
                    <h3>GLOBAL CXO NETWORK CLUB</h3>
                    <a href="https://www.ibaglobalsearch.com/register" className="register-btn1">MEMBERSHIP OPEN</a>
                </div>
                <div className="video-container-bottom">
                    <video
                        width="300"
                        height="180"
                        autoPlay
                        muted
                        loop
                    >
                        <source src={video5} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h4>EVENTS & ENTERTAINMENT</h4>
                    <a href="https://www.ibaglobalsearch.com/register" className="register-btn2">MEMBERSHIP OPEN</a>
                </div>
            </div>

        </div>
    );
}

export default Club;
