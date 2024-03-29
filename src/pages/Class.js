import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { showElement } from "../GlobalStyle";
import ClassIntroWord from "../components/class/ClassIntroWord";
import ClassDescriptions from "../components/class/ClassDescriptions";

const imgSlideDown = keyframes`
  0%{
    bottom:400px;
  }
  100% {
    bottom:50px;
  }
`;
const imgSlideUp = keyframes`
  0% {
    top:500px;
  }
  100% {
    top:50px;
  }
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
  margin: 100px 0px 50px;
  padding-bottom: 12px;
  border-bottom: 1px solid #585858;
  opacity: 0;
  animation: ${showElement} 1s forwards;
  animation-delay: 1s;
`;
const ContactLink = styled(Link)`
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  margin-top: 40px;
  text-decoration: none;
  color: white;
  opacity: 0;
  @media ${({ theme }) => theme.device.laptop} {
    &:hover {
      background-color: white;
      color: black;
    }
  }

  font-family: "Montserrat", sans-serif;
  animation: ${showElement} 1s forwards;
  animation-delay: 3.7s;
`;
const ClassImg = styled.img`
  position: relative;
  width: 150px;
  height: 400px;
  margin-right: 10px;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100px;
  }
  ${(props) =>
    props.index % 2 === 0
      ? css`
          top: 500px;
          animation: ${imgSlideUp} 1.5s forwards;
        `
      : css`
          bottom: 400px;
          animation: ${imgSlideDown} 1s forwards;
        `}
  animation-delay:1s;
`;
const ClassImgContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
const ClassIntro = styled.div`
  width: 500px;
  padding-top: 40px;
  justify-content: center;
  @media ${({ theme }) => theme.device.laptop} {
    margin-left: 40px;
  }
`;
const ClassIntroContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
  /* align-items: center; */
`;
const ClassContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 70px 0px 120px;
`;
const ClassContainer = styled.div`
  display: flex;
  justify-content: center;
`;
function Class() {
  const classImgs = [
    "images/class_sample.png",
    "images/class_sample.png",
    "images/class_sample.png",
  ];
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <ClassContainer>
      <ClassContentContainer>
        <ClassIntroContainer>
          <ClassImgContainer>
            {classImgs.map((img, index) => {
              return <ClassImg index={index} src={img} />;
            })}
          </ClassImgContainer>
          <ClassIntro>
            <ClassIntroWord />
            <ContactLink to="/contact">contact</ContactLink>
          </ClassIntro>
        </ClassIntroContainer>
        <ClassContentTitle>Class Information</ClassContentTitle>
        <ClassTypeContainer>
          <ClassDescriptions />
        </ClassTypeContainer>
      </ClassContentContainer>
    </ClassContainer>
  );
}

export default Class;
