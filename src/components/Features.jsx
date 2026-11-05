
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Features() {
  const features = [
    {
      icon: '🚀',
      title: 'Fast Performance',
      description:
        'Enjoy fast and reliable digital experiences designed to improve productivity.'
    },
    {
      icon: '🔒',
      title: 'Secure Solutions',
      description:
        'Keep your digital information protected with security-focused solutions.'
    },
    {
      icon: '💡',
      title: 'Smart Innovation',
      description:
        'Discover creative technology ideas that make everyday work easier.'
    }
  ];

  return (
    <section id="features" className="section-padding">
      <Container>
        <div className="section-heading">
          <span className="section-label">WHY CHOOSE US</span>
          <h2>Technology That <span>Moves You Forward</span></h2>
          <p>
            Powerful features designed to make your digital journey better.
          </p>
        </div>

        <Row className="g-4">
          {features.map((feature, index) => (
            <Col md={4} key={index}>
              <Card className="feature-card h-100">
                <Card.Body>
                  <div className="feature-icon">
                    {feature.icon}
                  </div>

                  <Card.Title>{feature.title}</Card.Title>

                  <Card.Text>
                    {feature.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Features;
