import styled from "styled-components";
import Program from "../components/Program";
import { showElement } from "../GlobalStyle";
import PrevProgram from "../components/PrevProgram";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import programData from "../db/programData.json";

const NoEventAlert = styled.div`
  text-align: center;
  width: 100%;
  margin: 80px 0px;
  font-family: "Montserrat", sans-serif;
`;
const PrevPrograms = styled.div`
  opacity: 0;
  animation: ${showElement} 1s forwards;
  animation-delay: 1.5s;
`;
const UpcomingEvents = styled.div`
  opacity: 0;
  animation: ${showElement} 1s forwards;
  animation-delay: 1.5s;
  display: flex;
  /* justify-content: center; */
  color: white;
`;
const RepTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  font-weight: 200;
  /* text-align: center; */
  margin: 40px 0px 50px;
  padding-bottom: 12px;
  opacity: 0;
  border-bottom: 1px solid #585858;
  animation: ${showElement} 1s forwards;
  animation-delay: 1s;
`;
const RepContentContainer = styled.div`
  width: 80%;
  margin: 70px 0px 250px;
  display: flex;
  flex-direction: column;
`;
const RepContainer = styled.div`
  display: flex;
  justify-content: center;
`;
function Repertoire() {
  const [programs, setPrograms] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  useEffect(() => {
    // async function fetchData() {
    //   const { data: response } = await axios.get(
    //     "http://localhost:1124/programs"
    //   );

    //   setPrograms(response);
    // }
    // fetchData();
    setPrograms(programData.programs);
  }, []);
  useEffect(() => {
    setUpcomingEvents(
      programs
        .filter((e) => {
          return new Date(e.date) > new Date();
        })
        .sort((a, b) => {
          // sort in order of date
          return new Date(a.date) - new Date(b.date);
        })
    );
  }, [programs]);

  return (
    <RepContainer>
      <RepContentContainer>
        <RepTitle>Upcoming Events</RepTitle>

        <UpcomingEvents>
          {upcomingEvents.length === 0 ? (
            <NoEventAlert>
              There are no upcoming programs at this moment.
            </NoEventAlert>
          ) : (
            upcomingEvents.map((program, index) => {
              return <Program program={program} key={index} />;
            })
          )}
        </UpcomingEvents>

        <PrevPrograms>
          <RepTitle>Previous Programs</RepTitle>

          <>
            {programs
              .filter((e) => {
                return new Date(e.date) < new Date();
              })
              .map((program, index) => {
                return <PrevProgram program={program} key={index} />;
              })}
          </>
        </PrevPrograms>
      </RepContentContainer>
    </RepContainer>
  );
}

export default Repertoire;
