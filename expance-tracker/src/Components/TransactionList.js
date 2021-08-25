import React, { useContext } from 'react'
import {GlobalContext} from '../Context/GlobalState'
import { Transction } from './Transction';


export const TransactionList = () => {

    const {transction} =useContext(GlobalContext);
    console.log(transction)
    return (
        <>
             <h3>History</h3>
            <ul className="list">
                {transction.map(transction =>(<Transction key={transction.id}
                transction={transction}/>)) }


                
            </ul>

            {/* <ul className="list">
                {
                    transctions.
                }

            </ul> */}
        </>
    )
}
