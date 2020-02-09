import React from "react";
import CharList from "./components/characters/CharList";
import styled, { createGlobalStyle } from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <AppStyles className="App">
      <GlobalStyle />
      <CharList />
    </AppStyles>
  );
};
const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}
body {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  }
img {
  max-width: 100%;
  box-shadow: 3px 3px 3px #03204B;
  border-radius: 8px;
}
`;

const AppStyles = styled.div`
  background: #000022;
  nav.pagination {
    display: flex;
    justify-content: center;
    button {
      background: #000022;
      color: #c10001;
      border: 1px solid #c10001;
      width: 200%;
      height: auto;
    }
    ul.pagination {
      display: flex;
      justify-content: center;
      width: 100%;
      li {
        margin: 1%;
      }
    }
  }
  h1 {
    background: #32324e;
    color: #c10001;
    margin: 5% auto;
    padding: 3%;
    text-align: center;
    font-size: 2.8rem;
    width: 80%;
    @media (max-width: 567px) {
      font-size: 2rem;
    }
    @media (max-width: 405px) {
      font-size: 1.5rem;
    }
  }
`;

export default App;
