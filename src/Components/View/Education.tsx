import React from "react";
import styled from "styled-components";
import { StyledItem } from "src/Styles/styled-components";
import { EDUCATION } from "src/Constants/index";
const Education: React.FC = () => {
  return (
    <StyledView>
      <StyledItem>
        <div className="duration">
          <div>2019.06</div>
          <div>~</div>
          <div>2019.12</div>
        </div>
        <div className="content">
          <div className="bold fs24">한국블록체인연구교육원</div>
          <ul>
            <li>
              웹 개발 기초 (HTML, CSS, Javascript), Hyperledger Fabric 및 Solidity Smart Contract 등 블록체인 청년인재 양성 교육 프로그램 이수
            </li>
            <li>
              Quorum 해커톤, 제주도 블록체인 해커톤, 경기도 블록체인 해커톤, 2019 블록체인 아이디어톤의 해커톤 참가 및 입상
            </li>
          </ul>
        </div>
      </StyledItem>
      <StyledItem>
        <div className="duration">
          <div>2011.03</div>
          <div>~</div>
          <div>2018.02</div>
        </div>
        <div className="content">
          <div className="bold fs24">서울과학기술대학교</div>
          <div className="medium fs18">기계공학부 기계공학과</div>
          <ul>
            <li>
              CFD 전산 유체 역학, Matlab 등의 강의
            </li>
            <li>
            </li>
          </ul>
        </div>
      </StyledItem>
    </StyledView>
  )
}

const StyledView = styled.article`

`;

export { Education }