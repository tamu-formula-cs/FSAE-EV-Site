import React, { useState } from "react";
import Header from '@/components/header/header';
import GetInvolvedVideo from '../../assets/intro_vid.mp4';
import Footer from '@/components/footer/footer';
import { Link } from "react-router-dom";
import TeamCard from "@/components/SubteamCard";

export default function Recruiting() {

    return (
        <>
            <Header />
            <div className="p-16 space-y-24 max-w-7xl mx-auto">
                {/* Header Section */}

                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center space-y-8">
                        <h1 className="text-5xl font-bold text-gray-900 text-center">
                            Join Us!
                        </h1>
                        <p className="text-lg text-gray-700">
                            Explore the different teams that make up our organization. Whether you're interested in business, engineering, or operations, there's a place for you to contribute and grow!
                        </p>
                        <div className="flex flex-col items-center space-y-5">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSekwsZ7K0MFScxrIgcgv7Iqhqn1iXJTEEKHOSf_kgs8_tdieg/viewform?usp=sf_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-maroon text-white px-6 py-3 rounded-lg text-lg hover:bg-tamu-maroon transition-colors"
                            >
                                Apply Engineering! (Apprentice)
                            </a>
                            <div className="flex space-x-5">
                                <a
                                    href="https://forms.office.com/pages/responsepage.aspx?id=44HzaNpGuUe6V28yK48NoSrqd-GpUQxLog_m04LE3ExUNUZUQVY4OVA2V0pVUDFCWE9aNU84NFpEUy4u"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-maroon text-white px-6 py-3 rounded-lg text-lg hover:bg-tamu-maroon transition-colors"
                                >
                                    Apply Business!
                                </a>
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSc5lz2CDG8bV8xVcwv9XsgCUsVMwg8ehZ37KLrOcfLQU92W7A/viewform"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-maroon text-white px-6 py-3 rounded-lg text-lg hover:bg-tamu-maroon transition-colors"
                                >
                                    Apply Operations!
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <video
                            className="w-full h-80 rounded-lg shadow-lg"
                            src={GetInvolvedVideo}
                            controls
                        />
                    </div>
                </section>

                {/* Participation Section */}
                <section className="space-y-8">
                    <h2 className="text-3xl font-semibold text-gray-900">How do I participate?</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-maroon mb-4">Engineering Full-Team</h3>
                            <p className="text-gray-700 text-sm">
                                The engineering team on Texas A&M Formula SAE Electric constists of around 35 full-time members who actively contribute to designing, building, and testing the car throughout the competition year. We accept undergraduate engineering students from Texas A&M through an application process that opens up in the spring semester for the following competition year. Incoming seniors enrolled in Mechanical Engineering, and Electrical Engineering may be eligible to receive capstone credit as part of the project.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg relative">
                            <div className="absolute top-6 right-8">
                                <a href="#engineering" className="text-maroon text-sm font-semibold">View Subteams</a>
                            </div>
                            <h3 className="text-xl font-bold text-maroon mb-4">Engineering Apprentice</h3>
                            <p className="text-gray-700 text-sm">
                                Our apprentice program aims to provide freshmen through juniors the opportunity to get involved with the team. Apprentices are placed onto a subteam aligning with their interests and skills, where they work closely with full-team members on real engineering projects. This program is designed to help students build foundational skills and knowledge that will develop their engineering skillset and prepare them for full-team membership in the future. We accept undergraduate engineering students from Texas A&M through an application process that opens in the fall semester for the current competition year.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg relative">
                            <div className="absolute top-6 right-8">
                                <a href="#business" className="text-maroon text-sm font-semibold">View Subteams</a>
                            </div>
                            <h3 className="text-xl font-bold text-maroon mb-4">Business</h3>
                            <p className="text-gray-700 text-sm">
                                The business team is responsible for managing various aspects that support the Formula SAE Electric program. This includes securing sponsorships to fund the team, handling marketing efforts to promote the team and attract support, managing financial planning and budgeting, and ensuring effective team organization and communication. The business team plays a vital role in providing the necessary resources and visibility to support the engineering efforts.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg relative">
                            <div className="absolute top-6 right-8">
                                <a href="#operations" className="text-maroon text-sm font-semibold">View Subteams</a>
                            </div>
                            <h3 className="text-xl font-bold text-maroon mb-4">Operations</h3>
                            <p className="text-gray-700 text-sm">
                                The operations team ensures the smooth day-to-day functioning of the Formula SAE Electric program. This team manages logistics, including transportation and supply chain for parts and equipment. They are also responsible for maintaining the team’s facilities, ensuring that the workspace is well-organized and equipped. Additionally, the operations team handles computer science tasks, such as developing software tools and managing IT infrastructure to support team activities and data management.
                            </p>
                        </div>
                    </div>
                </section>

                {/*Events*/}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                            <h3 className="text-xl font-bold text-maroon mb-2">FSAE EV Coffee Chats</h3>
                            <p className="text-gray-700">
                                Come out to meet the team, and ask any questions you have! <br /><br /><br />
                                <b>When?</b> Wednesday, August 28th 2024, 5:00 PM - 7:00 PM<br />
                                <b>Where?</b> Zachry Starbucks and Quadbucks<br />
                            </p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                            <h3 className="text-xl font-bold text-maroon mb-2">SAE General Informational</h3>
                            <p className="text-gray-700">
                                Get all the information you need about SAE, learn about our development program, and hear from the project teams. <br /><br />
                                <b>When?</b> Monday, August 26th 2024, 7:00 PM - 9:00 PM<br />
                                <b>Where?</b> HECC 108<br />
                            </p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                            <h3 className="text-xl font-bold text-maroon mb-2">Project Team Informational</h3>
                            <p className="text-gray-700">
                                Learn how to get involved with SAE and Texas A&M Formula SAE Electric! <br /><br /> <br />
                                <b>When?</b> Wednesday, August 28th 2024, 7:00 PM - 9:00 PM<br />
                                <b>Where?</b> HECC 207<br />
                            </p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow">
                            <h3 className="text-xl font-bold text-maroon mb-2">Engineering Applications Close</h3>
                            <p className="text-gray-700">
                                <br /><br />
                                <b>When?</b> Friday, August 30th 2024, 11:59 PM<br />
                                <b>Where?</b> Online<br />
                            </p>
                        </div>
                    </div>
                </section>

                <section id="engineering" className="space-y-8">
                    <h2 className="text-3xl font-semibold text-gray-900 flex justify-between items-center">
                        Engineering Teams
                        <a
                            className="bg-maroon text-white px-4 py-2 rounded-lg text-lg hover:bg-tamu-maroon transition-colors"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfqrb4vc-XoosoE9pfsxD8bJV0U_gP9SCxY0DHdfq97Fp4jHw/viewform?pli=1">
                            Apply Engineering!
                        </a>
                    </h2>

                    <div className="space-y-8">
                        <TeamCard
                            title="Aerodynamics"
                            description="The Aerodynamics subteam is dedicated to designing and constructing efficient aerodynamics packages that are reliable, adjustable, and high-performing. The goal of the team is to increase vehicle downforce and reduce drag in a consistent manner to maximize cornering grip while maintaining a predictable feel for the driver."
                            responsibilities={[
                                "Computer Aided Design (CAD) of Parts, subassemblies, and assemblies including FEA validation",
                                "CFD Analysis for full car performance optimization",
                                "Manufacture of various composite and metal items",
                                "Justification of Aerodynamics through Lap simulation and vehicle dynamics analysis",
                                "Managing mechanical packaging and design integration with other subsystems, including Chassis",
                                "Develop adjustable Mounting of various structures"
                            ]}
                        />

                        <TeamCard
                            title="Battery"
                            description="The Battery subteam is responsible for the design, development, and integration of a high-performance, reliable, and safe battery pack that delivers the maximum power and energy required for our electric race car to achieve peak performance throughout the competition."
                            responsibilities={[
                                "Electrical design of high voltage and low voltage architectures",
                                "Cell selection and testing for battery performance characterization",
                                "Charge and discharge testing procedure development",
                                "Mechanical design of battery module structures and mounting",
                                "Integration of battery cells with Battery Management Systems"
                            ]}
                        />

                        <TeamCard
                            title="Chassis"
                            description="The Chassis subteam is dedicated to designing and constructing a rules-compliant, rigid structure that integrates all other subteam components while minimizing weight and maximizing performance."
                            responsibilities={[
                                "Computer-Aided Design (CAD) of structures, including FEA validation",
                                "Optimizing designs for rigidity and weight reduction",
                                "Development of Chassis Jig",
                                "Fabrication and Welding of vehicle frame"
                            ]}
                        />

                        <TeamCard
                            title="Electronics"
                            description="The Electronics subteam is dedicated to designing and manufacturing a high-quality low voltage electrical system that prioritizes safety and reliability."
                            responsibilities={[
                                "Development of low voltage system architecture",
                                "Design of various circuitry and microcontroller software",
                                "Ensuring driver safety in case of system malfunctions",
                                "Collecting and analyzing vehicle data"
                            ]}
                        />

                        <TeamCard
                            title="Powertrain"
                            description="The Powertrain subteam is responsible for the transmission of electrical power from the battery to mechanical power at the wheels."
                            responsibilities={[
                                "Selection, integration, and tuning of critical components",
                                "Computer-Aided Design (CAD) of parts, subassemblies, and assemblies",
                                "Design and implementation of vehicle cooling systems",
                                "Electrical integration of conductors and connectors"
                            ]}
                        />
                        <TeamCard
                            title="Software"
                            description="The Software subteam is dedicated to developing and maintaining the software systems that control and monitor the vehicle’s performance, safety, and reliability."
                            responsibilities={[
                                "Development of embedded software for vehicle control systems",
                                "Integration of sensors and actuators with vehicle control systems",
                                "Development of data acquisition and telemetry systems",
                                "Development of simulation tools for vehicle performance analysis"
                            ]}
                        />
                        <TeamCard
                            title="Suspension"
                            description="The Suspension subteam provides a reliable and predictable interaction between the car and the ground."
                            responsibilities={[
                                "Utilizing vehicle dynamics fundamentals to optimize interactions between components",
                                "Computer-Aided Design (CAD) of parts, subassemblies, and assemblies",
                                "Lap simulation to understand and optimize vehicle handling characteristics",
                                "Fabrication and testing of components"
                            ]}
                        />
                    </div>
                </section>

                <section id="business" className="space-y-8">
                    <h2 className="text-3xl font-semibold text-gray-900 flex justify-between items-center">
                        Business Teams
                        <a
                            className="bg-maroon text-white px-4 py-2 rounded-lg text-lg hover:bg-tamu-maroon transition-colors"
                            href="https://forms.office.com/pages/responsepage.aspx?id=44HzaNpGuUe6V28yK48NoSrqd-GpUQxLog_m04LE3ExUNUZUQVY4OVA2V0pVUDFCWE9aNU84NFpEUy4u">
                            Apply Business!
                        </a>
                    </h2>

                    <div className="space-y-8">
                        <TeamCard
                            title="Sales"
                            description="The sales subteam is responsible for securing financial support, establishing partnerships, and fostering relationships with sponsors, alumni, and recruiters for the engineering team."
                            responsibilities={[
                                "Obtain corporate, individual, and grant-based financial support for the engineering team",
                                "Conduct market research on potential new sponsorship leads",
                                "Contact potential new sponsors, alumni, and recruiters about partnerships",
                                "Orchestrate and organize events with sponsors",
                                "Retain and invest in existing sponsorship partners",
                                "Investigate recruitment opportunities, materials contributions, and other potential benefits to the team"
                            ]}
                        />

                        <TeamCard
                            title="Human Resources"
                            description="The HR subteam is responsible for fostering a positive and productive environment within the organization."
                            responsibilities={[
                                "Develop and implement recruitment strategies for new team members",
                                "Coordinate training programs for team members on technical skills, team collaboration, and other protocols",
                                "Manage team member records, including participation, performance evaluations, and progress tracking",
                                "Oversee conflict resolution processes within the team",
                                "Implement support initiatives and professional development for team members"
                            ]}
                        />

                        <TeamCard
                            title="Finance"
                            description="The Finance subteam is responsible for maintaining Texas A&M Formula Electric’s fiscal responsibility and financial processes."
                            responsibilities={[
                                "Ensure that the organization's finances are accurate and effectively communicated",
                                "Manage and track full-team and engineering subteam budgets",
                                "Continue to develop automated bookkeeping systems",
                                "Build financial projections based on spending, revenues, and engineering subteam control accounts",
                                "Execute and organize engineering subteam purchases, reimbursements, and returns",
                                "Act as a liaison between the engineering team, business team, and Mechanical Engineering Accounting Department"
                            ]}
                        />

                        <TeamCard
                            title="Marketing"
                            description="The marketing subteam is responsible for shaping and promoting the brand image of Texas A&M Formula Electric across various platforms."
                            responsibilities={[
                                "Create and manage a consistent brand image and Social Media presence among a variety of platforms",
                                "Help the sales subteam foster their relationships with sponsors by providing photo and video content",
                                "Lead community outreach events that help foster our relationship with the student body",
                                "Maintain relationships with alumni via emails and social media"
                            ]}
                        />
                    </div>
                </section>

                <section id="operations" className="space-y-8">
                    <h2 className="text-3xl font-semibold text-gray-900 flex justify-between items-center">
                        Operations Teams
                        <a
                            className="bg-maroon text-white px-4 py-2 rounded-lg text-lg hover:bg-tamu-maroon transition-colors"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSc5lz2CDG8bV8xVcwv9XsgCUsVMwg8ehZ37KLrOcfLQU92W7A/viewform">
                            Apply Operations!
                        </a>
                    </h2>

                    <div className="space-y-8">
                        <TeamCard
                            title="Transportation Logistics"
                            description="The Transportation Logistics subteam is responsible for managing the transportation and logistics operations associated with the competition car. Subteam members will collaborate closely with the engineering team to ensure the safe and timely transportation of the competition car to various locations, including marketing events, testing at Rellis, and competition."
                            responsibilities={[
                                "Oversee a comprehensive transportation schedule for the competition car",
                                "Coordinate loading and unloading activities with the engineering team",
                                "Develop and implement safety protocols for loading, unloading, and transporting the competition car",
                                "Ensure compliance with safety regulations during transit",
                                "Maintain accurate records of incidents that occur during transit"
                            ]}
                        />

                        <TeamCard
                            title="Facilities and Safety"
                            description="The Facilities and Safety subteam is responsible for ensuring the efficient and safe operation of engineering facilities. These responsibilities encompass various aspects of facility management, inventory control, relationship management, and safety compliance. Subteam members will work closely with internal teams, external partners, and regulatory bodies to streamline operations across multiple workspaces."
                            responsibilities={[
                                "Evaluate and develop systems to identify inefficiencies and streamline operations in engineering facilities",
                                "Process incoming shipments and maintain an inventory system for tracking materials",
                                "Manage relationships with the university and relevant sponsors to secure workspaces and testing locations for the competition car",
                                "Establish and regularly assess safety procedures across multiple workspaces in compliance with industry standards and regulations",
                                "Store and preserve past competition cars"
                            ]}
                        />


                    </div>
                </section>

                <div className="pb-24"></div>
            </div >
            <Footer />
        </>
    );
}