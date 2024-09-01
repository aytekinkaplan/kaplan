import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact bg-less-dark text-white py-5 position-relative"
    >
      <Container>
        <Row className="justify-content-between">
          <Col lg={5}>
            <h2 className="contact__headline mb-4">Contact</h2>
            <p className="contact__description">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I'll get back to you as soon as
              possible.
            </p>
          </Col>
          <Col lg={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Control
                  type="text"
                  placeholder="NAME"
                  required
                  className="contact__input"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control
                  type="email"
                  placeholder="EMAIL"
                  required
                  className="contact__input"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="MESSAGE"
                  required
                  className="contact__input"
                />
              </Form.Group>
              <div className="d-flex justify-content-end">
                <Button
                  variant="outline-light"
                  type="submit"
                  className="contact__button"
                >
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <img
        src="assets/images/pattern-rings.svg"
        alt=""
        className="contact__rings position-absolute"
      />
    </section>
  );
};

export default Contact;
