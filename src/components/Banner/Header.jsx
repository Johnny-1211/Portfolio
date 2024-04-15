import React, {useState}from 'react'
import styled from 'styled-components'
import { FaCode } from "react-icons/fa6";


const Header = () => {
    const [bar,setBar] = useState(false)

    return (
      <Container bar={bar}>
        <Logo>
          <span>
            <FaCode />
          </span>
          <h1>Johnny Tam</h1>
        </Logo>
        <Nav bar={bar}>
          <span>
            <a href="#home">Home</a>
          </span>
          <span>
            <a href="#skills">Skills</a>
          </span>
          <span>
            <a href="#service">Service</a>
          </span>
          <span>
            <a href="#projects">Projects</a>
          </span>
          <span>
            <a href="#footer">Contact</a>
          </span>
        </Nav>
        <div onClick={() => setBar(!bar)} className="bars">
          <div className="bar"></div>
        </div>
      </Container>
    );
}

export default Header

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 80%;
  width: 80%;
  margin: 0 auto;
  padding: 1.5rem 0;

  @media (max5-width: 763px) {
    width: 90;
  }

  .bars {
    display: none;
  }

  @media (max-width: 640px) {
    .bars {
      width: 40px;
      height: 40px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      z-index: 1000;
      .bar {
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: ${(props) => (props.bar ? "transparent" : "#fff")};
        transition: all 400ms ease-in-out;

        ::before,
        ::after {
          content: "";
          width: 100%;
          height: 2px;
          background-color: #fff;
          position: absolute;
        }

        ::before {
          transform: ${(props) =>
            props.bar ? "rotate(45deg)" : "translateY(10px)"};
          transition: all 400ms ease-in-out;
        }

        ::after {
          transform: ${(props) =>
            props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
          transition: all 400ms ease-in-out;
        }
      }
    }
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  span {
    font-size: 1.8rem;
    color: orange;
  }

  h1 {
    font-weight: 600;
    font-size: 1.2rem;
  }
`;
const Nav = styled.nav`
  @media (max-width: 640px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    background: -webkit-linear-gradient(
      180deg,
      rgba(223, 87, 10, 1) 0%,
      rgba(240, 179, 3, 1) 100%
    );
    /* background-color: #01be96; */
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    gap: 2rem;
    font-weight: 700;
    height: ${(props) => (props.bar ? "100vh" : 0)};
    transition: height 400ms ease-in-out;
    overflow: hidden;
    z-index: 99;
  }

  span {
    margin-left: 2rem;
    a {
      color: #fff;
      text-decoration: none;
      font-weight: 400;
      position: relative;
      ::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        height: 2px;
        background-color: #fff;
        transform: scale(0);
        transform-origin: right;
        transition: transform 400ms ease-in-out;
      }
      :hover::before {
        transform: scale(1);
        transform-origin: left;
      }
      :hover {
        opacity: 1;
      }
    }
  }
`;


