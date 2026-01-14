import React from "react";
import { Card, Badge } from "react-bootstrap";

const CourseCardClickable = ({ course }) => {
  const displayCourse = course || {
    id: 1,
    title: "Design system with React programme",
    instructor: "Colt Stelle",
    price: 20,
    rating: 5.0,
    classes: 12,
    students: 130,
    image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1200&auto=format&fit=crop",
  };

  return (
    <Card
      className="shadow-sm border-1 rounded-4 overflow-hidden h-100 transition"
      style={{ width: "100%", minHeight: 430, cursor: "pointer" }}
    >
      {/* Image + badge overlay */}
      <div className="position-relative">
        <Card.Img
          src={displayCourse.image}
          alt="cover"
          style={{ height: 170, objectFit: "cover" }}
        />

        <Badge
          bg="primary"
          className="position-absolute rounded-circle d-flex flex-column justify-content-center align-items-center text-center fw-bold"
          style={{
            width: 72,
            height: 72,
            right: 14,
            bottom: -18,
            lineHeight: 1.05,
          }}
        >
          BEST
          <br />
          SELLER
        </Badge>
      </div>

      <Card.Body className="p-3 d-flex flex-column">
        <Card.Title className="fw-bold fs-4 mb-2" style={{ minHeight: "3rem" }}>
          {displayCourse.title}
        </Card.Title>

        <div className="d-flex justify-content-between align-items-end mb-3 mt-auto">
          <div>
            <div className="text-secondary small mb-2">{displayCourse.instructor}</div>

            <div className="d-flex align-items-center gap-2">
              <span className="fw-bold text-danger">{displayCourse.rating}</span>
            </div>
          </div>

          <div className="fw-bold fs-4">${displayCourse.price}</div>
        </div>

        <hr className="my-3 opacity-25" />

        <div className="d-flex justify-content-between text-secondary fw-semibold small">
          <div className="d-flex align-items-center gap-2">
            <span style={{ color: "#5b5bff" }}>📘</span>
            <span>{displayCourse.classes} classes</span>
          </div>

          <div className="d-flex align-items-center gap-2">
            <span style={{ color: "#5b5bff" }}>👥</span>
            <span>{displayCourse.students} students</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CourseCardClickable;
