import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

const spreadClass = keyframes`
  0%{
    display:none;
  }
  100% {
    display:block;
  }
`;
const FoldArrowContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ClassTitle = styled.div``;
const ClassDescription = styled.div`
  display: none;
  /* ${(props) =>
    props.isSelected === true &&
    css`
      animation: ${spreadClass} 1s forwards;
    `} */
  margin: 20px 20px;
  display: ${(props) => (props.isSelected === true ? "block" : "none")};
`;
const ClassHead = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
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
`;
const ClassTypeContainer = styled.div``;
const ClassContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
`;
const ClassContainer = styled.div`
  margin: 70px 0px 120px;
  display: flex;
  justify-content: center;
`;
function Class() {
  const [selected, setSelected] = useState(0);
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
        <ClassTypeContainer>
          <ClassType>
            <ClassHead id="1" onClick={onClassClick}>
              <ClassTitle id="1">
                ▪ &nbsp;&nbsp;One to one private lesson
              </ClassTitle>
              <FoldArrowContainer>
                <IoIosArrowDown id="1" />
              </FoldArrowContainer>
            </ClassHead>
            <ClassDescription isSelected={selected === "1"}>
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
          <ClassType>
            <ClassHead id="2" onClick={onClassClick}>
              <ClassTitle id="2">▪ &nbsp;&nbsp;Online teaching</ClassTitle>
              <FoldArrowContainer>
                <IoIosArrowDown id="2" />
              </FoldArrowContainer>
            </ClassHead>
            <ClassDescription isSelected={selected === "2"}>
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
        </ClassTypeContainer>
      </ClassContentContainer>
    </ClassContainer>
  );
}

export default Class;
