import React from 'react'
import styled from "styled-components";

const EducationListRow = (props) => {
  return (
    <Container>
      <Course>
        <h3>{props.courseName}</h3>
        <p>{props.school}</p>
      </Course>
      <Date>
        <Period>{props.period}</Period>
        <p>{props.date}</p>
      </Date>
    </Container>
  );
}


export default EducationListRow

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  color: gray;
  padding:20px 0;
`;

const Course = styled.div`
    h3{
        padding-bottom: 10px;
    }

    p{
        font-style: italic;
    }
`;
    
const Date = styled.div`
`;

const Period = styled.div`
  display: flex;
  background: -webkit-linear-gradient(
    180deg,
    rgba(223, 87, 10, 1) 0%,
    rgba(240, 179, 3, 1) 100%
  );
  color: white;
  border-radius: 12px;
  justify-content: center;
  padding: 5px;
  margin-bottom: 10px;
`;