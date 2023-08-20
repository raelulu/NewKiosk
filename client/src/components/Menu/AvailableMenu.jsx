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
      .get(`${process.env.REACT_APP_SERVER_API}/getMenuList`, {
        withCredentials: true,
      })
      .then((response) => {
        setMenuList(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className={classes.menuu}>
      {menuList.length !== 0 && (
        <Card style={{ height: "500px" }}>
          <ul>
            {menuList.map((menu, index) => (
              <MenuItem
                key={index}
                id={menu.id}
                name={menu.name}
                price={menu.price}
                description={menu.content}
              />
            ))}
          </ul>
        </Card>
      )}
    </section>
  );
};

export default AvailableMenu;
