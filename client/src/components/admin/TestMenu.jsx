import React from 'react';
import MenuList from './MenuList';

// 메뉴 데이터 가정
export default function TestMenu() {
  const menus = [
    {
      menu_index: '커피',
      menu_id: '아메리카노',
      menu_price: '3500',
      menu_img: './img/1.png',
    },
    {
      menu_index: '커피',
      menu_id: '카페라떼',
      menu_price: '4000',
      menu_img: './img/2.png',
    },
    {
      menu_index: '논커피',
      menu_id: '쥬스',
      menu_price: '3000',
      menu_img: './img/3.png',
    },
  ];

  return (
    <>
      {/* html에 직접 데이터 삽입 코드 리턴 */}
      {/* <h1>메뉴 데이터</h1>
      <hr /> */}
      {menus.map((el, index) => {
        return (
          <div key={index}>
            <MenuList
              index={el.menu_index}
              id={el.menu_id}
              price={el.menu_price}
              img={el.menu_img}
            />
          </div>
        );
      })}
    </>
  );
}
