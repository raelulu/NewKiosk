import React from 'react';
import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './MenuItemForm.module.css';

// MenuItemForm 주문
const MenuItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    //위는 ref에 저장된 인풋요소를 가리킬것
    //모든 인풋요소는 기본적으로 value속성을 가짐
    const enteredAmountNumber = +enteredAmount;
    //항상 문자열. 그래서 숫자로 변환

    if (
      //유효성검사 (trim은공백삭제)
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        //ref를 통해 인풋에 접근가능
        label="수량"
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type="submit">주문하기</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MenuItemForm;
