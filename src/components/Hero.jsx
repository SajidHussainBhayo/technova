
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Hero() {
  const heading = "Build Your Future With TechNova";

  const description =
    "Discover modern technology solutions that make your work easier, faster, and smarter.";

  return (
    <div
  className="hero-section"
  style={{
        background: 'linear-gradient(135deg, #0d6efd, #6610f2)',
        color: 'white',
        padding: '100px 20px',
        textAlign: 'center'
      }}
    >
      <Container>
        <h1 className="display-3 fw-bold mb-4 hero-heading">
          {heading}
        </h1>

        <p className="lead mb-4">
          {description}
        </p>

        <Button variant="light" size="lg" className="me-3">
          Get Started
        </Button>

        <Button variant="outline-light" size="lg">
          Learn More
        </Button>
      </Container>
    </div>
  );
}

export default Hero;
