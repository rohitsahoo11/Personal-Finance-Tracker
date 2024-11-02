import React, { useState } from 'react'

const TransactionForm = ({addTransaction}) => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('Income')
  const [error, setError] = useState('')

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(name.trim() === '' || amount.trim() === '' || isNaN(amount)){
      setError('Please fill in all fields and enter a valid amount')
      return
    }
    
    const newTransaction={
      id: Date.now(),
      name,
      amount: parseFloat(amount),
      type
    }

    addTransaction(newTransaction)

    setName('')
    setAmount('')
    setError('')
    setType('Income')
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', backgroundColor: '#f0f8ff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ fontFamily: 'Roboto, sans-serif', color: '#333', textAlign: 'center', marginBottom: '20px' }}>Add New Transaction Details</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <label>
          <input 
            type='text' 
            placeholder='Enter Transaction Name...' 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '90%' }}
          />
        </label>
        <label>
          <input 
            type='text' 
            placeholder='Enter Transaction Amount...' 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '90%' }}
          />
        </label>
        <label>
          <select 
            value={type} 
            onChange={(e) => setType(e.target.value)} 
            style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '94%' }}
          >
            <option value='Income'>Income</option>
            <option value='Expense'>Expense</option>
          </select>
        </label>
        <button 
          type='submit' 
          style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Add Transaction
        </button>
      </form>
    </div>
  )
  
}

export default TransactionForm