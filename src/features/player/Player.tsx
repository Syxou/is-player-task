import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { loadPlayList, selectCurrentSong } from './PlayerSlice';
import Control from './control/Control';
import Range from './control/range/Range';
import SongName from './control/songName/SongName';
import SliderPlayer from './slider/Slider';
import Waveform from './waveform/Waveform';
import TopBar from './topBar/TopBar';

const Player: React.FC = () => {
    const dispatch = useDispatch();
    const song = useSelector(selectCurrentSong);

    React.useEffect(() => {
        dispatch(loadPlayList());
    }, []);

    return (
        <PlayerGrid>
            <TopBar />
            <SliderPlayer />
            <SongName track={song?.trackName} artist={song?.artistName} />
            <Control />
            <Range />
            <Waveform />
        </PlayerGrid>
    );
};

const PlayerGrid = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export default Player;
