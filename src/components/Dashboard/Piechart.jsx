import React, { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import "./chart.css";
import { readData } from "../Firebase";
import { getExpenses, getIncome } from "../../store/expensesData";
import { sortData,pieData} from "./chartLogic";
ChartJS.register(ArcElement, Tooltip, Legend);

const bgExpenses = [
  "rgba(231, 76, 60, 1)", 
  "rgba(211, 84, 0, 1)",    
  "rgba(243, 156, 18, 1)",  
]
const borderExpenses = [
  "rgba(192, 57, 43, 1)",   
  "rgba(176, 58, 46, 1)",   
  "rgba(214, 137, 16, 1)",  
]
const bgIncome = [
  "rgba(39, 174, 96, 1)",   
  "rgba(41, 128, 185, 1)",  
  "rgba(22, 160, 133, 1)",  

]
const borderIncome = [
  "rgba(30, 132, 73, 1)",   
  "rgba(31, 97, 141, 1)",   
  "rgba(17, 122, 101, 1)",  
]

function Piechart() {
  const expenses = useSelector((state) => state.expenses.expenses);
  const income = useSelector((state) => state.expenses.income);
  const {summary,incomeSummary,category,incomeCategory} = sortData(expenses,income)

  const expensesData = pieData(category,"Потрачено",summary,bgExpenses,borderExpenses)
  const incomeData = pieData(incomeCategory,"Получено",incomeSummary,bgIncome,borderIncome)



  const dispatch = useDispatch();

  useEffect(() => {
    const expensesHanlder = async () => {
      const result = await readData("Расход");
      if (result) {
        dispatch(getExpenses(result));
      }
    };
    const incomeHandler = async () => {
      const result = await readData("Доход");
      if (result) {
        dispatch(getIncome(result));
      }
    };

    expensesHanlder();
    incomeHandler();
  }, [dispatch]);

  return (
    <div className="chart">
      <div className="pies">
        <h2>Расходы</h2>
        <Pie data={expensesData} />
      </div>
      <div className="pies">
        <h2>Доходы</h2>
        <Pie data={incomeData} />
      </div>
    </div>
  );
}

export default Piechart;
