// HomePage.tsx
import axios from 'axios';
import { useEffect, useState } from 'react';
import './HomePage.css';

type ResponseType = {
  response: string
}

function HomeSection() {
  const [data, setData] = useState<ResponseType | null>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    axios.get('http://localhost:3000/user')
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  }, []);

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
            <p>{data ? data.response : "Loading..."}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function HomePage() {
  return (
    <>
      <HomeSection />
    </>
  );
}

export default HomePage;

