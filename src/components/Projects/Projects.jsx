import React from 'react'
import styled from 'styled-components'
import SliderComp from './Slider';

const Projects = () => {
  return (
    <Container>
      <h1>
        Recent <span className="green">project</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et
        asperiores cum exercitationem officia rem amet minus magnam? Cum,
        voluptatem?
      </p>
      <Slide>
        <SliderComp />
      </Slide>
    </Container>
  );
}

export default Projects

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;

    @media(max-width:840px){
      width: 90%;
    }

    h1{
        font-size: 1.9rem;
    }
    
    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media (max-width:500px){
          width: 90%;
        }
    }
`

const Slide = styled.div`

`