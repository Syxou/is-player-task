import React from 'react'
import styled from 'styled-components';
import PlayLIst from '../playlist/PlayList';
import NextTrack from './NextTrack';

const Navigation: React.FC = () => {
    return (
        <Wrap>
            <Nav>
                <PlayLIstWrap>
                    <PlayLIst />
                </PlayLIstWrap>
                <NextTrack />
                <div>
                    <span>3:40</span>
                </div>
            </Nav>
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 100%;
    height: 89px;
    background-color: #ffffff;
`;

const PlayLIstWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.div`
    display: grid;
    grid-template-columns: 15% 1fr 15%;
    height: 100%;
`;

export default Navigation
