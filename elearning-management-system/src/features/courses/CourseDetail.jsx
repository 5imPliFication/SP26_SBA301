import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Badge, ListGroup, Card } from "react-bootstrap";
import withLoading from "@/shared/components/withLoading";

const CourseDetail = ({ isLoading }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  // Mock courses data
  const mockCourses = [
    {
      id: 1,
      title: "Design system with React programme",
      instructor: "Colt Stelle",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200",
      price: 20,
      rating: 5.0,
      classes: 12,
      students: 130,
      image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1200&auto=format&fit=crop",
      description:
        "Learn to design and build scalable design systems using React. This comprehensive course covers component architecture, design patterns, and best practices.",
      duration: "8 weeks",
      level: "Intermediate",
      topics: ["React Basics", "Component Design", "CSS-in-JS", "Storybook", "Testing Components"],
      modules: [
        { name: "Module 1: Introduction to Design Systems", lessons: 3 },
        { name: "Module 2: React Components Fundamentals", lessons: 5 },
        { name: "Module 3: Building Reusable Components", lessons: 4 },
      ],
    },
    {
      id: 2,
      title: "Advanced JavaScript Concepts",
      instructor: "Sarah Johnson",
      instructorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200",
      price: 25,
      rating: 4.8,
      classes: 18,
      students: 245,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
      description:
        "Master advanced JavaScript concepts including closures, prototypes, async programming, and more. Perfect for developers looking to level up their skills.",
      duration: "10 weeks",
      level: "Advanced",
      topics: ["Closures", "Prototypes", "Async/Await", "Promises", "Event Loop"],
      modules: [
        { name: "Module 1: Closures and Scope", lessons: 4 },
        { name: "Module 2: Prototypes and Inheritance", lessons: 6 },
        { name: "Module 3: Async Programming", lessons: 5 },
      ],
    },
    {
      id: 3,
      title: "Web Development Bootcamp",
      instructor: "Mike Chen",
      instructorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200",
      price: 35,
      rating: 4.9,
      classes: 24,
      students: 512,
      image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1200&auto=format&fit=crop",
      description:
        "Complete web development bootcamp covering HTML, CSS, JavaScript, React, and backend technologies. Build real-world projects and launch your career.",
      duration: "12 weeks",
      level: "Beginner",
      topics: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Databases"],
      modules: [
        { name: "Module 1: Web Fundamentals", lessons: 6 },
        { name: "Module 2: Frontend Development", lessons: 8 },
        { name: "Module 3: Backend & Databases", lessons: 7 },
      ],
    },
    {
      id: 4,
      title: "CSS Mastery and Animations",
      instructor: "Emma Wilson",
      instructorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200",
      price: 18,
      rating: 4.7,
      classes: 15,
      students: 189,
      image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1200&auto=format&fit=crop",
      description:
        "Become a CSS expert and create stunning animations. Learn advanced selectors, flexbox, grid, animations, and responsive design techniques.",
      duration: "6 weeks",
      level: "Intermediate",
      topics: ["Flexbox", "Grid", "Animations", "Transitions", "Responsive Design"],
      modules: [
        { name: "Module 1: Advanced Selectors", lessons: 3 },
        { name: "Module 2: Layout Systems", lessons: 5 },
        { name: "Module 3: Animations & Effects", lessons: 4 },
      ],
    },
    {
      id: 5,
      title: "React Hooks Deep Dive",
      instructor: "David Kumar",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200",
      price: 22,
      rating: 4.9,
      classes: 14,
      students: 320,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
      description:
        "Deep dive into React Hooks. Learn useState, useEffect, custom hooks, and how to manage complex state with modern React patterns.",
      duration: "7 weeks",
      level: "Intermediate",
      topics: ["useState", "useEffect", "Custom Hooks", "Context API", "Performance Optimization"],
      modules: [
        { name: "Module 1: Hook Fundamentals", lessons: 4 },
        { name: "Module 2: Advanced Hook Patterns", lessons: 6 },
        { name: "Module 3: Real-world Applications", lessons: 5 },
      ],
    },
    {
      id: 6,
      title: "Node.js and Express.js",
      instructor: "Lisa Anderson",
      instructorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200",
      price: 28,
      rating: 4.8,
      classes: 20,
      students: 428,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
      description:
        "Learn backend development with Node.js and Express. Build scalable APIs, handle databases, and deploy applications to production.",
      duration: "9 weeks",
      level: "Intermediate",
      topics: ["Node.js Basics", "Express.js", "RESTful APIs", "Databases", "Authentication"],
      modules: [
        { name: "Module 1: Node.js Fundamentals", lessons: 4 },
        { name: "Module 2: Express.js & APIs", lessons: 7 },
        { name: "Module 3: Database Integration", lessons: 6 },
      ],
    },
  ];

  useEffect(() => {
    // Find the course with the matching ID
    const foundCourse = mockCourses.find((c) => c.id === parseInt(id));
    setCourse(foundCourse || mockCourses[0]);
  }, [id]);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <Container className="my-5">
      {/* Header with back button */}
      <Row className="mb-3">
        <Col>
          <Button
            variant="outline-primary"
            onClick={() => navigate("/courses")}
            className="mb-3"
          >
            ← Back to Courses
          </Button>
        </Col>
      </Row>

      {/* Hero section */}
      <Row className="mb-5">
        <Col lg={8}>
          <img
            src={course.image}
            alt={course.title}
            style={{ width: "100%", borderRadius: "12px", maxHeight: "500px", objectFit: "cover" }}
          />
        </Col>
        {/* Sidebar with key info */}
        <Col lg={4}>
          <Card className="shadow-sm rounded-4 d-flex">
            <Card.Body>
              <h5 className="mb-3">Course Details</h5>

              <div className="mb-3">
                <p className="text-secondary small mb-1">Classes</p>
                <p className="fw-bold">{course.classes}</p>
              </div>

              <div className="mb-3">
                <p className="text-secondary small mb-1">Students</p>
                <p className="fw-bold">{course.students}</p>
              </div>

              <div className="mb-3">
                <p className="text-secondary small mb-1">Duration</p>
                <p className="fw-bold">{course.duration}</p>
              </div>

              <div className="mb-3">
                <p className="text-secondary small mb-1">Level</p>
                <p className="fw-bold">{course.level}</p>
              </div>

              <hr />

              <Button variant="success" className="w-100 rounded-3 mb-2">
                Enroll Now
              </Button>
              <Button variant="outline-secondary" className="w-100 rounded-3">
                Share Course
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Course Info */}
      <Row className="mb-5">
        <Col lg={8}>
          <h1 className="mb-3">{course.title}</h1>

          {/* Instructor Info */}
          <Row className="mb-4 align-items-center">
            <Col md={2}>
              <img
                src={course.instructorImage}
                alt={course.instructor}
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </Col>
            <Col md={10}>
              <p className="mb-0">
                <strong>Instructor:</strong> {course.instructor}
              </p>
            </Col>
          </Row>

          {/* Stats */}
          <Row className="mb-4">
            <Col md={3}>
              <div>
                <strong>Rating</strong>
                <p className="text-warning">{course.rating} ⭐</p>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <strong>Duration</strong>
                <p>{course.duration}</p>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <strong>Level</strong>
                <p>
                  <Badge bg="info">{course.level}</Badge>
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <strong>Students</strong>
                <p>{course.students} enrolled</p>
              </div>
            </Col>
          </Row>

          {/* Description */}
          <section className="mb-5">
            <h3 className="mb-3">About this course</h3>
            <p>{course.description}</p>
          </section>

          {/* Topics */}
          <section className="mb-5">
            <h3 className="mb-3">What you'll learn</h3>
            <ListGroup>
              {course.topics.map((topic, index) => (
                <ListGroup.Item key={index}>
                  ✓ {topic}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </section>

          {/* Modules */}
          <section className="mb-5">
            <h3 className="mb-3">Course Modules</h3>
            <ListGroup>
              {course.modules.map((module, index) => (
                <ListGroup.Item key={index}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <strong>{module.name}</strong>
                    </div>
                    <Badge bg="secondary">{module.lessons} lessons</Badge>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </section>
        </Col>

        
      </Row>
    </Container>
  );
};

const CourseDetailWithLoading = withLoading(CourseDetail);

export default CourseDetailWithLoading;
