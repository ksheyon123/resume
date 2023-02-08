import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "src/Styles/theme";
import { Layout, Header, Title, Description } from "src/Components/index";

const GlobalStyling = createGlobalStyle`
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
      <ThemeProvider theme={theme}>
        <GlobalStyling />
        <Layout>
          <Header />
          <Description />
          <Title title={"Skills"} />
        </Layout>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
