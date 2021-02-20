import React from 'react'
import styled from 'styled-components';
import { ReactComponent as PlayListIcon } from '../../assets/playlist_ico.svg'
import Button from '../button/Button';


const PlayList: React.FC = () => {
    return (
        <Button
            heightSize="26px"
            widthSize="36px"
            onClick={() => console.log('click')}
        >
            <PlayListIcon />
        </Button>
    )
}


export default PlayList
