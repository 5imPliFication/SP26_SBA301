import { Badge, Form, Button } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";

const CourseFilter = () => {
  return (
    <>
      <Badge className="py-3 w-100 my-3">Filter</Badge>

      <Form style={{ fontSize: "10px !important" }}>
        <Form.Select size="lg" className="mt-3 py-1">
          <option value="5">Category</option>
        </Form.Select>
        <Form.Check
          type="radio"
          className="mt-3"
          style={{ width: "15px" }}
          label={
            <div className="d-flex">
              <StarFill className="text-warning me-1"/>
              <StarFill className="text-warning me-1"/>
              <StarFill className="text-warning me-1"/>
              <StarFill className="text-warning me-1"/>
              <StarFill className="text-warning me-1"/>
            </div>
          }
        ></Form.Check>
        <Form.Check
          type="radio"
          className="mt-3"
          style={{ width: "15px" }}
          label={
            <div className="d-flex">
              <StarFill className="text-warning me-1"/>
              <StarFill className="text-warning me-1"/>
              <StarFill className="text-warning me-1"/>
              <StarFill className="text-warning me-1"/>
              <StarFill className="text-dark me-1"/>
            </div>
          }
        ></Form.Check>
        <Form.Check
          type="radio"
          className="mt-3"
          style={{ width: "15px" }}
          label={
            <div className="d-flex">
              <StarFill className="text-warning me-1"/>
              <StarFill className="text-warning me-1"/>
              <StarFill className="text-warning me-1"/>
              <StarFill className="text-dark me-1"/>
              <StarFill className="text-dark me-1"/>
            </div>
          }
        ></Form.Check>
        <Form.Check
          type="radio"
          className="mt-3"
          style={{ width: "15px" }}
          label={
            <div className="d-flex">
              <StarFill className="text-warning me-1"/>
              <StarFill className="text-warning me-1"/>
              <StarFill className="text-dark me-1"/>
              <StarFill className="text-dark me-1"/>
              <StarFill className="text-dark me-1"/>
            </div>
          }
        ></Form.Check>
        <Form.Check
          type="radio"
          className="mt-3"
          style={{ width: "15px" }}
          label={
            <div className="d-flex">
              <StarFill className="text-warning me-1"/>
              <StarFill className="text-dark me-1"/>
              <StarFill className="text-dark me-1"/>
              <StarFill className="text-dark me-1"/>
              <StarFill className="text-dark me-1"/>
            </div>
          }
        ></Form.Check>
        <hr></hr>
        <h2>Levels</h2>
        <Form.Check
          type="checkbox"
          className="mt-3"
          style={{ width: "auto" }}
          label="All Levels"
        ></Form.Check>
        <Form.Check
          type="checkbox"
          className="mt-3"
          style={{ width: "auto" }}
          label="Expert"
        ></Form.Check>
        <Form.Check
          type="checkbox"
          className="mt-3"
          style={{ width: "auto" }}
          label="Intermediate"
        ></Form.Check>
        <Form.Check
          type="checkbox"
          className="mt-3"
          style={{ width: "auto" }}
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
