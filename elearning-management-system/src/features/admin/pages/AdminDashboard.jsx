import React, { useState } from "react";
import InstructorListPage from "../components/InstructorListPage";
const AdminDashboard = () => {
  //initialize state
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      <div className="container">
        <button
          className="btn btn-secondary my-2"
          onClick={() => {
            setIsShow(!isShow);
          }}
        >
          {isShow ? "Hide" : "Show"}
        </button>
      </div>
      {isShow && <InstructorListPage />}
    </>
  );
};

export default AdminDashboard;
