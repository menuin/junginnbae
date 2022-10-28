import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { showElement } from "../GlobalStyle";

const BioImgContainer = styled.div`
  /* width: 1000px; */
  width: 100%;
  /* height: 650px; */
  overflow: hidden;
  opacity: 0;
  animation: ${showElement} 1s forwards;
  animation-delay: 1.5s;
`;
const BioImg = styled.img`
  width: 100%;
`;

const Profile = styled.div`
  padding-right: 30px;
  padding-bottom: 20px;
`;
const BioDescription = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  opacity: 0;
  ${(props) =>
    props.isVisible &&
    css`
      animation: ${showElement} 1s forwards;
    `}

  /* animation-delay: 1.5s; */
  font-family: "Montserrat", sans-serif;
  font-weight: 200;
  letter-spacing: 0.1em;
  ${(props) =>
    props.isDesktop &&
    css`
      ${Profile} {
        width: 45%;
      }
    `}
`;
const BioDescriptionTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  width: 100%;
  margin-top: 80px;
  opacity: 0;
  ${(props) =>
    props.isVisible &&
    css`
      animation: ${showElement} 1s forwards;
    `}
`;
const BioDescriptionContainer = styled.div`
  width: 80%;
  /* background-color: beige; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;
const BioContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
const BioContainer = styled.div`
  display: flex;
  justify-content: center;
`;
function Bio({ isDesktop }) {
  const [isVisible, setIsVisible] = useState(false); // visibility of bio description
  const [offsetY, setOffsetY] = useState();
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
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
        <BioDescriptionContainer>
          <BioDescriptionTitle isVisible={isVisible}>
            Biography Title
          </BioDescriptionTitle>
          <BioDescription isVisible={isVisible} isDesktop={isDesktop}>
            <Profile>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Profile>
            <Profile>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Profile>
          </BioDescription>
        </BioDescriptionContainer>
      </BioContentContainer>
    </BioContainer>
  );
}

export default Bio;
