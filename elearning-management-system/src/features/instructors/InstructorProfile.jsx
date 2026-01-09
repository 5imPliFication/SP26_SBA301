import React from "react";


function InstructorProfile() {
  return (
    <>
      <div className="light-blue-bg">
        <div className="container py-2">
          <h2 className="introduction p-2">Meet with our <br></br>mentor.</h2>
          <div className="d-flex justify-content-around m-5">
            <div className="mentor-card">
              <div className="mentor-pfp">
                <img
                  src="src/assets/images/angry.jpg"
                  className="pfp"
                  alt="mentor1"
                />
                <div className="linkedin-badge">
                  <img src="/linkedin-icon.svg" alt="LinkedIn" />
                </div>
              </div>
              <h3>Shoo Thar Hien</h3>
              <p>Senior UX Designer</p>
            </div>

            <div className="mentor-card">
              <div className="mentor-pfp">
                <img
                  src="src/assets/images/nice.jpg"
                  className="pfp"
                  alt="mentor2"
                />
                <div className="linkedin-badge">
                  <img src="/linkedin-icon.svg" alt="LinkedIn" />
                </div>
              </div>
              <h3>Shoo Thar Hien</h3>
              <p>Senior UX Designer</p>
            </div>
            <div className="mentor-card">
              <div className="mentor-pfp">
                <img
                  src="src/assets/images/choke.jpg"
                  className="pfp"
                  alt="mentor3"
                />
                <div className="linkedin-badge">
                  <img src="/linkedin-icon.svg" alt="LinkedIn" />
                </div>
              </div>
              <h3>Shoo Thar Hien</h3>
              <p>Senior UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InstructorProfile;