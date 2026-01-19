import React from "react";
import { useLocation, Link, NavLink } from "react-router-dom";

const PublicHeader = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path+"/");
  };
  const getLinkClass = (path) => {
    const baseClass = "nav-link fw-semibold";
    return isActive(path)
      ? `${baseClass} text-primary border-bottom border-3 border-primary pb-1`
      : `${baseClass} text-dark`;
  };

  return (
    <div className="container py-2">
      <nav className="navbar navbar-expand-lg bg-white">
        {/* Logo */}
        <NavLink className="navbar-brand fw-bold d-flex align-items-center" to="/">
          E-learning
          <span
            className="ms-1 rounded-circle"
            style={{
              width: 6,
              height: 6,
              backgroundColor: "#6f4ef6",
              display: "inline-block",
            }}
          ></span>
        </NavLink>

        {/* Button toggle mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3">
            <li className="nav-item">
              <NavLink className={getLinkClass("/")} to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={getLinkClass("/courses")} to="/courses">
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={getLinkClass("/mentor")} to="/mentor">
                Mentor
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={getLinkClass("/group")} to="/group">
                Group
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={getLinkClass("/testimonial")} to="/testimonial">
                Testimonial
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={getLinkClass("/docs")} to="/docs">
                Docs
              </NavLink>
            </li>
          </ul>

          {/* Buttons */}
          <div className="d-flex gap-2">
            <button
              className="btn text-white px-4"
              style={{ backgroundColor: "#6f4ef6" }}
            >
              Sign In
            </button>

            <button
              className="btn px-4"
              style={{
                backgroundColor: "#ede9fe",
                color: "#6f4ef6",
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default PublicHeader;
