import React from "react";
import { Outlet } from "react-router-dom";
import PublicHeader from "@/shared/components/PublicHeader";
import PublicFooter from "@/shared/components/PublicFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@/styles/index.css";
import "@/styles/mentor.css";

const PublicLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <PublicHeader />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <PublicFooter />
    </div>
  );
};

export default PublicLayout;
