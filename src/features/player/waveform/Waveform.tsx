import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectCurrentSong, selectTimePoint } from '../PlayerSlice';

interface IOne {
    heightItem: number;
    waveformLength: number;
}
interface IWaveformWrap {
    timePoint: number;
    maxTime: number;
}

const Waveform = () => {

    const currentSong = useSelector(selectCurrentSong);
    const timePoint = useSelector(selectTimePoint);
    return (
        <WaveformWrap
            timePoint={timePoint}
            maxTime={currentSong.time}
        >
            <WaveformItems>
                {currentSong?.waveform.map((w, i) => (
                    <One
                        style={{
                            height: `${w}%`,
                            width: `calc(100vw /  ${currentSong.waveform.length})`,
                        }}
                        key={i}
                    />
                ))}
            </WaveformItems>
        </WaveformWrap>
    )
}

const WaveformWrap = styled.div<IWaveformWrap>`
    height: 56px;
    width:${props => (props.timePoint * 100) / props.maxTime}%;
    overflow: hidden;
    transition: width 0.3s;
`;

const WaveformItems = styled.div`
    width: 100vw;
    height:56px;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
`;

const One = styled.div`
    background-color: #755dd5;
`;

export default Waveform
