import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import TeamImage from '../../assets/team-img.jpg'
import './team.css'

export default function Team() {
    return <div className="team-main-container">
        <Header />
        <section className="team-inner-container">
            
            <h1 className="team-title">MEET THE TEAM</h1>
            <img src={TeamImage} alt="Team Image" className='team-image'/>
            
            <div className="subteam-container">
                <div className="subteam-section">
                    <h1 className="team-div-title">
                        PROJECT MANAGER
                    </h1>
                    <h1 className="name">
                        Gerry Mullins
                    </h1>
                </div>

                <div className="subteam-section">
                    <h1 className="team-div-title">
                        Electrical Chief
                    </h1>
                    <h1 className="name">
                        Jeff Cunningham
                    </h1>
                </div>

                <div className="subteam-section">
                    <h1 className="team-div-title">
                        Business
                    </h1>
                    <h1 className="team-lead"><span className="team-lead-bold">Business Chief: </span>Ryan Lucas</h1>
                </div>

                <div className="subteam-section">
                    <h1 className="team-div-title">
                        Mechanical Chief
                    </h1>
                    <h1 className="name">
                        Ethan Reich
                    </h1>
                </div>

                <div className="subteam-section">
                    <h1 className="team-div-title">
                        AERODYNAMICS
                    </h1>
                    <h1 className="team-lead"><span className="team-lead-bold">Team Lead: </span>Phillip Bertschy</h1>
                    <h1 className="name">Brody Hesseltine, Luke Smith, Dennis Tan, Anirudh Tummalapalli</h1>
                    <h1 className="team-desc">The Aerodynamics subteam is dedicated to designing and constructing efficient aerodynamics packages that are reliable, adjustable, and high-performing. The goal of the team is to increase vehicle downforce and reduce drag in a consistent manner to maximize cornering grip while maintaining a predictable feel for the driver.</h1>
                </div>

                <div className="subteam-section">
                    <h1 className="team-div-title">
                        Battery
                    </h1>
                    <h1 className="team-lead"><span className="team-lead-bold">Team Lead: </span>Alan Yan</h1>
                    <h1 className="name">Jeremy Hinton, Andrew Lafferty, Raaj Patel, Jesus Ramos, Julian Tan</h1>
                    <h1 className="team-desc">The Battery subteam is responsible for the design, development, and integration a high-performance, reliable, and safe battery pack that delivers the maximum power and energy required for our electric race car to achieve peak performance throughout the competition.​ Engineers on the Battery subteam are not limited to their respective major, and will gain exposure and knowledge from both mechanical and electrical.</h1>
                </div>

                <div className="subteam-section">
                    <h1 className="team-div-title">
                        CHASSIS
                    </h1>
                    <h1 className="team-lead"><span className="team-lead-bold">Team Lead: </span>Caleb Miller</h1>
                    <h1 className="name">Jose Cruz, Jonathan Lozano, Jireh Lagman, Joshua Kraly</h1>
                    <h1 className="team-desc">The Chassis subteam is dedicated to designing and constructing a rules-compliant, rigid structure that integrates all other subteam components while minimizing weight and maximizing performance. The chassis design prioritizes the performance specifications of the suspension sub-team and coordinates the dimensional needs of all other subteams to create an optimally packaged vehicle.</h1>
                </div>

                <div className="subteam-section">
                    <h1 className="team-div-title">
                        Electronics
                    </h1>
                    <h1 className="team-lead"><span className="team-lead-bold">Team Lead: </span>Jacinto Rodriguez Shahin</h1>
                    <h1 className="name">Praneeth Boddu, Giosef Hernandez, Blake Kruse, Adrian Rojas, Joshua Wu</h1>
                    <h1 className="team-desc">The Electronics subteam is dedicated to designing and manufacturing a high-quality low voltage electrical system that prioritizes safety and reliability. In the case of any system malfunction, the electrical system will ensure safe vehicle shutdown.​</h1>
                </div>

                <div className="subteam-section">
                    <h1 className="team-div-title">
                        Powertrain
                    </h1>
                    <h1 className="team-lead"><span className="team-lead-bold">Team Lead: </span>Adan Corral</h1>
                    <h1 className="name">Robert Haefner, Nick Martin, Luis Diaz-Santini, Brody Smith, Purav Datta, Benjamin Smith</h1>
                    <h1 className="team-desc">The Powertrain subteam is responsible for the transmission of electrical power from the battery to mechanical power at the wheels. ​Specifically, the subteam aims to produce a powertrain that is reliable, easy to tune, and comfortable for the driver to work with, while also providing the power expected for strong performance at competition​.</h1>
                </div>

                <div className="subteam-section">
                    <h1 className="team-div-title">
                        Suspension
                    </h1>
                    <h1 className="team-lead"><span className="team-lead-bold">Team Lead: </span>Joseph Weaver</h1>
                    <h1 className="name">Matt Cain, David Castro, Mark Cheek, Brendan Wyatt</h1>
                    <h1 className="team-desc">The Suspension subteam provides a reliable and predictable interaction between the car and the ground. It needs to absorb pavement irregularities, control chassis movement for a stable aerodynamic platform, and keep the tires in their optimal performance windows.</h1>
                </div>

                <div className="subteam-section">
                    <h1 className="team-div-title">
                        Finance
                    </h1>
                    <h1 className="team-lead"><span className="team-lead-bold">Team Lead: </span>Aidan Arnett</h1>
                    <h1 className="name">James Dorsey, Dario Emad, Jeremy Macias</h1>
                    <h1 className="team-desc">The Finance subteam is responsible for maintaining Texas A&M Formula Electric’s fiscal responsibility and financial processes, as well as helping the engineering and business teams make informed purchasing decisions.</h1>
                </div>

                <div className="subteam-section">
                    <h1 className="team-div-title">
                        Marketing
                    </h1>
                    <h1 className="team-lead"><span className="team-lead-bold">Team Lead: </span>Marcela Gonzalez</h1>
                    <h1 className="name">Gerardo Hernandez, Zoe Fang, Zoe May, Megan Williams</h1>
                    <h1 className="team-desc">The marketing subteam is responsible for shaping and promoting the brand image of Texas A&M Formula Electric across various platforms. Marketing focuses on creating and managing a consistent brand presence on our social media platforms and on campus that appeals to professional and industry sponsors as well as a younger student audience.</h1>
                </div>

                <div className="subteam-section">
                    <h1 className="team-div-title">
                        Sales
                    </h1>
                    <h1 className="team-lead"><span className="team-lead-bold">Team Lead: </span>Holden Sparr</h1>
                    <h1 className="name">Edison An, Mason Cuff, Vishnu Nataraja, Ian Schandlbauer</h1>
                    <h1 className="team-desc">
                    The Sales subteam is responsible for securing financial support, establishing partnerships, and fostering relationships with sponsors, alumni, and recruiters for the engineering team. The funds acquired from sponsors will directly contribute to the budget for the competition team for the respective year.
                    </h1>
                </div>
            </div>

        </section>
        <Footer />
    </div>
}