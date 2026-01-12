import React from "react";
import { PersonFill } from "react-bootstrap-icons";
import { Card, Button } from "react-bootstrap";
import PopularCategory from "@/features/public-site/components/PopularCategory";

const CategoryCard = ({ category, handleInterest }) => {
  return (
    <Card style={{ width: "18rem" }} className="p-2">
      <Card.Body>
        <Card.Title>{category.categoryName}</Card.Title>

        <div className="d-flex align-items-center mb-2">
          <span className="bg-light px-2 rounded fw-semibold me-1">
            {category.availablePosition}
          </span>
          <span className="">Available Position</span>
        </div>

        <div className="d-flex align-items-center mb-3">
          <PersonFill size={18} className="me-2" />
          <span className="">
            {category.numberInterested} Interested
          </span>
        </div>

        <Button variant="primary" className="w-100" onClick={()=>{handleInterest(category.id)}}>
          Interested
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CategoryCard;
