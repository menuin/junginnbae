import styled from "styled-components";

const PPRep = styled.div`
  display: flex;
  color: #767676;
`;
const PPDate = styled.div`
  color: #767676;
`;
const PPTitle = styled.div`
  font-family: "Nanum Myeongjo", serif;
  font-size: 30px;
  margin-bottom: 20px;
`;
const PrevProgramContainer = styled.div`
  border-left: 3px solid #665607;
  margin-bottom: 50px;
  margin-left: 15px;
  padding: 10px 30px 20px;
`;
function PrevProgram({ program }) {
  return (
    <PrevProgramContainer>
      <PPTitle>{program.title}</PPTitle>
      <PPDate>
        {program.date}&nbsp;&nbsp;{program.starttime}
      </PPDate>

      {program.repertoire.map((rep, index) => {
        return (
          <PPRep>
            {rep}&nbsp;{"/"}&nbsp;
          </PPRep>
        );
      })}
    </PrevProgramContainer>
  );
}
export default PrevProgram;
