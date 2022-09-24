import { useEffect } from "react";
import { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { showElement } from "../GlobalStyle";

const BioContainer = styled.div`
  margin: 70px 0px 120px;
  display: flex;
  justify-content: center;
`;
const BioContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
`;

const BioImgContainer = styled.div`
  width: 1000px;
  height: 650px;
  overflow: hidden;
  opacity: 0;
  animation: ${showElement} 1s forwards;
  animation-delay: 1.5s;
`;
const BioImg = styled.img`
  width: 100%;
`;
const BioDescriptionTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  margin-top: 80px;
  opacity: 0;
  ${(props) =>
    props.isVisible &&
    css`
      animation: ${showElement} 1s forwards;
    `}
`;
const BioDescription = styled.div`
  margin-top: 30px;
  display: flex;
  opacity: 0;
  ${(props) =>
    props.isVisible &&
    css`
      animation: ${showElement} 1s forwards;
    `}

  /* animation-delay: 1.5s; */
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.1em;
`;
const Profile = styled.div`
  width: 500px;
  padding-right: 30px;
`;
const Comment = styled.div`
  width: 500px;
  padding-right: 30px;
`;

function Bio() {
  const [isVisible, setIsVisible] = useState(false); // visibility of bio description
  const [offsetY, setOffsetY] = useState();
  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (offsetY > 150) {
      setIsVisible(true);
    }
  }, [offsetY]);

  return (
    <BioContainer>
      <BioContentContainer>
        <BioImgContainer>
          <BioImg src="images/bio_sample.jpg" />
        </BioImgContainer>
        <BioDescriptionTitle isVisible={isVisible}>
          Biography Title
        </BioDescriptionTitle>
        <BioDescription isVisible={isVisible}>
          <Profile>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Profile>
          <Comment>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Comment>
        </BioDescription>
      </BioContentContainer>
    </BioContainer>
  );
}

export default Bio;
