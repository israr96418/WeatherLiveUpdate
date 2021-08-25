
import React,{useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState';

export const Transction = ({transction}) => {

   const {deleteTransction} =useContext(GlobalContext)
   console.log("DeleteTrancsction",deleteTransction)
    const sign = transction.amount < 0 ? '-':'+'
    return (
        
        <li className={transction.amount < 0 ? "minus" :"plus"}>

                    {transction.text} <span>{sign}${Math.abs(transction.amount)}</span>
                    <button className="delet_button" onClick ={ ()=>deleteTransction(transction.id)}>x</button>
                </li>
    )
}
 