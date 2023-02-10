import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

import { JOB_EXPERIENCE } from "src/Constants/index";

const Experiences: React.FC = () => {
  const items = Object.values(JOB_EXPERIENCE);
  return (
    <StyledView>
      {items.map((el, idx) => {
        console.log(el);
        const _fromDate = el.duration.from;
        const _toDate = el.duration?.to;
        const _works = Object.values(el.works);
        return (
          <StyledItem key={idx.toString()}>
            <div className="working-duration">
              <span className="from">{format(_fromDate, "yyyy.MM.dd")}</span><br />
              <span>~</span>
              <span className="to">{!!_toDate ? format(_toDate, "yyyy.MM.dd") : "진행중"}</span>
            </div>
            <div className="working-description">
              <span>{el.name}</span>
              <span>{el.location}</span>
              <span>{el.position}</span>
              <ul>
                {_works.map((el, idx) => {
                  return (
                    <li>
                      {el}
                    </li>
                  )
                })}
              </ul>
              <span>{el.achievement}</span>
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
  padding : 10px 0px;
  & > div.working-duration {
    position :relative;
    padding-left : 10px;
    padding-right : 10px;
    &:before {
      content : "-";
      position:absolute ;
      left : 0px;
      top : 0px;
    }
  }
  & > div.working-description {
    display: flex;
    flex-direction: column;
  }
`;

export { Experiences }