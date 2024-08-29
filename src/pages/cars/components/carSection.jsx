import React from 'react';
import car from "../../../assets/ame24.png"
import powerIcon from "../../../assets/power.svg"
import weightIcon from "../../../assets/weight.svg"
// import speedIcon from "../../../assets/speed.svg"
import speedIcon from "../../../assets/wheel.svg"
import accelerationIcon from "../../../assets/acceleration.svg"
import track_24 from "../../../assets/cars/24-track.jpg"
import side_24 from "../../../assets/cars/24-side.jpg"
import spoiler_24 from "../../../assets/cars/24-spoiler.jpg"
import aerial_24 from "../../../assets/cars/24-aerial.jpg"
import '../cars.css'

const carContentData = {
    "AME24": {
      contentOne: "With the main goal of passing technical inspection and placing well in competition, the design of AME24 focused on simplicity, reliability, and serviceability. Testing with AME24 yielded a large amount of valuable data using its onboard data acquisition system. The data recorded provided vital information that would help drive performance goals, improve subsystem models, and inform engineering decisions for the next year.",
      contentTwo: "The design features a steel spaceframe chassis, a double wishbone pushrod suspension with rockers and anti-roll bars, a single inboard motor, a carbon fiber reinforced plastic aerodynamics package, centralized analog low voltage systems, and a high voltage battery. A notable feature was that our prioritization of battery serviceability allowed us to remove and begin internal maintenance within 10 minutes of the car coming off the track. As a product of each of the subteams adhering to the design philosophy of maximizing testing time, AME 24 saw over 200km of testing."
    },
    "default": {
      contentOne: "Default content for car section one.",
      contentTwo: "Default content for car section two."
    }
  };

const carStats = {
    "AME24": {
        output: "500V",
        speed: "80 MPH",
        acceleration: "3.2s",
        power: "103.7 HP"
    },
    "default": {
        output: "",
        speed: "",
        acceleration: "",
        power: ""
    }
};

const carImages = {
    "AME24": {
        carImageOne: track_24,
        carImageTwo: side_24,
        carImageThree: spoiler_24,
        carImageFour: aerial_24
    },
    "default" : {
        carImageOne: track_24,
        carImageTwo: side_24,
        carImageThree: spoiler_24,
        carImageFour: aerial_24
    }
}

const CarSection = ({ year }) => {
    const { contentOne, contentTwo } = carContentData[year] || carContentData.default;
    const {output, speed, acceleration, power} = carStats[year] || carStats.default;
    const { carImageOne, carImageTwo, carImageThree, carImageFour } = carImages[year] || carImages.default;

    return (
        <div className="car-section">
            <div className="main-car-section">
                <img src={carImageOne} alt="AME24" className='car-ame-image'/>
                <div className="main-car-section-content">
                    <h2>2023 - 2024</h2>
                    <h1>{year}</h1>
                    <div className="stats-grid">
                        <div className="stat-item output">
                            <span className="stat-label">Output</span>
                            <div className="stat-row">
                                <span className="stat-value">{output}</span>
                                <div className="stat-icon-container">
                                    <img src={powerIcon} alt="power" className="stat-icon"/>
                                </div>
                            </div>
                        </div>
                        <div className="stat-item top-speed">
                            <span className="stat-label">Top Speed</span>
                            <div className="stat-row">
                                <span className="stat-value">{speed}</span>
                                <div className="stat-icon-container">
                                    <img src={speedIcon} alt="speed" className="stat-icon"/>
                                </div>
                            </div>
                        </div>
                        <div className="stat-item acceleration">
                            <span className="stat-label">Acceleration</span>
                            <div className="stat-row">
                                <span className="stat-value">{acceleration}</span>
                                <div className="stat-icon-container">
                                    <img src={accelerationIcon} alt="acceleration" className="stat-icon"/>
                                </div>
                            </div>
                        </div>
                        <div className="stat-item weight">
                            <span className="stat-label">Power</span>
                            <div className="stat-row">
                                <span className="stat-value">{power}</span>
                                <div className="stat-icon-container">
                                    <img src={weightIcon} alt="weight" className="stat-icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="car-content">
            {contentOne}
            </p>
            <div className="car-section-two">
                <p className="car-content">
                {contentTwo}
                </p>
                <img src={carImageTwo} alt="AME24" className='car-ame-image'/>
            </div>
            <div className="car-section-three">
                <img src={carImageThree} alt="AME24" className='car-ame-image'/>
                <img src={carImageFour} alt="AME24" className='car-ame-image'/>
            </div>
        </div>
    );
};

export default CarSection;