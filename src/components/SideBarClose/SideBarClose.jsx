import './SideBarClose.scss';
import home from '../../assets/youtube-svgs/svg14.svg';
import shorts from '../../assets/youtube-svgs/svg15.svg';
import subscriptions from '../../assets/youtube-svgs/svg16.svg';
import you from '../../assets/youtube-svgs/svg17.svg';

const SideBarClose = () => {
  return (
    <div className="sidebar-close">
        <div className="sbc-icon">
            <img src={home} alt="home" className='sbc-img' />
            <p>Home</p>
        </div>
        <div className="sbc-icon">
            <img src={shorts} alt="home" className='sbc-img' />
            <p>Shorts</p>
        </div>
        <div className="sbc-icon">
            <img src={subscriptions} alt="home" className='sbc-img' />
            <p>Subscriptions</p>
        </div>
        <div className="sbc-icon">
            <img src={you} alt="home" className='sbc-img' />
            <p>You</p>
        </div>
    </div>
  )
}

export default SideBarClose;