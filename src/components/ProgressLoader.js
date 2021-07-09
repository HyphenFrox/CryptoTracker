import React from 'react'
import "../styles/progressloader.scss";
const ProgressLoader = (
  <div className="spinner-container">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

function ProgressLoaderComp() {
  return (
    <div className="spinner-container">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export { ProgressLoader }
export default ProgressLoaderComp
