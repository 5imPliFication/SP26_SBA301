import React from "react";
import { useNavigate } from "react-router-dom";
import CourseCardClickable from "@/shared/components/CourseCardClickable";
import { Row, Col } from "react-bootstrap";



const CourseList = ({ courses = [] }) => {
  const navigate = useNavigate();

  const handleCourseClick = (courseId) => {
    navigate(`/courses/${courseId}`);
  };
  
    return (
      <Row className="g-4">
        {courses.length > 0 ? (
          courses.map((course) => (
            <Col key={course.id} lg={4} md={6} className="d-flex">
              <div
                style={{ cursor: "pointer", width: "100%" }}
                onClick={() => handleCourseClick(course.id)}
              >
                <CourseCardClickable course={course} />
              </div>
            </Col>
          ))
        ) : (
          <Col xs={12}>
            <div className="text-center py-5">
              <h5 className="text-secondary">No courses found</h5>
            </div>
          </Col>
        )}
      </Row>
    );
};

export default CourseList;