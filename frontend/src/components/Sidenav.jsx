import { useEffect } from "react";
function Sidenav() {
  useEffect(() => {
    const links = document.querySelectorAll(".sidenav a");
    links.forEach((link) => {
      if (link.getAttribute("href") === window.location.pathname) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
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
      </ul>
    </nav>
  );
}

export default Sidenav;
