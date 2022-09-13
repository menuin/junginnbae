import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Navigation from "./components/Navigation";
import Bio from "./pages/Bio";
import Class from "./pages/Class";
import Contact from "./pages/Contact";
import Discography from "./pages/Discography";
import Home from "./pages/Home";
import Repertoire from "./pages/Repertoire";
import Videos from "./pages/Videos";

const Nav = styled.div``;
const HeadContainer = styled.div`
  position: fixed;
  background-color: #a49c73;
  opacity: 0;
  height: 60px;
  width: 100%;
  z-index: 289;
`;
const Content = styled.div`
  background-color: #212121;
  color: white;
  position: absolute;
  height: 100%;
  width: 100%;
`;
function App() {
  return (
    <Nav>
      <HeadContainer></HeadContainer>
      <Content>
        <Router>
          <Navigation />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/bio" element={<Bio />}></Route>
            <Route path="/discography" element={<Discography />}></Route>
            <Route path="/videos" element={<Videos />}></Route>
            <Route path="/repertoire" element={<Repertoire />}></Route>
            <Route path="/class" element={<Class />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </Router>
      </Content>
    </Nav>
  );
}

export default App;
