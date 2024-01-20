import { useEffect, useState } from 'react';
import './WatchPage.scss';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../../Redux/appSlice';
import { useSearchParams } from 'react-router-dom';
import useProgress from '../../hooks/useProgress';
import profile from '../../assets/youtube-svgs/defaultpfp.svg';
import like from '../../assets/youtube-svgs/like.svg';
import dislike from '../../assets/youtube-svgs/dislike.svg';
import share from '../../assets/youtube-svgs/share.svg';

const WatchPage = () => {

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const [data, setData] = useState([]);
    const [channelData, setChannelData] = useState([]);
    const [info, setInfo] = useState({btn: false});

    let channelId = null;
    useProgress();

    const formatNumbers = (num) => {
        if(num < 1000) return num;
        else if(num >= 1000 && num <= 999999) return Math.round(num/1000) + 'K';
        else if(num >= 1000000 && num <= 999999999) return Math.round(num/1000000) + 'M';
    }

    // console.log(searchParams.get("v"));

    const getVideosById = async () => {
        const datas = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParams.get('v')}&key=${import.meta.env.VITE_GOOGLE_API}`);
        const json = await datas.json();
        channelId = json.items[0]?.snippet?.channelId;
        console.log(json.items[0]);
        setData(json.items[0]);
    }

    const getChannel = async () => {
        // console.log('channel id -> ', data.snippet?.channelId);
        const datas = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${import.meta.env.VITE_GOOGLE_API}`);
        const json = await datas.json();
        setChannelData(json.items[0]);
        console.log(json.items[0]);
        // console.log(json);
    }

    useEffect(() => {
        const fetchData = async () => {
            await getVideosById();
            await getChannel();
        }
        
        dispatch(closeMenu());
        fetchData();
    },[]);


    return (
        <div className='watch'>
            <div className="watch-in">
                <iframe 
                    className='iframe'
                    width="560" 
                    height="315" 
                    src={`https://www.youtube.com/embed/${searchParams.get("v")} `}
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>
                <div className="watch-inner">
                    <p className="watch-title">{data?.snippet?.title}</p>
                    <div className="watch-inner-1">
                        <div className="watch-inner-1-left">
                            <img src={profile} alt="pfp" className='yt-channel-pp' />
                            <div className="wn1l">
                                <p className="channel-title">{data?.snippet?.channelTitle}</p>
                                <p className="subs">{formatNumbers(channelData?.statistics?.subscriberCount)} subscribers</p>
                            </div>
                            <button 
                                className= {`subs-btn ${info.btn ? 'clicked' : 'none'}`}
                                onClick={() => setInfo({...info, btn: !info.btn})}>
                                {info.btn ? 'Subscribed' : 'Subscribe'}
                            </button>
                        </div>
                        <div className="watch-inner-right">
                            <div className="likes">
                               <button><img src={like} alt="like" className='yt-svg' /> {formatNumbers(data?.statistics?.likeCount)}</button>
                              <button><img src={dislike} alt="dislike" className='yt-svg' /></button>
                            </div>
                            <button className='yt-btn'><img src={share} className='yt-svg' alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchPage;