import styled from "styled-components";
import Program from "../components/Program";
import { showElement } from "../GlobalStyle";
import programdata from "../db/program.json";
import PrevProgram from "../components/PrevProgram";

const NoEventAlert = styled.div`
  text-align: center;
  width: 100%;
  margin: 80px 0px;
  font-family: "Montserrat", sans-serif;
`;
const RepContainer = styled.div`
  margin: 70px 0px 120px;
  display: flex;
  justify-content: center;
`;
const RepContentContainer = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
`;
const RepTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  /* text-align: center; */
  margin: 40px 0px 50px;
  padding-bottom: 12px;
  opacity: 0;
  border-bottom: 1px solid #585858;
  animation: ${showElement} 1s forwards;
  animation-delay: 1s;
`;
const UpcomingEvents = styled.div`
  opacity: 0;
  animation: ${showElement} 1s forwards;
  animation-delay: 1.5s;
  display: flex;
  /* justify-content: center; */
  color: white;
`;
const PrevPrograms = styled.div``;

function Repertoire() {
  let upcomingEvents = programdata.programs
    .filter((e) => {
      return new Date(e.date) > new Date();
    })
    .sort((a, b) => {
      // sort in order of date
      return new Date(a.date) - new Date(b.date);
    });
  console.log(upcomingEvents == []);
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
            upcomingEvents.map((program, data) => {
              return <Program program={program} />;
            })
          )}
        </UpcomingEvents>
        <PrevPrograms>
          <RepTitle>Previous Programs</RepTitle>
          <></>
          {programdata.programs
            .filter((e) => {
              return new Date(e.date) < new Date();
            })
            .map((program, index) => {
              return <PrevProgram program={program} />;
            })}
        </PrevPrograms>
      </RepContentContainer>
    </RepContainer>
  );
}

export default Repertoire;
