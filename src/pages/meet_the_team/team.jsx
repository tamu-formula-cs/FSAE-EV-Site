import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import TeamImage from '../../assets/team-img.png'
import './team.css'

export default function Team() {
    return <div className="team-main-container">
        <Header />
        <section className="team-inner-container">
            
            <h1 className="team-title">MEET THE TEAM</h1>
            <img src={TeamImage} alt="Team Image" className='team-image'/>
            
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
                        Mechanical Chief
                    </h1>
                    <h1 className="name">
                        Ethan Reich
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
                    AERODYNAMICS
                </h1>
                <h1 className="team-lead"><span className="team-lead-bold">Team Lead: </span>Phillip Bertschy</h1>
                <h1 className="name">Brody Hesseltine,  Luke Smith, Dennis Tan, <br/>Anirudh Tummalapalli</h1>
            </div>

            <div className="subteam-section">
                <h1 className="team-div-title">
                    Battery
                </h1>
                <h1 className="team-lead"><span className="team-lead-bold">Team Lead: </span>Alan Yan</h1>
                <h1 className="name">Jeremy Hinton, Andrew Lafferty, Raaj Patel, <br/>Jesus Ramos, Julian Tan</h1>
            </div>

            <div className="subteam-section">
                <h1 className="team-div-title">
                    CHASSIS
                </h1>
                <h1 className="team-lead"><span className="team-lead-bold">Team Lead: </span>Caleb Miller</h1>
                <h1 className="name">Jose Cruz, Jonathan Lozano, Jireh Lagman, Joshua Kraly</h1>
            </div>

            <div className="subteam-section">
                <h1 className="team-div-title">
                    Electronics
                </h1>
                <h1 className="team-lead"><span className="team-lead-bold">Team Lead: </span>Jacinto Rodriguez Shahin</h1>
                <h1 className="name">Praneeth Boddu, Giosef Hernandez, Blake Kruse, <br/> Adrian Rojas, Joshua Wu</h1>
            </div>

            <div className="subteam-section">
                <h1 className="team-div-title">
                    Powertrain
                </h1>
                <h1 className="team-lead"><span className="team-lead-bold">Team Lead: </span>Adan Corral</h1>
                <h1 className="name">Robert Haefner, Nick Martin, Luis Diaz-Santini, <br/>Brody Smith, Purav Datta, Benjamin Smith</h1>
            </div>

            <div className="subteam-section">
                <h1 className="team-div-title">
                    Suspension
                </h1>
                <h1 className="team-lead"><span className="team-lead-bold">Team Lead: </span>Joseph Weaver</h1>
                <h1 className="name">Matt Cain, David Castro, Mark Cheek, <br/>Brendan Wyatt</h1>
            </div>

            <div className="subteam-section">
                <h1 className="team-div-title">
                    Business
                </h1>
                <h1 className="team-lead"><span className="team-lead-bold">Business Chief: </span>Ryan Lucas</h1>
            </div>

            <div className="subteam-section">
                <h1 className="team-div-title">
                    Sales
                </h1>
                <h1 className="team-lead"><span className="team-lead-bold">Team Lead: </span>Holden Sparr</h1>
                <h1 className="name">Edison An, Mason Cuff, Vishnu Nataraja, <br/>Ian Schandlbauer</h1>
            </div>

            <div className="subteam-section">
                <h1 className="team-div-title">
                    Marketing
                </h1>
                <h1 className="team-lead"><span className="team-lead-bold">Team Lead: </span>Marcela Gonzalez</h1>
                <h1 className="name">Gerardo Hernandez, Zoe Fang, Zoe May, <br/>Megan Williams</h1>
            </div>

            <div className="subteam-section">
                <h1 className="team-div-title">
                    Finance
                </h1>
                <h1 className="team-lead"><span className="team-lead-bold">Team Lead: </span>Aidan Arnett</h1>
                <h1 className="name">James Dorsey, Dario Emad, Jeremy Macias</h1>
            </div>

        </section>
        <Footer />
    </div>
}