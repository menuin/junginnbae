import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { showElement } from "../GlobalStyle";
import { type } from "@testing-library/user-event/dist/type";

const wordSlideUp = keyframes`
  0%{
    top:50px;
  }
  100%{
    top:0px;
  }
`;
const spreadClass = keyframes`
  0%{
    display:none;
  }
  100% {
    display:block;
  }
`;

const ClassDescription = styled.div`
  display: none;
  /* ${(props) =>
    props.isSelected === true &&
    css`
      animation: ${spreadClass} 1s forwards;
    `} */
  margin: 20px 20px;
  display: none;
`;

const FoldArrowContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ClassTitle = styled.div``;
const ClassHead = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  font-weight: 300;
  display: flex;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
`;
const ClassType = styled.div`
  border: 1px solid #777777;
  border-radius: 5px;
  padding: 20px 30px;
  margin-bottom: 20px;
  &:hover {
    color: black;
    background-color: white;
  }
  ${(props) =>
    props.isSelected === true &&
    css`
      color: black;
      background-color: white;
      ${ClassDescription} {
        display: block;
      }
    `}
`;
const ClassTypeContainer = styled.div`
  opacity: 0;
  animation: ${showElement} 1s forwards;
  animation-delay: 1.5s;
`;
const ClassContentTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  font-weight: 200;
  margin: 40px 0px 50px;
  padding-bottom: 12px;
  border-bottom: 1px solid #585858;
  opacity: 0;
  animation: ${showElement} 1s forwards;
  animation-delay: 1s;
`;
const ClassContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
`;
const WordContainer = styled.div`
  overflow-y: hidden;
  height: 50px;
  margin-right: 10px;
`;
const Word = styled.div`
  position: relative;
  font-size: 25px;
  top: 50px;
  animation: ${wordSlideUp} 1s forwards;
  animation-delay: ${(props) => 1 + props.index / 5}s;
`;
const ClassIntroContainer = styled.div`
  display: flex;
`;
const ClassContainer = styled.div`
  margin: 70px 0px 120px;
  display: flex;
  justify-content: center;
`;
function Class() {
  const [selected, setSelected] = useState(0);
  const intro = [
    "Questions",
    "to",
    "ask",
    "yourself",
    "before",
    "investing",
    "in",
    "video",
  ];
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const onClassClick = (e) => {
    setSelected(e.target.id);
  };
  return (
    <ClassContainer>
      <ClassContentContainer>
        <ClassIntroContainer>
          {intro.map((word, index) => {
            return (
              <WordContainer>
                <Word key={index} index={index}>
                  {word}
                </Word>
              </WordContainer>
            );
          })}
        </ClassIntroContainer>
        <ClassContentTitle>Class</ClassContentTitle>
        <ClassTypeContainer>
          <ClassType isSelected={selected === "1"}>
            <ClassHead id="1" onClick={onClassClick}>
              <ClassTitle id="1">
                ▪ &nbsp;&nbsp;One to one private lesson
              </ClassTitle>
              <FoldArrowContainer>
                <IoIosArrowDown id="1" />
              </FoldArrowContainer>
            </ClassHead>
            <ClassDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper
              auctor neque vitae tempus quam pellentesque nec. Scelerisque purus
              semper eget duis. Mi proin sed libero enim. Id faucibus nisl
              tincidunt eget nullam. Egestas purus viverra accumsan in. Enim sit
              amet venenatis urna cursus. Lacus sed viverra tellus in. Auctor
              augue mauris augue neque. Nunc sed velit dignissim sodales ut eu.
              Auctor augue mauris augue neque gravida in fermentum et. Lectus
              mauris ultrices eros in cursus turpis. Praesent elementum
              facilisis leo vel fringilla est ullamcorper eget nulla. Laoreet id
              donec ultrices tincidunt arcu non sodales neque. Nec feugiat nisl
              pretium fusce. Sed augue lacus viverra vitae congue eu consequat
              ac.
            </ClassDescription>
          </ClassType>
          <ClassType isSelected={selected === "2"}>
            <ClassHead id="2" onClick={onClassClick}>
              <ClassTitle id="2">▪ &nbsp;&nbsp;Online teaching</ClassTitle>
              <FoldArrowContainer>
                <IoIosArrowDown id="2" />
              </FoldArrowContainer>
            </ClassHead>
            <ClassDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper
              auctor neque vitae tempus quam pellentesque nec. Scelerisque purus
              semper eget duis. Mi proin sed libero enim. Id faucibus nisl
              tincidunt eget nullam. Egestas purus viverra accumsan in. Enim sit
              amet venenatis urna cursus. Lacus sed viverra tellus in. Auctor
              augue mauris augue neque. Nunc sed velit dignissim sodales ut eu.
              Auctor augue mauris augue neque gravida in fermentum et. Lectus
              mauris ultrices eros in cursus turpis. Praesent elementum
              facilisis leo vel fringilla est ullamcorper eget nulla. Laoreet id
              donec ultrices tincidunt arcu non sodales neque. Nec feugiat nisl
              pretium fusce. Sed augue lacus viverra vitae congue eu consequat
              ac. Aliquet bibendum enim facilisis gravida neque convallis a. Dui
              <br />
              <br />
              faucibus in ornare quam viverra orci sagittis eu volutpat. Sit
              amet consectetur adipiscing elit. At elementum eu facilisis sed
              odio morbi quis commodo odio. Blandit massa enim nec dui nunc
              mattis. Convallis a cras semper auctor neque vitae. Volutpat
              commodo sed egestas egestas fringilla phasellus faucibus
              scelerisque. Dolor sed viverra ipsum nunc aliquet bibendum enim
              facilisis gravida. Mi in nulla posuere sollicitudin aliquam
              ultrices sagittis orci. Sem viverra aliquet eget sit amet tellus
              cras.
            </ClassDescription>
          </ClassType>
          <ClassType isSelected={selected === "3"}>
            <ClassHead id="3" onClick={onClassClick}>
              <ClassTitle id="3">▪ &nbsp;&nbsp;Piano theory</ClassTitle>
              <FoldArrowContainer>
                <IoIosArrowDown id="3" />
              </FoldArrowContainer>
            </ClassHead>
            <ClassDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper
              auctor neque vitae tempus quam pellentesque nec. Scelerisque purus
              semper eget duis. Mi proin sed libero enim. Id faucibus nisl
              tincidunt eget nullam. Egestas purus viverra accumsan in. Enim sit
              amet venenatis urna cursus. Lacus sed viverra tellus in. Auctor
              augue mauris augue neque. Nunc sed velit dignissim sodales ut eu.
              Auctor augue mauris augue neque gravida in fermentum et. Lectus
              mauris ultrices eros in cursus turpis. Praesent elementum
              facilisis leo vel fringilla est ullamcorper eget nulla. Laoreet id
              donec ultrices tincidunt arcu non sodales neque. Nec feugiat nisl
              pretium fusce. Sed augue lacus viverra vitae congue eu consequat
              ac.
            </ClassDescription>
          </ClassType>
        </ClassTypeContainer>
      </ClassContentContainer>
    </ClassContainer>
  );
}

export default Class;
