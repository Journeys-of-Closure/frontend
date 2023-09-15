import {NavBar} from '../../components/ui/Navbar/NavBar'
import './HomePage.css';
function HomeSection () {
    return (
        <>
        <div id='homeSection'>
            <div id='homeBackgroundImg'>
                <h1 id='homeTitle'>ETERNAL ECHOES</h1>
                <h2 id='homeSubtitle'>Capturing Moments, Cherishing Lives</h2>
            </div>
        </div>
        <div id='ourMissionSection'>
            <div id='missionBackGroundImg'>
                <div id='missionText'>
                    <h1 id='missionTitle'>OUR MISSION</h1>
                    <p>Our mission is to provide a serene and heartfelt space where you can gather and honor the memories of your loved ones.</p>
                </div>
            </div>
        </div>
        </>
    )
}

function HomePage() {
    return (
        <>
            <NavBar/>
            <HomeSection/>
        </>
    );
}

export default HomePage;