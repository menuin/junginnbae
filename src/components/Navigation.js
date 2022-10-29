import { useEffect } from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { showElement } from "../GlobalStyle";
import Key from "./Key";
import { IoIosMenu } from "react-icons/io";

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

const BtnIcon = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const MobileNavBtn = styled.div`
  display: none;
  @media ${({ theme }) => theme.device.mobile} {
    display: block;
  }
  z-index: 300;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  border: 1px solid white;
  ${(props) =>
    props.isClicked &&
    css`
      background-color: white;
      color: black;
    `}
`;
const LinkTitle = styled.div``;
const MobileNavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
const NavOptContainer = styled.div`
  margin-bottom: 15px;
`;
const MobileNavContainer = styled.div`
  /* background-color: beige; */
  position: fixed;
  display: none;
  z-index: 300;
  right: 20px;
  bottom: 80px;
  text-align: right;
  ${(props) =>
    props.isVisible &&
    css`
      display: block;
    `}/* background-color: rgba(0, 0, 0, 0.61);
  backdrop-filter: blur(5px); */
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
const NavContainer = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
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
function Navigation({ isScrollEnd, setIsScrollEnd }) {
  const [title, setTitle] = useState("");
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
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
  const onMobileNavClick = (event) => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };
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

      <MobileNavContainer isVisible={isMobileNavVisible}>
        {navList.map((nav, index) => {
          return (
            <NavOptContainer id={nav}>
              <MobileNavLink to={nav === "home" ? "/" : "/" + nav}>
                {nav.toUpperCase()}
              </MobileNavLink>
            </NavOptContainer>
          );
        })}
      </MobileNavContainer>
      <MobileNavBtn onClick={onMobileNavClick} isClicked={isMobileNavVisible}>
        <BtnIcon>
          <IoIosMenu size={35} />
        </BtnIcon>
      </MobileNavBtn>
    </>
  );
}
export default Navigation;
