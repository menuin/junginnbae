import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { showElement } from "../GlobalStyle";

const pushImg = keyframes`
    0% {
        height:350px;
    }
    100% {
        height:70px;
    }
`;
const changeImgOpacity = keyframes`
  0% {
    opacity:0.5 ;
  }
  60% {
    opacity:0.5;
  }
  100%{
    opacity:0 ;
  }
`;
const HeadContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 289;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 350px;

  ${(props) =>
    props.location.pathname !== "/" &&
    css`
      animation: ${pushImg} 1s forwards;
    `}
`;
const Img = styled.img`
  min-width: 100%;
  min-height: 100%;
  opacity: 0.5;
  ${(props) =>
    props.location.pathname !== "/" &&
    css`
      animation: ${changeImgOpacity} 1.5s forwards;
    `}
`;
const HeadTitle = styled.div`
  position: absolute;
  color: white;
  /* font-family: "Montserrat", sans-serif; */
  font-family: "Poiret One", cursive;
  font-size: 25px;
  letter-spacing: 0.5em;
  opacity: 0;
  ${(props) =>
    props.location.pathname !== "/" &&
    css`
      animation: ${showElement} 1s forwards;
      animation-delay: 1.5s;
    `}
`;
function Head() {
  let location = useLocation();

  return (
    <HeadContainer>
      <ImageContainer location={location}>
        <Img src="images/home_pianist.jpg" location={location} />
        <HeadTitle location={location}>JUNGIN PAE</HeadTitle>
      </ImageContainer>
    </HeadContainer>
  );
}
export default Head;
