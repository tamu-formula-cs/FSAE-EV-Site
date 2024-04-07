import React from 'react';
import './engineering_more_info.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const EngineeringMoreInfo = () => {
    return (
        <>
            <Header />
            <div className="engineering-info-container">
                <h1>More Information About the Engineering Teams</h1>

                {/* Aerodynamics Subteam */}
                <div className="subteam-info">
                    <h2>Aerodynamics Subteam Overview:</h2>
                    <p>
                        The Aerodynamics subteam is dedicated to designing and constructing efficient aerodynamics packages that are reliable, adjustable, and high-performing. The goal of the team is to increase vehicle downforce and reduce drag in a consistent manner to maximize cornering grip while maintaining a predictable feel for the driver.
                    </p>
                    <h3>Key Responsibilities:</h3>
                    <ul>
                        <li>Computer Aided Design (CAD) of Parts, subassemblies, and assemblies including FEA validation</li>
                        <li>CFD Analysis for full car performance optimization</li>
                        <li>Manufacture of various composite and metal items</li>
                        <li>Justification of Aerodynamics through Lap simulation and vehicle dynamics analysis</li>
                        <li>Managing mechanical packaging and design integration with other subsystems, including Chassis</li>
                        <li>Develop adjustable Mounting of various structures</li>
                    </ul>
                </div>

                {/* Battery Subteam */}
                <div className="subteam-info">
                    <h2>Battery Subteam Overview:</h2>
                    <p>
                        The Battery subteam is responsible for the design, development, and integration of a high-performance, reliable, and safe battery pack that delivers the maximum power and energy required for our electric race car to achieve peak performance throughout the competition.
                    </p>
                    <h3>Key Responsibilities:</h3>
                    <ul>
                        <li>Electrical design of high voltage and low voltage architectures</li>
                        <li>Cell selection and testing for battery performance characterization</li>
                        <li>Charge and discharge testing procedure development</li>
                        <li>Mechanical design of battery module structures and mounting</li>
                        <li>Integration of battery cells with Battery Management Systems</li>
                    </ul>
                </div>

                {/* Chassis Subteam */}
                <div className="subteam-info">
                    <h2>Chassis Subteam Overview:</h2>
                    <p>
                        The Chassis subteam is dedicated to designing and constructing a rules-compliant, rigid structure that integrates all other subteam components while minimizing weight and maximizing performance.
                    </p>
                    <h3>Key Responsibilities:</h3>
                    <ul>
                        <li>Computer-Aided Design (CAD) of structures, including FEA validation</li>
                        <li>Optimizing designs for rigidity and weight reduction</li>
                        <li>Development of Chassis Jig</li>
                        <li>Fabrication and Welding of vehicle frame</li>
                    </ul>
                </div>

                {/* Electronics Subteam */}
                <div className="subteam-info">
                    <h2>Electronics Subteam Overview:</h2>
                    <p>
                        The Electronics subteam is dedicated to designing and manufacturing a high-quality low voltage electrical system that prioritizes safety and reliability.
                    </p>
                    <h3>Key Responsibilities:</h3>
                    <ul>
                        <li>Development of low voltage system architecture</li>
                        <li>Design of various circuitry and microcontroller software</li>
                        <li>Ensuring driver safety in case of system malfunctions</li>
                        <li>Collecting and analyzing vehicle data</li>
                    </ul>
                </div>

                {/* Powertrain Subteam */}
                <div className="subteam-info">
                    <h2>Powertrain Subteam Overview:</h2>
                    <p>
                        The Powertrain subteam is responsible for the transmission of electrical power from the battery to mechanical power at the wheels.
                    </p>
                    <h3>Key Responsibilities:</h3>
                    <ul>
                        <li>Selection, integration, and tuning of critical components</li>
                        <li>Computer-Aided Design (CAD) of parts, subassemblies, and assemblies</li>
                        <li>Design and implementation of vehicle cooling systems</li>
                        <li>Electrical integration of conductors and connectors</li>
                    </ul>
                </div>

                {/* Suspension Subteam */}
                <div className="subteam-info">
                    <h2>Suspension Subteam Overview:</h2>
                    <p>
                        The Suspension subteam provides a reliable and predictable interaction between the car and the ground.
                    </p>
                    <h3>Key Responsibilities:</h3>
                    <ul>
                        <li>Utilizing vehicle dynamics fundamentals to optimize interactions between components</li>
                        <li>Computer-Aided Design (CAD) of parts, subassemblies, and assemblies</li>
                        <li>Lap simulation to understand and optimize vehicle handling characteristics</li>
                        <li>Fabrication and testing of components</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default EngineeringMoreInfo;
