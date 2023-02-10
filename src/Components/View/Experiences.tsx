import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { JOB_EXPERIENCE } from "src/Constants/index";
import { StyledItem } from "src/Styles/styled-components";

const Experiences: React.FC = () => {
  const items = Object.values(JOB_EXPERIENCE);
  return (
    <StyledView>
      {items.map((el, idx) => {
        const _fromDate = el.duration.from;
        const _toDate = el.duration?.to;
        const _works = Object.values(el.works);
        return (
          <StyledItem key={idx.toString()}>
            <div className="duration">
              <div className="from">{format(_fromDate, "yyyy.MM.dd")}</div>
              <div>~</div>
              <div className="to">{!!_toDate ? format(_toDate, "yyyy.MM.dd") : "재직중"}</div>
            </div>
            <div className="content">
              <div className="bold fs24">{el.name}</div>
              <div className="medium fs18">{el.position}</div>
              <ul>
                {_works.map((el, idx) => {
                  return (
                    <li>
                      {el}
                    </li>
                  )
                })}
              </ul>
              <div>{el.achievement}</div>
            </div>
          </StyledItem>
        )
      })}

    </StyledView>
  )
}

const StyledView = styled.article`

`;

export { Experiences }