import { useEffect } from "react";
import { useState } from "react";
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
    css`
      &:hover {
        animation: ${showElement} 1s forwards;
      }
      opacity: 0;
    `}
`;
const NavTitle = styled.div`
  font-family: "Raleway", sans-serif;

  color: #d8d8d8;
  position: fixed;
  bottom: 70px;
`;
const NavKeyContainer = styled.div`
  width: 576px;
  height: 30px;
  position: fixed;
  display: flex;
  bottom: 0;
`;

const KeyWrap = styled.div`
  width: 80px;
  display: flex;
  justify-content: center;
  margin: 0px 2px;
  padding: 0px;
  padding-top: 30px;
  animation: ${keyAppear} 1s forwards;
  animation-delay: ${(props) => Math.abs(props.index - 3) / 6}s;
  & :hover {
    animation: ${keyDown} 1s forwards;
  }
`;
const NavLink = styled(Link)`
  display: inline-block;
  width: 100%;
`;

function Navigation() {
  const [title, setTitle] = useState("");
  const navList = [
    "home",
    "bio",
    "discography",
    "videos",
    "repertoire",
    "class",
    "contact",
  ];
  const crntPath = window.location.pathname;
  const showTitle = (event) => {
    setTitle(event.currentTarget.id);
  };
  const hideTitle = () => {
    setTitle("");
  };
  return (
    <>
      <NavContainer crntPath={crntPath}>
        <NavTitle>{title.toUpperCase()}</NavTitle>
        <NavKeyContainer>
          {navList.map((nav, index) => {
            return (
              <KeyWrap
                onMouseOver={showTitle}
                onMouseOut={hideTitle}
                id={nav}
                index={index}
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
