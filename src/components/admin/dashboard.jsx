import SideBar from './sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
