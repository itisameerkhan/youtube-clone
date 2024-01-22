import { useEffect, useState } from 'react';
import ChatMessage from '../ChatMessage/ChatMessage';
import './LiveChat.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../Redux/chatSlice';
import { randowMessage } from '../../utils/helper';

const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.message);
    const [liveMessage, setLiveMessage] = useState("");

    useEffect(() => {

        const interval = setInterval(() => {
            // API polling
            const generateRandomMessage = randowMessage();
            // console.log('API polling');
            dispatch(addMessage({name: generateRandomMessage.name, message: generateRandomMessage.message}));
        },2000);

    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addMessage({name: 'Ameer khan', message: liveMessage}))
        setLiveMessage("");
    }

    return (
        <div className="live-chat">
            <p className="lc-title">Live Chat</p>
            <div className="live-chat-inner">
            {chatMessages.map((data, index) => (
                <ChatMessage key={index} name={data.name} message={data.message} />
            ))}
            </div>
            <form action="" className="lc-submit" onSubmit={handleSubmit}>
                <input type="text" value={liveMessage} onChange={(e) => setLiveMessage(e.target.value) } />
                <button>
                    <span class="material-symbols-outlined">send</span>
                </button>
            </form>
        </div>
    )
}

export default LiveChat;