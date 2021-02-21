import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectRepeatStatus, setRepeat } from '../../PlayerSlice';
import Button from '../../../button/Button';
import { ReactComponent as RepeatIcon } from '../../../../assets/repeat_ico.svg';

function Repeat() {
    const repeatStatus = useSelector(selectRepeatStatus);
    const dispatch = useDispatch();
    return (
        <Button
            heightSize='26px'
            widthSize='26px'
            onClick={() => dispatch(setRepeat())}
            activeHandler={repeatStatus}
        >
            <RepeatIcon />
        </Button>
    )
}

export default Repeat;
