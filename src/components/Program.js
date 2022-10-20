import styled from "styled-components";

const PosterContainer = styled.div`
  width: 300px;
  /* height: 300px; */
`;

const ProgramDescription = styled.div`
  /* margin: 30px 50px 0px; */
  position: absolute;
  color: white;
  opacity: 0;
  bottom: 50px;
  left: 20px;
`;
const PosterImg = styled.img`
  width: 100%;
`;
const ProgramTitle = styled.div`
  font-size: 17px;
  /* font-family: "Poiret One", cursive; */
  /* font-family: "Gowun Dodum", sans-serif; */
  /* font-family: "Gowun Batang", serif; */
  font-family: "Noto Sans KR", sans-serif;
  margin-top: 10px;
`;
const ProgramSchedule = styled.div`
  /* font-family: "Source Code Pro", monospace; */
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
  color: #b4b4b4;
  margin-top: 150px;
`;
const ProgramRep = styled.div`
  font-family: "Source Code Pro", monospace;
  color: #7c7c7c;
  display: flex;
`;
const ProgramPerformer = styled.div`
  display: flex;
  font-family: "Noto Sans KR", sans-serif;
  color: #888888;
`;
const ProgramContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 0px 20px 40px;
  overflow: hidden;
  /* padding: 10px 10px; */
  /* border-bottom: 1px solid #585858; */
  &:hover ${PosterImg} {
    opacity: 0.2;
  }
  &:hover ${ProgramDescription} {
    opacity: 1;
  }
`;
function Program({ program }) {
  return (
    <ProgramContainer>
      <PosterContainer>
        <PosterImg src={program.poster} />
      </PosterContainer>
      <ProgramDescription>
        <ProgramSchedule>{program.date}</ProgramSchedule>
        {/* <ProgramPerformer>
          {program.performer.map((name, index) => {
            return <>{name}&nbsp;&nbsp;</>;
          })}
        </ProgramPerformer> */}
        <ProgramTitle>{program.title}</ProgramTitle>
      </ProgramDescription>
    </ProgramContainer>
  );
}
export default Program;
