import NavBar from '../../components/Navbar/NavBar'
import '..HomePage/HomePage.css';
function DonateSection () {
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

function DonatePage() {
  
    return (
      <>
        <NavBar/>
        <DonateSection />
      </>
    );
}

export default DonatePage;