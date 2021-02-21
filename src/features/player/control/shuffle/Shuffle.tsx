import React from 'react'
import Button from '../../../button/Button';

import { ReactComponent as ShuffleIcon } from '../../../../assets/shuffle_ico.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectPlayList, selectShuffleStatus, shufflePlayer } from '../../PlayerSlice';

const Shuffle = () => {
    const shuffleStatus = useSelector(selectShuffleStatus);
    const songs = useSelector(selectPlayList);
    const dispatch = useDispatch();
    return (
        <Button
            heightSize='26px'
            widthSize='26px'
            activeHandler={shuffleStatus}
            onClick={() => dispatch(shufflePlayer(songs))}
        >
            <ShuffleIcon />
        </Button>
    )
}

export default Shuffle
