import './ChatMessage.scss';
import profile from '../../assets/youtube-svgs/defaultpfp.svg';

const ChatMessage = ({name, message}) => {
  return (
    <div className='chat-message'>
        <img src={profile} className='yt-channel-pp-1' alt="" />
        <p className="lc-pp">{name}</p>
        <p className='lc-pp-m'>{message}</p>
    </div>
  )
}

export default ChatMessage;