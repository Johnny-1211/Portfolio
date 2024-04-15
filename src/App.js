import './App.css';
import styled from 'styled-components'
import Header from './components/Banner/Header';
import ProfComponent  from './components/Banner/ProfComponent';
import Skill from './components/Skills/Skill';
import Services from './components/Service/Services';
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer';
import Education from './components/Education/Education';

function App() {
  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent/>
      </Banner>
      <Skill />
      <DarkColor>
        <Services />
      </DarkColor>
        <Projects />
      <DarkColor>
      <Education/>
      </DarkColor>
        <Footer/>
    </Container>
    );
}

export default App;
const Container = styled.div``
const Banner = styled.div`
background: linear-gradient(90deg, rgba(34,45,64,1) 0%, rgba(34,45,64,1) 100%);
  height: 90vh;

  @media(max-width:640px) {
    height: 100%;
    padding-bottom: 1rem;
  }
  `
const DarkColor = styled.div`
background: linear-gradient(90deg, rgba(34,45,64,1) 0%, rgba(34,45,64,1) 100%);
`;
