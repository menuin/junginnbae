import styled, { keyframes } from "styled-components";

const HomeContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 10px;
`;
const spreadLetter = keyframes`
  0%{
    margin-right:-15px;
    margin-left:-15px;
  }
  100% {
    margin-left:15px;
    margin-right:15px;
  }
`;
const showSubtitle = keyframes`
  0%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
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
  animation: ${showSubtitle} 1s forwards;
  animation-delay: 1.5s;
`;
const ImageContainer = styled.div``;
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
      <ImageContainer></ImageContainer>
    </HomeContentContainer>
  );
}

export default Home;
