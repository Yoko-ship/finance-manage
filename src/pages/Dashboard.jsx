import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useSelector } from "react-redux";
function Dashboard() {
  const user = useSelector((state) => state.expenses.user);
  return (
    <Navigation>
      {user ? (
        <>
          <li>
            <NavLink to="balance">Общий баланс</NavLink>
          </li>
          <li>
            <NavLink to="piechart">Чарт</NavLink>
          </li>
        </>
      ) : (
        <h2 style={{ textAlign: "center" }}>Пожалуста войдите в аккаунт</h2>
      )}
    </Navigation>
  );
}

export default Dashboard;
