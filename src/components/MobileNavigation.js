import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { IoIosMenu } from "react-icons/io";

const showScreen = keyframes`
    0% {
        opacity:0%
    }
    100% {
        opacity:80%;
    }
`;
const hideScreen = keyframes`
    0% {
        opacity:80%
    }
    100% {
        opacity:0%;
    }
`;
const showNavLink = keyframes`
    0% {
        padding-left:100px;
        opacity:100%
    }
    100% {
        padding:0px;
        opacity:100%;
    }
`;
const BtnIcon = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const MobileNavScreen = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0%;
  z-index: 299;
  display: none;
  @media ${({ theme }) => theme.device.mobile} {
    display: block;
  }
  ${(props) =>
    props.isVisible == null ||
    (props.isVisible == false &&
      css`
        z-index: -1;
      `)}
  ${(props) =>
    props.isVisible != null &&
    (props.isVisible
      ? css`
          animation: ${showScreen} 0.5s forwards;
        `
      : css`
          animation: ${hideScreen} 0.5s forwards;
        `)}
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
const MobileNavLink = styled(Link)`
  text-decoration: none;
  color: white;
  opacity: 0;
  ${(props) =>
    props.isVisible &&
    css`
      animation: ${showNavLink} 1s forwards;
      /* animation-delay: ${(5 - props.index) / 6}s; */
    `}
`;
const NavOptContainer = styled.div`
  margin-bottom: 15px;
  width: 100px;
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
    `}
`;
function MobileNavigation({ navList }) {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(null);
  let location = useLocation();
  useEffect(() => {
    // hide nav when route changes
    setIsMobileNavVisible(null);
  }, [location]);

  const onMobileNavClick = (event) => {
    if (isMobileNavVisible == null) {
      setIsMobileNavVisible(true);
    } else {
      setIsMobileNavVisible(!isMobileNavVisible);
    }
  };
  return (
    <>
      <MobileNavScreen isVisible={isMobileNavVisible}></MobileNavScreen>
      <MobileNavContainer isVisible={isMobileNavVisible}>
        {navList.map((nav, index) => {
          return (
            <NavOptContainer id={nav}>
              <MobileNavLink
                to={nav === "home" ? "/" : "/" + nav}
                isVisible={isMobileNavVisible}
                index={index}
              >
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
export default MobileNavigation;
