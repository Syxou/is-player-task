import React from 'react';
import Slider from 'react-rangeslider';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import 'react-rangeslider/lib/index.css'

import { selectCurrentSong, selectTimePoint, updatingTimePoint } from '../../PlayerSlice';

const Range: React.FC = () => {
    const [value, setValue] = React.useState(0);
    const currentSong = useSelector(selectCurrentSong);
    const timePoint = useSelector(selectTimePoint);
    const dispatch = useDispatch();

    const getTime = () => {
        const h = Math.floor(timePoint / 60 / 60);
        const m = Math.floor(timePoint / 60) - (h * 60);
        const s = timePoint % 60;
        return `${h ? h + ':' : ''}${m}:${s}`
    }

    return (
        <RangeWrap>
            <Timer>{getTime()}</Timer>
            <SliderWrap>
                <Slider
                    value={timePoint}
                    min={0}
                    max={currentSong.time}
                    onChange={(v) => dispatch(updatingTimePoint(v))}
                />
            </SliderWrap>
            <Timer>{currentSong.time / 60}</Timer>
        </RangeWrap>
    )
}

const RangeWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;


    .rangeslider {
        border-radius: 0.5px;
        background-color: rgb(0, 201, 183);
        height: 1px;
    }
    .rangeslider-horizontal .rangeslider__fill {
        height: 5px;
        background-color: rgb(0, 201, 183);
    }

    .rangeslider__handle{
        width: 15px;
        height: 15px;
        box-shadow:0 0px 12px rgb(0 201 183 / 19%), 0 0px 11px rgb(0 201 183 / 81%);

        &::after{
            display: none;
        }
    }
`;

const SliderWrap = styled.div`
    width: 70vw;
`;

const Timer = styled.div`
    margin: 0 3%;
    font-size: 18px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: center;
    color: #9a9b9b;
    width: 50px;
    text-align: right;
`;

export default Range
