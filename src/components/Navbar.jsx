import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">The Deveffect</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/journal">Journal</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}
