import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("xyzgveby");

  const handleImageError = (e, imageSrc) => {
    console.error(`Error loading image: ${imageSrc}`);
    e.target.src = `${process.env.PUBLIC_URL}/assets/images/placeholder-image.jpg`;
  };

  const handleImageLoad = (imageSrc) => {
    console.log(`Image loaded successfully: ${imageSrc}`);
  };

  if (state.succeeded) {
    return (
      <section id="contact" className="contact py-5 position-relative">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6} className="text-center">
              <h2 className="mb-4">Thank You!</h2>
              <p>
                Your message has been sent successfully. I'll get back to you as
                soon as possible.
              </p>
            </Col>
          </Row>
        </Container>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/pattern-rings.svg`}
          alt=""
          className="contact__rings position-absolute"
          style={{ left: 0, bottom: 0 }}
          onError={(e) => handleImageError(e, "pattern-rings.svg")}
          onLoad={() => handleImageLoad("pattern-rings.svg")}
        />
      </section>
    );
  }

  return (
    <section id="contact" className="contact py-5 position-relative">
      <Container>
        <Row className="justify-content-between">
          <Col lg={5}>
            <h2 className="mb-4">Contact</h2>
            <p>
              I would love to hear about your project and how I could help.
              Please fill in the form, and I'll get back to you as soon as
              possible.
            </p>
          </Col>
          <Col lg={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="NAME"
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="text-danger"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-danger"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={3}
                  placeholder="MESSAGE"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-danger"
                />
              </Form.Group>
              <div className="d-flex justify-content-end">
                <Button
                  variant="outline-light"
                  type="submit"
                  disabled={state.submitting}
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/pattern-rings.svg`}
        alt=""
        className="contact__rings position-absolute"
        style={{ left: 0, bottom: 0 }}
        onError={(e) => handleImageError(e, "pattern-rings.svg")}
        onLoad={() => handleImageLoad("pattern-rings.svg")}
      />
    </section>
  );
};

export default Contact;
