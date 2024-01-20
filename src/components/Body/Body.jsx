import './Body.scss';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import { setProgress } from '../../Redux/appSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Body = () => {

  return (
    <div className="body">
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Body;