import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import getTime from '../../utils/getTime';
import { selectNextSong } from '../player/PlayerSlice';
import PlayLIst from '../playlist/PlayList';
import NextTrack from './NextTrack';

const Navigation: React.FC = () => {

    const nextSong = useSelector(selectNextSong)
    return (
        <Wrap>
            <Nav>
                <PlayLIstWrap>
                    <PlayLIst />
                </PlayLIstWrap>
                <NextTrack
                    nameTrack={nextSong.trackName}
                />
                <TimeWrap>
                    <Time>{getTime(nextSong.time)}</Time>
                </TimeWrap>
            </Nav>
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 100%;
    height: calc(89px - 25px);
    background-color: #ffffff;
    padding-bottom: 24px;
`;

const PlayLIstWrap = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
`;

const Nav = styled.div`
    display: grid;
    grid-template-columns: 15% 1fr 15%;
    height: 100%;
`;

const Time = styled.span`
    font-size: 24px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: right;
    color: #6f729c;
`;

const TimeWrap = styled.div`
    display: flex;
    justify-content: end;
    align-items: flex-end;
`;

export default Navigation
