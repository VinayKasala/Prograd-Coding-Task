import React from "react";
import "./Header.css";
import AddReservation from "./AddReservation";

const Header = () => {
  return (
    <div className="header">
      Flight Management System
      <nav className="nav-links">
        <button>Login</button>
        <button>SignUp</button>
        <button>
          <AddReservation />
        </button>
      </nav>
    </div>
  );
};

export default Header;
