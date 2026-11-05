
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#212529',
        color: 'white',
        padding: '30px 0',
        marginTop: '40px',
        textAlign: 'center'
      }}
    >
      <Container>

        <h4>TechNova</h4>

        <p>
          Making technology simple and accessible.
        </p>

        <div className="mb-3">
          <a href="#" className="text-white mx-2">
            Home
          </a>

          <a href="#" className="text-white mx-2">
            About
          </a>

          <a href="#" className="text-white mx-2">
            Contact
          </a>
        </div>

        <hr />

        <p className="mb-0">
          © 2026 TechNova. All Rights Reserved.
        </p>

      </Container>
    </footer>
  );
}

export default Footer;
