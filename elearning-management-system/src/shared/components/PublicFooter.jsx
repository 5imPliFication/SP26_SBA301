import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "@/styles/footer.css";

const PublicFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light mt-5 py-5">
      <Container>
        <Row className="mb-4">
          <Col md={3} className="mb-4">
            <h5 className="fw-bold mb-3">E-Learning</h5>
            <p className="text-muted">
              Advance your skills with our comprehensive courses and mentorship
              from industry experts.
            </p>
          </Col>
          <Col md={3} className="mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-decoration-none footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/courses" className="text-decoration-none footer-link">
                  Courses
                </a>
              </li>
              <li>
                <a href="#mentors" className="text-decoration-none footer-link">
                  Mentors
                </a>
              </li>
              <li>
                <a href="#about" className="text-decoration-none footer-link">
                  About Us
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <h5 className="fw-bold mb-3">Categories</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#web" className="text-decoration-none footer-link">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#design" className="text-decoration-none footer-link">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#data" className="text-decoration-none footer-link">
                  Data Science
                </a>
              </li>
              <li>
                <a
                  href="#marketing"
                  className="text-decoration-none footer-link"
                >
                  Marketing
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <h5 className="fw-bold mb-3">Support</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#contact" className="text-decoration-none footer-link">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#faq" className="text-decoration-none footer-link">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-decoration-none footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-decoration-none footer-link">
                  Terms of Service
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="bg-secondary" />

        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="text-muted mb-0">
              &copy; {currentYear} E-Learning Platform. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end mt-3 mt-md-0">
            <div className="social-links">
              <a
                href="#facebook"
                className="text-decoration-none me-3 footer-link"
              >
                Facebook
              </a>
              <a
                href="#twitter"
                className="text-decoration-none me-3 footer-link"
              >
                Twitter
              </a>
              <a
                href="#linkedin"
                className="text-decoration-none me-3 footer-link"
              >
                LinkedIn
              </a>
              <a href="#instagram" className="text-decoration-none footer-link">
                Instagram
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default PublicFooter;
