export const filterBalance = (data,setData,setSortedItem,sortedItem,item)=>{
  if(item === "balance"){
    let sortedProducts = data.sort(
      (p1, p2) => (p1.overallBalance < p2.overallBalance) ? 1 : (p1.overallBalance > p2.overallBalance) ? -1 : 0);
      setData(sortedProducts)
      setSortedItem(!sortedItem)
  }
  else if(item === "price"){
    let sortedProducts = data.sort(
      (p1, p2) => (p1.cost < p2.cost) ? 1 : (p1.cost > p2.cost) ? -1 : 0);
      setData(sortedProducts)
      setSortedItem(!sortedItem)
  }
}

export const filterStrings = (data,setData,setSortedItem,sortedItem,value)=>{
  
  if(value === "product"){
    const sortedProducts = data.sort(function(a,b){
      
      const nameA = a.product.toUpperCase()
      const nameB = b.product.toUpperCase()
  
      if(nameA < nameB){
        return -1
      }
      if(nameA > nameB){
        return 1
      }
      return 0
    })
    setData(sortedProducts)
    setSortedItem(!sortedItem)
  }
  else if(value === "category"){
    const sortedProducts = data.sort(function(a,b){
      
      const nameA = a.category.toUpperCase()
      const nameB = b.category.toUpperCase()
  
      if(nameA < nameB){
        return -1
      }
      if(nameA > nameB){
        return 1
      }
      return 0
    })
    setData(sortedProducts)
    setSortedItem(!sortedItem)
  }
}