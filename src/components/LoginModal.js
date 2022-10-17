import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginModal = ({ loginModal, setLoginModal }) => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [valid, setValid] = useState(false);

  const handleName = (e) => {
    const nameValue = e.target.value;
    setUserName(nameValue);
    nameValue.length >= 1 && userNumber.length >= 10
      ? setValid(true)
      : setValid(false);
  };

  const hadleNumber = (e) => {
    const numberValud = e.target.value;
    setUserNumber(numberValud);
    userName.length >= 1 && numberValud.length >= 10
      ? setValid(true)
      : setValid(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (userName.length >= 1 && userNumber.length >= 10) {
      setValid(true);
      navigate("/reservation");
      setLoginModal(!loginModal);
      localStorage.getItem("user_number");
    } else {
      setValid(false);
    }
  };
  const onClickLogin = () => {
    const body = {
      userName,
      userNumber,
    };
    fetch("./data/user.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("user_number", userNumber);
        handleLogin();
      });
    console.log();
  };

  return (
    <ModalWrapper>
      <div className="loginModal">
        <h1>LOGIN</h1>
        <form>
          <div>
            <p>회원 이름</p>
            <input
              onChange={handleName}
              type="text"
              placeholder="1자 이상 입력해주세요"
            ></input>
          </div>
          <div>
            <p>핸드폰 번호</p>
            <input
              onChange={hadleNumber}
              type="tel"
              placeholder="10자이상 입력해주세요"
            ></input>
          </div>
          <div>
            <button disabled={!valid} onClick={onClickLogin}>
              로그인
            </button>
          </div>
        </form>
      </div>
    </ModalWrapper>
  );
};
export default LoginModal;

const ModalWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 0px 0px;

  .loginModal {
    position: absolute;
    width: 30%;
    height: 50%;
    background-color: #fff;
    // Modal 창 브라우저 가운데로 조정
    left: 50%;
    top: 50%;
    padding: 15px;
    border-radius: 5px;
    transform: translate(-50%, -50%);
    z-index: 100;
    text-align: center;

    h1 {
      font-size: 1.5em;
      margin-bottom: 15px;
      font-weight: bold;
    }

    p {
      font-size: 0.6em;
      margin: 8px 0px 8px 0;
      text-align: left;
      font-weight: bold;
    }
    input {
      display: flex;
      width: 90%;
      height: 6vh;
      text-align: center;
      margin: 0 auto;
    }

    button {
      display: flex;
      width: 50%;
      height: 6vh;
      text-align: center;
      align-items: center;
      justify-content: center;
      margin: 20px auto;

      &:enabled {
        background-color: #da005c;
        border: none;
        border-radius: 5px;
        color: white;
        font-weight: bold;
      }
    }
  }
`;
