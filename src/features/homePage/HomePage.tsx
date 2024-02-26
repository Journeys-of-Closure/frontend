// HomePage.tsx
import axios from "axios";
import { useEffect, useState } from "react";
import "./HomePage.css";

interface User {
  id: number;
  name: String;
  email: String;
  password: String;
}

function HomeSection() {
  return (
    <>
      <div id="homeSection">
        <div id="homeBackgroundImg">
          <h1 id="homeTitle">ETERNAL ECHOES</h1>
          <h2 id="homeSubtitle">Capturing Moments, Cherishing Lives</h2>
        </div>
      </div>
    </>
  );
}

function MissionSection() {
  const [users, setUsers] = useState("");
  const [error, setError] = useState<Error>();
  useEffect(() => {
    axios
      .get("http://localhost:3000")
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  }, []);
  return (
    <div id="ourMissionSection">
      <div id="missionBackGroundImg">
        <div id="missionText">
          <h1 id="missionTitle">OUR MISSION</h1>
          <p>{users.toString()}</p>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <HomeSection />
      <MissionSection />
    </>
  );
}

export default HomePage;
