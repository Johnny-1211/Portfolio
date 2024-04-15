import React from 'react'
import styled from "styled-components";
import EducationListRow from './EducationListRow';

const Education = () => {
  return (
    <Container>
      <h1>Education</h1>
      <EducationListRow
        courseName={
          "Mobile Application Development and Strategy (Postgraduate)"
        }
        school={"George Brown College"}
        period={"Full-Time"}
        date={"Sep 2023 - Aug 2024"}
      />
      <Divider />
      <EducationListRow
        courseName={"Bachelor of Computer Science"}
        school={"Hong Kong Metropolitan University"}
        period={"Full-Time"}
        date={"Sep 2020 - Aug 2023"}
      />
    </Container>
  );
}

const Divider = () => {
  return <hr style={{ borderTop: "1px solid gray" }}></hr>;
};

export default Education

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
`;
