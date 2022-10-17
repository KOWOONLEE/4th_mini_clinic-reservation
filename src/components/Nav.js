import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginModal from "./LoginModal";

const Nav = () => {
  const navigate = useNavigate();
  const [loginModal, setLoginModal] = useState(false);

  const onClickLogin = () => {
    setLoginModal(!loginModal);
  };
  return (
    <HeaderWrapper>
      <Link to="./">
        <img alt="logo" src="/assets/logo.png" />
      </Link>
      <div className="headerMenu">
        <div onClick={onClickLogin} className="marginLeft_10">
          로그인
        </div>
        {loginModal && (
          <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} />
        )}
        <div
          onClick={() => {
            navigate("/reservation");
          }}
          className="marginLeft_10"
        >
          예약하기
        </div>
        <div className="marginLeft_10">예약조회</div>
      </div>
    </HeaderWrapper>
  );
};
export default Nav;

const HeaderWrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 15vh;
  z-index: 99;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-shadow: 3px 2px 7px -3px #333;

  img {
    display: flex;
    width: 45%;
    height: 50%;
    vertical-align: bottom;
  }
  .headerMenu {
    display: flex;
    align-items: center;

    .marginLeft_10 {
      margin-left: 10px;
    }

    div {
      font-size: 1.2em;
    }
  }
`;
