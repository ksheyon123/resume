import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "src/Styles/theme";
import { Layout } from "src/Components/Common/Layout";

const GlobalStyling = createGlobalStyle`
  * {
    box-sizing  : content-box;
    font-style: normal;
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
        <Layout>Application</Layout>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
