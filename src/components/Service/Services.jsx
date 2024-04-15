import React from 'react'
import { FaReact, FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import  Card  from './Card';
import styled from 'styled-components';
import { JackInTheBox } from "react-awesome-reveal";


const Services = () => {
  return (
    <Container id="service">
      <h4>
        My <span className="orange">service</span>
      </h4>
      <h1>What I do</h1>
      <Cards>
        <JackInTheBox>
          <Card
            Icon={FaReact}
            title={"Cross-Platform development"}
            disc={`I'm excel in React Native cross-platform app development, 
                  offering efficient solutions for iOS and Android. My process emphasizes client collaboration, 
                  rapid iteration, and cost-effectiveness, delivering scalable, high-quality applications.`}
          />
        </JackInTheBox>
        <JackInTheBox>
          <Card
            Icon={FaApple}
            title={"IOS apps development"}
            disc={`I specialize in iOS app development, crafting tailored solutions with a focus on user experience, performance, 
                  and innovation. My expertise ensures seamless functionality and engagement for Apple device users.`}
          />
        </JackInTheBox>
        <JackInTheBox>
          <Card
            Icon={IoLogoAndroid}
            title={"Android apps development"}
            disc={`Specializing in Android app development, I deliver bespoke solutions emphasizing user-centric design, 
                    optimal performance, and cutting-edge innovation. My tailored approach ensures seamless functionality 
                    and engaging experiences across diverse Android devices.`}
          />
        </JackInTheBox>
      </Cards>
    </Container>
  );
}


export default Services

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;

  @media(max-width:840px) {
    width: 90%;
  }

  h1{
    padding-top:1rem;
  }
`
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
  margin-top: 4rem;
  gap: 1rem;
`;