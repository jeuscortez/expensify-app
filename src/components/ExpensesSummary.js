import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total'


export const ExpensesSummary = ({expensesCount, expensesTotal, allExpensesCount, allExpensesTotal}) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const hiddenExpenses = allExpensesCount - expensesCount;
    const expenseWordForHidden = hiddenExpenses ===1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');
    
    return(
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
                {hiddenExpenses>0 && <h3 className="page-header__subtitle"> <span>{hiddenExpenses}</span> hidden <span>{expenseWordForHidden}</span></h3>}
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
  };

  const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    const allExpenses = selectExpenses(state.expenses);

    return{
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses), 
        allExpensesCount: allExpenses.length, //added to get number of total expenses, none filtered out
        allExpensesTotal: selectExpensesTotal(allExpenses) //gets total of all expenses
    };
  };

  export default connect(mapStateToProps)(ExpensesSummary);
  
  