import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Car from '../../assets/car.png';
import './home.css';

export default function Home(){
    return <div className="main-containter">
        <Header/>

        <div className="landing-container">
            <h1>WE ARE TEXAS A&M FORMULA ELECTRIC</h1>
        </div>

        <div className="countdown-container">
            <h1>COMPETITION IN</h1>
            <div className="countdown">
                <div className="countdown-item">
                    <h1><span className="countdown-number">32</span> days</h1>
                </div>
                <div className="countdown-item">
                    <h1><span className='countdown-number'>04</span> hours</h1>
                </div>
                <div className="countdown-item">
                    <h1><span className='countdown-number'>42</span> minutes</h1>
                </div>
                <div className="countdown-item">
                    <h1><span className='countdown-number'>23</span> seconds</h1>
                </div>
            </div>
        </div>

        <div className="car-showcase">
            <h1 className='showcase-title'>AME24</h1>
            <img src={Car} alt="AME24" className='car-image'/>
            <div className="stats-container">
                <div className="stat">
                    <h1>0-60</h1>
                    <h2>2.5s</h2>
                </div>
                <div className="stat">
                    <h1>Top Speed</h1>
                    <h2>120mph</h2>
                </div>
                <div className="stat">
                    <h1>Weight</h1>
                    <h2>400lbs</h2>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
}