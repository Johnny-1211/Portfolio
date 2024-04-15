import React , {useRef}from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';


let data = [
  {
    img: `${process.env.PUBLIC_URL}/assets/images/iosMovieBooking.png`,
    disc: `This app is designed for online movie booking, built using Swift and SwiftUI. 
    It includes a movie search feature for recent and popular movies, 
    along with options for seat and time slot selection.`,
    url: "https://github.com/Johnny-1211/IOS-MovieApp",
  },
  {
    img: `${process.env.PUBLIC_URL}/assets/images/iosWeatherClone.png`,
    disc: `This iOS native weather clone utilizes location search and API fetching with Swift and SwiftUI. 
            Additionally, it features snow and rain effects implemented with SpriteKit.`,
    url: "https://github.com/Johnny-1211/IOS-WeatherApp",
  },
  {
    img: `${process.env.PUBLIC_URL}/assets/images/kotlinExpenseTracker.png`,
    disc: `This application serves as an expense tracker, offering a dashboard, transaction recording, and a pie chart to illustrate statistics. 
            It was developed using Kotlin.`,
    url: "https://github.com/Johnny-1211/ExpenseTracker",
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};

const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item,i) => (
    <Project item={item} key={i}/>
  ))

  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
}
export default SliderComp

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`;