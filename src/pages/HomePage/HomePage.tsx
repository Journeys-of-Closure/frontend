import {NavBar} from '../../components/ui/Navbar/NavBar'
import './HomePage.css';
function HomeSection () {
    return (
        <>
        <div id='homeSection'>
            <h1 id='homeTitle'>ETERNAL ECHOES</h1>
            <h2 id='homeSubtitle'>Capturing Moments, Cherishing Lives</h2>
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