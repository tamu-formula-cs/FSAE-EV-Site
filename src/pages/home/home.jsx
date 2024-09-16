import React, { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import CarVideo from '../../assets/ev-transition.mp4';
import General_Motors from '../../assets/sponsors/general_motors3_logo.png';
import CarOne from '../../assets/home-one.jpg'
import Addative from '../../assets/sponsors/additive_cropped.png';
import CarTwo from '../../assets/home-two-compressed.jpg'
import Vistra from '../../assets/sponsors/vistra_logo.png';
import {useNavigate} from 'react-router-dom';
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport, ToastAction } from "@/components/ui/toast"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
import './home.css';

export default function Home(){

    const navigate = useNavigate();

    const targetDate = new Date('2025-06-10T19:00').getTime();

    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const { toast } = useToast();

    useEffect(() => {
        toast({
            title: <ToastTitle>Support Our Journey</ToastTitle>,
            description: <ToastDescription>Help us innovate in electric vehicle technology. Consider donating today!</ToastDescription>,
            action: <ToastAction altText="Donate Now" onClick={handleDonateClick}>Donate Now</ToastAction>,
            duration: 5000,
            position: "bottom-right",
            
        });
    }, []);

    const handleDonateClick = () => {
        window.open('https://www.gofundme.com/f/texas-am-formula-sae-electric-racing', '_blank');
    }

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
    <meta property="og:title" content="Texas A&M Formula E" />
    <meta property="og:image:secure_url" content="https://tamuformulaelectric.com/assets/home-two-compressed-DsQz2CUF.jpg" />
    <meta property="og:type" content="website" />
        <Header/>

        <div className="landing-container" style={{backgroundImage: `url(${CarTwo})`}}>
            <div className="landing-text">
                
                <h1 className="landing-we-are">WE ARE </h1>
                <div className="landing-text-spacer"></div>
                <Typewriter
                    options={{
                    strings: [
                        ' TEXAS A&M FORMULA ELECTRIC',
                        ' AGGIE ENGINEERS',
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    }}
                />
            </div>
            <div className="scroll-down"></div>
        </div>
        
        <section className="home-join-team-section">
                <h1>JOIN OUR TEAM</h1>
                <h2>Help us build the next winning racecar.</h2>
                <a target='_blank' href='/recruiting' className="recruiting-button">
                    JOIN US
                </a>
        </section>

        <div className="car-showcase">
            <h1 className='showcase-title'>AME24</h1>
            <img src={CarOne} alt="AME24" className='car-image'/>
            {/* <video autoPlay muted loop playsInline className='car-video' ref={videoRef}>
                <source src={CarVideo} type="video/mp4"/>
                Your browser does not support the video tag.
            </video> */}
            <div className="stats-container">
                <div className="stat">
                    <h1>Voltage</h1>
                    <h1 className='stat-val'>500 V</h1>
                    {/* <h2 className="pixelated-blur">xx.xs</h2> */}
                </div>
                <div className="stat">
                    <h1>Top Speed</h1>
                    <h1 className='stat-val'>80 MPH</h1>
                    {/* <h2 className="pixelated-blur">xyzmph</h2> */}
                </div>
                <div className="stat">
                    <h1>Power</h1>
                    <h1 className='stat-val'>103.7 HP</h1>
                    {/* <h2 className="pixelated-blur">xyzlbs</h2> */}
                </div>
            </div>
        </div>

        <div className="countdown-container">
            <h1>FSAE ELECTRIC COMPETITION</h1>
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

        <section className="home-join-section">
                <h1>JOIN OUR JOURNEY</h1>
                <h2>Help us support innovation in electric vehicle technology.</h2>
                <button className="become-a-sponsor-button">
                    <a target='_blank' href='https://www.gofundme.com/f/texas-am-formula-sae-electric-racing'>DONATE</a>
                </button>
        </section>

        <div className="home-sponsors">
            <h2>In partnership with our distinguished sponsors.</h2>
            <div className="sponsor-home-images">
                <img src={General_Motors} alt="" /><img src={Vistra} alt="" /><img src={Addative} alt="" />
            </div>
            <button className="home-sponsor-button">
                <a href="/sponsors">View Our Sponsors</a>
            </button>
        </div>

        {/* <Toaster /> */}
        <Footer/>
    </div>
}
