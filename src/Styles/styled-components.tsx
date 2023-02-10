
import styled from "styled-components";
import { theme } from "src/Styles/theme";

const StyledItem = styled.div`
  display: flex;
  padding : 5px;
  border-bottom : 1px solid ${theme.mono3};
  & > div.duration {
    ${theme.b5};
    color : ${theme.mono5};
    display: flex;
    flex-direction: column;
    min-width : 120px;
    position: relative;
    top : 0px;
    left : 0px;
    margin-bottom : 5px;
  }
  & > div.content {
    padding-top : 5px;
    display: block;
    & > div {
      color : ${theme.mono6};
      &.bold {
        font-weight: 900;
      }
      &.medium {
        font-weight: 600;
      }
      &.fs24 { 
        ${theme.b2};
      }
      &.fs18 { 
        ${theme.b3};
      }
    }
    & > ul {
      list-style: circle;
      padding-left : 16px;
      & > li {
        margin-bottom : 10px;
      }
      & > li:last-of-type {
        margin-bottom : 0px;
      }
    }
  }
  @media screen and (max-width : 600px) {
    flex-direction: column;
    & > div.duration {
      display: flex;
      flex-direction: row;
      & > div {
        margin-right : 10px;
        &:last-of-type {
          margin-right : 0px;
        }
      }
    }
    & > div.content {
      
    }
  }
`;

export { StyledItem }