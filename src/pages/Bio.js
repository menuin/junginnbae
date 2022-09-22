import styled, { keyframes } from "styled-components";
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
  height: 600px;
  overflow: hidden;
  opacity: 0;
  animation: ${showElement} 1s forwards;
  animation-delay: 1.5s;
`;
const BioImg = styled.img`
  width: 100%;
`;
const BioDescription = styled.div`
  margin-top: 50px;
  display: flex;
  opacity: 0;
  animation: ${showElement} 1s forwards;
  animation-delay: 1.5s;
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
  return (
    <BioContainer>
      <BioContentContainer>
        <BioImgContainer>
          <BioImg src="images/bio_sample.jpg" />
        </BioImgContainer>
        <BioDescription>
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
