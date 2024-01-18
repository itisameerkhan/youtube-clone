import './Body.scss';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';

const Body = () => {
  return (
    <div className="body">
        <Sidebar />
        <Main />
    </div>
  )
}

export default Body;