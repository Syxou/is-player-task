import React, { useState } from 'react'
import styled from 'styled-components';
import { ReactComponent as PlayListIcon } from '../../assets/playlist_ico.svg'
import Button from '../button/Button';
import PlayListMenu from './PlayListMenu';


const PlayList: React.FC = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <Button
                heightSize="26px"
                widthSize="36px"
                onClick={() => setOpenMenu(!openMenu)}
                activeHandler={!openMenu}
            >
                <PlayListIcon />
            </Button>
            {openMenu && <PlayListMenu />}
        </>
    )
}


export default PlayList
