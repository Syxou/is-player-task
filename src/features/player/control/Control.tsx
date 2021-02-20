import React from 'react';
import styled from 'styled-components';

import Next from './next/Next';
import Play from './play/Play';
import Prev from './prev/Prev';
import Repeat from './repeat/Repeat';
import Shuffle from './shuffle/Shuffle';

const Control = () => {
    return (
        <ControlWrap>
            <Shuffle />
            <Prev />
            <Play />
            <Next />
            <Repeat />
        </ControlWrap>
    )
}

const ControlWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;
export default Control
