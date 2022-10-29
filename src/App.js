import { useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import Head from "./components/Head";
import Navigation from "./components/Navigation";
import Bio from "./pages/Bio";
import Class from "./pages/Class";
import Contact from "./pages/Contact";
import Discography from "./pages/Discography";
import Home from "./pages/Home";
import Repertoire from "./pages/Repertoire";
import Videos from "./pages/Videos";
import { BottomScrollListener } from "react-bottom-scroll-listener";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import theme from "./theme";

const Nav = styled.div``;
const HeadContainer = styled.div`
  position: fixed;
  background-color: #a49c73;
  /* opacity: 0; */
  height: 60px;
  width: 100%;
  z-index: 289;
`;
const Content = styled.div`
  background-color: #181818;
  color: white;
  position: absolute;
  /* height: 100vh; */
  /* overflow-y: scroll; */
  width: 100%;
`;
function App() {
  const isTablet = useMediaQuery({ minWidth: 554, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 553 });
  const isTableOrMobile = useMediaQuery({ maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const handleScroll = () => {
    // hide nav when scroll moves upward from the very bottom of the page
    if (isScrollEnd === true) {
      setIsScrollEnd(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  // show nav when scroll reaches the end in each page
  const handleScrollEnd = () => {
    setIsScrollEnd(true);
  };
  return (
    <ThemeProvider theme={theme}>
      <Nav>
        <Content>
          <Router>
            <Head />
            <Navigation
              setIsScrollEnd={setIsScrollEnd}
              isScrollEnd={isScrollEnd}
            />
            {/* add bottom scroll listener to every route */}
            <BottomScrollListener onBottom={handleScrollEnd}>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/bio" element={<Bio />}></Route>
                <Route path="/discography" element={<Discography />}></Route>
                <Route path="/videos" element={<Videos />}></Route>
                <Route path="/repertoire" element={<Repertoire />}></Route>
                <Route path="/class" element={<Class />}></Route>
                <Route
                  path="/contact"
                  element={<Contact isTablet={isTablet} />}
                ></Route>
              </Routes>
            </BottomScrollListener>
          </Router>
        </Content>
      </Nav>
    </ThemeProvider>
  );
}

export default App;
