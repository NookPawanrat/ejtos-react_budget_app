import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,expenses,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total,item)=> {
        return (total += item.cost);
    },0);
    const handleBudgetChange = (event) => {
        const inputBudget = event.target.value
        if (inputBudget > 20000 ) {
            alert("The budget value cannot exceed £20,000");
        } else if (inputBudget < totalExpenses ) {
            alert("The budget value cannot lower than the spending £"+totalExpenses);
        }
        else { setNewBudget(event.target.value)};
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
