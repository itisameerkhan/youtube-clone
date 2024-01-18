import './Header.scss';
import youtubeLogo from '../../assets/youtube-logo.svg';
import upload from '../../assets/upload.svg';
import Bell from '../../assets/youtube-svgs/svg13.svg';
import user from '../../assets/pfp-white.png';
import search from '../../assets/youtube-svgs/svg10.svg';
import mic from '../../assets/youtube-svgs/svg11.svg';

const Header = () => {
  return (
    <div className="header">
        <div className="header-1">
          <span className="material-symbols-outlined">menu</span>
          <img src={youtubeLogo} alt="youtube-logo" className='youtube-logo' />
        </div>
        <div className="header-2">
          <div className="search-input">
            <input type="text" placeholder='Search' />
            <div className="search-div">
            <img src={search} alt="search" className='header-icon' />
            </div>
          </div>
          <div className="mic-div">
          <img src={mic} alt="mic" className='header-icon' />
          </div>
        </div>
        <div className="header-3">
          <img src={upload} alt="upload" className='header-icon' />
          <img src={Bell} alt="bell" className='header-icon' />
          <img src={user} alt="" className='header-icon user-icon' />
        </div>
    </div>
  )
}

export default Header;