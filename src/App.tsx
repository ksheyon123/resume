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
  Experiences
} from "src/Components/index";

const GlobalStyling = createGlobalStyle`
  ${reset};
  * {
    box-sizing  : content-box;
    font-style: normal;
    font-size : 14px;
  }
  body {
    margin : 0px;
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
          <Title title={"Projects"} />
          <Title title={"Education"} />
        </Layout>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
