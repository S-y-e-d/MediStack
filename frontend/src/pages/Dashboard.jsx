import DashboardTable from "../components/DashboardTable";
import Graph from "../components/Graph";
function Dashboard() {
  return (
    <div className="dashboard">
      <Graph />
      <DashboardTable />
    </div>
  );
}

export default Dashboard;
