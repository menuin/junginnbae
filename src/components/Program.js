import styled from "styled-components";

const ProgramContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 0px 40px;
  /* padding: 10px 10px; */
  /* border-bottom: 1px solid #585858; */
`;
const PosterContainer = styled.div`
  width: 250px;
`;
const PosterImg = styled.img`
  width: 100%;
`;
const ProgramDescription = styled.div`
  margin: 50px 50px 0px;
`;
const ProgramTitle = styled.div`
  font-size: 30px;
  font-family: "Poiret One", cursive;
  margin-bottom: 50px;
`;
const ProgramSchedule = styled.div`
  font-family: "Source Code Pro", monospace;
  color: #b4b4b4;
  margin-bottom: 10px;
`;
const ProgramRep = styled.div`
  font-family: "Source Code Pro", monospace;
  color: #7c7c7c;
`;
function Program({ program }) {
  return (
    <ProgramContainer>
      <PosterContainer>
        <PosterImg src={program.poster} />
      </PosterContainer>
      <ProgramDescription>
        <ProgramTitle>{program.title}</ProgramTitle>
        <ProgramSchedule>
          {program.date} <br />
          {program.starttime}
        </ProgramSchedule>
        <ProgramRep>{program.repertoire}</ProgramRep>
      </ProgramDescription>
    </ProgramContainer>
  );
}
export default Program;
