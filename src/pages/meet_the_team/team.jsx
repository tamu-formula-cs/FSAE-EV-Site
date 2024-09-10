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
                        Caleb Miller
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
                        Business Chief
                    </h1>
                    <h1 className="team-lead">Ryan Lucas</h1>
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
                    <h1 className="name">David Thomas, Dennis Tan, Thomas Sepanski, Brody Smith, David Castro, Preston Montgomery</h1>
                </div>

                <div className="subteam-section">
                    <h1 className="team-div-title">
                        Battery
                    </h1>
                    <h1 className="team-lead"><span className="team-lead-bold">Team Lead: </span>Alan Yan</h1>
                    <h1 className="name">Aidan Arnett, Sebastian Regener, Jack O'Mahoney, Alexis Rappa, Jeremy Hinton, Eli Ringle</h1>
                </div>

                <div className="subteam-section">
                    <h1 className="team-div-title">
                        CHASSIS
                    </h1>
                    <h1 className="team-lead"><span className="team-lead-bold">Team Lead: </span>Joshua Kraly</h1>
                    <h1 className="name">Alex Scott, Reagan Hoffmann</h1>
                </div>

                <div className="subteam-section">
                    <h1 className="team-div-title">
                        Electronics
                    </h1>
                    <h1 className="team-lead"><span className="team-lead-bold">Team Lead: </span>Joshua Wu</h1>
                    <h1 className="name">Sean Wall, Jaxon Grove, Qidao Lian, Gio Hernandez, Ryan Mackereth</h1>
                </div>

                <div className="subteam-section">
                    <h1 className="team-div-title">
                        Powertrain
                    </h1>
                    <h1 className="team-lead"><span className="team-lead-bold">Team Lead: </span>Ethan Reich</h1>
                    <h1 className="name">Purav Datta, Liam Brennan, Andrew Schonhoff, Jonathan Lozano</h1>
                </div>

                <div className="subteam-section">
                    <h1 className="team-div-title">
                        Software
                    </h1>
                    <h1 className="team-lead"><span className="team-lead-bold">Team Lead: </span>Athul Suresh</h1>
                    <h1 className="name">Bari Vadaria, Vedarth Atreya, Teymur Hajiyev </h1>
                </div>

                <div className="subteam-section">
                    <h1 className="team-div-title">
                        Suspension
                    </h1>
                    <h1 className="team-lead"><span className="team-lead-bold">Team Lead: </span>Mark Cheek</h1>
                    <h1 className="name">Mark Menezes, Andrew Liu, Lawson Canter, Jose Cruz, Emir Velic</h1>
                </div>

                <div className="subteam-section">
                    <h1 className="team-div-title">
                        Finance
                    </h1>
                    <h1 className="team-lead"><span className="team-lead-bold">Team Lead: </span>Aidan Arnett</h1>
                    <h1 className="name">Jeremy Macias</h1>
                </div>

                <div className="subteam-section">
                    <h1 className="team-div-title">
                        Marketing
                    </h1>
                    <h1 className="team-lead"><span className="team-lead-bold">Team Lead: </span>Megan Williams</h1>
                    <h1 className="name">Zoe May, Ana Krayer, Nat Chumpirom, John Estes, Gaurav Nimmagadda, Ellie Vaughan, Gerardo Hernandez Espinoza</h1>
                </div>

                <div className="subteam-section">
                    <h1 className="team-div-title">
                        Sales
                    </h1>
                    <h1 className="team-lead"><span className="team-lead-bold">Team Lead: </span>Holden Sparr</h1>
                    <h1 className="name">Mason Cuff, Yashas Varma</h1>
                </div>
            </div>

        </section>
        <Footer />
    </div>
}