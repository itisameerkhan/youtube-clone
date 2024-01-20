import './Body.scss';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Body = () => {

  return (
    <div className="body">
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Body;