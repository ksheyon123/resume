import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { theme } from "src/Styles/theme";
import {
  Layout,
  Header,
  Title,
  Description,
  Skills,
  Experiences,
  Awards,
  Education
} from "src/Components/index";

const GlobalStyling = createGlobalStyle`
  ${reset};
  * {
    box-sizing  : border-box;
    font-style: normal;
    font-size : 14px;
    font-family : NotoSansKr;
    font-weight : 400;
  }
  body {
    margin : 0px;
    background-color : ${theme.mono2};
    color : ${theme.mono8};
  }
`;

const App = () => {
  return (
    <React.StrictMode>
      <GlobalStyling />
      <ThemeProvider theme={theme}>
        <Layout>
          <Header />
          <Title title={"Profile"} />
          <Description />
          <Title title={"Skills"} />
          <Skills />
          <Title title={"Job Experience"} />
          <Experiences />
          <Title title={"Award"} />
          <Awards />
          <Title title={"Education"} />
          <Education />
        </Layout>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
