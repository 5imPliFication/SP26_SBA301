import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import PublicHeader from "@/shared/components/PublicHeader";
import PopularCourseSectionWithLoading from "../components/PopularCourseSection";
import PopularCategory from "../components/PopularCategory";

const PublicHomePage = () => {
  const [isLoading, setisLoading] = useState(true);

  //Call effect
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <PublicHeader />

      <HeroSection />

      <PopularCourseSectionWithLoading isLoading={isLoading} />

      <PopularCategory />
    </>
  );
};

export default PublicHomePage;
