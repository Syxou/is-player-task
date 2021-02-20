import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import playActive from '../../../../assets/Play_active.png'
import playInactive from '../../../../assets/Play_inactive.png'
import { selectPlayStatus, playPause } from '../../PlayerSlice';

interface IPlay {
    itsPlay: boolean,
}

const Play: React.FC = () => {
    const player = useSelector(selectPlayStatus);
    const dispatch = useDispatch();
    // const [play, setPlay] = useState(false);
    console.log(player)
    return (
        <>
            <PlayButton
                itsPlay={player}
                onClick={() => dispatch(playPause())}
            />
        </>
    )
}

const PlayButton = styled.button<IPlay>`
    position: relative;
    border: none;
    width: 156px;
    height: 164px;
    background: transparent;

    &::before{
        content:'';
        position: absolute;
        /**
        * Because image has different sizes 🤷‍♂️
        */
        top: ${props => props.itsPlay ? '-25.5%' : '-25%'};
        left:  ${props => props.itsPlay ? '-32%' : '-35%'};
        height: 150%;
        width: 170%;
        background: ${props => props.itsPlay ? `url(${playActive})` : `url(${playInactive})`};
        background-size:  ${props => props.itsPlay ? '255px' : '156px'};
        background-repeat: no-repeat;
        background-position: center;
        pointer-events: none;
    }
`;

export default Play
