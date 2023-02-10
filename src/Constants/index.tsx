import { ExperienceType } from "src/Constants/types";

const JOB_EXPERIENCE: { [key: number]: ExperienceType } = {
  0: {
    name: "Parameta (Iconloop)",
    location: "",
    duration: {
      from: new Date("2021/01/04").valueOf(),
    },
    position: "Web developer",
    works: {
      0: "웹 서비스 (하바 미터, 하바 스캔, 파트너 센터 백 오피스, 쯩 및 제주안심코드 서비스 페이지) 및 PC 앱 (플래닛 러너) 개발 및 유지보수",
      1: "기획 및 디자인 팀과 서비스 개발 간의 UX & UI를 고려한 합리성 평가 개발 방향 제안",
      2: "코드 아키텍쳐 조사와 적용 방안 (Flux Pattern & Presentational - Container)"
    },
    achievement: ""
  },
  1: {
    name: "메이파트너스",
    location: "",
    duration: {
      from: new Date("2020/02/10").valueOf(),
      to: new Date("2020/11/30").valueOf()
    },
    position: "Jr App developer",
    works: {
      0: "예정 프로젝트 PoC 개발",
    },
    achievement: ""
  }
}

const PROJECTS = {
  0: {
    name: "HAVAH Mitter",
    description: "NFT & FT Bridge",
    duration: {
      from: new Date("2022/08/22").valueOf(),
      to: 0
    },

  }
}

export { JOB_EXPERIENCE }