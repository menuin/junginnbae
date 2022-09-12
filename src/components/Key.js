import styled, { keyframes } from "styled-components";

const keyAppear = keyframes`
    0% {
        top:30px;
    }
    100% {
        top:0px;
    }
`;
const KeyContainer = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px 3px 0px 0px;
  border: 1px solid gray;
  height: 100%;
  width: 100%;
  margin: 0;
  // loading이 완료되면 remove animation <- 지금은 keydown 할때마다 keyappear 애니메이션이 같이 실행됨
  /* animation: ${keyAppear} 1s forwards; */
`;

function Key(id) {
  return <KeyContainer id={id}></KeyContainer>;
}

export default Key;
