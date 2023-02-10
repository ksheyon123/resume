import React from "react";
import styled from "styled-components";
import { theme } from "src/Styles/theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot,
  faEnvelope,
  faShareNodes
} from '@fortawesome/free-solid-svg-icons'
const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div className="author">
        <span>KANG SEO HYEON</span>
      </div>
      <div className="contact-info">
        <div>
          <FontAwesomeIcon icon={faLocationDot} />
          <span>서울특별시 언주로 98길</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>kshyeon123@gmail.com</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faShareNodes} />
          <span>https://velog.io/@kshyeon123</span>
        </div>
      </div>
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
  & > div.contact-info {
    & > div {
      display: flex;
      max-width : 375px;
      min-width : 375px;
      margin-right :5px;
      &:last-of-type {
        margin-right : 0px;
      }
    }
    & > div > svg {
      margin-right : 5px;
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