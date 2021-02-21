import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectPlayList } from '../player/PlayerSlice'

const PlayListMenu = () => {
    const playList = useSelector(selectPlayList)

    return (
        <PlayListMenuWrap>
            <Ul>
                {playList?.map((e => (
                    <Li>
                        {`${e.artistName} - ${e.trackName}`}
                    </Li>
                )))}
                  {playList?.map((e => (
                    <Li>
                        {`${e.artistName} - ${e.trackName}`}
                    </Li>
                )))}
                  {playList?.map((e => (
                    <Li>
                        {`${e.artistName} - ${e.trackName}`}
                    </Li>
                )))}
                  {playList?.map((e => (
                    <Li>
                        {`${e.artistName} - ${e.trackName}`}
                    </Li>
                )))}
            </Ul>
        </PlayListMenuWrap>
    )
}


const Ul = styled.ul`
    margin: 0;
    padding: 0;
    overflow: scroll;
`;

const Li = styled.ul`
    margin: 0;
    padding: 15px 5px;
    font-size: 16px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    text-align: left;
    color: #6f729c;

    &:hover{
        background-color:#eeeded;
    }
`;

const PlayListMenuWrap = styled.div`
    position: absolute;
    left: 10px;
    bottom: 64px;
    background-color: #ffffff;
    height: calc(50vh - 24px);
    width: calc(50vw - 24px);
    border-radius: 24px;
    overflow: scroll;
    padding: 24px;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    animation: openClose 0.3s;

    @keyframes openClose {
        from {
            border-radius: 50px;
            height: 10vh;
            margin-bottom: -10px;
        }

        to {
            border-radius: 24px;
            height: calc(50vh - 24px);
            margin-bottom: 0;
        }
    }
`;
export default PlayListMenu
