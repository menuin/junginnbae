import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import styled, { css, keyframes } from "styled-components";

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
function ClassDescriptions() {
  const [selected, setSelected] = useState();
  const classDescription = [
    ["One to one private lesson", "content1"],
    ["Online teaching", "content2"],
    ["Piano theory", "content3"],
  ];
  const onClassClick = (e) => {
    setSelected(Number(e.target.id));
  };
  return (
    <>
      {classDescription.map((desc, index) => {
        return (
          <ClassType isSelected={selected === index}>
            <ClassHead id={index} onClick={onClassClick}>
              <ClassTitle id={index}>▪ &nbsp;&nbsp;{desc[0]}</ClassTitle>
              <FoldArrowContainer>
                <IoIosArrowDown id={index} />
              </FoldArrowContainer>
            </ClassHead>
            <ClassDescription>{desc[1]}</ClassDescription>
          </ClassType>
        );
      })}
    </>
  );
}
export default ClassDescriptions;
