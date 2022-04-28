import React, { useEffect, useState } from "react";
import "reset-css";
import styled from "styled-components";
import DarkCard from "./components/DarkCard";
import LightCard from "./components/LightCard";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { Theme$ } from "./util";

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
  const [lightTheme, setLightTheme] = useState(false);
  useEffect(() => {
    const themeObserver = Theme$.subscribe((t) => setLightTheme(t));

    return () => {
      themeObserver.unsubscribe();
    };
  }, []);
  return (
    <Container>
      <ThemeSwitcher />
      {lightTheme ? <LightCard /> : <DarkCard />}
    </Container>
  );
}

export default App;
