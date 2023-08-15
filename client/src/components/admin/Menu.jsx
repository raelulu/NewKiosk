import React from "react";

export default function Menu({ index, name, price, img }) {
  return (
    <>
      <h3>메뉴 목록</h3>
      {/* <p>메뉴 품목 : {index}</p> */}
      <p>메뉴 이름 : {name}</p>
      <p>메뉴 가격 : {price}</p>
      {/* <p>메뉴 경로 : {img}</p> */}
    </>
  );
}
