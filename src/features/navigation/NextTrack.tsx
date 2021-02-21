import React from 'react'
import styled from 'styled-components';

interface INextTrack {
    nameTrack: string,
}

const NextTrack: React.FC<INextTrack> = ({ nameTrack }) => {
    return (
        <Wrap>
            <Next>NEXT</Next>
            <Track>{nameTrack}</Track>
        </Wrap>
    )
}

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 5%;
`;

const Next = styled.p`
    margin: 0;
    font-size: 18px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #6f729c;
`;
const Track = styled.p`
    margin: 0;
    font-size: 20px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #1b1b1b;
`;

export default NextTrack
