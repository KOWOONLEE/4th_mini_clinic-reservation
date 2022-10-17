import styled from "styled-components";
import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datetime-picker/dist/DateTimePicker.css";

const Reservation = () => {
  const [value, onChange] = useState(new Date());
  const [selected, setSelected] = useState("");
  const selectList = ["진료", "검진", "상담"];

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  console.log(selected);
  return (
    <RevervationWrapper>
      <MainBackground>
        <h1>Reservation</h1>
        <h3>날짜 및 시간 선택</h3>
        <DateTimePicker
          onChange={onChange}
          value={value}
          calendarAriaLabel="Toggle calendar"
          minDate={new Date()}
        />
        <h3>진료 종류 선택</h3>
        <select onChange={handleSelect} value={selected} className="selectbox">
          {selectList.map((list) => (
            <option value={list} key={list}>
              {list}
            </option>
          ))}
          ;
        </select>
      </MainBackground>
    </RevervationWrapper>
  );
};
export default Reservation;

const RevervationWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 15vh;

  h1 {
    font-size: 2.5em;
    text-align: center;
    margin: 40px 0 40px 0;
  }
  h3 {
    font-size: 1.5em;
    text-align: center;
    margin: 40px 0 20px 0;
  }
  .selectbox {
    display: flex;
    width: 40%;
    height: 5vh;
    font-size: 1em;
    margin: 0 auto;
    text-align: center;
  }
`;
const MainBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  position: relative;

  .react-datetime-picker {
    display: flex;
    width: 40%;
    margin: 0 auto;
    text-align: center;
  }
  .react-calendar {
    display: inline-block;
    justify-content: center;
    align-items: center;
  }
`;
