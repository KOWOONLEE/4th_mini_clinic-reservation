import styled from "styled-components";
import Nav from "../components/Nav";

const Main = () => {
  return (
    <MainWrapper>
      <MainBackground src="/assets/main.png" />
      <div className="backgroundMiddle">
        <p>병원 예약 홈페이지</p>
      </div>
      {/* </MainBackground> */}
    </MainWrapper>
  );
};
export default Main;

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .backgroundMiddle {
    display: flex;
    position: absolute;
    align-items: center;
    text-align: center;
    width: 80%;
    height: 50%;
    background-color: white;
    opacity: 0.7;
    top: 35%;
    left: 10%;
    /* z-index: 99; */
    p {
      display: flex;
      align-items: center;
      text-align: center;
      font-size: 4.5em;
      margin: 0 auto;
      /* text-align: middle; */
    }
  }
`;
const MainBackground = styled.img`
  width: 100%;
  height: 100%;
  background-color: rgba(248, 247, 216, 0.7);
  position: relative;
`;
