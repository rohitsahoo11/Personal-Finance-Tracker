import React from 'react'

const TransactionList = ({transactions, deleteTransaction}) => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', backgroundColor: '#f0f8ff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ fontFamily: 'Roboto, sans-serif', color: '#333', textAlign: 'center', marginBottom: '20px' }}>Transactions</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {transactions.map((transaction) => (
          <li 
            key={transaction.id} 
            className={transaction.type === 'Income' ? 'income' : 'expense'}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px 20px',
              margin: '10px 0',
              borderRadius: '5px',
              backgroundColor: transaction.type === 'Income' ? '#e0ffe0' : '#ffe0e0',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            <span style={{ fontFamily: 'Roboto, sans-serif', color: '#333' }}>{transaction.name}</span>
            <span style={{ fontFamily: 'Roboto, sans-serif', color: transaction.type === 'Income' ? '#2e7d32' : '#c62828' }}>
              {transaction.type === 'Income' ? '+' : '-'}₹{Math.abs(transaction.amount)}
            </span>
            <button onClick={()=> deleteTransaction(transaction.id)}
              style={{ 
                padding: '5px 10px', 
                marginLeft: '10px', 
                fontSize: '14px', 
                backgroundColor: '#e53935', 
                color: '#fff', 
                border: 'none', 
                borderRadius: '5px', 
                cursor: 'pointer', 
                transition: 'background-color 0.3s' 
              }}
              >Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
  
}

export default TransactionList