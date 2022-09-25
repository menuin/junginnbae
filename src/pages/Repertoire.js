import styled from "styled-components";
import Program from "../components/Program";
import { showElement } from "../GlobalStyle";
import programdata from "../db/program.json";

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
const UpcomingEventsTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  /* text-align: center; */
  margin: 40px 0px 30px;
  padding-bottom: 12px;
  border-bottom: 1px solid #585858; ;
`;
const UpcomingEvents = styled.div`
  opacity: 0;
  animation: ${showElement} 1s forwards;
  animation-delay: 1.5s;
`;
const PrevPrograms = styled.div``;

function Repertoire() {
  console.log(programdata.programs[0]);
  return (
    <RepContainer>
      <RepContentContainer>
        <UpcomingEvents>
          <UpcomingEventsTitle>Upcoming Events</UpcomingEventsTitle>
          {programdata.programs.map((program, index) => {
            return <Program program={program} />;
          })}
        </UpcomingEvents>
        <PrevPrograms>{/* previous events 받아다 뿌리기  */}</PrevPrograms>
      </RepContentContainer>
    </RepContainer>
  );
}

export default Repertoire;
