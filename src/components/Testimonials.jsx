
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Testimonials() {
  const reviews = [
    {
      name: 'Alex Morgan',
      role: 'Business Owner',
      review:
        'The experience was smooth and the digital solutions were easy to understand.',
      initials: 'AM'
    },
    {
      name: 'Sarah Johnson',
      role: 'Creative Designer',
      review:
        'A clean approach to technology with a strong focus on user experience.',
      initials: 'SJ'
    },
    {
      name: 'David Smith',
      role: 'Startup Founder',
      review:
        'Creative ideas and modern technology make TechNova an exciting brand.',
      initials: 'DS'
    }
  ];

  return (
    <section id="testimonials" className="section-padding">
      <Container>
        <div className="section-heading">
          <span className="section-label">CLIENT FEEDBACK</span>

          <h2>
            What People <span>Say About Us</span>
          </h2>

          <p>
            Discover how people feel about modern digital experiences.
          </p>
        </div>

        <Row className="g-4">
          {reviews.map((review, index) => (
            <Col md={4} key={index}>
              <Card className="testimonial-card h-100">
                <Card.Body>
                  <div className="review-stars">★★★★★</div>

                  <Card.Text className="review-text">
                    "{review.review}"
                  </Card.Text>

                  <div className="review-person">
                    <div className="review-avatar">
                      {review.initials}
                    </div>

                    <div>
                      <h6>{review.name}</h6>
                      <small>{review.role}</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;
