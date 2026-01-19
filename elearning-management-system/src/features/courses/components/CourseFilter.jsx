import { Badge, Form, Button } from "react-bootstrap";
import StarRating from "@/shared/components/StarRating";
// import { useState } from "react";

const CourseFilter = () => {

  const ratings = [
    { stars: 5, label: "5 - 4.5" },
    { stars: 4.5, label: "4.5 - 4" },
    { stars: 4, label: "4 - 3.5" },
    { stars: 3.5, label: "3.5 - 3" },
    { stars: 3, label: "3 - 2.5" },
    { stars: 2.5, label: "2.5 - 2" },
    { stars: 2, label: "2 - 1.5" },
    { stars: 1.5, label: "1.5 - 1" },
    { stars: 1, label: "1 - 0.5" },
    { stars: 0.5, label: "0.5 - 0" },
  ];
  
  return (
    <>
      <Badge className="py-3 w-100 my-3 fs-6">Filter</Badge>

      <Form style={{ fontSize: "10px !important" }}>
        <Form.Select size="" className="mt-3 py-1">
          <option value="5" style={{ fontSize: "16px" }}>
            Category
          </option>
        </Form.Select>
        {ratings.map((r) => (
          <Form.Check
            type="radio"
            className="mt-3"
            name="rating"
            value={r.value}
            label={<StarRating stars={r.stars} label={r.label} />}
          ></Form.Check>
        ))}
        <hr></hr>
        <h2>Levels</h2>
        <Form.Check
          type="checkbox"
          className="mt-3"
          label="All Levels"
        ></Form.Check>
        <Form.Check
          type="checkbox"
          className="mt-3"
          label="Expert"
        ></Form.Check>
        <Form.Check
          type="checkbox"
          className="mt-3"
          label="Intermediate"
        ></Form.Check>
        <Form.Check
          type="checkbox"
          className="mt-3"
          label="Beginner"
        ></Form.Check>
        <hr></hr>
        <h3>Price</h3>
        <Form.Label>Range</Form.Label>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span>0(VND) </span>
          <Form.Range />
          <span>5000000(VND)</span>
        </div>
        <Button variant="primary" type="submit">
          Apply
        </Button>
      </Form>
    </>
  );
};
export default CourseFilter;
