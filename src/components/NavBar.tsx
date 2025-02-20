import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              FaceMasher
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Rankings
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Kys
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
