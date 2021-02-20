import React from 'react';
import styled from 'styled-components';

interface ISongName {
    track?: string,
    artist?: string,
}

const SongName: React.FC<ISongName> = ({ track, artist }) => {
    return (
        <div>
            <Track>{track}</Track>
            <Artist>{artist}</Artist>
        </div>
    )
}

const Track = styled.h2`
    font-size: 36px;
    font-weight: 800;
    text-align: center;
    color: #ffffff;
    margin: 0;
`;

const Artist = styled.h1`
    font-size: 18px;
    font-weight: 300;
    text-transform: uppercase;
    text-align: center;
    color: #6f729c;
    margin: 0;
`;

export default SongName
