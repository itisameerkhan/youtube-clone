import { useEffect } from 'react';
import ChatMessage from '../ChatMessage/ChatMessage';
import './LiveChat.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../Redux/chatSlice';
import { randowMessage } from '../../utils/helper';

const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.message)

    useEffect(() => {

        const interval = setInterval(() => {
            // API polling
            const generateRandomMessage = randowMessage();
            // console.log('API polling');
            dispatch(addMessage({name: generateRandomMessage.name, message: generateRandomMessage.message}));
        },2000);

    },[]);

    return (
        <div className="live-chat">
            <p className="lc-title">Live Chat</p>
            <div className="live-chat-inner">
            {chatMessages.map((data, index) => (
                <ChatMessage key={index} name={data.name} message={data.message} />
            ))}
            </div>
        </div>
    )
}

export default LiveChat;