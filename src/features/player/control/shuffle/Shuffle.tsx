import React from 'react'
import Button from '../../../button/Button';

import { ReactComponent as ShuffleIcon } from '../../../../assets/shuffle_ico.svg';

const Shuffle = () => {
    return (
        <Button heightSize='26px' widthSize='26px' >
            <ShuffleIcon />
        </Button>
    )
}

export default Shuffle
