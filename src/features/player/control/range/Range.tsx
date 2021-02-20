import React from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'
import styled from 'styled-components';
import { servicesVersion } from 'typescript';


const Range: React.FC = () => {
    const [value, setValue] = React.useState(0)
    return (
        <SliderWrap>
            <Slider
                value={value}
                min={0}
                max={300}
                onChange={(e) => setValue(e)}
            />
        </SliderWrap>
    )
}

const SliderWrap = styled.div`

`;

export default Range
