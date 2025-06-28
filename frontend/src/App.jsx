import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Sales from "./pages/Sales";
import Sidenav from "./components/Sidenav";
import AddStock from "./pages/AddStock";
import Notification from "./pages/Notification";

function App() {
  return (
    <div className="layout">
      
      <div className='sidebar'><Sidenav /></div>      
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/add-stock" element={<AddStock />} />
            <Route path="/notification" exact element={<Notification />} />
            {/* add more routes as needed */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
