import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Sales from "./pages/Sales";
import Sidenav from "./components/Sidenav";

function App() {
  return (
    <div className="layout">
      <Sidenav />
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/sales" element={<Sales />} />
            {/* add more routes as needed */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
