import React from "react";
import styled from "styled-components";
import { theme } from "src/Styles/theme";

interface IProps {
  title: string;
}

const Title: React.FC<IProps> = ({ title }) => {
  return (
    <StyledView>
      {title}
    </StyledView>

  )
}

const StyledView = styled.div`
  ${theme.t1};
  font-family: AmericanCap;
  font-style : normal;
  line-height: 40px;
  padding : 4px;
  border-bottom : 2px solid ${theme.mono8};
`;

export { Title } 