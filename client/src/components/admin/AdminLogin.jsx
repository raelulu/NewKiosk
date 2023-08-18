import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15%;
`;

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
  return (
    <>
      <StyledDiv>
        <h2>관리자 로그인</h2>
        <div>
          <StyledInput
            type="text"
            name="MembId"
            placeholder="아이디"
            required="required"
          />
        </div>
        <div>
          <StyledInput
            type="password"
            name="MembPwd"
            placeholder="비밀번호"
            required="required"
          />
        </div>
        <div>
          <StyledBtn type="submit">로그인</StyledBtn>
        </div>
      </StyledDiv>
    </>
  );
}
