import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CourseFilter from "../components/CourseFilter";
import CourseList from "../components/CourseList";
import courseService from "../service/course.service";

const PublicCoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setIsLoading(true);
        const data = await courseService.findAll();
        setCourses(data || []);
      } catch (err) {
        setError("Failed to load courses. Please try again later.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCourses();
  }, []);

  return (
    <section className="bg-light p-3 my-3">
      <h2 className="mb-4">All Courses</h2>
      <Container>
        <Row className="d-flex">
          <Col md={3} xl={4} className="bg-white p-4 rounded-3">
            <CourseFilter />
          </Col>
          <Col md={9} xl={8}>
            {isLoading ? (
              <div className="text-center py-5">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : error ? (
              <div className="text-center py-5 text-danger">{error}</div>
            ) : (
              <CourseList courses={courses} />
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PublicCoursePage;