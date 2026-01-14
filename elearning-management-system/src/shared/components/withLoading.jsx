import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const withLoading = (WrappedComponent) => {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return (
        <div className="justify-content-center d-flex align-items-center" style={{height: "40vh"}}>
          <div className="text-center">
            <div className="spinner-border mb-3" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="text-muted">Loading...</p>
          </div>
        </div>
      );
    }
    return <WrappedComponent {...props} />;
  };
};

export default withLoading;