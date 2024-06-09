// HomePage.tsx
import "./HomePage.css";

function HomeSection() {
  return (
    <>
      <section id="home-section">
        <div id="home-background-img">
          <div id="home-content">
            <div id="home-text">
              <h1 id="home-title">JOURNEY'S OF CLOSURE</h1>
              <h2 id="home-subtitle">Capturing Moments, Cherishing Lives</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function MissionSection() {
  return (
    <section id="our-mission-section">
      <div id="mission-background-img">
        <div id="mission-content">
          <div id="mission-title-row">
            <div id="mission-title-container">
              <h1 id="mission-title">OUR MISSION</h1>
              <p id="mission-subtitle">
                Our purpose is to create a welcoming and inclusive environment
                that speaks to different cultures and traditions, helping people
                process their losses in a healthy and compassionate way.
              </p>
            </div>
          </div>
          <div id="mission-subtext-row">
            <div id="mission-subtext-container">
              <p className="mission-subtext">
                We know that the pain of losing a loved one can be difficult to
                handle, and often, people take years, even decades, to accept
                these situations and move on.
              </p>
              <p className="mission-subtext">
                Journeys of Closure is here to facilitate this process, offering
                emotional and practical support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
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
