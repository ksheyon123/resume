import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      KANG SEO HYEON
      <div className="job">
        Jr. Web developer
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: relative;
    font-family: AmericanCap;
    font-weight: 600;
    font-size : 42px;
  & > div.job {
    position : absolute;
    font-family: Tomatoes;
    font-weight: 600;
    font-size : 20px;
    left : 80px;
    top : 20px;
    text-decoration: underline;
  }
`;

export { Header }