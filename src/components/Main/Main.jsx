import { useSelector } from 'react-redux';
import ButtonList from '../ButtonList/ButtonList';
import VideoContainer from '../VideoContainer/VideoContainer';
import './Main.scss';
import useProgress from '../../hooks/useProgress';

const Main = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  // useProgress();

  return (
    <div className="main" style={{width: isMenuOpen ? '81vw' : '91vw'}}>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default Main;
