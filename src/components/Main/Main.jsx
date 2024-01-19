import { useSelector } from 'react-redux';
import ButtonList from '../ButtonList/ButtonList';
import VideoContainer from '../VideoContainer/VideoContainer';
import './Main.scss';

const Main = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  return (
    <div className="main" style={{width: isMenuOpen ? '81vw' : '90vw'}}>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default Main;