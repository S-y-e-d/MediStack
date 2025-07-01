import { NavLink } from "react-router-dom";

function Sidenav() {
  return (
    <nav className="sidenav">
      <ul>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/inventory"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Inventory
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sales"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Sales
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add-stock"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Add Stock
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/notification"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Notification
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/transaction"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Transaction
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidenav;
