
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <footer className="custom-footer">
      <Container>
        <Row className="gy-4">
          <Col md={5}>
            <h3 className="footer-brand">
              <span>T</span> TechNova
            </h3>
            <p className="footer-description">
              Building a smarter digital future through
              creativity, innovation, and technology.
            </p>
          </Col>

          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5>Follow Us</h5>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://www.instagram.com/bhayo__sajid/" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.facebook.com/share/1Caxx1qh1Y/" target="_blank" rel="noreferrer">Facebook</a>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <p className="copyright">
          © 2026 TechNova. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
