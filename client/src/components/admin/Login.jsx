import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const StyledInput = styled.input`
  width: 100%;
  height: 20px;
  margin-right: 10px;
  border: 1px #dadada solid;
`;

const StyledBtn = styled.button`
  cursor: pointer;
  background-color: #eaeaea;
  color: #444444;
  margin-top: 5px;
  margin-bottom: 20px;
  border: 1px #dadada solid;
  border-radius: 2px;
  padding: 5px;
  font-size: 10pt;
  &:hover {
    border: 1px #c6c6c6 solid;
    box-shadow: 1px 1px 1px #eaeaea;
    color: #333333;
    background: #f7f7f7;
  }
`;

export default function AdminLogin() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const onIdHandler = (e) => {
    setInputId(e.target.value);
  };

  const onPasswordHandler = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    axios
      .post(`${process.env.REACT_APP_SERVER_API}/onLogin`, null, {
        params: {
          user_id: inputId,
          user_pw: inputPw,
        },
      })
      .then((res) => console.log(res))
      .catch();
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_API}/login`)
      .then((res) => console.log(res.data))
      .catch();
  }, []);

  return (
    <>
      <div>
        <form>
          <h2>관리자 로그인</h2>
          <div>
            <label htmlFor="input_id">ID : </label>
            <StyledInput
              type="text"
              value="inputId"
              name="input_id"
              placeholder="아이디"
              required="required"
              onChange={onIdHandler}
            />
          </div>
          <div>
            <label htmlFor="input_pw">PW : </label>
            <StyledInput
              type="password"
              value="inputId"
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
        </form>
      </div>
    </>
  );
}
