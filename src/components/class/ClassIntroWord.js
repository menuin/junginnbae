import styled, { keyframes } from "styled-components";

const wordSlideUp = keyframes`
  0%{
    top:70px;
  }
  100%{
    top:0px;
  }
`;
const WordContainer = styled.div`
  overflow-y: hidden;
  height: 70px;
  margin-right: 10px;
`;
const Word = styled.div`
  position: relative;
  font-family: "Montserrat", sans-serif;
  font-size: 40px;
  top: 70px;
  animation: ${wordSlideUp} 1s forwards;
  animation-delay: ${(props) => 1 + props.index / 5}s;
`;
const ClassIntroWordContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  align-content: flex-start;
  margin-right: 10px;
`;
function ClassIntroWord() {
  const intro = [
    "Questions",
    "to",
    "ask",
    "yourself",
    "before",
    "investing",
    "in",
    "video",
    "contact",
    "here",
  ];
  return (
    <ClassIntroWordContainer>
      {intro.map((word, index) => {
        return (
          <WordContainer>
            <Word key={index} index={index}>
              {word}
            </Word>
          </WordContainer>
        );
      })}
    </ClassIntroWordContainer>
  );
}
export default ClassIntroWord;
