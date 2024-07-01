import "./AboutPage.css";

function WhyDonateSection() {
  return (
    <>
      <section className="donate-section">
        <div className="donate-background-img">
          <h1>HELP US KEEP THE MEMORIES ALIVE</h1>
          <div className="icon">
            <img src="hand-icon.png" alt="Donation Icon" />
          </div>
          <div className="content">
            <h2>WHY DONATE?</h2>
            <p>
              <strong>Ensuring Continuity:</strong> Eternal Echoes is a passion
              project driven by a <strong>single individual's</strong>{" "}
              dedication. Your donation will directly contribute to the
              platform's stability, ongoing improvements, and expansion.
            </p>
            <p>
              <strong>Fueling Innovation:</strong> Your contributions empower us
              to implement innovative features, enhancing the user experience
              and allowing Eternal Echoes to reach even greater heights.
            </p>
            <p>
              <strong>Exclusive rewards:</strong> Your contribution to Eternal
              Echoes not only helps keep cherished memories alive but also
              grants you access to a realm of exclusive rewards that symbolize
              your commitment to preserving the stories that matter most.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function HowItHelpsSection() {
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

function WaysToDonateSection() {
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

function AboutPage() {
  return (
    <>
      <WhyDonateSection />
      <HowItHelpsSection />
      <WaysToDonateSection />
    </>
  );
}

export default AboutPage;
