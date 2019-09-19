import React, { useState } from "react";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">Learn-Everything</Link>
          <button type="button" className="nav-btn" onClick={handleToggle}>
            {isOpen ? "true" : "false"}
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
