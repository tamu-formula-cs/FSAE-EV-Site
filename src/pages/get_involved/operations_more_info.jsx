import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const OperationsMoreInfo = () => {
    return (
        <>
            <Header />
            <div className="max-w-4xl mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6">More Information About the Operations Team</h1>

                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-2">Transportation Logistics Subteam Overview:</h2>
                    <p className="mb-4">
                        The Transportation Logistics subteam is responsible for managing the transportation and logistics operations associated with the competition car. Subteam members will collaborate closely with the engineering team to ensure the safe and timely transportation of the competition car to various locations, including marketing events, testing at Rellis, and competition.
                    </p>
                    <h3 className="text-lg font-bold mb-2">Key Responsibilities:</h3>
                    <ul className="list-disc pl-4">
                        <li>Oversee a comprehensive transportation schedule for the competition car</li>
                        <li>Coordinate loading and unloading activities with the engineering team</li>
                        <li>Develop and implement safety protocols for loading, unloading, and transporting the competition car</li>
                        <li>Ensure compliance with safety regulations during transit</li>
                        <li>Maintain accurate records of incidents that occur during transit</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-2">Facilities and Safety Subteam Overview:</h2>
                    <p className="mb-4">
                        The Facilities and Safety subteam is responsible for ensuring the efficient and safe operation of engineering facilities. These responsibilities encompass various aspects of facility management, inventory control, relationship management, and safety compliance. Subteam members will work closely with internal teams, external partners, and regulatory bodies to streamline operations across multiple workspaces.
                    </p>
                    <h3 className="text-lg font-bold mb-2">Key Responsibilities:</h3>
                    <ul className="list-disc pl-4">
                        <li>Evaluate and develop systems to identify inefficiencies and streamline operations in engineering facilities</li>
                        <li>Process incoming shipments and maintain an inventory system for tracking materials</li>
                        <li>Manage relationships with the university and relevant sponsors to secure workspaces and testing locations for the competition car</li>
                        <li>Establish and regularly assess safety procedures across multiple workspaces in compliance with industry standards and regulations</li>
                        <li>Store and preserve past competition cars</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-bold mb-2">Computer Science Team Member Subteam Overview:</h2>
                    <p className="mb-4">
                        The Computer Science subteam will be an integral part of interdisciplinary projects, collaborating closely with both engineering and business teams. The subteam’s primary focus will be on developing solutions that leverage automation, machine learning, and data analysis to address various challenges faced by the organization.
                    </p>
                    <h3 className="text-lg font-bold mb-2">Key Responsibilities:</h3>
                    <ul className="list-disc pl-4">
                        <li>Work collaboratively in small groups of 4-5 individuals to conceptualize, design, and implement software solutions that meet the project objectives</li>
                        <li>Develop robust and scalable software solutions, with a particular emphasis on automation, machine learning algorithms, and data analysis techniques</li>
                        <li>Maintain and continue to develop the Electric Vehicle team’s website</li>
                        <li>Take ownership of documenting all aspects of the software development process, including architecture, codebase, APIs, data models, and algorithms</li>
                        <li>Ensure that documentation is clear, comprehensive, and accessible to both technical and non-technical stakeholders</li>
                        <li>Conduct thorough testing and debugging of software to identify and rectify and defects or inconsistencies</li>
                        <li>Actively seek opportunities to enhance existing processes, tools, and methodologies to improve efficiency and effectiveness</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default OperationsMoreInfo;
