import { useRef, useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import styled from "styled-components";

export default function Admin() {
  const Mid = useRef();
  const Mprice = useRef();
  const Mtext = useRef();
  const form_info = useRef();
  const [state, updateState] = useState(false);
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_API}/getMenuList`)
      .then((response) => {
        setMenuList(response.data);
      })
      .catch((err) => console.log(err));
  }, [state]);

  // 메뉴 추가
  function addMenu() {
    axios
      .post(
        `${process.env.REACT_APP_SERVER_API}/addMenu`,
        {
          name: Mid.current.value,
          price: Mprice.current.value,
          content: Mtext.current.value,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        if (response.data === true) {
          updateState(!state);
          alert("데이터 추가 성공");
        } else {
          alert("데이터 추가 실패");
        }
      });
  }

  // 메뉴 조회
  function SelectMenu() {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_API}/selectMenu/${Mid.current.value}`
      )
      .then((response) => {
        if (!response.data) {
          alert("데이터가 없습니다.");
        } else {
          setMenuList([response.data]);
        }
      });
  }

  // 메뉴 수정
  function menuUpdate() {
    axios
      .patch(`${process.env.REACT_APP_SERVER_API}/menuUpdate`, {
        name: Mid.current.value,
        price: Mprice.current.value,
        content: Mtext.current.value,
      })
      .then((response) => {
        if (response.data === true) {
          updateState(!state);
          alert("수정 완료");
        } else {
          alert("수정 실패");
        }
      });
  }

  // 메뉴 삭제
  function menuDelete() {
    console.log("삭제 요청");
    axios
      .delete(`${process.env.REACT_APP_SERVER_API}/menuDelete`, {
        data: { name: Mid.current.value },
      })
      .then((response) => {
        if (response.data === true) {
          updateState(!state);
          alert("메뉴 삭제 완료");
        } else {
          alert("삭제 실패");
        }
      });
  }
  return (
    <>
      <br />
      <br />
      <br />
      <StyledDiv>
        <h1>관리자 페이지</h1>
        <form ref={form_info}>
          <StyledDiv>
            <StyledInput
              ref={Mid}
              name="name"
              type="text"
              placeholder="메뉴 이름"
            />
            <StyledInput
              ref={Mprice}
              name="price"
              type="text"
              placeholder="메뉴 가격"
            />
            <StyledInput
              ref={Mtext}
              name="content"
              type="text"
              placeholder="메뉴 설명"
            />
          </StyledDiv>

          <br />
          <StyledBtn
            type="button"
            onClick={() => {
              addMenu();
            }}
          >
            메뉴 추가
          </StyledBtn>
          <StyledBtn
            type="button"
            onClick={() => {
              SelectMenu();
            }}
          >
            메뉴 조회
          </StyledBtn>
          <StyledBtn
            type="button"
            onClick={() => {
              menuUpdate();
            }}
          >
            메뉴 수정
          </StyledBtn>
          <StyledBtn
            type="button"
            onClick={() => {
              menuDelete();
            }}
          >
            메뉴 삭제
          </StyledBtn>
        </form>
        <h2>DB MenuList</h2>
        <StyledTable>
          <thead>
            <tr>
              <StyledTh>menu</StyledTh>
              <StyledTh>price</StyledTh>
              <StyledTh>description</StyledTh>
            </tr>
          </thead>
          <tbody>
            {menuList.map((menu, index) => (
              <StyledTr key={index}>
                <StyledTd>{menu.name}</StyledTd>
                <StyledTd>{menu.price}</StyledTd>
                <StyledTd>{menu.content}</StyledTd>
              </StyledTr>
            ))}
          </tbody>
        </StyledTable>
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledInput = styled.input`
  width: 100%;
  height: 20px;
  margin-right: 10px;
`;
const StyledBtn = styled.button`
  margin-top: 5px;
  margin-bottom: 20px;
  color: #d5dde5;
  background: #1b1e24;
  font-size: 15px;
  padding: 5px;
  text-shadow: 0 1px 1px rgba(41, 41, 41, 0.1);
  vertical-align: middle;
  cursor: pointer;
  margin-right: 5px;
  border-radius: 5px;
  &:hover {
    border: none;
    background-color: #82b966;
    color: #e6e6e6;
    scale: calc(1.2);
  }
`;

const StyledTable = styled.table`
  border-radius: 3px;
  border-collapse: collapse;
  height: 300px;
  margin: auto;
  max-width: 90vw;
  padding: 5px;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: float 5s infinite;
`;

const StyledTh = styled.th`
  color: #d5dde5;
  background: #1b1e24;
  border-bottom: 3px solid #9ea7af;
  border-right: 1px solid #343a45;
  font-size: 20px;
  font-weight: 100;
  padding: 20px;
  /* text-align: left; */
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
`;

const StyledTr = styled.tr`
  border-top: 1px solid #c1c3d1;
  color: #070d29;
  font-size: 16px;
  font-weight: normal;
  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
`;

const StyledTd = styled.td`
  background: #ffffff;
  padding: 20px;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 18px;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #c1c3d1;
`;
