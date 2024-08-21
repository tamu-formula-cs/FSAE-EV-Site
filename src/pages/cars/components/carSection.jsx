import React from 'react';
import car from "../../../assets/ame24.png"
import power from "../../../assets/power.svg"
import weight from "../../../assets/weight.svg"
import speed from "../../../assets/speed.svg"
import acceleration from "../../../assets/acceleration.svg"
import '../cars.css'

const CarSection = ({ year }) => {

    return (
        <div className="car-section">
            <div className="main-car-section">
                <img src={car} alt="AME24" className='car-ame-image'/>
                <div className="main-car-section-content">
                    <h2>2023 - 2024</h2>
                    <h1>{year}</h1>
                    <div className="stats-grid">
                        <div className="stat-item output">
                            <span className="stat-label">Output</span>
                            <div className="stat-row">
                                <span className="stat-value">4 × 43.5kW</span>
                                <div className="stat-icon-container">
                                    <img src={power} alt="power" className="stat-icon"/>
                                </div>
                            </div>
                        </div>
                        <div className="stat-item top-speed">
                            <span className="stat-label">Top Speed</span>
                            <div className="stat-row">
                                <span className="stat-value">117 km/h</span>
                                <div className="stat-icon-container">
                                    <img src={speed} alt="speed" className="stat-icon light"/>
                                </div>
                            </div>
                        </div>
                        <div className="stat-item acceleration">
                            <span className="stat-label">Acceleration</span>
                            <div className="stat-row">
                                <span className="stat-value">1.9s</span>
                                <div className="stat-icon-container">
                                    <img src={acceleration} alt="acceleration" className="stat-icon"/>
                                </div>
                            </div>
                        </div>
                        <div className="stat-item weight">
                            <span className="stat-label">Weight</span>
                            <div className="stat-row">
                                <span className="stat-value">183 kg</span>
                                <div className="stat-icon-container">
                                    <img src={weight} alt="weight" className="stat-icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="car-content">
                The AME24 team dedicated countless hours to developing their groundbreaking electric formula racing car for the 2024 season. 
                Their vehicle, known as the "Aggievolt X", showcased innovative design features that pushed the boundaries of electric racing technology. 
                The car's sleek carbon fiber body was meticulously crafted to minimize drag while generating substantial downforce.
            </p>
            <div className="car-section-two">
                <p className="car-content">
                At the core of the Aggievolt X was a custom-designed electric powertrain, featuring dual high-efficiency motors that delivered 
                instantaneous torque to all four wheels. 
                The team invested significant time in optimizing the battery management system, successfully extending the car's range without compromising its blistering speed.
                </p>
                <img src={car} alt="AME24" className='car-ame-image'/>
            </div>
        </div>
    );
};

export default CarSection;