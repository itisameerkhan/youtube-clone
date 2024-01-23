import './Error.scss';
import error from '../../assets/youtube-svgs/error.svg';

const Error = () => {
  return (
    <div className="error">
        <img src={error} alt="error" className='error-svg' />
        <p>404 Not found</p>
    </div>
  )
}

export default Error