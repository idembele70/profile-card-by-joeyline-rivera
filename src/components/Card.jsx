import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 50px;
  background-color: #d5c6ff;
  font-family: "lato", "Courier New", Courier, monospace;
  font-style: normal;
`;
const CardContainer = styled.div`
  max-width: 541px;
  width: 95vw;
  max-height: 717px;
  background: #ffffff;
  box-shadow: 0px 4px 75px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  display: flex;
  flex-direction: column;
`;
const Logo = styled.div`
  height: 40px;
  width: 40px;
  background-image: url(${process.env.PUBLIC_URL}/assets/logo.png);
  margin-left: 22px;
  margin-top: 22px;
`;

const Avatar = styled.div`
  height: 204px;
  width: 204px;
  background-image: url(${process.env.PUBLIC_URL}/assets/avatar.png);
  background-repeat: no-repeat;
  background-position: center;
  align-self: center;
  position: relative;
  margin-top: 10px;
  margin-bottom: 32px;
  ::after {
    content: "";
    position: absolute;
    border-top: 5px solid #f7df1e;
    border-right: 5px solid #f7df1e;
    border-bottom: 5px solid #f7df1e;
    border-left: 5px solid transparent;
    width: 215px;
    height: 215px;
    top: -12px;
    right: -8px;
    border-radius: 50%;
  }
`;
const Info = styled.div`
  width: 90%;
  align-self: center;
`;
const Title = styled.h1`
  font-weight: 700;
  font-size: 35px;
  line-height: 42px;
  text-align: center;
  color: #252525;
  margin-bottom: 10px;
`;
const Job = styled.h2`
  font-weight: 400;
  font-size: 23px;
  line-height: 28px;
  text-align: center;
  color: #26235c;
  margin-bottom: 26px;
`;
const Bio = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #252525;
  margin-bottom: 25px;
`;
const Email = styled.h3`
  font-weight: 400;
  font-size: 20px;
  line-height: 44px;
  text-align: center;
  color: #ffffff;
  background-color: #26235c;
  width: 90%;
  max-width: 330px;
  align-self: center;
  border-radius: 10px;
  margin-bottom: 45px;
`;
const SocialIconContainer = styled.div`
  align-self: center;
  display: flex;
  column-gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 408px;
  margin-bottom: 87px;
`;
const SocialIcon = styled.img``;
function Card() {
  const socialIconsName = [
    "twitter",
    "instagram",
    "dribbble",
    "linkedIn",
    "github",
    "dev.to",
  ];
  return (
    <Container>
      <CardContainer>
        <Logo />
        <Avatar />
        <Info>
          <Title>Joeylene Rivera</Title>
          <Job>Web Developer</Job>
          <Bio>
            A kiddo who uses Bootstrap and Laravel in web development. Currently
            playing around with design via Figma
          </Bio>
        </Info>
        <Email>joeylenerivera@gmail.com</Email>
        <SocialIconContainer>
          {socialIconsName.map((iconName) => (
            <SocialIcon
              src={`${process.env.PUBLIC_URL}/assets/${iconName}Icon.png`}
              alt={iconName}
            />
          ))}
        </SocialIconContainer>
      </CardContainer>
    </Container>
  );
}

export default Card;