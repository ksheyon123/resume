import React from "react";
import styled from "styled-components";

const Description: React.FC = () => {
  return (
    <StyledView>
      <span>
        안녕하세요 3년차 웹 개발자 강서현입니다.
      </span>
    </StyledView>
  )
}

const StyledView = styled.article`

`;

export { Description }