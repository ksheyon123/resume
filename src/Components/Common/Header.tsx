import React from "react";
import styled from "styled-components";
import { theme } from "src/Styles/theme";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div className="author">
        <span>KANG SEO HYEON</span>
      </div>
      <span className="job">
        Jr. Web developer
      </span>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
    color : ${theme.mono8};
    padding-top : 20px;
    & > div.author {
      display: block;
      width : 375px;
      & > span {
        font-family: AmericanCap;
        font-weight: 600;
        font-size : 68px;
      }
    }
  & > span.job {
    display: inline;
    font-family: Tomatoes;
    font-weight: 600;
    font-size : 20px;
    text-decoration: underline;
    text-align: right;
  }
  
`;

export { Header }