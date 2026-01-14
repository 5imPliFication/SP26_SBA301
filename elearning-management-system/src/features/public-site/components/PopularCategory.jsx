import React from "react";
import { Container } from "react-bootstrap";
import CategoryCard from "@/shared/components/CategoryCard";
import { Row, Col, Form } from "react-bootstrap";

const PopularCategory = () => {
  const [categories, setCategories] = React.useState([
    {
      id: 1,
      categoryName: "Web Development",
      availablePosition: 10,
      numberInterested: 120,
    },
    {
      id: 2,
      categoryName: "UI/UX Design",
      availablePosition: 60,
      numberInterested: 22,
    },
    {
      id: 3,
      categoryName: "Telecommunications",
      availablePosition: 9,
      numberInterested: 50,
    },
    {
      id: 4,
      categoryName: "Marketing",
      availablePosition: 11,
      numberInterested: 70,
    },
    {
      id: 5,
      categoryName: "Engineering",
      availablePosition: 67,
      numberInterested: 69,
    },
    {
      id: 6,
      categoryName: "Data Science",
      availablePosition: 30,
      numberInterested: 108,
    },
  ]);

  const [searchCategories, setSearchCategories] = React.useState(categories);

  const search = (inputCategory) => {
    console.log("Searching for:", inputCategory);
    // Implement search logic here
    if (!inputCategory.trim()) {
      setSearchCategories(categories);
      return;
    }
    const searchResult = categories.filter((category) =>
      category.categoryName.toLowerCase().includes(inputCategory.toLowerCase())
    );
    setSearchCategories(searchResult);
  };

  const handleInterest = (categoryId) => {
    const newCategories = categories.map((category) => {
      if (category.id === categoryId) {
        return {
          ...category,
          numberInterested: category.numberInterested + 1,
        };
      }
      return category;
    });
    setSearchCategories(newCategories);
    setCategories(newCategories);
  };

  return (
    <Container fluid className="mt-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <h1>Popular Categories</h1>
          <Form.Control
            type="search"
            id="inputCategory"
            className="my-3"
            placeholder="Search job title, skill or category"
            aria-describedby="search-category"
            onChange={(e) => search(e.target.value)}
          />
          <Row className="g-3">
            {searchCategories.map((category) => (
              <Col md={3} className="mb-3 mt-3" key={category.id}>
                <CategoryCard
                  category={category}
                  handleInterest={handleInterest}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default PopularCategory;
