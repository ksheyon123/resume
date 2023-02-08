import React from "react";
import styled from "styled-components";
import { theme } from "src/Styles/theme";
import logo_js from "src/Assets/javascript_logo.png";
import logo_ts from "src/Assets/typescript_logo.png";
import logo_electron from "src/Assets/electron_logo.png";
import logo_react from "src/Assets/react_logo.svg";

const Skills: React.FC = () => {
  return (
    <StyledView>
      <span>React Javascript Typescript ElectronJs</span>
    </StyledView>

  )
}

const StyledView = styled.div`
display: block;
  padding-top : 16px;
  padding : 16px 5px;
  width: 100%;

  & > span {
    ${theme.b1b};
    color : ${theme.mono6};
    font-style: normal;
    margin-right : 12px;
    &:last-child {
      margin-right : 0px;
    }
  }
`;

export { Skills };