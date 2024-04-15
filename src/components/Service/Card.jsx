import React from 'react'
import styled from 'styled-components'

const Card = (props) => {
const {Icon,disc,title}= props
  return (
    <Container>
      <span>
        <Icon />
      </span>
      <h1 className='orange'>{title}</h1>
      <p>{disc}</p>
    </Container>
  );
}

export default Card

const Container = styled.div`
  width: 25vw;
  height: 40vh;
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  padding: 1rem;
  text-align: center;
  border-radius: 1rem;
  span{
    font-size: 4rem;
  }
  h1{
    font-size: 1.2rem;
    padding-bottom: 1rem;
  }

  p{
    font-size: 0.8%;
  }
`;