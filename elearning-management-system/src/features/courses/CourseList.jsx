import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import withLoading from "@/shared/components/withLoading";
import CourseCardClickable from "@/shared/components/CourseCardClickable";

const CourseList = ({ isLoading }) => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  // Mock courses data - replace with API call in production
  useEffect(() => {
    const mockCourses = [
      {
        id: 1,
        title: "Design system with React programme",
        instructor: "Colt Stelle",
        price: 20,
        rating: 5.0,
        classes: 12,
        students: 130,
        image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 2,
        title: "Advanced JavaScript Concepts",
        instructor: "Sarah Johnson",
        price: 25,
        rating: 4.8,
        classes: 18,
        students: 245,
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 3,
        title: "Web Development Bootcamp",
        instructor: "Mike Chen",
        price: 35,
        rating: 4.9,
        classes: 24,
        students: 512,
        image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 4,
        title: "CSS Mastery and Animations",
        instructor: "Emma Wilson",
        price: 18,
        rating: 4.7,
        classes: 15,
        students: 189,
        image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 5,
        title: "React Hooks Deep Dive",
        instructor: "David Kumar",
        price: 22,
        rating: 4.9,
        classes: 14,
        students: 320,
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 6,
        title: "Node.js and Express.js",
        instructor: "Lisa Anderson",
        price: 28,
        rating: 4.8,
        classes: 20,
        students: 428,
        image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1200&auto=format&fit=crop",
      },
    ];
    setCourses(mockCourses);
    setFilteredCourses(mockCourses);
  }, []);

  // Handle search
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term.trim() === "") {
      setFilteredCourses(courses);
    } else {
      const filtered = courses.filter(
        (course) =>
          course.title.toLowerCase().includes(term) ||
          course.instructor.toLowerCase().includes(term)
      );
      setFilteredCourses(filtered);
    }
  };

  // Handle course card click
  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setFilteredCourses(courses);
  };

  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h2 className="mb-4">All Courses</h2>
        </Col>
      </Row>

      {/* Search Bar */}
      <Row className="mb-4">
        <Col md={8}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Search courses by title or instructor..."
              value={searchTerm}
              onChange={handleSearch}
              className="rounded-3 py-2 px-3"
            />
          </Form.Group>
        </Col>
        <Col md={4} className="d-flex gap-2">
          <Button
            variant="primary"
            className="rounded-3 30px"
            disabled={searchTerm === ""}
            onClick={handleClearSearch}
          >
            Clear Search
          </Button>
        </Col>
      </Row>

      {/* Results count */}
      <Row className="mb-3">
        <Col>
          <p className="text-secondary">
            {filteredCourses.length} course{filteredCourses.length !== 1 ? "s" : ""} found
          </p>
        </Col>
      </Row>

      {/* Courses Grid */}
      <Row className="g-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <Col key={course.id} lg={4} md={6} className="d-flex">
              <div
                onClick={() => handleCourseClick(course.id)}
                style={{ cursor: "pointer", width: "100%" }}
              >
                <CourseCardClickable course={course} />
              </div>
            </Col>
          ))
        ) : (
          <Col xs={12}>
            <div className="text-center py-5">
              <h5 className="text-secondary">No courses found</h5>
              <p className="text-muted">
                Try adjusting your search terms
              </p>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
};

const CourseListWithLoading = withLoading(CourseList);

export default CourseListWithLoading;
