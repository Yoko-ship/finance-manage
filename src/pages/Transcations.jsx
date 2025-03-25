import React from "react";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";

function Transcations() {
  return (
    <Navigation>
      <li>
        <NavLink to="income">Доходы</NavLink>
      </li>
      <li>
        <NavLink to="expenses">Расходы</NavLink>
      </li>
    </Navigation>
  );
}

export default Transcations;
