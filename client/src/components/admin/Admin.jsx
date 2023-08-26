import { useRef, useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Admin(props) {
  const Mid = useRef();
  const Mprice = useRef();
  const Mtext = useRef();
  const form_info = useRef();
  const [state, updateState] = useState(false);
  const [menuList, setMenuList] = useState([]);
  const navigate = useNavigate();

  const onClickLogout = () => {
    axios.post(`${process.env.REACT_APP_SERVER_API}/logout`).then((res) => {
      if (res.data === "Logout successful") {
        navigate("/");
        props.setToken("");
        sessionStorage.clear();
      } else {
        alert("로그아웃 하는데 실패했습니다.");
      }
    });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_API}/getMenuList`, {
        withCredentials: true,
      })
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
        <StyledDiv>
          <LogoutBtn onClick={onClickLogout}>로그아웃</LogoutBtn>

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
        </StyledDiv>

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
  margin-right: 5px;
  margin-bottom: 20px;
  color: #d5dde5;
  background: rgb(93, 93, 93);
  font-size: 15px;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: rgb(116 116 116);
  }
`;

const LogoutBtn = styled.button`
  cursor: pointer;
  margin-bottom: 1rem;
  margin-left: 78%
}
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  border: 1px #c1c3d1 solid;
  height: 300px;
  max-width: 90vw;
  padding: 5px;
  width: 100%;
  margin-bottom: 10rem;
`;

const StyledTh = styled.th`
  color: #d5dde5;
  background: #5d5d5d;
  border-bottom: 3px solid #9ea7af;
  border-right: 1px solid #d5dde5;
  font-size: 20px;
  font-weight: 100;
  padding: 20px;
`;

const StyledTr = styled.tr`
  border-top: 1px solid #c1c3d1;
  color: #070d29;
  font-size: 16px;
  font-weight: normal;
`;

const StyledTd = styled.td`
  background: #ffffff;
  padding: 20px;
  text-align: left;
  font-weight: 300;
  font-size: 18px;
  border-right: 1px solid #c1c3d1;
`;
