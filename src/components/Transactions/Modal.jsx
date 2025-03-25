import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./modal.css";
import { writeMoneyData, writeBalance, readBalance, readData } from "../Firebase";

function Modal({
  modalRef,
  placeholder,
  number,
  product,
  category,
  setNumber,
  setProduct,
  setCategory,
  type,
  setUpdate,
  update,
  error,
  setError,
  setData,
  children,
}) {
  const [budget, setBudget] = useState(0);
  const confirmButton = () => {
    if (!number || !product || !category) {
      setError("Пожалуста заполните все поля");
    } else {
      setNumber(0);
      setProduct("");
      setCategory("");
      setUpdate(!update);
      if (type === "Доход") {
        var overall = Number(budget) + Number(number);
      } else if (type === "Расход") {
        var overall = Number(budget) - Number(number);
      }
      writeMoneyData(product, Number(number), category, type + "/", overall);
      writeBalance(overall);
      setError("");
    }
  };

  useEffect(() => {
    const getData = async () => {
      const budget = await readBalance();
      setBudget(budget.overallBalance);
    };
    getData();
  }, [number]);

  const confirmBalance = () => {
    setNumber(0);
    writeBalance(number);
  };

    useEffect(() => {
    const getIncome = async () => {
      const result = await readData(type);
      if (result) {
        setData(result);
      }
    };
    getIncome();
  }, [update]);

  return createPortal(
    <dialog ref={modalRef} required>
      <div className="inputs">
        {type === "balance" ? (
          <>
            <input
              type="number"
              placeholder="Укажите текущий баланс"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              required
            />
            <button onClick={() => modalRef.current.close()}>Закрыть</button>
            <button onClick={confirmBalance}>Подтвердить</button>
          </>
        ) : (
          <>
            <input
              type="number"
              placeholder={placeholder}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            {placeholder === "Расход" ? (
              <input
                type="text"
                placeholder="На что потратил"
                onChange={(e) => setProduct(e.target.value)}
                value={product}
                required
              />
            ) : (
              <input
                type="text"
                placeholder="Источник дохода"
                onChange={(e) => setProduct(e.target.value)}
                value={product}
                required
              />
            )}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="" disabled>
                Выберите категорию
              </option>
              {children}
            </select>

            <button onClick={() => modalRef.current.close()}>Закрыть</button>
            <button onClick={confirmButton}>Подтвердить</button>

            {error && (
              <p className="error">{error}</p>
            )}
          </>
        )}
      </div>
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
