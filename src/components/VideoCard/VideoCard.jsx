import './VideoCard.scss';
import profile from '../../assets/youtube-svgs/defaultpfp.svg';

const VideoCard = ({info}) => {

    console.log(info);

    const formatNumbers = (num) => {
        if(num < 1000) return num;
        else if(num >= 1000 && num <= 999999) return Math.round(num/1000) + 'K';
        else if(num >= 1000000 && num <= 999999999) return Math.round(num/1000000) + 'M';
    }

    const calculateDuration = (duration) => {
        const currentDate = new Date();
        const providedDate = new Date(duration);
        const timeDifference = Math.round(new Date(currentDate - providedDate) / (1000 * 60 * 60 * 24));
        return timeDifference;
    }

    return (
        <div className="video-card">
            <img src={info?.snippet?.thumbnails?.medium?.url} alt="thumbnail" className='thumbnail' />
            <div className="vc-inner">
                <img src={profile} alt="pfp" className='yt-profile' />
                <div className="vs-inner-right">
                    <p className="title">
                        {info?.snippet?.title}
                    </p>
                    <p className="chl-name">{info?.snippet?.channelTitle}</p>
                    <p className="views">{formatNumbers(info?.statistics?.viewCount)} views • {calculateDuration(info?.snippet?.publishedAt)} day ago</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;