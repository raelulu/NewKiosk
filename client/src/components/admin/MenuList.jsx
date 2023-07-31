import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import AvailableMenu from '../Menu/AvailableMenu';
import Admin from './Admin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function MenuList() {
  let [menuList, setMenuList] = useState([]);

  // 메뉴 DB 조회 출력 컴포넌트
  useEffect(() => {
    axios
      .get('http://49.50.172.207:3001/getMenuList')
      .then((response) => {
        setMenuList(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* DB 값이 담긴 menuList state를 객체로 데이터를 보냄 */}
      {menuList.length !== 0 && (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/admin" element={<Admin menuList={menuList} />} />
              <Route
                path="/*"
                element={<AvailableMenu menuList={menuList} />}
              />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </>
  );
}
