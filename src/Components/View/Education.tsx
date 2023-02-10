import React from "react";
import styled from "styled-components";

import { EDUCATION } from "src/Constants/index";
const Education: React.FC = () => {
  const data = Object.values(EDUCATION);
  return (
    <StyledView>
      {data.map((el, idx) => {
        const {
          institution,
          major
        } = el;
        return (
          <StyledItem>
            <div>{institution}</div>
            <div>{major}</div>
          </StyledItem>
        )
      })}
    </StyledView>
  )
}

const StyledView = styled.article`

`;

const StyledItem = styled.div`

`;

export { Education }