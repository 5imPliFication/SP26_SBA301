import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import PopularCourseSectionWithLoading from "../components/PopularCourseSection";
import PopularCategory from "../components/PopularCategory";

const PublicHomePage = () => {
  const [isLoading, setisLoading] = useState(true);

  //Call effect
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <HeroSection />

      <PopularCourseSectionWithLoading isLoading={isLoading} />

      <PopularCategory />
    </>
  );
};

export default PublicHomePage;
