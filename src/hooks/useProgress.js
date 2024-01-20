import { setProgress } from '../Redux/appSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useProgress = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProgress(100));
        
        return () => dispatch(setProgress(0));
    });
}

export default useProgress;