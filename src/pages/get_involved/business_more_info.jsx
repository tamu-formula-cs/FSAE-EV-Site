import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const BusinessMoreInfo = () => {
    return (
        <>
            <Header />

            <div className="max-w-4xl mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6">More Information About the Business Team</h1>

                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-2">Sales Subteam Overview:</h2>
                    <p className="mb-4">
                        The Sales subteam is responsible for securing financial support, establishing partnerships, and fostering relationships with sponsors, alumni, and recruiters for the engineering team. The funds acquired from sponsors will directly contribute to the budget for the competition team for the respective year.
                    </p>
                    <h3 className="text-lg font-bold mb-2">Key Responsibilities:</h3>
                    <ul className="list-disc pl-4">
                        <li>Obtain corporate, individual, and grant-based financial support for the engineering team</li>
                        <li>Conduct market research on potential new sponsorship leads</li>
                        <li>Contact potential new sponsors, alumni, and recruiters about partnerships</li>
                        <li>Orchestrate and organize events with sponsors</li>
                        <li>Retain and invest in existing sponsorship partners</li>
                        <li>Investigate recruitment opportunities, materials contributions, and other potential benefits to the team</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-2">Human Resources Subteam Overview:</h2>
                    <p className="mb-4">
                        The HR subteam is responsible for fostering a positive and productive environment within the organization. The subteam focuses on attracting and retaining talented individuals while holding them to a high professional standard reflective of Texas A&M Formula Electric’s values.
                    </p>
                    <h3 className="text-lg font-bold mb-2">Key Responsibilities:</h3>
                    <ul className="list-disc pl-4">
                        <li>Develop and implement recruitment strategies for new team members</li>
                        <li>Coordinate training programs for team members on technical skills, team collaboration, and other protocols</li>
                        <li>Manage team member records, including participation, performance evaluations, and progress tracking</li>
                        <li>Oversee conflict resolution processes within the team to maintain a positive and productive environment</li>
                        <li>Implement support initiatives and professional development for team members</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-bold mb-2">Finance Subteam Overview:</h2>
                    <p className="mb-4">
                        The Finance subteam is responsible for maintaining Texas A&M Formula Electric’s fiscal responsibility and financial processes, as well as helping the engineering and business teams make informed purchasing decisions.
                    </p>
                    <h3 className="text-lg font-bold mb-2">Key Responsibilities:</h3>
                    <ul className="list-disc pl-4">
                        <li>Ensure that the organization's finances are accurate and effectively communicated</li>
                        <li>Manage and track full-team and engineering subteam budgets</li>
                        <li>Continue to develop automated bookkeeping systems to track expenditures and revenues</li>
                        <li>Build financial projections based on spending, revenues, and engineering subteam control accounts</li>
                        <li>Execute and organize engineering subteam purchases, reimbursements, and returns</li>
                        <li>Act as a liaison between the engineering team, business team, and Mechanical Engineering Accounting Department</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BusinessMoreInfo;
