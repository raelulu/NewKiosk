import React, { useEffect, useContext } from "react";
import CartContext from "../../store/cart-context";
import axios from "axios";

export default function PayRequest() {
  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.2.0.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount}`;
  const randomName = Math.floor(Math.random() * 899) + 100;

  function onClickPayment() {
    const { IMP } = window;
    IMP.init(`${process.env.REACT_APP_IMP}`); // 결제 데이터 정의
    const requestPayData = {
      pg: "html5_inicis",
      pay_method: "card",
      merchant_uid: new Date().getTime(),
      name: "음료 결제",
      amount: totalAmount,
      buyer_email: "",
      buyer_name: randomName,
    };

    const callback = async (response) => {
      const { success, error_msg, merchant_uid, paid_amount, buyer_name } =
        response;
      if (success) {
        await axios.post(`${process.env.REACT_APP_SERVER_API}/merchant_uid`, {
          merchant_uid: `mid_${merchant_uid}`,
          amount: paid_amount,
          buyer_name,
        });
        alert(`주문 번호: ${buyer_name}`);
      } else {
        alert(`결제 실패 : ${error_msg}`);
      }
    };

    IMP.request_pay(requestPayData, callback);
  }

  return (
    <div>
      <button onClick={() => onClickPayment()}>결제하기</button>
    </div>
  );
}
