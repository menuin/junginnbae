import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

const seeCard = keyframes`
  0%{
    transform: rotateX(60deg) rotateY(0deg) rotateZ(45deg) translateZ(5px);
  }
  100% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(10px); 
  }
`;
const MobileCardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
const MobileCardImg = styled.div`
  background-color: beige;
  width: 300px;
  height: 300px;
`;
const MobileCard = styled.div`
  margin-top: 100px;
  display: none;
  @media ${({ theme }) => theme.device.mobile} {
    display: block;
  }
`;
const ContactInfo = styled.div`
  margin-top: 5px;
  font-family: "Montserrat", sans-serif;
  display: flex;
  font-size: 16px;
`;
const English = styled.div`
  font-family: "Montserrat", sans-serif;
  color: #a9a9a9;
  font-size: 13px;
`;
const Korean = styled.div`
  font-family: "Nanum Myeongjo", serif;
  font-size: 28px;
  /* margin-right: 10px; */
  margin-bottom: 5px;
`;
const Title = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  /* width: 200px; */
  border-bottom: 1px solid #a9a9a9;
  margin-bottom: 20px;
  padding-bottom: 10px;
  /* background-color: beige; */
`;
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 35px 30px;
`;
const Card = styled.button`
  position: relative;
  display: flex;
  background-color: #ececec;
  margin: 250px 0px;
  padding: 0px;
  height: 250px;
  width: 450px;
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
  cursor: pointer;
  border: none;
  box-shadow: 20px 20px 20px #4b4b4b;
  transform: rotateX(60deg) rotateY(0deg) rotateZ(45deg) translateZ(5px);
  @media ${({ theme }) => theme.device.laptop} {
    &:hover {
      animation: ${seeCard} 0.5s forwards;
      box-shadow: 10px 10px 10px #4b4b4b;
    }
  }
  @media ${({ theme }) => theme.device.mobileAndTablet} {
    animation: ${seeCard} 0.5s forwards;
    animation-delay: 0.2s;
    box-shadow: 10px 10px 10px #4b4b4b;
  }
`;
const ContactContent = styled.div`
  display: flex;
  /* margin-top: 40px; */
  /* padding-top: 50px; */
  height: 100vh;
  position: relative;
  justify-content: center;
`;
const ContactContainer = styled.div`
  /* margin: 70px 0px 120px; */
  display: flex;
  justify-content: center;
`;
function Contact({ isTablet }) {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <ContactContainer>
      <ContactContent>
        <Card isTablet={isTablet}>
          <div
            style={{
              width: "40px",
              height: "100%",
              background: "linear-gradient(#C3AD6A, #73663C)",
            }}
          ></div>
          <CardContent>
            <Title>
              <Korean>배정인</Korean>
              <English>Clara Jungin Pae</English>
            </Title>
            <ContactInfo>P _ 010 1234 5678</ContactInfo>
            <ContactInfo>E _ myemail@gmail.com</ContactInfo>
          </CardContent>
        </Card>
        <MobileCard>
          <MobileCardImg></MobileCardImg>
          <MobileCardContent>
            <Title>
              <Korean>배정인</Korean>
              <English>Clara Junginn Pae</English>
            </Title>
            <ContactInfo>P _ 010 1234 5678</ContactInfo>
            <ContactInfo>E _ contactemail@gmail.com</ContactInfo>
          </MobileCardContent>
        </MobileCard>
      </ContactContent>
    </ContactContainer>
  );
}

export default Contact;
