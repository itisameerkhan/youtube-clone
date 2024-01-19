import { useSelector } from 'react-redux';
import './Sidebar.scss';
import SideBarClose from '../SideBarClose/SideBarClose';
import home from '../../assets/youtube-svgs/svg14.svg';
import shorts from '../../assets/youtube-svgs/svg15.svg';
import subscriptions from '../../assets/youtube-svgs/svg16.svg';
import rightArrow from '../../assets/youtube-svgs/svg18.svg';
import history from '../../assets/youtube-svgs/svg20.svg';
import watchLater from '../../assets/youtube-svgs/svg22.svg';
import likedVideos from '../../assets/youtube-svgs/svg108.svg';
import trending from '../../assets/youtube-svgs/svg26.svg';
import shopping from '../../assets/youtube-svgs/svg27.svg';
import music from '../../assets/youtube-svgs/svg28.svg';
import movies from '../../assets/youtube-svgs/svg29.svg';
import live from '../../assets/youtube-svgs/svg30.svg';
import gaming from '../../assets/youtube-svgs/svg31.svg';
import news from '../../assets/youtube-svgs/svg32.svg';
import sports from '../../assets/youtube-svgs/svg33.svg';
import learning from '../../assets/youtube-svgs/svg34.svg';
import fashion from '../../assets/youtube-svgs/svg35.svg';
import podcasts from '../../assets/youtube-svgs/svg36.svg';
import youtubePremuim from '../../assets/youtube-svgs/svg37.svg';
import youtubemusic from '../../assets/youtube-svgs/svg39.svg';
import youtubekids from '../../assets/youtube-svgs/svg40.svg';
import settings from '../../assets/youtube-svgs/svg41.svg';
import help from '../../assets/youtube-svgs/svg43.svg';
import feedback from '../../assets/youtube-svgs/svg44.svg';

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if(!isMenuOpen) return <SideBarClose />;

  return (
    <>
    <div className="sidebar-org"></div>
      <div className="sidebar"> 
        <div className="sb-cat-1">
          <div className="sb-icon sb-home">
            <img src={home} alt="home" />
            <p>Home</p>
          </div>
          <div className="sb-icon">
            <img src={shorts} alt="shorts" />
            <p>Shorts</p>
          </div>
          <div className="sb-icon">
            <img src={subscriptions} alt="subscription" />
            <p>Subscriptions</p>
          </div>
        </div>
        <div className="sb-cat-1">
          <p className='sb-cat-2-p'>You 
          <img src={rightArrow} alt="" />
          </p>
          <div className="sb-icon">
            <img src={history} alt="history" />
            <p>History</p>
          </div>
          <div className="sb-icon">
            <img src={watchLater} alt="watch-later" />
            <p>Watch later</p>
          </div>
          <div className="sb-icon">
            <img src={likedVideos} alt="liked-videos" />
            <p>Liked videos</p>
          </div>
        </div>
        <div className="sb-cat-1">
          <p className="explore">Explore</p>
          <div className="sb-icon">
              <img src={trending} alt="Trending" />
              <p>Trending</p>
          </div>
          <div className="sb-icon">
              <img src={shopping} alt="Shopping" />
              <p>Shopping</p>
          </div>
          <div className="sb-icon">
              <img src={music} alt="music" />
              <p>Music</p>
          </div>
          <div className="sb-icon">
              <img src={movies} alt="movies" />
              <p>Movies</p>
          </div>
          <div className="sb-icon">
              <img src={live} alt="live" />
              <p>Live</p>
          </div>
          <div className="sb-icon">
              <img src={gaming} alt="gaming" />
              <p>Gaming</p>
          </div>
          <div className="sb-icon">
              <img src={news} alt="news" />
              <p>News</p>
          </div>
          <div className="sb-icon">
              <img src={sports} alt="sports" />
              <p>Sports</p>
          </div>
          <div className="sb-icon">
              <img src={learning} alt="Learning" />
              <p>Learning</p>
          </div>
          <div className="sb-icon">
              <img src={fashion} alt="fashion" />
              <p>Fashion & Beauty</p>
          </div>
          <div className="sb-icon">
              <img src={podcasts} alt="podcasts" />
              <p>Podcasts</p>
          </div>
        </div>
        <div className="sb-cat-1">
          <p className="sb-cat-2-p">More from YouTube</p>
          <div className="sb-icon">
              <img src={youtubePremuim} alt="youtube" />
              <p>YouTube Premium</p>
          </div>
          <div className="sb-icon">
              <img src={youtubemusic} alt="youtube" />
              <p>YouTube Music</p>
          </div>
          <div className="sb-icon">
              <img src={youtubekids} alt="youtube" />
              <p>YouTube Kids</p>
          </div>
        </div>
        <div className="sb-cat-1">
          <div className="sb-icon">
              <img src={settings} alt="setting" />
              <p>Settings</p>
          </div>
          <div className="sb-icon">
              <img src={history} alt="report" />
              <p>Report History</p>
          </div>
          <div className="sb-icon">
              <img src={help} alt="help" />
              <p>Help</p>
          </div>
          <div className="sb-icon">
              <img src={feedback} alt="feedback" />
              <p>Send feedback</p>
          </div>
        </div>
    </div>
    </>
  )
}

export default Sidebar