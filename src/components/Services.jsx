
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Services() {
  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description:
        'Modern, responsive websites designed to deliver excellent user experiences.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description:
        'Clean and attractive interfaces that make digital products easy to use.'
    },
    {
      icon: '⚙️',
      title: 'Digital Solutions',
      description:
        'Smart technology solutions that help simplify everyday business tasks.'
    }
  ];

  return (
    <section id="services" className="section-padding services-section">
      <Container>
        <div className="section-heading">
          <span className="section-label">WHAT WE DO</span>

          <h2>
            Our <span>Services</span>
          </h2>

          <p>
            Creative digital services to help turn your ideas into reality.
          </p>
        </div>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={4} key={index}>
              <Card className="service-card h-100">
                <Card.Body>
                  <div className="service-icon">
                    {service.icon}
                  </div>

                  <Card.Title>{service.title}</Card.Title>

                  <Card.Text>
                    {service.description}
                  </Card.Text>

                  <a href="#contact" className="service-link">
                    Learn More →
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;
