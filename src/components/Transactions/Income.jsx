import React, { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import Table from "./Table";

function Income() {
  const modalRef = useRef();
  const [income, setIncome] = useState(0);
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");
  const [incomeData, setIncomeData] = useState([]);
  const [update, setUpdate] = useState(false);
  const [error,setError] = useState("")

  const modalHandler = () => {
    modalRef.current.showModal();
  };
  

  return (
    <div className="transactions">
      <div className="btn">
        <button onClick={modalHandler}>Пополнение бюджета</button>
      </div>

      <Modal
        modalRef={modalRef}
        placeholder={"Доход"}
        number={income}
        product={product}
        category={category}
        setNumber={setIncome}
        setProduct={setProduct}
        setCategory={setCategory}
        type={"Доход"}
        setUpdate={setUpdate}
        update={update}
        error={error}
        setError={setError}
        setData={setIncomeData}
      >
        <option value="Зарплата 💼">Зарплата</option>
        <option value="Стипендия 🎓">Стипендия</option>
        <option value="Продажа 💰">Продажа</option>
        <option value="Прочее 📦">Прочее</option>
      </Modal>

    <Table data={incomeData} name="Доходы" setData={setIncomeData} type="Доход"/>
    </div>
  );
}

export default Income;
