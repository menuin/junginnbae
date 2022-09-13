import { useState } from "react";
import styled, { keyframes } from "styled-components";

const spreadLetter = keyframes`
  0%{
    margin : 0px -15px;
  }
  70% {
    margin : 0px 15px;
  }
  100%{
    margin : 0px 14px;
  }
`;
const showElement = keyframes`
  0%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
`;

const HomeContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 10px;
`;

const LetterContainer = styled.div`
  font-size: 60px;
  font-family: "Raleway", sans-serif;
  animation: ${spreadLetter} 1.5s forwards;
`;
const SubTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  opacity: 0;
  animation: ${showElement} 1s forwards;
  animation-delay: 1.8s;
`;
const HomeBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 100px;
`;
const LanSelectBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 50px;
  border: solid #a29258 1px;
  margin: 0px 30px;
  opacity: 0;
  &:hover {
    color: white;
    background-color: #a29258;
  }
  animation: ${showElement} 1s forwards;
  animation-delay: 2.5s;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 250px;
`;
const HomeImg = styled.img`
  min-width: 100%;
  min-height: 100%;
`;
function Home() {
  const titleLetters = ["J", "U", "N", "G", "I", "N", " ", "P", "A", "E"];
  return (
    <HomeContentContainer>
      <ImageContainer>
        <HomeImg src="images/home_pianist.jpg" />
      </ImageContainer>
      <TitleContainer>
        {titleLetters.map((letter, index) => {
          return <LetterContainer id={index}>{letter}</LetterContainer>;
        })}
      </TitleContainer>
      <SubTitleContainer>pianist</SubTitleContainer>
      {/* <HomeBtnContainer>
        <LanSelectBtn>한국어</LanSelectBtn>
        <LanSelectBtn>ENGLISH</LanSelectBtn>
      </HomeBtnContainer> */}
    </HomeContentContainer>
  );
}

export default Home;
