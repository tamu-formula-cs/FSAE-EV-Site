import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
// import Car from '../../assets/car.png';
import CarVideo from '../../assets/ev-transition.mp4';
import './home.css';

export default function Home(){
    const targetDate = new Date('2024-06-12T19:00').getTime();

    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            // Calculate time based on the distance
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Update state with the new countdown time
            setCountdown({ days, hours, minutes, seconds });

            // If the countdown finishes, clear the interval
            if (distance < 0) {
                clearInterval(interval);
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
        videoRef.current.playbackRate = 0.75;
        }
    }, []);

    return <div className="main-containter">
        <Header/>

        <div className="landing-container">
            <h1>WE ARE TEXAS A&M FORMULA ELECTRIC</h1>
        </div>

        <div className="countdown-container">
            <h1>COMPETITION IN</h1>
            <div className="countdown">
                <div className="countdown-item">
                    <span className="countdown-number">{countdown.days}</span>
                    <h1>days</h1>
                </div>
                <div className="countdown-item">
                    <span className="countdown-number">{countdown.hours}</span>
                    <h1>hours</h1>
                </div>
                <div className="countdown-item">
                    <span className="countdown-number">{countdown.minutes}</span>
                    <h1>minutes</h1>
                </div>
                <div className="countdown-item">
                    <span className="countdown-number">{countdown.seconds}</span>
                    <h1>seconds</h1>
                </div>
            </div>
        </div>

        <div className="car-showcase">
            <h1 className='showcase-title'>AME24</h1>
            {/* <img src={Car} alt="AME24" className='car-image'/> */}
            <video autoPlay muted loop className='car-video' ref={videoRef}>
                <source src={CarVideo} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div className="stats-container">
                <div className="stat">
                    <h1>Voltage</h1>
                    <h2 className="pixelated-blur">xx.xs</h2>
                </div>
                <div className="stat">
                    <h1>Top Speed</h1>
                    <h2 className="pixelated-blur">xyzmph</h2>
                </div>
                <div className="stat">
                    <h1>Weight</h1>
                    <h2 className="pixelated-blur">xyzlbs</h2>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
}
