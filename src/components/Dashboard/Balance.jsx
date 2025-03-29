import React, { useEffect, useRef, useState } from "react";
import Modal from "../Transactions/Modal";
import { readBalance } from "../Firebase";
import { useSelector } from "react-redux";

function Balance() {
  const modalRef = useRef();
  const [balance, setBalance] = useState("");
  const [budget, setBudget] = useState(0);
  const buttonHanlder = () => {
    modalRef.current.showModal();
  };

  useEffect(() => {
    const getData = async () => {
      const budget = await readBalance();
      setBudget(budget.overallBalance);
    };
    getData();
  }, [balance]);
  return (
    <div className="">
          <div className="btn">
            <h2>В данный момент ваш бюджет {budget}</h2>
            <button onClick={buttonHanlder}>Добавить бюджет</button>
          </div>

          <Modal
            modalRef={modalRef}
            number={balance}
            setNumber={setBalance}
            type="balance"
          />      
    </div>
  );
}

export default Balance;
