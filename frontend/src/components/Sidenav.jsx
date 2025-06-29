import { useEffect } from "react";
function Sidenav() {
  useEffect(() => {
    const links = document.querySelectorAll(".sidenav a");
    links.forEach((link) => {
      if (link.getAttribute("href") === window.location.pathname) {
        link.classList.add("active");
        // link.classList.add(window.location.pathname.slice(1));
      } else {
        link.classList.remove("active");
        // link.classList.remove(window.location.pathname.slice(1));
      }
    });
  }, []);
  return (
    <nav className="sidenav">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/inventory">Inventory</a>
        </li>
        <li>
          <a href="/sales">Sales</a>
        </li>
        <li>
          <a href="/add-stock">Add Stock</a>
        </li>
        <li>
          <a href="/notification">Notification</a>
        </li>
        <li>
          <a href="/transaction">Transaction</a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidenav;
