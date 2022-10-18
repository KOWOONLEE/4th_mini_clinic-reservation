import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const Confirm = () => {
  const navigate = useNavigate();
  const currentUserName = localStorage.getItem("USER_NAME");
  const currentUserDate = localStorage.getItem("user_date");
  const currentUserData = localStorage.getItem("user_data");
  const currentHospital = localStorage.getItem("hospital");
  // const currentUserNum = localStorage.getItem("USER_PHONENUMBER");

  const reservationDate =
    moment(currentUserDate).format("YYYY년 MM월 DD일 HH시");

  const clickDelete = () => {
    localStorage.removeItem("user_date");
    localStorage.removeItem("user_data");
    localStorage.removeItem("hospital");
    navigate("/");
  };
  const clickanother = () => {
    localStorage.removeItem("user_date");
    localStorage.removeItem("user_data");
    localStorage.removeItem("hospital");
    navigate("/reservation");
  };
  return (
    <ConfirmWrapper>
      {currentUserData ? (
        <div className="contentBox">
          <h1>예약 확인 페이지</h1>
          <h3>안녕하세요. {currentUserName}님</h3>
          <h3>아래와 같이 예약 내역 확인 바랍니다.</h3>
          <div className="userConfirm">
            <h3>예약 병원 : {currentHospital}</h3>
            <h3>예약 일시 : {reservationDate}</h3>
            <h3>예약 종류 : {currentUserData}</h3>
          </div>
          <div className="selectOption">
            <button className="leftBtn" onClick={clickanother}>
              예약 변경하기
            </button>
            <button className="rightBtn" onClick={clickDelete}>
              예약 취소하기
            </button>
          </div>
        </div>
      ) : (
        <div className="nothingRes">예약 내역이 없습니다.</div>
      )}
    </ConfirmWrapper>
  );
};
export default Confirm;

const ConfirmWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 25vh;
  text-align: center;
  align-items: center;
  justify-content: center;

  .nothingRes {
    font-size: 2em;
  }

  .contentBox {
    display: inline-block;
    vertical-align: center;
    width: 100%;

    h1 {
      font-size: 2.5em;
      margin: 20px 0px 20px 0px;
    }
    h3 {
      font-size: 1.5em;
      line-height: 7vh;
    }
    .userConfirm {
      display: inline-block;
      width: 60%;
      height: 30vh;
      margin-top: 20px;
      border: 2px solid #da005c;
      border-radius: 20px;
      padding-top: 20px;
    }
    .selectOption {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .leftBtn {
      margin-left: 300px;
    }
    .rightBtn {
      margin-right: 300px;
    }
    button {
      display: flex;
      width: 15%;
      height: 5vh;
      margin: 20px auto;
      color: white;
      background-color: #da005c;
      border: none;
      text-align: center;
      justify-content: center;
      align-items: center;
    }
  }
`;
