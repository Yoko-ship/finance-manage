import React, { useEffect, useRef, useState } from "react";
import "./transaction.css";
import Modal from "./Modal";
import Table from "./Table";
function Expenses() {
  const modalRef = useRef();
  const [price, setPrice] = useState(0);
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");
  const [expensesData,setExpensesData] = useState([])
  const [update,setUpdate] = useState(false)
  const [error,setError] = useState("")


  const modalHandler = () => {
    modalRef.current.showModal();
  };
  
  

  return (
    <div className="transactions">
      <div className="btn">
        <button onClick={modalHandler}>Новый расход</button>
      </div>
      <Modal
        modalRef={modalRef}
        placeholder={"Расход"}
        number={price}
        product={product}
        category={category}
        setNumber={setPrice}
        setProduct={setProduct}
        setCategory={setCategory}
        type={"Расход"}
        update = {update}
        setUpdate={setUpdate}
        error={error}
        setError={setError}
        setData={setExpensesData}
      >
        <option value="Еда 🍔">Еда</option>
        <option value="Транспорт 🚌">Транспорт</option>
        <option value="Учеба 📚">Учеба</option>
        <option value="Шопинг 🛍️">Шопинг</option>
        <option value="Прочее 📦">Прочее</option>
      </Modal>

      <Table data={expensesData} name={"Расходы"} setData={setExpensesData} type="Расход"/>
    </div>
  );
}

export default Expenses;
