import React from "react";
import { NavLink} from "react-router-dom";
import "../css/dashboard.css";
import Navigation from "../components/Navigation";
function Dashboard() {
  return (

    <Navigation>
      <li>
          <NavLink to="balance">Общий баланс</NavLink>
        </li>
        <li>
          <NavLink to="piechart">Чарт</NavLink>
        </li>
    </Navigation>
  );
}

export default Dashboard;
