import React from "react";
import styled from "styled-components";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";
const ProfComponent = () => {
  return (
    <Container id="home">
      <Texts>
        <h4>
          Hello <span className="orange">I'am</span>
        </h4>
        <h1 className="orange">Johnny Tam</h1>
        <h3>A Software Developer</h3>
        <h6>
          Currently, I'm a new graduated student from George Brown College
        </h6>
        <p>
          I'm a software developer who's all about coding and diving into new
          technologies and frameworks every day. If you're on the lookout for
          someone to join your team, I'd be thrilled to bring my passion along
          for the ride.
        </p>
        <a href="#footer">
          <button>Let's talk</button>
        </a>
        <Social>
          <p>Check out my</p>
          <div className="social-icons">
            <span>
              <a href="https://github.com/Johnny-1211">
                <IoLogoGithub />
              </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/johnny-tam-b9374a246">
                <AiOutlineLinkedin />
              </a>
            </span>
            <span>
              <a href="https://www.instagram.com/tingyuenn/">
                <AiOutlineInstagram />
              </a>
            </span>
          </div>
        </Social>
      </Texts>

      <Profile>
        <img src={process.env.PUBLIC_URL + '/assets/images/profileImage.jpg'} alt="profile"></img>
      </Profile>
    </Container> 
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  @media (max-width: 840px) {
    width: 90%;
  }
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }

  h1 {
    font-size: 2rem;
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 2px;
  }

  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 0.5rem;
    text-transform: capitalize;
  }

  h6 {
    padding-bottom: 2.2rem;
  }

  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background: -webkit-linear-gradient(
      180deg,
      rgba(223, 87, 10, 1) 0%,
      rgba(240, 179, 3, 1) 100%
    );
    border: none;
    border-radius: 1.5rem;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #764f02d5);
    :hover {
      filter: drop-shadow(0px 10px 10px #ca95056e);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      width: 5rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background: -webkit-linear-gradient(
        180deg,
        rgba(223, 87, 10, 1) 0%,
        rgba(240, 179, 3, 1) 100%
      );
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 30rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    clip-path: circle(42% at 50% 45%);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-20px);
  }
`;
