import React from "react";
import { Link } from "react-router-dom";
import LearnMethod from "./LearnMethod";

const Navbar = () => {
  return (
    <nav>
      <Link to="/learn">Learn</Link>
      <Link to="/count">Count</Link>
    </nav>
  );
};

export default Navbar;
