
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <Container>
        <div className="hero-content">

          <span className="hero-badge">
            ✦ INNOVATION MEETS TECHNOLOGY
          </span>

          <h1>
            Building a <span>Smarter</span>
            <br />
            Digital Future
          </h1>

          <p>
            We create modern technology solutions that help
            businesses grow, work smarter, and achieve more
            through innovation.
          </p>

          <div className="hero-buttons">
            <Button
              variant="primary"
              size="lg"
              href="#services"
            >
              Explore Services →
            </Button>

            <Button
              variant="outline-light"
              size="lg"
              href="#about"
            >
              Discover More
            </Button>
          </div>

          <div className="hero-stats">
            <div>
              <h3>50+</h3>
              <p>Projects</p>
            </div>

            <div>
              <h3>30+</h3>
              <p>Happy Clients</p>
            </div>

            <div>
              <h3>24/7</h3>
              <p>Support</p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;
