
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Features() {
  return (
    <Container className="py-5">

      <h2 className="text-center fw-bold mb-2">
        Our Features
      </h2>

      <p className="text-center text-muted mb-5">
        Discover what makes TechNova special.
      </p>

      <Row>

        <Col md={4} className="mb-4">
         <Card className="h-100 shadow-sm text-center feature-card">
            <Card.Body>
              <h1>💻</h1>
              <Card.Title>Modern Technology</Card.Title>
              <Card.Text>
                We provide modern technology
                solutions for your business.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm text-center feature-card">
            <Card.Body>
              <h1>⚡</h1>
              <Card.Title>Fast Performance</Card.Title>
              <Card.Text>
                Enjoy fast, reliable and
                efficient digital experiences.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm text-center feature-card">
            <Card.Body>
              <h1>🔒</h1>
              <Card.Title>Secure Solutions</Card.Title>
              <Card.Text>
                Your information and data
                are important to us.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
}

export default Features;
