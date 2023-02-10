import React from "react";
import styled from "styled-components";
import { theme } from "src/Styles/theme";
interface IProps {
  children: any
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <StyledView>
      {children}
    </StyledView>
  )
}

const StyledView = styled.div`
  width : 1200px;
  margin : 0px auto;
  padding : 0px 10px;
  @media screen and (max-width : 1200px) {
    width : 960px;
    margin : 0px auto;
  }
  @media screen and (max-width : 960px) {
    width : 600px;
    margin : 0px auto;
  }
  @media screen and (max-width : 600px) {
    width : 375px;
    margin : 0px auto;
  }
`;

export { Layout }