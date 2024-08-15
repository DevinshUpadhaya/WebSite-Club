import React, { useRef, useEffect } from 'react';
import './Marketplace.css'; // Assuming you have a CSS file named Club.css
import video10 from '../../assets/video10.mp4';
import video2 from '../../assets/video2.mp4';
import video3 from '../../assets/video3.mp4';
import video5 from '../../assets/video5.mp4';

const Marketplace = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        // Play the video when the component mounts
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    return (
        <div className='mclubbox1'>
            <div className="mevents-heading">
                <h1 className="msub-title">LUXURY MARKETPLACE </h1>
            </div>
            <div className="mtwo-column-layout0">
                {/* First column with one large video */}
                <div className="mcolumna">
                    <div className="mvideo-container-largea">
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
                        <h1>LUXURY REAL ESTATE</h1>
                        <a href="https://www.ibaglobalsearch.com/register" className="mregister-btn">BOOK NOW</a>
                    </div>
                </div>
                {/* Second column with three smaller videos in a row */}
                <div className="mcolumnb">
                    <div className="video-container-largeb">
                        <video
                            ref={videoRef}
                            width="400"
                            height="225"
                            autoPlay // Autoplay the video
                            muted // Mute the video
                            controls={false} // Hide default controls
                        >
                            <source src={video2} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <h1>LUXURY LIFE STYLE</h1>
                        <a href="https://www.ibaglobalsearch.com/register" className="smregister-btn">NEW BOOKING</a>
                    </div>
                </div>
            </div>

            
                <div className="mtwo-column-layout1">
                    {/* First column with one large video */}
                    <div className="mcolumnc">
                        <div className="video-container-largecc">
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
                            <h1>LUXURY TRAVEL & HOLIDAYS</h1>
                            <a href="https://www.ibaglobalsearch.com/register" >BOOK NOW</a>
                        </div>
                    </div>
                    <div className="mcolumnd">
                        <div className="video-container-larged">
                            <video
                                ref={videoRef}
                                width="400"
                                height="225"
                                autoPlay // Autoplay the video
                                muted // Mute the video
                                controls={false} // Hide default controls
                            >
                                <source src={video2} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <h1>LUXURY CARS TRADING</h1>
                            <a href="https://www.ibaglobalsearch.com/lander" className="smvisit2a">NEW BOOKING</a>
                            <a href="https://www.ibaglobalsearch.com/register" className="smvisit2b">PRE-APPROVED</a>
                            <a href="https://www.ibaglobalsearch.com/register" className="smvisit2c">EXCHANGE</a>
                        </div>
                </div>
                </div>
                < div className="mtwo-column-layout2">
                        {/* First column with one large video */}
                        <div className="mcolumne">
                            <div className="video-container-largee">
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
                                <h1>LUXURY REAL ESTATE</h1>
                                <a href="https://www.ibaglobalsearch.com/register" className="mregister-btn3">BOOK NOW</a>
                            </div>
                        </div>
                        <div className="mcolumnf">
                            <div className="video-container-largef">
                                <video
                                    ref={videoRef}
                                    width="400"
                                    height="225"
                                    autoPlay // Autoplay the video
                                    muted // Mute the video
                                    controls={false} // Hide default controls
                                >
                                    <source src={video2} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <h1>HEALTHCARE</h1>
                                <a href="https://www.ibaglobalsearch.com/lander" className="smvisit4">HOSPITALIZATION</a>
                                <a href="https://www.ibaglobalsearch.com/lander" className="smvisit5">MEDICAL TEST</a>
                                <a href="https://www.ibaglobalsearch.com/register" className="smregister-btn4">MEDICAL INSURANCE</a>
                            </div>
                        </div>
                    
                </div>
            
        </div>
    );
}

export default Marketplace;
