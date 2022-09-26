import { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SampleContainer = styled.div`
  margin-top: 200px;
`;
function Discography() {
  const [text, setText] = useState("");
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const onClick = () => {
    const textbox = {
      text,
    };
    fetch("http://localhost:3001/text", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(textbox),
    }).then((res) =>
      res.json().then((json) => {
        console.log(json);
        setText(json.text);
      })
    );
  };
  return (
    <SampleContainer>
      <div>
        <input name="text" onChange={handleChange}></input>
        <button onClick={onClick}>전송</button>
        <h3>{text}</h3>
      </div>
    </SampleContainer>
  );
}

export default Discography;
