import React, {useState, useContext} from 'react'
import {Globalcontext} from '../context/GlobalState'

function AddTransaction() {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const { addtransaction } = useContext(Globalcontext);

    const submitHandler = (e) => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addtransaction(newTransaction)
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit= {submitHandler}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => {setText(e.target.value)}} on placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
            (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} onChange={e => {setAmount(e.target.value)}} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
