import React, { createRef, useEffect } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { selectPlayList, swipeSongSwitchHandler, selectNextHandler } from '../PlayerSlice';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from './SliderItem';

const SliderPlayer = () => {

    const dispatch = useDispatch();
    const playList = useSelector(selectPlayList);
    const nextHandler = useSelector(selectNextHandler);

    const slickRef = createRef<Slider>();

    useEffect(() => {
        if (nextHandler.action === 'next') {
            slickRef.current?.slickNext();
        }
        if (nextHandler.action === 'prev') {
            slickRef.current?.slickPrev();
        }
    }, [nextHandler])

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "22%",
        speed: 500,
    };

    return (
        <SliderWrap>
            <Slider
                ref={slickRef}
                onSwipe={(s: string) => dispatch(swipeSongSwitchHandler(s))}
                {...settings}
            >
                {playList && playList.map((song) => (
                    <SliderItem key={song.id} label={song.label} />
                ))}
            </Slider>
        </SliderWrap>
    )
}



const SliderWrap = styled.div`
    width: 100vw;
    height: 320px;

    .slick-active {
        #customItem {
            transform: scale(1) !important;
            transition: transform 0.5s ease;
            img{
                height: 100%;
            }
        }
    }
`;

export default SliderPlayer
