import React, { useState } from "react";
import styled from "styled-components";
import { Theme$ } from "../util";

const Container = styled.div`
  width: 95vw;
  max-width: 343px;
  height: 136px;
  background: ${(props) => (props.color ? "#dacdcd" : "#5F3333")};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25), inset 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 139px;
  position: relative;
  margin-top: 20px;
  transition: background 340ms linear;
  cursor: pointer;
`;
const Button = styled.div`
  position: absolute;
  width: 112px;
  height: 110px;
  transform: translateX(${(props) => (props.color ? 15 : 215)}px);
  top: 13px;
  background-color: ${(props) => (props.color ? "#5f3333" : "#dacdcd")};
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  font-weight: 400;
  font-size: 48px;
  line-height: 48px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 340ms linear;
`;
const ButtonLabel = styled.div`
  position: absolute;
  width: 112px;
  height: 110px;
  top: 13px;
  background-color: transparent;
  font-weight: 400;
  font-size: 48px;
  line-height: 48px;
  color: ${(props) => (props.left ? "#dacdcd" : "#5f3333")};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 340ms linear;
  left: ${(props) => (props.left ? "15px" : "unset")};
  right: ${(props) => (props.left ? "unset" : "15px")};
  opacity: ${(props) => props.opacity};
  mix-blend-mode: normal;
  border-radius: 100px;
`;

function ThemeSwitcher() {
  const [lightTheme, setLigthTheme] = useState(true);
  const handleChangeTheme = (e) => {
    const newTheme = !lightTheme;
    e.preventDefault();
    setLigthTheme(newTheme);
    Theme$.next(newTheme);
  };
  return (
    <Container color={lightTheme} onClick={handleChangeTheme}>
      <Button color={lightTheme} />
      <ButtonLabel left color={lightTheme} opacity={lightTheme ? 1 : 0}>
        ON
      </ButtonLabel>
      <ButtonLabel color={!lightTheme} opacity={lightTheme ? 0 : 1}>
        OFF
      </ButtonLabel>
    </Container>
  );
}

export default ThemeSwitcher;
