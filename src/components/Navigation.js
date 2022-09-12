import { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Key from "./Key";

// const AccessNavDiv = styled.div`
//   position: fixed;
//   bottom: 0;
//   width: 100%;
//   height: 100px;
//   background-color: beige;
//   opacity: 0.5;
//   z-index: 289;
//   pointer-events: none;
// `;
const keyDown = keyframes`
    0% {
        padding-top:0px;
    }
    
    100% {
        padding-top:20px;
    }
`;
const NavContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  background: transparent;
  /* opacity: ${(props) => (props.isAccessible ? 1 : 0)}; */
`;
const NavTitle = styled.div`
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
  // const [isNavAccessible, setIsNavAccessible] = useState(false);
  const navList = [
    "home",
    "bio",
    "discography",
    "videos",
    "repertoire",
    "class",
    "contact",
  ];
  // const changeNavAccessibility = () => {
  //   setIsNavAccessible(!isNavAccessible);
  // };
  const showTitle = (event) => {
    setTitle(event.currentTarget.id);
  };
  const hideTitle = () => {
    setTitle("");
  };
  return (
    <>
      <NavContainer>
        <NavTitle>{title.toUpperCase()}</NavTitle>
        <NavKeyContainer>
          {navList.map((nav, index) => {
            return (
              <KeyWrap onMouseOver={showTitle} onMouseOut={hideTitle} id={nav}>
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
