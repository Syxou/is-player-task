import React from 'react';
import styled from 'styled-components'

import Navigation from './features/navigation/Navigation';
import backgroundImage from './assets/bg_image.jpg';
import Player from './features/player/Player';

interface IApp {
    backgroundImage?: string;
}

const App: React.FC = () => {
    return (
        <AppWrap>
            <AlbumCover backgroundImage={backgroundImage} />
            {/* <Counter /> */}
            <Player />

            <Navigation />
        </AppWrap>
    );
}

const AppWrap = styled.div<IApp>`
    position: relative;
    display: grid;
    grid-template-rows: 1fr 89px;
    /* max-width: 576px; */
    min-width: 300px;
    height: 100vh;
    background-color: rgba(31, 25, 55, 1);
    margin: 0 auto;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

`;

const AlbumCover = styled.div<IApp>`
 position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 43vh;
        background: url(${props => props.backgroundImage}) no-repeat bottom;
        background-size: cover;
        opacity: 0.1;
        mix-blend-mode: luminosity;
        pointer-events: none;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width:100%;
            height: 43vh;
            background: linear-gradient(to top, rgba(31, 25, 55,1), rgba(27, 27, 27,0.1));
            pointer-events: none;
    }
`;
export default App;
