import React from 'react'
import Button from '../../../button/Button';
import { useDispatch } from 'react-redux';
import { ReactComponent as PrevIcon } from '../../../../assets/previous_ico.svg';
import { prevSong } from '../../PlayerSlice';

const Prev = () => {

    const dispatch = useDispatch();

    return (
        <Button
            heightSize='26px'
            widthSize='30px'
            onClick={() => dispatch(prevSong())}
        >
            <PrevIcon />
        </Button>
    )
}

export default Prev
