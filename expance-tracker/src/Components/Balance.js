import React,{useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState'

export const Balance = () => {
    const {transction} =useContext(GlobalContext);
    console.log("khan", transction)

    const amount = transction.map( transction => transction.amount)
  
    const total = amount.reduce((acc,item) =>(acc += item),0).toFixed(2)

   
    return (
        <>
         
        <h4>Your Balance</h4>
        <h1 >${total}</h1>
        </>
    )
}
