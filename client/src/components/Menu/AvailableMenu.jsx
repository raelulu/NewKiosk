import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import MenuItem from "./MenuItem/MenuItem";
import classes from "./AvailableMenu.module.css";
import axios from "axios";

//데이터베이스에서 데이터 가져오기
// MenuItem 컴포넌트에 props 전달
const AvailableMenu = () => {
  let [menuList, setMenuList] = useState([]);

  // 메뉴 DB 조회 출력 컴포넌트
  useEffect(() => {
    axios
      .get("http://49.50.172.207:3001/getMenuList")
      .then((response) => {
        setMenuList(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // id = 품목
  // name = 상품명 ex. 커피, 논커피
  return (
    <section className={classes.menuu}>
      {menuList.length !== 0 && (
        <Card>
          <ul>
            {menuList.map((menu, index) => (
              <MenuItem
                key={index}
                id={menu.menu_index}
                name={menu.menu_id}
                price={menu.menu_price}
                description={menu.menu_text}
              />
            ))}
          </ul>
        </Card>
      )}
    </section>
  );
};

export default AvailableMenu;
