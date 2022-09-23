import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { showElement } from "../GlobalStyle";

const spreadLetter = keyframes`
  0%{
    margin : 0px 13px;
  }
  70% {
    margin : 0px 15px;
  }
  100%{
    margin : 0px 15px;
  }
`;

const HomeContentContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
  margin-bottom: 10px;
`;

const LetterContainer = styled.div`
  font-size: 60px;
  font-family: "Poiret One", cursive;
  /* font-family: "Marcellus", serif; */
  /* font-family: "Quattrocento", serif; */
  /* font-family: "Montserrat", sans-serif; */
  font-weight: light;
  color: #e7e7e7;
  animation: ${spreadLetter} 1.5s forwards;
`;
const SubTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Raleway", sans-serif;
  color: #7c7c7c;
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

function Home() {
  const titleLetters = ["J", "U", "N", "G", "I", "N", " ", "P", "A", "E"];
  return (
    <HomeContentContainer>
      <TitleContainer>
        {titleLetters.map((letter, index) => {
          return <LetterContainer id={index}>{letter}</LetterContainer>;
        })}
      </TitleContainer>
      <SubTitleContainer>pianist</SubTitleContainer>
      {/* <HomeBtnContainer>
        <LanSelectBtn>KOREAN</LanSelectBtn>
        <LanSelectBtn>ENGLISH</LanSelectBtn>
      </HomeBtnContainer> */}
    </HomeContentContainer>
  );
}

export default Home;
