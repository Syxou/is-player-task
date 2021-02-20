import React from 'react';
import styled from 'styled-components';

import importImage from '../../../utils/importImage';
import { ISong } from '../PlayerSlice';

interface ISliderItem {
    label: string
}

const SliderItem: React.FC<ISliderItem> = ({ label }, ...res) => {
    const [img, setImg] = React.useState('');
    React.useEffect(() => {
        const imgUrl = importImage(label).then((url) => setImg(url.default))
    }, [])

    return (
        <SliderItemWrap {...res} id='customItem'>
            <div>
                <SliderImage src={img} />
            </div>
        </SliderItemWrap>
    )
}

const SliderImage = styled.img`
    height: 350px;
`;

const SliderItemWrap = styled.div`
    display: flex !important;
    align-items: center;
    justify-content: center;
    height: 55.56vw;
    transform: scale(0.4);
    transition: transform 0.5s ease;
`;

export default SliderItem;
