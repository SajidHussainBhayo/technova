
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function About() {
  return (
    <section id="about" className="section-padding about-section">
      <Container>
        <Row className="align-items-center g-5">

          <Col lg={6}>
            <div className="about-visual">
              <div className="about-glow"></div>

              <div className="about-content-box">
                <span className="about-symbol">T</span>
                <h3>Think Digital.</h3>
                <h3 className="about-highlight">Think Different.</h3>
                <p>Innovation starts with an idea.</p>
              </div>

              <div className="about-small-card">
                ✦ Ideas into Reality
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <span className="section-label">ABOUT TECHNOVA</span>

            <h2 className="about-title">
              We Make Technology
              <span> Work for You</span>
            </h2>

            <p className="about-description">
              TechNova is a technology-focused brand built around
              creativity, innovation, and digital progress.
              We aim to make technology simple, useful, and accessible.
            </p>

            <p className="about-description">
              Our focus is on creating modern digital experiences
              that help people and businesses move forward.
            </p>

            <Button variant="primary" href="#contact" className="mt-3">
              Let's Work Together →
            </Button>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default About;
