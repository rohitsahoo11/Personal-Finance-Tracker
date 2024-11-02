import React, { useEffect, useState } from 'react'
import './App.css';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList'
import BalanceSummary from './components/BalanceSummary'

function App() {
  
const [transactions, setTransactions] = useState([])
const [filter, setFilter] = useState('All')


useEffect(() => {
  const saveTransaction = JSON.parse(localStorage.getItem('transactions'))
  if(saveTransaction){
    setTransactions(saveTransaction)
  }
}, [])

useEffect(()=>{
  localStorage.setItem('transactions', JSON.stringify(transactions))
},[transactions])


const addTransaction = (transaction)=>{
  setTransactions([...transactions, transaction])
}

const FilteredTransactions = transactions.filter((transaction)=>{
  if(filter === 'Income') return transaction.type === 'Income'
  if(filter === 'Expense') return transaction.type === 'Expense'
  return true
})

const deleteTransaction = (id)=>{
  setTransactions(transactions.filter(transaction=> transaction.id !== id))
}

return (
  <div className="App">
    <header className="App-header">
      <h1>Personal Finance Tracker</h1>
    </header>
    <main style={{ paddingTop: '80px' }}>
      <TransactionForm addTransaction={addTransaction} />
      <BalanceSummary transactions={transactions} />
      <div className="filter-container">
        <label>Filter: </label>
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value='All'>All</option>
          <option value='Income'>Income</option>
          <option value='Expense'>Expense</option>
        </select>
      </div>
      <TransactionList transactions={FilteredTransactions} deleteTransaction={deleteTransaction} />
    </main>
  </div>
);

}

export default App;
