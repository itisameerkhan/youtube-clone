import './ButtonList.scss';
import { youtubeTags } from '../../utils/constants';
import { useSelector } from 'react-redux';

const ButtonList = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  return (
    <>
    <div className="btn-list" 
      style={{left: isMenuOpen ? '16.4rem' : '6.8rem', width: isMenuOpen ? '81vw' : '90vw'}}>
        {youtubeTags.map((data) => (
          <p key={data} className={data}>{data}</p>
          ))}
    </div> 
    <div className="btn-list-org"></div>
    </>
  )
}

export default ButtonList;