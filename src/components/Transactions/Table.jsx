import React, { useEffect, useState } from 'react'
import { deleteData } from '../Firebase'
import { filterBalance } from './Sortings'
import { filterStrings } from './Sortings'
function Table({name,data,setData,type}) {

  const [sortedItem,setSortedItem] = useState(false)
  const [search,setSearch] = useState("")
  const deleteButton = async(id)=>{
    await deleteData(id,type)
    const updatedElement = data.filter((item) => item.id !== id)
    setData(updatedElement)
  }

  const filterDate = ()=>{
    const sortedDate = data.sort((x,y) =>{
      x = new Date(x.data);
      y = new Date(y.data);

      return x - y
    })
    console.log(sortedDate)
    setData(sortedDate)
    setSortedItem(!sortedItem)
  }

  return (
    <div className="table">
        <h2>{name}</h2>
        <table>
          <thead>
            <tr>
              <th onClick={() => filterStrings(data,setData,setSortedItem,sortedItem,"category")}>Категория</th>
              <th onClick={() => filterStrings(data,setData,setSortedItem,sortedItem,"product")}>Продукт</th>
              <th onClick={() => filterBalance(data,setData,setSortedItem,sortedItem,"price")}>Сумма</th>
              <th onClick={() => filterBalance(data,setData,setSortedItem,sortedItem,"balance")}>Баланс</th>
              <th onClick={filterDate}>Дата</th>
            </tr>
          </thead>
          <tbody>
            {data.map((income) => (
              <tr key={income.id}>
                <td className='category'>{income.category}</td>
                <td>{income.product}</td>
                <td>{income.cost}</td>
                <td>{income.overallBalance}</td>
                <td>{income.data}</td>
                <td onClick={() => deleteButton(income.id)} className='del-btn'>Удалить</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default Table