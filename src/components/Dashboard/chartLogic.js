
export const dataLogic = (item,category) =>{
    const categoryValue = item.filter((value) => value.category === category)
    const cost = categoryValue.map((value) => Number(value.cost))
    let summary = 0
    for(var i = 0; i < cost.length;i ++){
        summary += cost[i]
    }

    return summary
}

export const sortData = (expenses,income,) =>{
    const category = [...new Set(expenses.map((value) => value.category))];
    const incomeCategory = [...new Set(income.map((value) => value.category))];
    const summary = [];
    const incomeSummary = [];
    for (var i = 0; i < category.length; i++) {
      const cost = dataLogic(expenses, category[i]);
      summary.push(cost);
    }
    for (var i = 0; i < incomeCategory.length; i++) {
      const cost = dataLogic(income, incomeCategory[i]);
      incomeSummary.push(cost);
    }

    return {summary,incomeSummary,category,incomeCategory}
}



export const pieData = (category,label,data,bg,borderColor,) =>{
  const value = {
    labels: category,
    datasets: [
      {
        label: label,
        data: data,
        backgroundColor: bg,
        borderColor:borderColor,
        borderWidth: 1,
      },
    ],
  };
  return value
}