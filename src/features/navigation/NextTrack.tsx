import React from 'react'
import styled from 'styled-components';

const NextTrack: React.FC = () => {
    return (
        <Wrap>
            <Next>NEXT</Next>
            <Track>Livin' In A Movie</Track>
        </Wrap>
    )
}

const Wrap = styled.div`
    display: block;
    text-align: left;
`;

const Next = styled.p`
    margin: 0;
    font-size: 18px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    color: #6f729c;
`;
const Track = styled.p`
    margin: 0;
    font-size: 20px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: normal;
    color: #1b1b1b;
`;

export default NextTrack
