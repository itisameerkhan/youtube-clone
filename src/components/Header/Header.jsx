import './Header.scss';
import youtubeLogo from '../../assets/youtube-logo.svg';
import burger from '../../assets/youtube-svgs/svg6.svg';
import Bell from '../../assets/youtube-svgs/svg13.svg';
import user from '../../assets/pfp-white.png';
import search from '../../assets/youtube-svgs/svg10.svg';
import mic from '../../assets/youtube-svgs/svg11.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../Redux/appSlice';
import record from '../../assets/youtube-svgs/svgrecord.svg';
import { Link } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import { useEffect, useState } from 'react';
import { setProgress } from '../../Redux/appSlice';
import { YOUTUBE_SEARCH_API } from '../../utils/constants';

const Header = () => {

  const dispatch = useDispatch();
  const progress = useSelector(store => store.app.progress);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {

    const timer = setTimeout(() => {
      getSearchSuggestions();
      // console.log(searchQuery);
    }, 200);
    
    return () => clearTimeout(timer);

  },[searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
  }

  const  toggleMenuHandle = () => { dispatch(toggleMenu()); }

  return (
    <>
    <div className="header-org"></div>
    <div className="header">
    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => dispatch(setProgress(0))}
      />
        <div className="header-1">
          <div 
            className="burger-icon"
            onClick={toggleMenuHandle}>
            <img src={burger} alt="burger-menu" className='header-icon' />
          </div>
          <Link  to={'/'}>
            <img src={youtubeLogo} alt="youtube-logo" className='youtube-logo' />
          </Link>
        </div>
        <div className="header-2">
          <div className="search-input">
            <input 
              type="text" 
              placeholder='Search'
              onChange={(e) => setSearchQuery(e.target.value)} />
            <div className="search-div">
            <img src={search} alt="search" className='header-icon' />
            </div>
          </div>
          <div className="mic-div">
          <img src={mic} alt="mic" className='header-icon' />
          </div>
        </div>
        <div className="header-3">
          <div className="res-search">
            <img src={search} alt="search" className='header-icon' />
          </div>
          <div className="header-3-img upload-icon">
          <img src={record} alt="upload" className='header-icon' />
          </div>
          <div className="header-3-img">
          <img src={Bell} alt="bell" className='header-icon' />
          </div>
          <img src={user} alt="" className='header-icon user-icon' />
        </div>
    </div>
    </>
  )
}

export default Header;