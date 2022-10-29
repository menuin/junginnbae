import { useEffect } from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { showElement } from "../GlobalStyle";
import Key from "./Key";

const keyDown = keyframes`
    0% {
        padding-top:0px;
    }
    
    100% {
        padding-top:20px;
    }
`;
const keyAppear = keyframes`
  0% {
    padding-top:30px;
  }
  100% {
    padding-top:0px;
  }
`;
const NavContainer = styled.div`
  z-index: 300;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  background: transparent;
  ${(props) =>
    props.crntPath !== "/" &&
    props.crntPath !== "/contact" &&
    css`
      @media ${({ theme }) => theme.device.laptop} {
        &:hover {
          animation: ${showElement} 1s forwards;
        }
        opacity: 0;
      }
    `}
  ${(props) =>
    props.isScrollEnd === true &&
    css`
      @media ${({ theme }) => theme.device.laptop} {
        animation: ${showElement} 1s forwards;
        animation-delay: 0.2s;
      }
    `}
`;
const NavTitle = styled.div`
  font-family: "Raleway", sans-serif;
  color: #7c7c7c;
  position: fixed;
  bottom: 70px;
`;
const NavKeyContainer = styled.div`
  width: 580px;
  height: 30px;
  position: fixed;
  display: flex;
  bottom: 0;
  justify-content: center;
`;
const NavLink = styled(Link)`
  display: inline-block;
  width: 100%;
`;
const KeyWrap = styled.div`
  width: 80px;
  display: flex;
  justify-content: center;
  margin: 0px 2px;
  padding: 0px;
  padding-top: 30px;
  animation: ${keyAppear} 1s forwards;
  animation-delay: ${(props) => Math.abs(props.index - 2) / 6}s;
  @media ${({ theme }) => theme.device.laptop} {
  }
  ${NavLink}:hover {
    animation: ${keyDown} 1s forwards;
  }
`;

function Navigation({ isScrollEnd, setIsScrollEnd }) {
  const [title, setTitle] = useState("");
  const navList = [
    "home",
    "bio",
    // "discography",
    // "videos",
    "repertoire",
    "class",
    "contact",
  ];
  const crntPath = window.location.pathname;
  useEffect(() => {
    // hide nav when route changes
    setIsScrollEnd(false);
  }, [crntPath]);
  const showTitle = (event) => {
    setTitle(event.currentTarget.id);
  };
  const hideTitle = () => {
    setTitle("");
  };
  return (
    <>
      <NavContainer isScrollEnd={isScrollEnd} crntPath={crntPath}>
        <NavTitle>{title.toUpperCase()}</NavTitle>
        <NavKeyContainer>
          {navList.map((nav, index) => {
            return (
              <KeyWrap
                onMouseOver={showTitle}
                onMouseOut={hideTitle}
                id={nav}
                key={index}
              >
                <NavLink to={nav === "home" ? "/" : "/" + nav}>
                  <Key id={index}></Key>
                </NavLink>
              </KeyWrap>
            );
          })}
        </NavKeyContainer>
      </NavContainer>
    </>
  );
}
export default Navigation;
