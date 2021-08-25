import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'



export const Income_Expences = () => {

    const { transction } = useContext(GlobalContext)
    // const amount = transction.map(transction => transction.amount)
    const amount = transction.map(transction => transction.amount)

    const income = amount
        .filter((item) => {
            return item > 0
        })
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2)

    const expance = (
        amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2)


    return (
        <div className="income_expences">
            <div>
                <h4>Income</h4>
                <p className="money plus">{income}</p>
            </div>

            <div>
                <h4>Expences</h4>
                <p className="money minus">{expance}</p>
            </div>

        </div>
    )
}
