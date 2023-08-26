import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import CoffeeLogo from "../../assets/CoffeeLogo.png";
import GlobalStyle from "../../components/UI/GlobalStyle";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  // margin-top: 1.5rem;
  // margin-left: -0.5rem;
`;

const StyledInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20px;
  margin-right: 10px;
  border: 1px #dadada solid;
  margin-bottom: 2px;
`;

const StyledBtn = styled.button`
  cursor: pointer;
  background-color: #eaeaea;
  color: #444444;
  margin-top: 5px;
  margin-bottom: 20px;
  border: 1px #dadada solid;
  border-radius: 2px;
  padding: 4px 15px;
  font-size: 10pt;
  &:hover {
    border: 1px #c6c6c6 solid;
    box-shadow: 1px 1px 1px #eaeaea;
    color: #333333;
    background: #f7f7f7;
  }
`;

const StyledH1 = styled.h1`
  display: flex;
  justify-content: center;
  margin-left: -1rem;
  margin-bottom: 1rem;
`;

const StyledImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

export default function Login(props) {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate();

  const onIdHandler = (e) => {
    setInputId(e.target.value);
  };

  const onPasswordHandler = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    axios
      .post(`${process.env.REACT_APP_SERVER_API}/onLogin`, {
        user_id: inputId,
        user_pw: inputPw,
      })
      .then((res) => {
        if (res.data === "Login successful") {
          setLoginMessage("로그인 성공");
          sessionStorage.setItem("user_id", inputId);
          props.setToken(inputId);
          navigate("/admin");
        } else {
          setLoginMessage("아이디 또는 비밀번호가 일치하지 않습니다.");
        }
      })
      .catch((error) => {
        console.error("로그인 오류:", error);
        setLoginMessage("로그인 중 오류가 발생했습니다.");
      });
  };

  return (
    <>
      <GlobalStyle />
      <div>
        <StyledForm>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <StyledH1>
              <StyledImg src={CoffeeLogo} alt="logo of cafe" />
              COFFEE PLANT
            </StyledH1>
          </Link>

          <h2>관리자 로그인</h2>
          <div>
            <StyledInput
              type="text"
              value={inputId}
              name="input_id"
              placeholder="아이디"
              required="required"
              onChange={onIdHandler}
            />
          </div>
          <div>
            <StyledInput
              type="password"
              value={inputPw}
              name="input_pw"
              placeholder="비밀번호"
              required="required"
              onChange={onPasswordHandler}
            />
          </div>
          <div>
            <StyledBtn type="button" onClick={onClickLogin}>
              로그인
            </StyledBtn>
          </div>
          <div>{loginMessage}</div>
        </StyledForm>
      </div>
    </>
  );
}
