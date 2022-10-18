import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";

const Reservation = () => {
  const navigate = useNavigate();
  const [value, onChange] = useState(new Date());
  const [selected, setSelected] = useState("");
  const [hospital, setHospital] = useState([]);
  const [hospitalSelected, setHospitalSelected] = useState("");
  const selectList = ["=== 선택 ===", "진료", "검진", "상담"];

  const currentUserName = localStorage.getItem("USER_NAME");

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const handleHospital = (e) => {
    setHospitalSelected(e.target.value);
  };

  const submitReservation = (e) => {
    e.preventDefault();
    alert("예약이 완료되었습니다");
    navigate("/confirm");
    localStorage.setItem("hospital", hospitalSelected);
    localStorage.setItem("user_date", value);
    localStorage.setItem("user_data", selected);
  };
  useEffect(() => {
    fetch("/data/hospital.json")
      .then((res) => res.json())
      .then((data) => setHospital(data.category));
  }, []);

  return (
    <RevervationWrapper>
      {localStorage.getItem("user_date") ? (
        <div className="alredyRes">
          <p> 이미 예약 내역이 있습니다. </p>
          <p>새로 예약하시려면 기존 예약 내역을 취소해주세요.</p>
          <button
            onClick={() => {
              navigate("/confirm");
            }}
          >
            예약취소하러 가기
          </button>
        </div>
      ) : (
        <MainBackground>
          <h1>{currentUserName}님의 예약페이지</h1>
          <h1>Reservation</h1>
          <h3 className="h3Title">병원 선택하기</h3>
          <select
            onChange={handleHospital}
            value={hospitalSelected}
            className="hospitalBox"
          >
            {hospital.map((item) => (
              <option value={item.hospitalName} key={item.id}>
                {item.hospitalName}
              </option>
            ))}
          </select>
          <h3 className="h3Title">날짜 및 시간 선택</h3>
          <DateTimePicker
            onChange={onChange}
            value={value}
            calendarAriaLabel="Toggle calendar"
            minDate={new Date()}
            timeIntervals={30}
            disableClock={true}
          />
          <h3 className="h3Title">진료 종류 선택</h3>
          <select
            onChange={handleSelect}
            value={selected}
            className="selectBox"
          >
            {selectList.map((list) => (
              <option value={list} key={list}>
                {list}
              </option>
            ))}
          </select>
          <form>
            <button onClick={submitReservation} className="reservationBtn">
              예약하기
            </button>
          </form>
        </MainBackground>
      )}
    </RevervationWrapper>
  );
};
export default Reservation;

const RevervationWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 10vh;

  .alredyRes {
    display: inline-block;
    width: 80%;
    height: 35vh;
    margin: 20vh auto;
    padding-top: 20px;
    font-size: 2em;
    text-align: center;
    border: 2px solid #da005c;
    border-radius: 10px;

    p {
      margin-top: 15px;
    }
    button {
      width: 30vw;
      height: 7vh;
      margin-top: 20px;
      font-size: 0.5em;
      color: white;
      background-color: #da005c;
      border: none;
    }
  }

  h1 {
    font-size: 2.3em;
    text-align: center;
    margin: 30px 0 20px 0;
  }
  .h3Title {
    font-size: 1.5em;
    text-align: center;
    margin: 30px 0 20px 0;
  }
  .selectBox {
    display: flex;
    width: 30%;
    height: 5vh;
    font-size: 1em;
    margin: 0 auto;
    text-align: center;
    border: 1px solid #da005c;
  }

  .reservationBtn {
    display: flex;
    width: 20%;
    height: 5vh;
    color: white;
    margin: 0 auto;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    background-color: #da005c;
    border: none;
  }
`;
const MainBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  position: relative;
  margin-top: 5vh;

  .hospitalBox {
    display: flex;
    width: 30%;
    height: 5vh;
    font-size: 1em;
    margin: 0 auto;
    text-align: center;
    border: 1px solid #da005c;
  }

  .react-datetime-picker {
    display: flex;
    width: 30%;
    margin: 0 auto;
    text-align: center;
  }
  .react-calendar {
    display: inline-block;
    justify-content: center;
    align-items: center;
  }
  .react-datetime-picker__wrapper {
    border: 1px solid #da005c;
  }
  .react-date-picker__calendar--open {
    position: absolute;
  }
  .react-date-picker__calendar--closed {
    position: absolute;
  }
`;
