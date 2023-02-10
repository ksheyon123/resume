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

const EDUCATION = {
  0: {
    institution: "서울과학기술대학교",
    major: "기계공학과",
    duration: {
      from: "2011",
      to: "2018"
    },
  },
  1: {
    institution: "서울과학기술대학교",
    major: "기계공학과",
    duration: {
      from: "2011",
      to: "2018"
    },

  }
}

const AWARDS = {
  0: {
    institution: "과학기술정보통신부",
    name: "2019 블록체인 아이디어톤",
    prize: "장관상",
    project: {
      name: "트러커",
      description: "하이브리드 블록체인(Ethereum & Hyperledger Fabric)을 활용한 화물 유통 플랫폼",
    },
    date: new Date("2019/11/30").valueOf(),
    link: {
      github: ""
    }
  },
  1: {
    institution: "경기도경제과학진흥원",
    name: "2019 경기도 블록체인 해커톤",
    prize: "장려상",
    project: {
      name: "마인드허브",
      description: "퍼블릭 블록체인을 활용한 핸드메이드 쇼핑몰",
    },
    date: new Date("2019/09/26").valueOf(),
    link: {
      github: ""
    }
  }
}

export { JOB_EXPERIENCE, AWARDS, EDUCATION }