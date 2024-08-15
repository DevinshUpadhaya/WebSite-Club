import React, { useRef, useEffect } from 'react';
import './Events.css'; // Assuming you have a CSS file named Club.css
import video1 from '../../assets/Video1.mp4';
import video2 from '../../assets/video2.mp4';
import video3 from '../../assets/video3.mp4';
import video5 from '../../assets/video5.mp4';

const Events = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        // Play the video when the component mounts
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    return (
        <div className='eclubbox1'>
            <div className="eevents-heading">
                <h1 className="esub-title">TOP EVENTS</h1>
            </div>
            <div className="etwo-column-layout">
                {/* First column with one large video */}
                <div className="ecolumn1">
                    <div className="evideo-container-large">
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
                        <h1>MUSIC CONCERTS</h1>
                        <a href="https://www.ibaglobalsearch.com/register" className="eregister-btn">REGISTER NOW</a>
                    </div>
                </div>
                {/* Second column with three smaller videos in a row */}
                <div className="ecolumn2">
                    <div className="evideo-row">
                        {/* Assuming consistent video dimensions */}
                        <div className="evideo-container-small">
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
                            <h5>SPORTS EVENTS</h5>
                            <a href="https://www.ibaglobalsearch.com/register" className="eregister-btn">REGISTER NOW		</a>
                        </div>
                        <div className="evideo-container-small1">
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
                            <h5>WORKSHOPS</h5>
                            <a href="https://www.ibaglobalsearch.com/register" className="eregister-btn">REGISTER NOW		</a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="ebottomrow">
                <div className="evideo-container-bottom">
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
                    <h4>CONFERENCES & FORUMS</h4>
                    <a href="https://www.ibaglobalsearch.com/register" className="eregister-btn2">REGISTER NOW		</a>
                </div>
                <div className="evideo-container-bottom">
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
                    <h3>AUCTIONS & ART FAIRS</h3>
                    <h5>VRK FOUNDATION</h5>
                    <a href="https://www.ibaglobalsearch.com/register" className="eregister-btn2">REGISTER NOW</a>
                </div>
            </div>

        </div>
    );
}

export default Events;
