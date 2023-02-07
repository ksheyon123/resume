import React from "react";
import styled from "styled-components";
import { Header } from "src/Components/index";

interface IProps {
  children: any
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <StyledView>
      <Header />
      {children}
    </StyledView>
  )
}

const StyledView = styled.div`
  width : 1200px;
  height : 100vh;
  margin : 0px auto;
  @media screen and (max-width : 1200px) {
    width : 960px;
  height : 100vh;
  margin : 0px auto;

  background-color: #222;

  }
  @media screen and (max-width : 960px) {
    width : 600px;
    height : 100vh;
  margin : 0px auto;

  background-color: #444;

  }
  @media screen and (max-width : 600px) {
    width : 375px;
  height : 100vh;
  margin : 0px auto;
  background-color: #666;

  }
`;

export { Layout }