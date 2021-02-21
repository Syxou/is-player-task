import React from 'react'
import Button from '../../../button/Button';
import { useDispatch } from 'react-redux';

import { ReactComponent as NextIcon } from '../../../../assets/next_ico.svg';
import { nextSong } from '../../PlayerSlice';

const Next = () => {
    const dispatch = useDispatch();

    return (
        <Button
            heightSize='26px'
            widthSize='30px'
            onClick={() => dispatch(nextSong())}
        >
            <NextIcon />
        </Button>
    )
}

export default Next
