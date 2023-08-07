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

  function onClickPayment() {
    const { IMP } = window;
    IMP.init("imp37316783"); // 결제 데이터 정의
    const data = {
      pg: "html5_inicis", // PG사 (필수항목)
      pay_method: "card", // 결제수단 (필수항목)
      merchant_uid: totalAmount, // 결제금액 (필수항목)
      name: "결제 테스트", // 주문명 (필수항목)
      amount: totalAmount, // 금액 (필수항목)
    };

    const callback = (response) => {
      const { success, error_msg } = response;
      if (success) {
        axios
          .post("http://localhost:3001/merchant_uid", {
            merchant_uid: `mid_${new Date().getTime()}`,
            amount: totalAmount,
          })
          .then(() => {
            alert("결제 성공");
          });
      } else {
        alert(`결제 실패 : ${error_msg}`);
      }
    };
    IMP.request_pay(data, callback);
  }

  return (
    <div>
      <button onClick={() => onClickPayment()}>결제하기</button>
    </div>
  );
}
