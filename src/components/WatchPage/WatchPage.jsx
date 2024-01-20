import { useEffect } from 'react';
import './WatchPage.scss';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../../Redux/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';

const WatchPage = () => {

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    console.log(searchParams.get("v"));

    useEffect(() => {
        dispatch(closeMenu());
    },[]);

    return (
        <div className='watch'>
            <iframe 
                width="560" 
                height="315" 
                src={`https://www.youtube.com/embed/${searchParams.get("v")} `}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default WatchPage;