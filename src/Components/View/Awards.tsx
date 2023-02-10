import React from "react";
import styled from "styled-components";
import { AWARDS } from "src/Constants/index";
import { theme } from "src/Styles/theme";
import { format } from "date-fns";

const Awards: React.FC = () => {
  const data = Object.values(AWARDS);
  return (
    <StyledView>
      {data.map((el, idx) => {
        const {
          date,
          institution,
          prize,
          name,
          project
        } = el;
        const _projectName = project.name;
        return (
          <StyledItem>
            <div className="awards-date">
              {format(date, "yyyy.MM")}
            </div>
            <div className="awards-info">
              <span>주최 :</span>
              <span>{institution}</span>
              <span>수상 :</span>
              <span>{prize}</span>
              <span>대회 명 :</span>
              <span>{name}</span>
              <span>프로젝트 명 :</span>
              <span>{_projectName}</span>
            </div>
          </StyledItem>
        )
      })}
    </StyledView>
  )
}

const StyledView = styled.article`

`;

const StyledItem = styled.div`
  display: flex;
  padding-top : 5px;
  padding-bottom : 5px;
  border-bottom : 1px solid ${theme.mono4};
  & > div.awards-date {
    width : 100px;
    position:relative ;
    top : 0px;
    left : 0px;
  }
  & > div.awards-info {
    display: grid;
    grid-template-columns: 100px auto;
    grid-template-rows: auto;
  }
`;

export { Awards }