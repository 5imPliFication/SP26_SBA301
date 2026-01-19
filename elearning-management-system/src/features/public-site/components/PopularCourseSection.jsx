import React from "react";
import CourseCard from "@/shared/components/CourseCard";
import Carousel from "react-bootstrap/Carousel";
import { Col, Container, Row } from "react-bootstrap";
import withLoading from "@/shared/components/withLoading";

const PopularCourseSection = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xl={9}>
          <h3>Popular Courses</h3>
          <Carousel
            indicators={false}
            controls
            interval={null}
            className="py-4"
            style={{ color: "black" }}
          >
            <Carousel.Item>
              <Row>
                <Col md={4} className="d-flex mb-2">
                  <CourseCard />
                </Col>
                <Col md={4} className="d-flex mb-2">
                  <CourseCard />
                </Col>
                <Col md={4} className="d-flex mb-2">
                  <CourseCard />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

const PopularCourseSectionWithLoading = withLoading(PopularCourseSection);

export default PopularCourseSectionWithLoading;
