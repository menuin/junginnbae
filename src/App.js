import "./App.css";
import styled, { css, keyframes } from "styled-components";
import { useState } from "react";

const Container = styled.div`
  position: relative;
`;
const ImgContainer = styled.div`
  position: absolute;
`;
const Button = styled.div`
  background-color: ${(props) => (props.clicked ? "white" : "black")};
  position: absolute;
  left: 50px;
  top: 50px;
  height: 100px;
  width: 100px;
  display: ${(props) => (props.clicked ? "none" : "block")};
  &:hover {
    /* background-color: red; */
    top: 60px;
    left: 60px;
  }
`;
const ClickedBtn = styled.div`
  background-color: white;
  position: absolute;
  left: 60px;
  top: 60px;
  height: 100px;
  width: 100px;
  display: ${(props) => (props.clicked ? "block" : "none")};
`;
const Bg = styled.img`
  /* opacity: 0.5; */
  opacity: ${(props) => (props.clicked ? "1" : "0")};
  animation: ${(props) =>
    props.clicked &&
    css`
      ${fadein} 2s;
    `};
`;

const fadein = keyframes`
  0% {
    opacity:0;
  }
  100% {
    opacity : 1;
}
`;
function App() {
  const [clicked, setClicked] = useState(false);
  const onBtnClick = () => {
    setClicked(!clicked);
    console.log(clicked);
  };
  return (
    <Container className="App">
      <ImgContainer>
        <Bg clicked={clicked} src="/images/background.jpg"></Bg>
      </ImgContainer>
      <Button onClick={onBtnClick} clicked={clicked}></Button>
      <ClickedBtn clicked={clicked}></ClickedBtn>
    </Container>
  );
}

export default App;
