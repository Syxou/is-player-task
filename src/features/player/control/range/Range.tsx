import React, { useState, useEffect } from 'react';
import Slider from 'react-rangeslider';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import 'react-rangeslider/lib/index.css'

import { nextSong, selectCurrentSong, selectRepeatStatus, selectTimePoint, updatingTimePoint } from '../../PlayerSlice';
import getTime from '../../../../utils/getTime';


const Range: React.FC = () => {

    const [mouseHover, setMouseHover] = useState(false);
    const currentSong = useSelector(selectCurrentSong);
    const timePoint = useSelector(selectTimePoint);
    const repeatStatus = useSelector(selectRepeatStatus);
    const dispatch = useDispatch();

    const sliderChangeHandler = (value: number) => {
        if (value <= currentSong.time && mouseHover) {
            dispatch(updatingTimePoint(value));
        }
    };

    useEffect(() => {
        if (timePoint === currentSong.time && !mouseHover) {
            if (repeatStatus) {
                dispatch(updatingTimePoint(0));
            } else {
                dispatch(nextSong());
            }
        }
    }, [timePoint]);

    return (
        <RangeWrap>
            <Timer>{getTime(timePoint)}</Timer>
            <SliderWrap>
                <Slider
                    onChangeStart={(e) => setMouseHover(true)}
                    onChangeComplete={(e) => setMouseHover(false)}
                    value={timePoint}
                    tooltip={false}
                    min={1}
                    max={currentSong.time}
                    onChange={(v) => sliderChangeHandler(v)}
                />
            </SliderWrap>
            <Timer>{getTime(currentSong.time)}</Timer>
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
