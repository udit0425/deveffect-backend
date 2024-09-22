import React from 'react'
import "../App.css"
import "bootstrap/dist/css/bootstrap.min.css";
export default function About() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1>Dev Effect</h1>
          <p>Makes machine learning models accessible like your favorite games.</p>
        </div>
        <div className="col-md-6">
          <div className="image-container">
            <img src="path_to_your_image.jpg" alt="Dev Effect" className="img-fluid" />
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
