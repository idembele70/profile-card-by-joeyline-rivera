import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;
`;
const CardContainer = styled.div`
  max-width: 541px;
  width: 95vw;
  position: relative;
  background: #26235c;
  box-shadow: 0px 4px 75px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  display: flex;
  flex-direction: column;
`;
const Logo = styled.div`
  height: 40px;
  width: 40px;
  background-image: url(${process.env.PUBLIC_URL}/assets/darkTheme/logo.png);
  margin-left: 22px;
  margin-top: 22px;
`;
const Avatar = styled.div`
  height: 230px;
  width: 220px;
  background-image: url(${process.env.PUBLIC_URL}/assets/avatarWEllipse.png);
  background-repeat: no-repeat;
  background-position: center;
  align-self: center;
  position: relative;
  margin-top: 10px;
  margin-bottom: 12px;
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
  color: #ffffff;
  margin-bottom: 10px;
  transition: all 1500ms linear;
`;
const Job = styled.h2`
  font-weight: 400;
  font-size: 23px;
  line-height: 28px;
  text-align: center;
  color: #a79ae0;
  margin-bottom: 26px;
`;
const Bio = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 25px;
`;
const Important = styled.span`
  color: #f9f871;
`;
const Email = styled.h3`
  font-weight: 400;
  font-size: 20px;
  color: #ffffff;
  background-color: rgba(144, 130, 236, 0.65);
  width: 95%;
  max-width: 330px;
  align-self: center;
  border-radius: 10px;
  margin-bottom: 45px;
  word-break: break-all;
  padding: 12px 0;
  text-align: center;
`;
const SocialIconContainer = styled.div`
  align-self: center;
  display: flex;
  column-gap: 24px;
  row-gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 408px;
  margin-bottom: 87px;
`;
const SocialIcon = styled.img``;
const Footer = styled.img`
  position: absolute;
  width: 100%;
  bottom: 0;
`;
function DarkCard() {
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
            A kiddo who uses <Important>Bootstrap</Important> and{" "}
            <Important>Laravel</Important> in web development. Currently playing
            around with design via Figma
          </Bio>
        </Info>
        <Email>joeylenerivera@gmail.com</Email>
        <SocialIconContainer>
          {socialIconsName.map((iconName) => (
            <SocialIcon
              src={`${process.env.PUBLIC_URL}/assets/darkTheme/${iconName}Icon.png`}
              alt={iconName}
            />
          ))}
        </SocialIconContainer>
        <Footer
          src={`${process.env.PUBLIC_URL}/assets/darkTheme/rectangle.png`}
        />
      </CardContainer>
    </Container>
  );
}

export default DarkCard;
