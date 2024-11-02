import React from 'react'

const BalanceSummary = ({transactions}) => {

  const income = transactions
  .filter((transaction) => transaction.type === 'Income')
  .reduce((acc, transaction)=> acc + transaction.amount, 0)

  const expense = transactions
  .filter((transaction) => transaction.type === 'Expense')
  .reduce((acc, transaction)=> acc + transaction.amount, 0)

  const balance = income - expense

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', marginTop: '15px', backgroundColor: '#f0f8ff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'Roboto, sans-serif', color: '#333', marginBottom: '20px' }}>Balance Summary</h2>
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontFamily: 'Roboto, sans-serif', color: '#4caf50' }}>Current Balance:</h3>
        <p style={{ fontFamily: 'Roboto, sans-serif', color: '#333', fontSize: '20px', fontWeight: 'bold' }}>₹{balance.toFixed(2)}</p>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontFamily: 'Roboto, sans-serif', color: '#2e7d32' }}>Income:</h3>
        <p style={{ fontFamily: 'Roboto, sans-serif', color: '#2e7d32', fontSize: '20px', fontWeight: 'bold' }}>₹{income.toFixed(2)}</p>
      </div>
      <div>
        <h3 style={{ fontFamily: 'Roboto, sans-serif', color: '#c62828' }}>Expense:</h3>
        <p style={{ fontFamily: 'Roboto, sans-serif', color: '#c62828', fontSize: '20px', fontWeight: 'bold' }}>₹{expense.toFixed(2)}</p>
      </div>
    </div>
  )
  
}

export default BalanceSummary