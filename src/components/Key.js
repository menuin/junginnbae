import styled, { keyframes } from "styled-components";

const KeyContainer = styled.div`
  position: relative;
  background-color: #e7e7e7;
  border-radius: 3px 3px 0px 0px;
  /* border: 1px solid gray; */
  height: 100%;
  width: 100%;
  margin: 0;
`;

function Key(id) {
  return <KeyContainer id={id}></KeyContainer>;
}

export default Key;
