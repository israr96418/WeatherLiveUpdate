import React, { useState, useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';

export const AddTransction = () => {

    const [text, setText] = useState('')
    const [amount, setamount] = useState(0)

    const { addTransction } = useContext(GlobalContext)


    const submit = e => {
        e.preventDefault();
         const NewTransction = {
             id:Math.floor(Math.random()+100000000),
             text,
             amount:+amount
         }

         addTransction(NewTransction)
    }


    return (
        <>
            <h3>Add Transction</h3>
            <form onSubmit={submit}>
                <div className="Form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Text....."></input>
                </div>
                <div className="Form-control">
                    <label htmlFor="amount">Amount <br />(Postive +Income Negative -Expence</label>
                    <input type="number" value={amount} onChange={(e) => setamount(e.target.value)} placeholder="Enter Amount....."></input>
                </div>
                <button className="btn">Add Transction</button>

            </form>

        </>
    )
}
