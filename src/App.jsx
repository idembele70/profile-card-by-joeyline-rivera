import React from "react";
import "reset-css";
import styled from "styled-components";
import Card from "./components/Card";
import ThemeSwitcher from "./components/ThemeSwitcher";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #d5c6ff;
  font-family: "lato", "Courier New", Courier, monospace;
  font-style: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

function App() {
  return (
    <Container>
      <ThemeSwitcher />
      <Card />
    </Container>
  );
}

export default App;
