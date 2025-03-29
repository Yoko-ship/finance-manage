import React from "react";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function Transcations() {
  const user = useSelector((state) => state.expenses.user);

  return (
    <Navigation>
      {user ? (
      <>
      <li>
        <NavLink to="income">Доходы</NavLink>
      </li>
      <li>
        <NavLink to="expenses">Расходы</NavLink>
      </li>
      </>  
      ):(
        <h2 style={{ textAlign: "center" }}>Пожалуста войдите в аккаунт</h2>
     )}
    </Navigation>
  );
}

export default Transcations;
