
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function MyNavbar() {
  return (
    <Navbar
      expand="lg"
      className="custom-navbar"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home" className="brand-logo">
          <span className="brand-icon">T</span>
          TechNova
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#testimonials">Reviews</Nav.Link>
          </Nav>

          <Button
            variant="primary"
            href="#contact"
            className="nav-button"
          >
            Get Started
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
