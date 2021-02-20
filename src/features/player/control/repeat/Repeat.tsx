import React from 'react';
import Button from '../../../button/Button';

import { ReactComponent as RepeatIcon } from '../../../../assets/repeat_ico.svg';

function Repeat() {
    return (
        <Button heightSize='26px' widthSize='26px' >
            <RepeatIcon />
        </Button>
    )
}

export default Repeat;
