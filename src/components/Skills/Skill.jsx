import React from "react";
import styled from "styled-components";

const Skill = () => {
  return (
    <Container>
      <h4>
        My <span className="green">Tech Stack</span>
      </h4>
      <Icons>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
          height={70}
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
          height={70}
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
          height={70}
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          height={70}
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          height={70}
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-plain-wordmark.svg"
          height={70}
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg"
          height={70}
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg"
          height={70}
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain-wordmark.svg"
          height={70}
        />
      </Icons>

      <h4 className="green">Tools</h4>
      <Icons>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
          height={70}
        />

        <i class="devicon-github-original"></i>

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
          height={70}
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg"
          height={70}
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg"
          height={70}
        />
      </Icons>
    </Container>
  );
};

export default Skill;

const Container = styled.div`
  width: 80%;
  max-width: 1270px;
  margin: 0 auto;
  padding: 2rem 0;

  h4 {
    padding-top: 1.8rem;
  }

  i{
    font-size: 70px;
  } 
  
  @media (max-width: 840px) {
    width: 90%;
  }
`;

const Icons = styled.div`
  display: grid;
  max-width: 1270px;
  margin-top: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding: 15px 0;
  gap:30px
`;
