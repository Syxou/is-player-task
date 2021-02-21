import React from 'react'
import styled from 'styled-components'
import Button from '../../button/Button'

import { ReactComponent as BackIcon } from '../../../assets/back_ico.svg';
import { ReactComponent as MoreIcon } from '../../../assets/more_ico.svg';

const TopBar = () => {
    return (
        <TopBarWrap>
            <Button
                heightSize={'29px'}
                widthSize={'16px'}
                onClick={() => console.log('click')}
                style={{
                    margin: 'auto',
                }}
            >
                <BackIcon />
            </Button>
            <div>
                <AlbumTitle>
                    Album
                </AlbumTitle>
                <AlbumName>
                    Unreleased
                </AlbumName>
            </div>
            <Button
                heightSize={'29px'}
                widthSize={'4px'}
                onClick={() => console.log('click')}
                style={{
                    margin: 'auto',
                }}
            >
                <MoreIcon />
            </Button>
        </TopBarWrap>
    )
}
const AlbumTitle = styled.h2`
    font-size: 18px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    color: #6f729c;
    text-transform: uppercase;
    margin: 0;
`;

const AlbumName = styled.h1`
    font-size: 24px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    margin: 0;
`;

const TopBarWrap = styled.div`
    margin-top: 4%;
    margin-bottom: 7%;
    display: grid;
    grid-template-columns: 15% 1fr 15%;
`;
export default TopBar
