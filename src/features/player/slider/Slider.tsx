import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { selectPlayList, setCurrentSong } from '../PlayerSlice';
import sliderImg from '../../../assets/unreleased_cover.png';
import importImage from '../../../utils/importImage';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from './Slideritem';

const SliderPlayer = () => {

    const playList = useSelector(selectPlayList);
    const dispatch = useDispatch();

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "22%",
        speed: 500,
        afterChange: (id: number) => dispatch(setCurrentSong(id)),
    };

    return (
        <SliderWrap>
            <Slider {...settings}>
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
